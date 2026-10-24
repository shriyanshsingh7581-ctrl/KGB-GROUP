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
  requirements: string[];
  description: string;
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'wfh-data-entry',
    title: 'Work From Home Data Entry Operator',
    category: 'wfh',
    categoryLabel: 'Work From Home',
    salary: '₹25,000 / month',
    salaryNote: 'Fixed Monthly + Accuracy Bonus',
    location: '100% Remote / Pan-India',
    timing: 'Flexible Shifts (Full-time / Part-time)',
    openings: 85,
    highlightBadge: 'Laptop / PC Compulsory',
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
    title: 'Customer Support Executive (Voice & Blended)',
    category: 'office',
    categoryLabel: 'MNC BPO / Corporate',
    salary: '₹23,000 - ₹30,000 / month',
    salaryNote: '+ Night Shift Allowance + Free Cab / Travel',
    location: 'Indore, Bhopal, Raipur & Hybrid Options',
    timing: 'Rotational Day / Evening Shifts',
    openings: 120,
    highlightBadge: 'MNC Hiring Drive',
    isUrgent: true,
    requirements: [
      'Good verbal communication in Hindi & conversational English',
      'Customer-centric attitude and active listening skills',
      'Basic computer navigation and keyboard literacy',
      'Eligibility: Undergraduates, Graduates (Any stream), Freshers welcome'
    ],
    description: 'Assist customers with queries, order tracking, and support over incoming voice calls, emails, and live chat for leading national brands.'
  },
  {
    id: 'exam-invigilator',
    title: 'Exam Invigilators & Assessment Coordinators',
    category: 'field',
    categoryLabel: 'Government & National Exams',
    salary: '₹18,000 - ₹24,000 / month',
    salaryNote: 'Or Rs. 800 - 1,200 / day duty honorarium',
    location: 'Central India Examination Centers (MP & CG)',
    timing: 'Day Shifts / Weekend Schedules',
    openings: 60,
    highlightBadge: 'Govt. / IT Test Centers',
    requirements: [
      'Candidate identity verification, biometric recording & seating arrangement',
      'Strict adherence to exam protocol, confidentiality and time schedules',
      'Eligibility: Any Graduate, Post Graduate or B.Ed / College Teachers',
      'Disciplined, honest, and highly observant personality'
    ],
    description: 'Supervise online computer-based tests (CBT) and competitive examination halls across recognized institutions and university partner centers.'
  },
  {
    id: 'warehouse-associate',
    title: 'Warehouse Associates & Logistics Supervisors',
    category: 'field',
    categoryLabel: 'Logistics & Supply Chain',
    salary: '₹20,000 - ₹26,000 / month',
    salaryNote: '+ PF + ESIC Medical + Performance Incentives',
    location: 'Indore, Jabalpur, Raipur, Nagpur Hubs',
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
    location: 'Indore / Bhopal / Hybrid',
    timing: 'Standard Corporate Hours',
    openings: 45,
    highlightBadge: 'Special for Tech Graduates',
    requirements: [
      'Basic Windows OS, networking protocols (LAN/Wi-Fi/DNS), hardware assembly',
      'Troubleshooting peripheral devices, printer, software installations',
      'Eligibility: B.Tech / B.E (CS/IT/EC), BCA, B.Sc IT or 3-Yr Diploma',
      'Freshers trained by Knowledge Gurukul given high priority'
    ],
    description: 'Maintain corporate IT assets, assist employees with system setups, software updates, and basic network troubleshooting.'
  },
  {
    id: 'hr-recruiter',
    title: 'HR Recruiter & Talent Sourcing Trainee',
    category: 'office',
    categoryLabel: 'Corporate HR',
    salary: '₹22,000 - ₹28,000 / month',
    salaryNote: '+ High Placement Incentive per hire',
    location: 'Head Office (Central India)',
    timing: 'Monday to Saturday (9:30 AM - 6:30 PM)',
    openings: 25,
    highlightBadge: 'Campus Favorite',
    requirements: [
      'Excellent interpersonal communication & telephone presence',
      'Screening resumes, shortlisting candidates, scheduling interviews',
      'Eligibility: MBA HR, BBA, Any Graduate with good persuasion skills',
      'Full recruitment lifecycle training provided by KGB Group'
    ],
    description: 'Source talented candidates across partner colleges and portals, coordinate interview drives, and help youth secure corporate placements.'
  }
];
