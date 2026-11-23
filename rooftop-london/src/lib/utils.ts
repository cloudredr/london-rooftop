import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx for conditional class composition.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as Indian Rupee price.
 */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Format an ISO date string into a human-readable form.
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
): string {
  return new Date(dateString).toLocaleDateString('en-IN', options);
}

/**
 * Generate a unique reference number for reservations / enquiries.
 * Pattern: RLCR-XXXXX (uppercase alphanumeric)
 */
export function generateReferenceNumber(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // omit confusable I,O,0,1
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `RLCR-${code}`;
}

/**
 * Build a WhatsApp URL with a prefilled message.
 */
export function getWhatsAppUrl(
  message: string,
  phone: string = '919938485755'
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Build a WhatsApp reservation message.
 */
export function getReservationWhatsAppUrl(details: {
  name: string;
  date: string;
  time: string;
  guests: number;
}): string {
  const message = [
    `🍽️ *Reservation Request — Rooftop London*`,
    ``,
    `Name: ${details.name}`,
    `Date: ${details.date}`,
    `Time: ${details.time}`,
    `Guests: ${details.guests}`,
    ``,
    `Please confirm my reservation. Thank you!`,
  ].join('\n');
  return getWhatsAppUrl(message);
}

/**
 * Build a WhatsApp event enquiry message.
 */
export function getEventEnquiryWhatsAppUrl(details: {
  name: string;
  eventType: string;
  date: string;
  guestCount: number;
}): string {
  const message = [
    `🎉 *Event Enquiry — Rooftop London*`,
    ``,
    `Name: ${details.name}`,
    `Event: ${details.eventType}`,
    `Date: ${details.date}`,
    `Expected Guests: ${details.guestCount}`,
    ``,
    `I'd like to discuss event arrangements. Thank you!`,
  ].join('\n');
  return getWhatsAppUrl(message);
}

/**
 * Truncate text with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Slugify a string for URL use.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
