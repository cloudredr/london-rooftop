'use client';

import React, { useState } from 'react';
import { Badge, useToast, Modal } from '@/components/ui';
import {
  CalendarDays,
  Search,
  CheckCircle,
  XCircle,
  CheckCheck,
  FileText,
  Clock,
  Users,
} from 'lucide-react';

interface AdminReservation {
  id: string;
  ref: string;
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seating: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'rejected' | 'completed';
  notes?: string;
}

export default function AdminReservationsPage() {
  const { success, error } = useToast();

  const [reservations, setReservations] = useState<AdminReservation[]>([
    {
      id: 'res-1',
      ref: 'RLCR-98K2A',
      name: 'Ashok Patnaik',
      phone: '+91 94370 12345',
      email: 'ashok.p@gmail.com',
      date: '2026-11-25',
      time: '07:30 PM',
      guests: 4,
      seating: 'Rooftop Open Air',
      specialRequests: 'Window/edge table for river skyline breeze view.',
      status: 'pending',
      notes: 'Called customer, waiting for callback.',
    },
    {
      id: 'res-2',
      ref: 'RLCR-37BM8',
      name: 'Sneha Mohapatra',
      phone: '+91 98610 88219',
      date: '2026-11-24',
      time: '08:00 PM',
      guests: 6,
      seating: 'Indoor London Lounge',
      specialRequests: 'Celebrating a small family birthday.',
      status: 'confirmed',
      notes: 'Table 4 reserved.',
    },
    {
      id: 'res-3',
      ref: 'RLCR-51ZP4',
      name: 'Debasish Jena',
      phone: '+91 99371 44520',
      date: '2026-11-23',
      time: '01:30 PM',
      guests: 2,
      seating: 'Rooftop Covered Canopy',
      status: 'completed',
    },
    {
      id: 'res-4',
      ref: 'RLCR-12FA9',
      name: 'Tanmayee Mishra',
      phone: '+91 97780 33140',
      date: '2026-11-26',
      time: '09:00 PM',
      guests: 8,
      seating: 'Rooftop Open Air',
      status: 'pending',
    },
  ]);

  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [selectedRes, setSelectedRes] = useState<AdminReservation | null>(null);
  const [noteText, setNoteText] = useState('');

  const updateStatus = (id: string, newStatus: AdminReservation['status']) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    success(`Reservation marked as ${newStatus}`);
    if (selectedRes && selectedRes.id === id) {
      setSelectedRes({ ...selectedRes, status: newStatus });
    }
  };

  const saveNote = () => {
    if (!selectedRes) return;
    setReservations((prev) =>
      prev.map((r) => (r.id === selectedRes.id ? { ...r, notes: noteText } : r))
    );
    setSelectedRes({ ...selectedRes, notes: noteText });
    success('Internal note updated');
  };

  const filtered = reservations.filter((r) => {
    if (statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        r.name.toLowerCase().includes(q) ||
        r.ref.toLowerCase().includes(q) ||
        r.phone.includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-[#F7F5F0]">
          Table Reservations
        </h1>
        <p className="text-xs text-[#A8A8A8] mt-1">
          Review, approve, reject or complete table booking requests submitted through the website.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A66A]" />
          <input
            type="text"
            placeholder="Search by name, ref or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141414] border border-[#333333] text-xs text-[#F7F5F0] placeholder-[#777777] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        <div className="flex items-center gap-2">
          {['all', 'pending', 'confirmed', 'completed', 'rejected'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize cursor-pointer transition-colors ${
                statusFilter === st
                  ? 'bg-[#C8A66A] text-[#151515]'
                  : 'bg-[#222222] text-[#A8A8A8] hover:text-[#F7F5F0]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-[#181818] border border-[#262626] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#A8A8A8]">
            <thead className="bg-[#141414] text-xs uppercase tracking-wider text-[#C8A66A] border-b border-[#262626]">
              <tr>
                <th className="p-4">Reference</th>
                <th className="p-4">Guest Details</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Seating</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222222]">
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  onClick={() => {
                    setSelectedRes(r);
                    setNoteText(r.notes || '');
                  }}
                  className="hover:bg-[#1C1C1C] transition-colors cursor-pointer"
                >
                  <td className="p-4 font-mono font-bold text-xs text-[#C8A66A]">
                    {r.ref}
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-[#F7F5F0]">{r.name}</div>
                    <div className="text-xs text-[#888888]">{r.phone}</div>
                  </td>
                  <td className="p-4 text-xs">
                    <div className="text-[#F7F5F0]">{r.date}</div>
                    <div className="text-[#888888]">{r.time} ({r.guests} Guests)</div>
                  </td>
                  <td className="p-4 text-xs text-[#D1CCC4]">{r.seating}</td>
                  <td className="p-4">
                    <Badge variant={r.status} />
                  </td>
                  <td className="p-4 text-right space-x-1" onClick={(e) => e.stopPropagation()}>
                    {r.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateStatus(r.id, 'confirmed')}
                          className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs hover:bg-emerald-500/30 font-medium"
                          title="Confirm reservation"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateStatus(r.id, 'rejected')}
                          className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-400 text-xs hover:bg-rose-500/30 font-medium"
                          title="Reject reservation"
                        >
                          Decline
                        </button>
                      </>
                    )}
                    {r.status === 'confirmed' && (
                      <button
                        onClick={() => updateStatus(r.id, 'completed')}
                        className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-400 text-xs hover:bg-sky-500/30 font-medium"
                      >
                        Mark Seated
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reservation Detail Modal */}
      <Modal
        isOpen={!!selectedRes}
        onClose={() => setSelectedRes(null)}
        title={selectedRes ? `Booking: ${selectedRes.ref}` : ''}
      >
        {selectedRes && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#141414] border border-[#252525]">
              <div>
                <span className="text-[10px] uppercase text-[#888888] block">Guest Name</span>
                <span className="font-bold text-[#F7F5F0]">{selectedRes.name}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#888888] block">Contact</span>
                <a href={`tel:${selectedRes.phone}`} className="text-[#C8A66A] underline">
                  {selectedRes.phone}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#888888] block">Date & Time</span>
                <span className="text-[#F7F5F0]">{selectedRes.date} at {selectedRes.time}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#888888] block">Party Size</span>
                <span className="text-[#F7F5F0]">{selectedRes.guests} Guests</span>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] uppercase text-[#888888] block">Seating Preference</span>
                <span className="text-[#D1CCC4]">{selectedRes.seating}</span>
              </div>
              {selectedRes.specialRequests && (
                <div className="col-span-2">
                  <span className="text-[10px] uppercase text-[#888888] block">Special Requests</span>
                  <p className="text-xs text-[#F7F5F0] mt-0.5">{selectedRes.specialRequests}</p>
                </div>
              )}
            </div>

            {/* Internal Staff Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Internal Staff Notes
              </label>
              <textarea
                rows={3}
                placeholder="E.g. Customer requested Table 5, high chair needed, advance deposit confirmed..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-xs text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
              <button
                onClick={saveNote}
                className="mt-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#252525] text-[#C8A66A] hover:bg-[#333333]"
              >
                Save Note
              </button>
            </div>

            {/* Status change buttons */}
            <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
              <span className="text-xs text-[#888888]">Change Status:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateStatus(selectedRes.id, 'confirmed')}
                  className="px-3 py-1.5 rounded-lg text-xs bg-emerald-500/20 text-emerald-400 font-semibold"
                >
                  Confirm
                </button>
                <button
                  onClick={() => updateStatus(selectedRes.id, 'completed')}
                  className="px-3 py-1.5 rounded-lg text-xs bg-sky-500/20 text-sky-400 font-semibold"
                >
                  Completed
                </button>
                <button
                  onClick={() => updateStatus(selectedRes.id, 'rejected')}
                  className="px-3 py-1.5 rounded-lg text-xs bg-rose-500/20 text-rose-400 font-semibold"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
