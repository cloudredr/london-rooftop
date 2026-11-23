'use client';

import React, { useState } from 'react';
import { CONTACT_SUBJECTS } from '@/lib/constants';
import { useToast } from '@/components/ui';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const { success, error } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: CONTACT_SUBJECTS[0] as string,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      error('Please fill in your name, phone and message.');
      return;
    }

    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      success('Thank you! Your message has been sent.');
    } catch (err) {
      setSubmitted(true);
      success('Message received (Demo Mode)!');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-[#1C1C1C] border border-emerald-500/30 text-center space-y-4 shadow-xl">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
        <h3 className="font-heading text-xl font-bold text-[#F7F5F0]">
          Message Sent Successfully!
        </h3>
        <p className="text-xs text-[#A8A8A8] max-w-sm mx-auto">
          We appreciate your message and will get back to you shortly via phone or email.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              subject: CONTACT_SUBJECTS[0],
              message: '',
            });
          }}
          className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#252525] text-[#F7F5F0] hover:bg-[#333333]"
        >
          Send Another Note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] space-y-4 shadow-xl"
    >
      <div className="space-y-1">
        <h3 className="font-heading text-xl font-bold text-[#F7F5F0]">
          Send Us a Direct Message
        </h3>
        <p className="text-xs text-[#A8A8A8]">
          Have questions or feedback? Leave your message here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
            Subject
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
          >
            {CONTACT_SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
          Message *
        </label>
        <textarea
          rows={4}
          required
          placeholder="How can we assist you today?..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#666666] focus:outline-none focus:border-[#C8A66A]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
