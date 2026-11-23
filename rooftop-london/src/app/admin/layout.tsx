'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/Sidebar';
import { ToastProvider } from '@/components/ui';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    // If we're on the login page itself, don't block
    if (pathname === '/admin/login') {
      setAuthorized(true);
      return;
    }

    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('isAdminAuth');
      if (isAuth === 'true') {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        router.push('/admin/login');
      }
    }
  }, [pathname, router]);

  // If on login page, render children without sidebar
  if (pathname === '/admin/login') {
    return <ToastProvider>{children}</ToastProvider>;
  }

  // Prevent flicker before localstorage check
  if (authorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-[#C8A66A]">
        <div className="text-sm font-semibold tracking-widest uppercase animate-pulse">
          Verifying Admin Credentials...
        </div>
      </div>
    );
  }

  return (
    <ToastProvider>
      <div className="flex min-h-screen bg-[#121212] text-[#F7F5F0]">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto p-6 sm:p-10">{children}</main>
      </div>
    </ToastProvider>
  );
}
