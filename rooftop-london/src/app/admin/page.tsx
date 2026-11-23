'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { StatsCard } from '@/components/admin/StatsCard';
import {
  CalendarDays,
  UtensilsCrossed,
  PartyPopper,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  ArrowRight,
  PlusCircle,
  ExternalLink,
} from 'lucide-react';
import { SAMPLE_MENU_ITEMS, SAMPLE_GALLERY_IMAGES } from '@/lib/constants';
import { Badge } from '@/components/ui';

export default function AdminDashboardPage() {
  // Sample recent reservations
  const [recentReservations, setRecentReservations] = useState([
    {
      ref: 'RLCR-98K2A',
      name: 'Ashok Patnaik',
      phone: '+91 94370 12345',
      date: '2026-11-25',
      time: '07:30 PM',
      guests: 4,
      seating: 'Rooftop Open Air',
      status: 'pending',
    },
    {
      ref: 'RLCR-37BM8',
      name: 'Sneha Mohapatra',
      phone: '+91 98610 88219',
      date: '2026-11-24',
      time: '08:00 PM',
      guests: 6,
      seating: 'Indoor London Lounge',
      status: 'confirmed',
    },
    {
      ref: 'RLCR-51ZP4',
      name: 'Debasish Jena',
      phone: '+91 99371 44520',
      date: '2026-11-23',
      time: '01:30 PM',
      guests: 2,
      seating: 'Rooftop Covered Canopy',
      status: 'completed',
    },
  ]);

  // Sample recent events
  const [recentEvents] = useState([
    {
      ref: 'EVT-772',
      name: 'Priyanka Tripathy',
      type: '25th Birthday Bash',
      date: '2026-11-28',
      guests: 25,
      phone: '+91 99380 91823',
      status: 'reviewed',
    },
    {
      ref: 'EVT-771',
      name: 'Satyabrata Das',
      type: 'Family Anniversary Reunion',
      date: '2026-11-30',
      guests: 18,
      phone: '+91 94372 88211',
      status: 'pending',
    },
  ]);

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-[#F7F5F0]">
            Dashboard Overview
          </h1>
          <p className="text-xs text-[#A8A8A8] mt-1">
            Real-time management summary for Rooftop London Cafe & Restaurant
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/menu"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            Add Menu Dish
          </Link>

          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#222222] text-[#F7F5F0] hover:bg-[#333333] transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Live Site
          </Link>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          label="Total Reservations"
          value="48"
          subtitle="3 Pending review"
          icon={CalendarDays}
          color="gold"
        />
        <StatsCard
          label="Menu Items Active"
          value={SAMPLE_MENU_ITEMS.length}
          subtitle="Across 10 Categories"
          icon={UtensilsCrossed}
          color="emerald"
        />
        <StatsCard
          label="Celebration Enquiries"
          value="14"
          subtitle="2 require follow-up"
          icon={PartyPopper}
          color="amber"
        />
        <StatsCard
          label="Gallery Images"
          value={SAMPLE_GALLERY_IMAGES.length}
          subtitle="Published publicly"
          icon={ImageIcon}
          color="blue"
        />
      </div>

      {/* 2-Column: Recent Reservations & Recent Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Reservations */}
        <div className="p-6 rounded-2xl bg-[#181818] border border-[#262626] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#242424]">
            <h3 className="font-heading text-lg font-bold text-[#F7F5F0] flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-[#C8A66A]" />
              Recent Table Reservations
            </h3>
            <Link
              href="/admin/reservations"
              className="text-xs text-[#C8A66A] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentReservations.map((res) => (
              <div
                key={res.ref}
                className="p-3.5 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#F7F5F0]">
                      {res.name}
                    </span>
                    <span className="text-[10px] text-[#C8A66A] font-mono">
                      {res.ref}
                    </span>
                  </div>
                  <div className="text-xs text-[#888888] mt-0.5">
                    {res.date} at {res.time} • {res.guests} Guests ({res.seating})
                  </div>
                </div>

                <Badge
                  variant={
                    res.status === 'confirmed'
                      ? 'confirmed'
                      : res.status === 'completed'
                      ? 'completed'
                      : 'pending'
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div className="p-6 rounded-2xl bg-[#181818] border border-[#262626] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#242424]">
            <h3 className="font-heading text-lg font-bold text-[#F7F5F0] flex items-center gap-2">
              <PartyPopper className="w-4 h-4 text-[#C8A66A]" />
              Celebration & Event Inquiries
            </h3>
            <Link
              href="/admin/events"
              className="text-xs text-[#C8A66A] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentEvents.map((evt) => (
              <div
                key={evt.ref}
                className="p-3.5 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#F7F5F0]">
                      {evt.name}
                    </span>
                    <span className="text-xs text-[#C8A66A]">
                      ({evt.type})
                    </span>
                  </div>
                  <div className="text-xs text-[#888888] mt-0.5">
                    Date: {evt.date} • {evt.guests} Estimated Guests • {evt.phone}
                  </div>
                </div>

                <Badge variant={evt.status === 'reviewed' ? 'confirmed' : 'pending'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
