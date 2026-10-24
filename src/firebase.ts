import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
  getDocFromServer,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Cloudinary Configuration
export const CLOUDINARY_CLOUD_NAME = 'dxeuzdwkz';
export const CLOUDINARY_UPLOAD_PRESET = 'Uttam Charitable';
export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export async function uploadImageToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(CLOUDINARY_UPLOAD_URL, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Cloudinary upload failed: ${errText}`);
  }

  const data = await res.json();
  if (!data.secure_url) {
    throw new Error('Cloudinary did not return a secure_url');
  }
  return data.secure_url as string;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validate connection to Firestore on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

// ============================================================================
// 1. CANDIDATE APPLICATIONS
// ============================================================================
export interface CandidateApplicationRecord {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  qualification: string;
  role: string;
  notes: string;
  status: 'New' | 'Contacted' | 'Shortlisted' | 'Placed';
  timestamp: string;
  createdAt?: Timestamp | string;
}

const LOCAL_APPLICATIONS_KEY = 'kgb_hr_applications_v1';
type AppListener = (records: CandidateApplicationRecord[]) => void;
const localAppListeners = new Set<AppListener>();

function getLocalApplications(): CandidateApplicationRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_APPLICATIONS_KEY);
    if (!raw) return getInitialSeedApplications();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : getInitialSeedApplications();
  } catch {
    return getInitialSeedApplications();
  }
}

function getInitialSeedApplications(): CandidateApplicationRecord[] {
  const seeded: CandidateApplicationRecord[] = [
    {
      id: 'app_seed_1',
      fullName: 'Rohit Vishwakarma',
      phone: '9826012345',
      email: 'rohit.vishwakarma@example.com',
      city: 'Bhopal (MP Nagar)',
      qualification: 'Graduate',
      role: 'Work From Home Tele-Caller',
      notes: 'Fluent in Hindi & English, available for immediate joining at Zone 1 MP Nagar.',
      status: 'New',
      timestamp: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
    },
    {
      id: 'app_seed_2',
      fullName: 'Priya Sharma',
      phone: '9755098765',
      email: 'priya.sharma.bpl@example.com',
      city: 'Indore',
      qualification: 'Post Graduate (MBA)',
      role: 'Data Entry Operator',
      notes: 'Own laptop with 45 WPM typing speed and MS Excel proficiency.',
      status: 'Contacted',
      timestamp: new Date(Date.now() - 1000 * 60 * 195).toISOString(),
    },
  ];
  try {
    localStorage.setItem(LOCAL_APPLICATIONS_KEY, JSON.stringify(seeded));
  } catch {
    // ignore
  }
  return seeded;
}

function saveLocalApplications(records: CandidateApplicationRecord[]) {
  try {
    localStorage.setItem(LOCAL_APPLICATIONS_KEY, JSON.stringify(records));
  } catch {
    // ignore
  }
  localAppListeners.forEach((cb) => cb(records));
}

export async function submitCandidateApplication(input: {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  qualification: string;
  role: string;
  notes: string;
}): Promise<CandidateApplicationRecord> {
  const cleanId = `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const isoTimestamp = new Date().toISOString();

  const sanitized = {
    fullName: input.fullName.trim().slice(0, 100),
    phone: input.phone.trim().slice(0, 20),
    email: (input.email || '').trim().slice(0, 150),
    city: (input.city || 'Bhopal').trim().slice(0, 100),
    qualification: input.qualification.trim().slice(0, 100),
    role: input.role.trim().slice(0, 150),
    notes: (input.notes || '').trim().slice(0, 500),
    status: 'New' as const,
    timestamp: isoTimestamp,
  };

  const localRecord: CandidateApplicationRecord = {
    id: cleanId,
    ...sanitized,
  };

  const existing = getLocalApplications();
  saveLocalApplications([localRecord, ...existing]);

  try {
    await setDoc(doc(db, 'applications', cleanId), {
      ...sanitized,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `applications/${cleanId}`);
  }

  return localRecord;
}

export async function updateApplicationStatus(
  id: string,
  nextStatus: 'New' | 'Contacted' | 'Shortlisted' | 'Placed',
  notes: string
) {
  const existing = getLocalApplications();
  const updated = existing.map((item) =>
    item.id === id ? { ...item, status: nextStatus } : item
  );
  saveLocalApplications(updated);

  if (auth.currentUser && !id.startsWith('app_seed_')) {
    try {
      await updateDoc(doc(db, 'applications', id), {
        status: nextStatus,
        notes: notes.slice(0, 500),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `applications/${id}`);
    }
  }
}

export function subscribeToApplications(
  callback: (records: CandidateApplicationRecord[]) => void
): () => void {
  let firestoreRecords: CandidateApplicationRecord[] = [];
  let unsubFirestore: (() => void) | null = null;

  const emitMerged = () => {
    const local = getLocalApplications();
    const map = new Map<string, CandidateApplicationRecord>();
    firestoreRecords.forEach((r) => map.set(r.id, r));
    local.forEach((r) => {
      if (!map.has(r.id)) map.set(r.id, r);
    });
    const merged = Array.from(map.values()).sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    callback(merged);
  };

  const localListener: AppListener = () => emitMerged();
  localAppListeners.add(localListener);
  emitMerged();

  const unsubAuth = onAuthStateChanged(auth, (user: User | null) => {
    if (unsubFirestore) {
      unsubFirestore();
      unsubFirestore = null;
    }
    const allowedAdminEmails = ['shriyanshsingh7581@gmail.com', 'kgbbhopal01@gmail.com'];
    if (user && user.email && allowedAdminEmails.includes(user.email)) {
      const q = query(
        collection(db, 'applications'),
        where('status', 'in', ['New', 'Contacted', 'Shortlisted', 'Placed'])
      );
      unsubFirestore = onSnapshot(
        q,
        (snapshot) => {
          firestoreRecords = snapshot.docs.map((d) => {
            const data = d.data();
            return {
              id: d.id,
              fullName: String(data.fullName || ''),
              phone: String(data.phone || ''),
              email: String(data.email || ''),
              city: String(data.city || ''),
              qualification: String(data.qualification || ''),
              role: String(data.role || ''),
              notes: String(data.notes || ''),
              status: (data.status as CandidateApplicationRecord['status']) || 'New',
              timestamp: String(data.timestamp || new Date().toISOString()),
            };
          });
          emitMerged();
        },
        (error) => {
          handleFirestoreError(error, OperationType.LIST, 'applications');
        }
      );
    }
  });

  return () => {
    localAppListeners.delete(localListener);
    unsubAuth();
    if (unsubFirestore) unsubFirestore();
  };
}

// ============================================================================
// 2. DYNAMIC POSTERS (CLOUDINARY + FIREBASE)
// ============================================================================
export interface PosterRecord {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: number;
}

const LOCAL_POSTERS_KEY = 'kgb_dynamic_posters_v1';
type PosterListener = (posters: PosterRecord[]) => void;
const localPosterListeners = new Set<PosterListener>();

function getLocalPosters(): PosterRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_POSTERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveLocalPosters(posters: PosterRecord[]) {
  try {
    localStorage.setItem(LOCAL_POSTERS_KEY, JSON.stringify(posters));
  } catch {
    // ignore
  }
  localPosterListeners.forEach((cb) => cb(posters));
}

export async function createPosterRecord(title: string, imageUrl: string): Promise<PosterRecord> {
  const id = `poster_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const createdAt = Date.now();
  const cleanTitle = title.trim().slice(0, 150);
  const cleanUrl = imageUrl.trim().slice(0, 500);

  const record: PosterRecord = {
    id,
    title: cleanTitle,
    imageUrl: cleanUrl,
    createdAt,
  };

  saveLocalPosters([record, ...getLocalPosters()]);

  try {
    await setDoc(doc(db, 'posters', id), {
      title: cleanTitle,
      imageUrl: cleanUrl,
      createdAt,
      serverCreatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `posters/${id}`);
  }

  return record;
}

export async function deletePosterRecord(id: string): Promise<void> {
  saveLocalPosters(getLocalPosters().filter((p) => p.id !== id));
  try {
    await deleteDoc(doc(db, 'posters', id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `posters/${id}`);
  }
}

export function subscribeToPosters(callback: (posters: PosterRecord[]) => void): () => void {
  let firestorePosters: PosterRecord[] = [];

  const emitMerged = () => {
    const local = getLocalPosters();
    const map = new Map<string, PosterRecord>();
    firestorePosters.forEach((p) => map.set(p.id, p));
    local.forEach((p) => {
      if (!map.has(p.id)) map.set(p.id, p);
    });
    const sorted = Array.from(map.values()).sort((a, b) => b.createdAt - a.createdAt);
    callback(sorted);
  };

  const localListener: PosterListener = () => emitMerged();
  localPosterListeners.add(localListener);
  emitMerged();

  const q = query(collection(db, 'posters'), where('createdAt', '>', 0));
  const unsubFirestore = onSnapshot(
    q,
    (snapshot) => {
      firestorePosters = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          title: String(data.title || ''),
          imageUrl: String(data.imageUrl || ''),
          createdAt: Number(data.createdAt || Date.now()),
        };
      });
      saveLocalPosters(firestorePosters);
      emitMerged();
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, 'posters');
    }
  );

  return () => {
    localPosterListeners.delete(localListener);
    unsubFirestore();
  };
}

// ============================================================================
// 3. DYNAMIC JOB VACANCIES
// ============================================================================
export interface DynamicJobRecord {
  id: string;
  title: string;
  salary: string;
  jobType: 'WFH' | 'Office' | 'Hybrid';
  location: string;
  qualifications: string;
  createdAt: number;
}

const LOCAL_JOBS_KEY = 'kgb_dynamic_jobs_v1';
type JobListener = (jobs: DynamicJobRecord[]) => void;
const localJobListeners = new Set<JobListener>();

function getLocalJobs(): DynamicJobRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_JOBS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveLocalJobs(jobs: DynamicJobRecord[]) {
  try {
    localStorage.setItem(LOCAL_JOBS_KEY, JSON.stringify(jobs));
  } catch {
    // ignore
  }
  localJobListeners.forEach((cb) => cb(jobs));
}

export async function createDynamicJobRecord(input: {
  title: string;
  salary: string;
  jobType: 'WFH' | 'Office' | 'Hybrid';
  location: string;
  qualifications: string;
}): Promise<DynamicJobRecord> {
  const id = `job_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const createdAt = Date.now();

  const sanitized = {
    title: input.title.trim().slice(0, 150),
    salary: input.salary.trim().slice(0, 100),
    jobType: input.jobType,
    location: input.location.trim().slice(0, 120),
    qualifications: input.qualifications.trim().slice(0, 250),
    createdAt,
  };

  const record: DynamicJobRecord = { id, ...sanitized };
  saveLocalJobs([record, ...getLocalJobs()]);

  try {
    await setDoc(doc(db, 'jobs', id), {
      ...sanitized,
      serverCreatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `jobs/${id}`);
  }

  return record;
}

export async function deleteDynamicJobRecord(id: string): Promise<void> {
  saveLocalJobs(getLocalJobs().filter((j) => j.id !== id));
  try {
    await deleteDoc(doc(db, 'jobs', id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `jobs/${id}`);
  }
}

export function subscribeToDynamicJobs(callback: (jobs: DynamicJobRecord[]) => void): () => void {
  let firestoreJobs: DynamicJobRecord[] = [];

  const emitMerged = () => {
    const local = getLocalJobs();
    const map = new Map<string, DynamicJobRecord>();
    firestoreJobs.forEach((j) => map.set(j.id, j));
    local.forEach((j) => {
      if (!map.has(j.id)) map.set(j.id, j);
    });
    const sorted = Array.from(map.values()).sort((a, b) => b.createdAt - a.createdAt);
    callback(sorted);
  };

  const localListener: JobListener = () => emitMerged();
  localJobListeners.add(localListener);
  emitMerged();

  const q = query(collection(db, 'jobs'), where('jobType', 'in', ['WFH', 'Office', 'Hybrid']));
  const unsubFirestore = onSnapshot(
    q,
    (snapshot) => {
      firestoreJobs = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          title: String(data.title || ''),
          salary: String(data.salary || ''),
          jobType: (data.jobType as DynamicJobRecord['jobType']) || 'Office',
          location: String(data.location || ''),
          qualifications: String(data.qualifications || ''),
          createdAt: Number(data.createdAt || Date.now()),
        };
      });
      saveLocalJobs(firestoreJobs);
      emitMerged();
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, 'jobs');
    }
  );

  return () => {
    localJobListeners.delete(localListener);
    unsubFirestore();
  };
}

export async function signInAdminWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export function exportApplicationsToCSV(records: CandidateApplicationRecord[]) {
  const headers = [
    'Date/Time',
    'Candidate Name',
    'Phone Number',
    'Email Address',
    'City',
    'Qualification',
    'Applied Role',
    'Status',
    'Additional Notes / Experience',
  ];

  const escapeCsvCell = (val: string) => {
    const clean = String(val ?? '').replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = records.map((r) => [
    escapeCsvCell(new Date(r.timestamp).toLocaleString('en-IN')),
    escapeCsvCell(r.fullName),
    escapeCsvCell(r.phone),
    escapeCsvCell(r.email),
    escapeCsvCell(r.city),
    escapeCsvCell(r.qualification),
    escapeCsvCell(r.role),
    escapeCsvCell(r.status),
    escapeCsvCell(r.notes),
  ]);

  const csvContent =
    '\uFEFF' + [headers.map(escapeCsvCell).join(','), ...rows.map((r) => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute(
    'download',
    `KGB_Group_Applications_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
