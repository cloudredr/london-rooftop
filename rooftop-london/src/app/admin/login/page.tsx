'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui';

export default function AdminLoginPage() {
  const router = useRouter();
  const { success, error } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Development credentials for testing
    // Admin can also set or configure Supabase credentials
    setTimeout(() => {
      if (
        (email === 'admin@rooftoplondon.com' || email === 'admin') &&
        (password === 'admin123' || password === 'admin')
      ) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('isAdminAuth', 'true');
        }
        success('Welcome back, Restaurant Administrator!');
        router.push('/admin');
      } else {
        error('Invalid credentials. Use admin@rooftoplondon.com / admin123 for demo preview.');
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] px-4 py-16">
      <div className="max-w-md w-full rounded-3xl bg-[#1A1A1A] border border-[#C8A66A]/30 p-8 sm:p-10 shadow-2xl space-y-8">
        {/* Logo Branding */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#C8A66A]/10 border border-[#C8A66A]/30 flex items-center justify-center mx-auto text-[#C8A66A] mb-3">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F7F5F0]">
            Admin Sign In
          </h1>
          <p className="text-xs text-[#C8A66A] uppercase tracking-[0.25em] font-semibold">
            ROOFTOP LONDON CAFE & RESTAURANT
          </p>
        </div>

        {/* Credentials Notice Box */}
        <div className="p-3.5 rounded-xl bg-[#222222] border border-[#333333] text-xs text-[#A8A8A8] space-y-1">
          <p className="font-semibold text-[#F7F5F0] flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-[#C8A66A]" />
            Development Access Credentials:
          </p>
          <p>Email: <span className="text-[#C8A66A]">admin@rooftoplondon.com</span></p>
          <p>Password: <span className="text-[#C8A66A]">admin123</span></p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#A8A8A8] mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A66A]" />
              <input
                type="text"
                required
                placeholder="admin@rooftoplondon.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#A8A8A8] mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A66A]" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C8A66A]/20"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs text-[#888888] hover:text-[#C8A66A] transition-colors"
          >
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
