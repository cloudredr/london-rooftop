'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  UtensilsCrossed,
  CalendarDays,
  PartyPopper,
  Image as ImageIcon,
  Settings,
  ExternalLink,
  LogOut,
  ShieldCheck,
} from 'lucide-react';

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Menu Management', href: '/admin/menu', icon: UtensilsCrossed },
    { label: 'Reservations', href: '/admin/reservations', icon: CalendarDays },
    { label: 'Event Enquiries', href: '/admin/events', icon: PartyPopper },
    { label: 'Gallery Photos', href: '/admin/gallery', icon: ImageIcon },
    { label: 'Restaurant Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAdminAuth');
    }
    router.push('/admin/login');
  };

  return (
    <aside className="w-64 bg-[#141414] border-r border-[#242424] flex flex-col justify-between min-h-screen text-[#A8A8A8]">
      {/* Top Branding */}
      <div>
        <div className="p-6 border-b border-[#242424]">
          <div className="flex items-center gap-2 text-[#C8A66A] mb-1">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-bold">Admin Portal</span>
          </div>
          <h2 className="font-heading text-lg font-bold text-[#F7F5F0]">
            ROOFTOP LONDON
          </h2>
          <p className="text-[10px] text-[#777777] uppercase tracking-wider">
            Management Suite
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1.5">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wider transition-colors ${
                  isActive
                    ? 'bg-[#C8A66A] text-[#151515] shadow-md shadow-[#C8A66A]/20'
                    : 'text-[#A8A8A8] hover:text-[#F7F5F0] hover:bg-[#1C1C1C]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-[#242424] space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium text-[#888888] hover:text-[#C8A66A] hover:bg-[#1C1C1C] transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            Public Website
          </span>
          <span className="text-[10px] bg-[#222222] px-2 py-0.5 rounded">Live</span>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
