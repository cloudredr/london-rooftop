// ============================================================================
// Types Definition for Rooftop London Cafe & Restaurant
// ============================================================================

export type FoodType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  foodType: FoodType;
  image?: string;
  isAvailable: boolean;
  isFeatured: boolean;
  isSpicy?: boolean;
  tags?: string[];
  createdAt?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  displayOrder: number;
  isActive: boolean;
}

export interface Reservation {
  id?: string;
  referenceNumber?: string;
  name: string;
  phone: string;
  email?: string;
  date: string;
  preferredTime: string;
  guestCount: number;
  seatingPreference: string;
  specialRequests?: string;
  status?: 'pending' | 'confirmed' | 'rejected' | 'completed';
  adminNotes?: string;
  createdAt?: string;
}

export interface EventEnquiry {
  id?: string;
  referenceNumber?: string;
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  preferredTime?: string;
  requirements?: string;
  status?: 'pending' | 'reviewed' | 'confirmed' | 'completed' | 'cancelled';
  adminNotes?: string;
  createdAt?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  isRead?: boolean;
  createdAt?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'Rooftop' | 'Interiors' | 'Food' | 'Celebrations' | 'Events' | 'All';
  description?: string;
}

export interface RestaurantSettings {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagramUrl: string;
  googleMapsUrl: string;
  openingHours: {
    day: string;
    open: string;
    close: string;
    isClosed: boolean;
  }[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  iconName: string;
}
