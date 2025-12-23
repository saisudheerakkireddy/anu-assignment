import { 
  GraduationCap, 
  Globe, 
  Building2, 
  CheckCircle, 
  Calendar, 
  Users, 
  Award, 
  MapPin,
  Home,
  Briefcase,
  BookOpen
} from 'lucide-react';

/**
 * Navigation items configuration
 * Each item contains:
 * - name: Full display name
 * - icon: Lucide icon component
 * - dataKey: Unique identifier for targeting (used in data-key attribute)
 */
export const NAV_ITEMS = [
  { name: 'ApplyUniNow', icon: BookOpen, dataKey: 'uninow' },
  { name: 'ApplyUniLoans', icon: Building2, dataKey: 'uniloans' },
  { name: 'ApplyUniHomes', icon: Home, dataKey: 'unihomes' },
  { name: 'ApplyUniJobs', icon: Briefcase, dataKey: 'unijobs' }
];

/**
 * Filter tags for preference selection
 */
export const FILTER_TAGS = [
  'Quick Offer', 
  'Course with Internships', 
  'High Offer Acceptance-Rate', 
  'Affordable University', 
  'Guaranteed Scholarship', 
  'Trending Courses',
  'High Ranking Universities', 
  'Outstanding Facilities', 
  'English Test Waiver',
  'Low Tuition Deposit', 
  'Backlog Acceptance', 
  'MOI Acceptable', 
  'Professional Accreditations', 
  'Culture and Social Experience', 
  'Affordable Living',
  'Career Upskilling', 
  'Quick Education Loans', 
  'Accommodation', 
  'Part Time Jobs',
  'Pre-Departure', 
  'Destination - Arrival pickup', 
  'On - Arrival registrations',
  'Internship (in-line to Subject area)', 
  'Part-time jobs (in-line to academics / work experience)'
];

/**
 * Statistics displayed in the stats section
 */
export const STATS = [
  { icon: Users, value: '12,000+', label: 'Students Helped' },
  { icon: BookOpen, value: '3,00,000+', label: 'Study Options' },
  { icon: Building2, value: '2,180', label: 'Global Universities' },
  { icon: CheckCircle, value: '100%', label: 'Transparent Process' },
  { icon: Globe, value: '500+', label: 'Global Events' },
  { icon: Calendar, value: '1,200+', label: 'Virtual Sessions' },
  { icon: Award, value: '100%', label: 'Student Satisfaction' },
  { icon: MapPin, value: '20+', label: 'Study Destinations' },
  { icon: GraduationCap, value: '12+', label: "Year's Experience" }
];

/**
 * Footer navigation links
 */
export const FOOTER_LINKS = [
  'About Us', 
  'EXPLORE', 
  'AI Student Advisor', 
  'Terms & Conditions',
  'Privacy Policy', 
  'Refund Policy', 
  'Anti-Fraud Policy', 
  'Grievance'
];

/**
 * Contact information
 */
export const CONTACT_INFO = {
  ukPhone: '+44 773 45 66688',
  inPhone: '+91 970 45 66688',
  email: 'support@applyuninow.com'
};

/**
 * Menu suffixes for gradient text application
 * Used for DOM manipulation if needed
 */
export const MENU_SUFFIXES = ['UniNow', 'UniLoans', 'UniHomes', 'UniJobs'];
