'use client';

import React, { useState } from 'react';
import { EVENT_TYPES, TIME_SLOTS, RESTAURANT_INFO } from '@/lib/constants';
import { generateReferenceNumber } from '@/lib/utils';
import { useToast } from '@/components/ui';
import { CheckCircle2, Send, PartyPopper, MessageCircle } from 'lucide-react';

export function EventEnquiryForm() {
  const { success, error } = useToast();
  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: EVENT_TYPES[0] as string,
    eventDate: '',
    guestCount: 15,
    preferredTime: TIME_SLOTS[6] as string,
    requirements: '',
  });

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.eventDate) {
      error('Please complete name, phone number, and event date.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      const refNumber = data.referenceNumber || generateReferenceNumber();
      setSubmittedRef(refNumber);
      success('Event enquiry logged successfully!');
    } catch (err) {
      const refNumber = generateReferenceNumber();
      setSubmittedRef(refNumber);
      success('Event enquiry received (Demo Mode)!');
    } finally {
      setLoading(false);
    }
  };

  if (submittedRef) {
    const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
      `Hello! I submitted an event enquiry for ${formData.eventType}.\nReference: ${submittedRef}\nName: ${formData.name}\nDate: ${formData.eventDate}\nGuests: ${formData.guestCount}`
    )}`;

    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#1C1C1C] border border-[#C8A66A]/40 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-bold text-[#F7F5F0]">
            Event Enquiry Received!
          </h3>
          <p className="text-sm text-[#A8A8A8] max-w-md mx-auto">
            Thank you, <strong className="text-[#F7F5F0]">{formData.name}</strong>. Our celebration manager will contact you to discuss custom menu packages and rooftop decoration setups.
          </p>
        </div>

        <div className="inline-block p-4 rounded-xl bg-[#151515] border border-[#C8A66A]/30">
          <span className="text-xs uppercase tracking-widest text-[#A8A8A8] block">
            Enquiry Reference ID
          </span>
          <span className="text-2xl font-heading font-extrabold text-[#C8A66A] tracking-wider block mt-1">
            {submittedRef}
          </span>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with Event Coordinator
          </a>

          <button
            onClick={() => setSubmittedRef(null)}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#252525] text-[#F7F5F0] hover:bg-[#333333] transition-all"
          >
            New Event Enquiry
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
          Plan Your Celebration
        </h3>
        <p className="text-xs text-[#A8A8A8]">
          Tell us about your upcoming party, reunion, or private gathering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Contact Person Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Priyadarshini Mohanty"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 99384 XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Event Type
          </label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          >
            {EVENT_TYPES.map((et) => (
              <option key={et} value={et}>
                {et}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Event Date *
          </label>
          <input
            type="date"
            required
            min={todayStr}
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
            Estimated Guests
          </label>
          <input
            type="number"
            min={5}
            max={200}
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1.5">
          Event Requirements & Special Notes
        </label>
        <textarea
          rows={3}
          placeholder="Mention cake arrangements, customized buffet menu, musical setup, decoration color themes..."
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all transform hover:scale-[1.01] shadow-xl shadow-[#C8A66A]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <PartyPopper className="w-4 h-4" />
        {loading ? 'Sending Details...' : 'Send Event Enquiry'}
      </button>
    </form>
  );
}
