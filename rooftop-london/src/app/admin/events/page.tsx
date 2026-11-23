'use client';

import React, { useState } from 'react';
import { Badge, useToast, Modal } from '@/components/ui';
import { PartyPopper, Search, Phone, Calendar, Users } from 'lucide-react';

interface AdminEvent {
  id: string;
  ref: string;
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  requirements?: string;
  status: 'pending' | 'reviewed' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export default function AdminEventsPage() {
  const { success } = useToast();

  const [events, setEvents] = useState<AdminEvent[]>([
    {
      id: 'evt-1',
      ref: 'EVT-772',
      name: 'Priyanka Tripathy',
      phone: '+91 99380 91823',
      email: 'priyanka@gmail.com',
      eventType: '25th Birthday Bash',
      eventDate: '2026-11-28',
      guestCount: 25,
      requirements: 'Customized balloon arch, chocolate fudge cake table, cocktail starters buffet.',
      status: 'reviewed',
      notes: 'Quotation sent via WhatsApp, awaiting advance token.',
    },
    {
      id: 'evt-2',
      ref: 'EVT-771',
      name: 'Satyabrata Das',
      phone: '+91 94372 88211',
      eventType: 'Family Anniversary Reunion',
      eventDate: '2026-11-30',
      guestCount: 18,
      requirements: 'Buffet dinner with tandoori platters, non-spicy gravies for elders.',
      status: 'pending',
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<AdminEvent | null>(null);

  const updateStatus = (id: string, newStatus: AdminEvent['status']) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
    success(`Event enquiry marked as ${newStatus}`);
    if (selectedEvent && selectedEvent.id === id) {
      setSelectedEvent({ ...selectedEvent, status: newStatus });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-[#F7F5F0]">
          Celebrations & Group Enquiries
        </h1>
        <p className="text-xs text-[#A8A8A8] mt-1">
          Review party requests, birthday celebrations, and group banquet proposals.
        </p>
      </div>

      <div className="rounded-2xl bg-[#181818] border border-[#262626] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#A8A8A8]">
            <thead className="bg-[#141414] text-xs uppercase tracking-wider text-[#C8A66A] border-b border-[#262626]">
              <tr>
                <th className="p-4">Ref</th>
                <th className="p-4">Organizer</th>
                <th className="p-4">Occasion</th>
                <th className="p-4">Date & Guests</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222222]">
              {events.map((evt) => (
                <tr
                  key={evt.id}
                  onClick={() => setSelectedEvent(evt)}
                  className="hover:bg-[#1C1C1C] transition-colors cursor-pointer"
                >
                  <td className="p-4 font-mono font-bold text-xs text-[#C8A66A]">
                    {evt.ref}
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-[#F7F5F0]">{evt.name}</div>
                    <div className="text-xs text-[#888888]">{evt.phone}</div>
                  </td>
                  <td className="p-4 text-xs font-medium text-[#F7F5F0]">
                    {evt.eventType}
                  </td>
                  <td className="p-4 text-xs">
                    <div className="text-[#F7F5F0]">{evt.eventDate}</div>
                    <div className="text-[#888888]">{evt.guestCount} Guests</div>
                  </td>
                  <td className="p-4">
                    <Badge variant={evt.status === 'reviewed' ? 'confirmed' : 'pending'} />
                  </td>
                  <td className="p-4 text-right space-x-1" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => updateStatus(evt.id, 'confirmed')}
                      className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-semibold"
                    >
                      Confirm
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent ? `Event: ${selectedEvent.eventType}` : ''}
      >
        {selectedEvent && (
          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-xl bg-[#141414] border border-[#252525] space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-[#888888]">Organizer:</span>
                <span className="font-bold text-[#F7F5F0]">{selectedEvent.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#888888]">Phone:</span>
                <a href={`tel:${selectedEvent.phone}`} className="text-[#C8A66A] underline">
                  {selectedEvent.phone}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#888888]">Event Date:</span>
                <span className="text-[#F7F5F0]">{selectedEvent.eventDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#888888]">Guest Count:</span>
                <span className="text-[#F7F5F0]">{selectedEvent.guestCount} Guests</span>
              </div>
              {selectedEvent.requirements && (
                <div className="pt-2 border-t border-[#222222]">
                  <span className="text-xs text-[#888888] block">Custom Requirements:</span>
                  <p className="text-xs text-[#F7F5F0] mt-1">{selectedEvent.requirements}</p>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => updateStatus(selectedEvent.id, 'confirmed')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#C8A66A] text-[#151515]"
              >
                Mark Confirmed
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
