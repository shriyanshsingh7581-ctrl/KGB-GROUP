export interface Testimonial {
  name: string;
  collegeOrCity: string;
  rolePlaced: string;
  companyCategory: string;
  packageText: string;
  quote: string;
  avatarInitials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priyanka Sharma',
    collegeOrCity: 'Bhopal, MP',
    rolePlaced: 'WFH Data Entry Operator',
    companyCategory: 'Leading E-Commerce Partner',
    packageText: '₹25,000 / month',
    quote: 'Being a mother, I needed a genuine Work From Home job. Knowledge Gurukul verified my typing test, provided onboarding training, and helped me start within 4 days. 100% genuine salary credited on time!',
    avatarInitials: 'PS'
  },
  {
    name: 'Aman Patel',
    collegeOrCity: 'Oriental Institute of Science & Technology',
    rolePlaced: 'Customer Support Executive',
    companyCategory: 'Top MNC BPO',
    packageText: '₹28,500 / month',
    quote: 'Knowledge Gurukul team conducted mock interviews and communication grooming in our college. I cracked the first round and received my appointment letter before my final semester results.',
    avatarInitials: 'AP'
  },
  {
    name: 'Sourabh Tiwari',
    collegeOrCity: 'Govt. Engineering College, Jabalpur',
    rolePlaced: 'IT Desktop Support Associate',
    companyCategory: 'IT Infrastructure MNC',
    packageText: '₹34,000 / month',
    quote: 'KGB Group is a truly genuine partner for Central India students. Their ISO 9001 standard guidance and direct corporate connection saved me from unverified consultancy scams.',
    avatarInitials: 'ST'
  },
  {
    name: 'Neha Verma',
    collegeOrCity: 'Raipur, Chhattisgarh',
    rolePlaced: 'Assessment Invigilator Coordinator',
    companyCategory: 'National Testing Services',
    packageText: '₹22,000 / month',
    quote: 'Great professional environment, timely payment, and respectable role. Whenever I have any question, the helpline team at +91 7987683263 responds immediately.',
    avatarInitials: 'NV'
  }
];

export const COLLEGE_PARTNERS = [
  'Technocrats Institute of Technology (TIT), Bhopal',
  'Medi-Caps University, Indore',
  'Shri Ramdeobaba College of Engineering (RCOEM)',
  'Govt. Polytechnic & Engineering Colleges, MP & CG',
  'Barkatullah University Affiliated Colleges',
  'RGPV Associated Institutes, Central India'
];
