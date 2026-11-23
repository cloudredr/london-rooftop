'use client';

import React, { useState } from 'react';
import { RESTAURANT_INFO } from '@/lib/constants';
import { useToast } from '@/components/ui';
import { Save, CheckCircle, MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export default function AdminSettingsPage() {
  const { success } = useToast();

  const [settings, setSettings] = useState({
    name: RESTAURANT_INFO.name,
    tagline: RESTAURANT_INFO.tagline,
    phone: RESTAURANT_INFO.phone,
    whatsapp: RESTAURANT_INFO.whatsapp,
    address: RESTAURANT_INFO.address,
    instagram: RESTAURANT_INFO.instagram,
    hours: RESTAURANT_INFO.openingHoursDisplay,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    success('Restaurant settings saved successfully!');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="font-heading text-3xl font-bold text-[#F7F5F0]">
          Restaurant Settings
        </h1>
        <p className="text-xs text-[#A8A8A8] mt-1">
          Update the restaurant name, phone, WhatsApp, location and operating hours. Changes reflect across the public website.
        </p>
      </div>

      <form onSubmit={handleSave} className="p-8 rounded-2xl bg-[#181818] border border-[#262626] space-y-6 shadow-xl">
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-bold text-[#F7F5F0]">
            Brand Identity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Restaurant Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Tagline
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-[#242424]">
          <h3 className="font-heading text-lg font-bold text-[#F7F5F0]">
            Contact Channels
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Display Phone
              </label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                WhatsApp Number (Raw with Country Code)
              </label>
              <input
                type="text"
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Instagram Profile URL
            </label>
            <input
              type="text"
              value={settings.instagram}
              onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-[#242424]">
          <h3 className="font-heading text-lg font-bold text-[#F7F5F0]">
            Location & Hours
          </h3>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Address
            </label>
            <textarea
              rows={2}
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Operating Hours Display
            </label>
            <input
              type="text"
              value={settings.hours}
              onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#242424]">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all cursor-pointer shadow-lg shadow-[#C8A66A]/20"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
