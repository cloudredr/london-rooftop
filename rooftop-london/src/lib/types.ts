export interface Reservation {
  name: string;
  phone: string;
  email?: string;
  date: string;
  preferredTime: string;
  guestCount: number;
  seatingPreference: string;
  specialRequests?: string;
  referenceNumber?: string;
}

export interface EventEnquiry {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  preferredTime: string;
  requirements?: string;
  referenceNumber?: string;
}

export interface ContactMessage {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}
