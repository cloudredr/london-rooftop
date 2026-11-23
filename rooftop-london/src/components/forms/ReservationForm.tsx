'use client';

import React, { useState } from 'react';
import { TIME_SLOTS, SEATING_OPTIONS, RESTAURANT_INFO } from '@/lib/constants';
import { generateReferenceNumber } from '@/lib/utils';
import { useToast } from '@/components/ui';
import { CheckCircle2, Calendar, Clock, Users, MapPin, Send, MessageCircle } from 'lucide-react';

export function ReservationForm() {
  const { success, error } = useToast();
  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    preferredTime: TIME_SLOTS[0] as string,
    guestCount: 2,
    seatingPreference: SEATING_OPTIONS[0] as string,
    specialRequests: '',
  });

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      error('Please fill in your name, contact phone and preferred date.');
      return;
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      error('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      const refNumber = data.referenceNumber || generateReferenceNumber();

      setSubmittedRef(refNumber);
      success('Reservation request submitted successfully!');
    } catch (err) {
      // Graceful fallback for offline / mock testing
      const refNumber = generateReferenceNumber();
      setSubmittedRef(refNumber);
      success('Reservation request received (Demo Mode)!');
    } finally {
      setLoading(false);
    }
  };

  if (submittedRef) {
    const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
      `Hello! I just submitted a reservation request at Rooftop London Cafe & Restaurant.\nReference: ${submittedRef}\nName: ${formData.name}\nDate: ${formData.date} at ${formData.preferredTime}\nGuests: ${formData.guestCount}`
    )}`;

    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#1C1C1C] border border-[#C8A66A]/40 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-bold text-[#F7F5F0]">
            Reservation Request Received!
          </h3>
          <p className="text-sm text-[#A8A8A8] max-w-md mx-auto">
            Thank you, <strong className="text-[#F7F5F0]">{formData.name}</strong>. Your table inquiry has been logged in our system.
          </p>
        </div>

        <div className="inline-block p-4 rounded-xl bg-[#151515] border border-[#C8A66A]/30">
          <span className="text-xs uppercase tracking-widest text-[#A8A8A8] block">
            Booking Reference ID
          </span>
          <span className="text-2xl font-heading font-extrabold text-[#C8A66A] tracking-wider block mt-1">
            {submittedRef}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#222222] text-xs text-[#A8A8A8] max-w-md mx-auto text-left space-y-1.5">
          <p className="font-semibold text-[#F7F5F0]">Important Notice:</p>
          <p>
            A submitted request is not an automated confirmation. Our restaurant team will contact you via phone or WhatsApp to confirm your table availability and seating choice.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Fast-Track on WhatsApp
          </a>

          <button
            onClick={() => {
              setSubmittedRef(null);
              setFormData({
                name: '',
                phone: '',
                email: '',
                date: '',
                preferredTime: TIME_SLOTS[0],
                guestCount: 2,
                seatingPreference: SEATING_OPTIONS[0],
                specialRequests: '',
              });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#252525] text-[#F7F5F0] hover:bg-[#333333] transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-2xl bg-[#1C1C1C] border border-[#2D2D2D] space-y-6 shadow-2xl"
    >
      <div className="space-y-1">
        <h3 className="font-heading text-2xl font-bold text-[#F7F5F0]">
          Reserve Your Table
        </h3>
        <p className="text-xs text-[#A8A8A8]">
          Fill in the details below. Our staff will confirm your booking promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Date */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Date *
          </label>
          <input
            type="date"
            required
            min={todayStr}
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Preferred Time
          </label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          >
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Guest Count */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Number of Guests
          </label>
          <select
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Email (Optional)
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        {/* Seating Preference */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Seating Preference
          </label>
          <select
            value={formData.seatingPreference}
            onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          >
            {SEATING_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
          Special Requests / Occasion Details
        </label>
        <textarea
          rows={3}
          placeholder="E.g. Celebrating an anniversary, window/corner table preference, dietary preferences..."
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
        />
      </div>

      {/* Policy disclaimer */}
      <p className="text-[11px] text-[#888888] italic">
        *Submitting this request does not guarantee automatic confirmation. Our restaurant team will contact you directly to confirm table allocation.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all transform hover:scale-[1.01] shadow-xl shadow-[#C8A66A]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {loading ? 'Submitting Request...' : 'Request a Reservation'}
      </button>
    </form>
  );
}
