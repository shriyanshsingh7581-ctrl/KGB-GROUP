import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
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

const LOCAL_STORAGE_KEY = 'kgb_hr_applications_v1';
type Listener = (records: CandidateApplicationRecord[]) => void;
const localListeners = new Set<Listener>();

function getLocalApplications(): CandidateApplicationRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
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
      fullName: 'Rohit विश्वकर्मा (Rohit Vishwakarma)',
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
    {
      id: 'app_seed_3',
      fullName: 'Ankit Patel',
      phone: '8989123456',
      email: 'ankit.patel@example.com',
      city: 'Jabalpur',
      qualification: 'Graduate (B.Tech)',
      role: 'Customer Support Executive',
      notes: 'Attended CEDMAP Bhopal orientation drive.',
      status: 'New',
      timestamp: new Date(Date.now() - 1000 * 60 * 320).toISOString(),
    },
  ];
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seeded));
  } catch {
    // ignore storage errors
  }
  return seeded;
}

function saveLocalApplications(records: CandidateApplicationRecord[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
  } catch {
    // ignore storage errors
  }
  localListeners.forEach((cb) => cb(records));
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

  // Sanitize & enforce blueprint length boundaries
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

  // Immediately persist to real-time local store so Admin Dashboard updates live
  const existing = getLocalApplications();
  saveLocalApplications([localRecord, ...existing]);

  // Also persist to Firebase Firestore `applications/{cleanId}`
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

  const localListener: Listener = () => emitMerged();
  localListeners.add(localListener);
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
    localListeners.delete(localListener);
    unsubAuth();
    if (unsubFirestore) unsubFirestore();
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
