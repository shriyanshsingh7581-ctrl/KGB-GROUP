export interface JobOpening {
  id: string;
  title: string;
  category: 'wfh' | 'office' | 'field' | 'tech';
  categoryLabel: string;
  salary: string;
  salaryNote: string;
  location: string;
  timing: string;
  openings: number;
  highlightBadge: string;
  isUrgent?: boolean;
  isWFH?: boolean;
  isFeaturedPoster?: boolean;
  posterImage?: string;
  fallbackPosterImage?: string;
  requirements: string[];
  description: string;
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'wfh-telecaller',
    title: 'Work From Home Tele-Caller',
    category: 'wfh',
    categoryLabel: 'Featured WFH / Hybrid',
    salary: '₹18,000 - ₹28,000 / month',
    salaryNote: 'High Incentive + Fixed Monthly Salary',
    location: 'Zone 1, MP Nagar, Bhopal / Remote WFH',
    timing: 'Flexible Timings (Part-time / Full-time)',
    openings: 110,
    highlightBadge: 'High Incentive + Fixed Salary',
    isUrgent: true,
    isWFH: true,
    isFeaturedPoster: true,
    posterImage: 'telecaller-hiring.jpg',
    fallbackPosterImage: '/assets/aistudio/IMG-20261024-WA0020_b250fc32.jpg',
    requirements: [
      'Clear communication skills in Hindi (Basic English is a plus)',
      'Smartphone / Headset required; work from home or Bhopal MP Nagar center',
      'Flexible shift options for college students, freshers & homemakers',
      'Direct Helpline for Instant Interview: +91 7987683263'
    ],
    description: 'Connect with prospective students and job applicants for counseling, admission inquiries, and interview scheduling with fixed salary plus lucrative daily/weekly incentives.'
  },
  {
    id: 'wfh-data-entry',
    title: 'Data Entry Operator (Work From Home)',
    category: 'wfh',
    categoryLabel: 'Work From Home',
    salary: '₹25,000 / month',
    salaryNote: 'Fixed Monthly + Accuracy Bonus',
    location: '100% Remote / Bhopal & Central India',
    timing: 'Flexible Shifts (Full-time / Part-time)',
    openings: 85,
    highlightBadge: 'Laptop / Desktop Required',
    isUrgent: true,
    isWFH: true,
    requirements: [
      'Personal Laptop or Desktop with internet connection is mandatory',
      'Minimum typing speed: 30+ WPM with 95% accuracy',
      'Basic knowledge of MS Excel, Google Sheets & Word',
      'Eligibility: 12th Pass, Any Graduate, Freshers & Experienced'
    ],
    description: 'Accurate data input, document verification, and spreadsheet updating for reputed e-commerce & corporate clients from the comfort of your home.'
  },
  {
    id: 'customer-support',
    title: 'Customer Support Executive',
    category: 'office',
    categoryLabel: 'MNC BPO / Corporate',
    salary: '₹23,000 - ₹30,000 / month',
    salaryNote: '+ Performance Bonus + Cab / Shift Allowance',
    location: 'Bhopal, Indore, Raipur & Hybrid',
    timing: 'Day / Rotational Shifts',
    openings: 120,
    highlightBadge: 'MNC Hiring Drive',
    isUrgent: true,
    requirements: [
      'Good verbal communication in Hindi & conversational English',
      'Customer-centric attitude and active listening skills',
      'Basic computer navigation and keyboard literacy',
      'Eligibility: Undergraduates, Graduates (Any stream), Freshers welcome'
    ],
    description: 'Assist customers with queries, service requests, and support over incoming voice calls, emails, and live chat for leading national brands.'
  },
  {
    id: 'campus-coordinator-invigilator',
    title: 'Campus Drive Coordinator & Invigilator',
    category: 'field',
    categoryLabel: 'Institutional & Exam Drives',
    salary: '₹18,000 - ₹25,000 / month',
    salaryNote: 'Fixed Salary or Per-Drive Honorarium + TA/DA',
    location: 'Bhopal (CEDMAP / MP Nagar) & Partner Colleges',
    timing: 'Day Shifts / Campus Drive Schedules',
    openings: 65,
    highlightBadge: 'College & Exam Centers',
    requirements: [
      'Coordinate candidate registration queues, biometric verification & exam hall discipline',
      'Assist HR panels during mega campus placement drives across Central India',
      'Eligibility: Any Graduate, Post Graduate, MBA/BBA or College Coordinators',
      'Disciplined, punctual, and strong crowd management skills'
    ],
    description: 'Supervise online computer-based tests (CBT), competitive exam centers, and mega campus recruitment drives at CEDMAP and partner engineering colleges.'
  },
  {
    id: 'warehouse-associate',
    title: 'Warehouse Associates & Logistics Supervisors',
    category: 'field',
    categoryLabel: 'Logistics & Supply Chain',
    salary: '₹20,000 - ₹26,000 / month',
    salaryNote: '+ PF + ESIC Medical + Attendance Bonus',
    location: 'Bhopal, Indore, Jabalpur, Raipur Hubs',
    timing: 'Standard Shift Rotations',
    openings: 90,
    highlightBadge: 'Immediate Joining',
    requirements: [
      'Inventory barcode scanning, order picking, packing & dispatch',
      'Basic smartphone / barcode handheld scanner handling',
      'Eligibility: 10th Pass, 12th Pass, ITI, or Any Diploma',
      'Physical fitness and team collaboration mindset'
    ],
    description: 'Fast-paced fulfillment center roles managing parcel sorting, inbound inventory, and dispatch operations for leading e-commerce platforms.'
  },
  {
    id: 'it-trainee',
    title: 'Junior IT Desktop Support & Network Associate',
    category: 'tech',
    categoryLabel: 'Engineering & IT',
    salary: '₹28,000 - ₹35,000 / month',
    salaryNote: 'Direct Corporate Payroll',
    location: 'Bhopal / Indore / Hybrid',
    timing: 'Standard Corporate Hours',
    openings: 45,
    highlightBadge: 'Special for Tech Graduates',
    requirements: [
      'Basic Windows OS, networking protocols (LAN/Wi-Fi/DNS), hardware assembly',
      'Troubleshooting peripheral devices, printer, software installations',
      'Eligibility: B.Tech / B.E (CS/IT/EC), BCA, B.Sc IT or 3-Yr Diploma',
      'Freshers trained by Knowledge Gurukul Bhopal given high priority'
    ],
    description: 'Maintain corporate IT assets, assist employees with system setups, software updates, and basic network troubleshooting.'
  }
];
