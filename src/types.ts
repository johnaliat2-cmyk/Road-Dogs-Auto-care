export type PageId = 'home' | 'services' | 'testimonials' | 'work' | 'about' | 'contact' | 'book';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  turnaround: string;
  guarantee: string;
  badge?: string;
  iconName: string;
  image?: string;
}

export interface MaintenancePackage {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceNote: string;
  popular?: boolean;
  features: string[];
  reportIncluded: string;
}

export interface ProjectLog {
  id: string;
  jobId: string;
  vehicle: string;
  title: string;
  category: 'engine' | 'brakes' | 'suspension' | 'performance';
  categoryLabel: string;
  turnaround: string;
  summary: string;
  leadTech: string;
  leadTechNote: string;
  specs: {
    label: string;
    value: string;
  }[];
  telemetryMetrics?: {
    label: string;
    before: string;
    after: string;
    delta: string;
  }[];
  image?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  vehicle: string;
  rating: number;
  timeAgo: string;
  category: 'engine' | 'brakes' | 'suspension' | 'fleet';
  categoryLabel: string;
  verified: boolean;
  quote: string;
}

export interface Technician {
  id: string;
  name: string;
  callsign?: string;
  role: string;
  tag: string;
  experience: string;
  bio: string;
  certifications: string;
  focus?: string;
}

export interface AppointmentState {
  // Stage 1: Vehicle Specs
  year: string;
  make: string;
  model: string;
  mileage: string;
  engineDrivetrain: string;
  
  // Stage 2: Service Needs
  selectedServices: string[];
  customServiceNotes: string;
  
  // Stage 3: Date & Time
  selectedDate: string;
  selectedTimeSlot: string;
  dropOffType: 'wait' | 'drop' | 'early';
  
  // Stage 4: Dispatch Notes & Contact
  fullName: string;
  phone: string;
  email: string;
  notes: string;
  urgentTowing: boolean;
}
