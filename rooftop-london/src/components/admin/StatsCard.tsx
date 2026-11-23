import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color?: 'gold' | 'emerald' | 'amber' | 'blue';
}

export function StatsCard({
  label,
  value,
  subtitle,
  icon: Icon,
  color = 'gold',
}: StatsCardProps) {
  const colorMap = {
    gold: 'text-[#C8A66A] bg-[#C8A66A]/10 border-[#C8A66A]/30',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    blue: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
  };

  return (
    <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] shadow-xl flex items-center justify-between">
      <div className="space-y-1">
        <span className="text-xs uppercase tracking-wider text-[#888888] font-semibold">
          {label}
        </span>
        <div className="text-3xl font-heading font-extrabold text-[#F7F5F0]">
          {value}
        </div>
        {subtitle && <p className="text-[11px] text-[#A8A8A8]">{subtitle}</p>}
      </div>

      <div className={`p-3.5 rounded-2xl border ${colorMap[color]}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}
