'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SAMPLE_GALLERY_IMAGES } from '@/lib/constants';
import { GalleryImage } from '@/types';
import { useToast, Modal } from '@/components/ui';
import { Plus, Trash2, Eye, Upload } from 'lucide-react';

export default function AdminGalleryPage() {
  const { success } = useToast();
  const [images, setImages] = useState<GalleryImage[]>(SAMPLE_GALLERY_IMAGES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<GalleryImage['category']>('Rooftop');
  const [src, setSrc] = useState('/images/rooftop-view.svg');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newImg: GalleryImage = {
      id: `img-${Date.now()}`,
      title: title || 'New Gallery Photo',
      category,
      src,
    };
    setImages([newImg, ...images]);
    success('Added new photograph to public gallery!');
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this photograph from the gallery?')) {
      setImages((prev) => prev.filter((i) => i.id !== id));
      success('Image removed from gallery.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#F7F5F0]">
            Gallery Management
          </h1>
          <p className="text-xs text-[#A8A8A8] mt-1">
            Upload genuine restaurant photographs to replace preview SVGs.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Photograph
        </button>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="group rounded-2xl bg-[#181818] border border-[#282828] overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div className="relative h-44 w-full bg-[#202020]">
              <Image src={img.src} alt={img.title} fill className="object-cover" />
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <button
                  onClick={() => handleDelete(img.id)}
                  className="p-1.5 rounded-full bg-black/80 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
                  title="Delete image"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8A66A] block">
                {img.category}
              </span>
              <h4 className="font-heading text-sm font-bold text-[#F7F5F0] truncate">
                {img.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Add Image Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Gallery Photograph"
      >
        <form onSubmit={handleAdd} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Photo Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sunset Skyline from Table 12"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            >
              <option value="Rooftop">Rooftop</option>
              <option value="Interiors">Interiors</option>
              <option value="Food">Food</option>
              <option value="Celebrations">Celebrations</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Image URL / File Path
            </label>
            <input
              type="text"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            />
            <p className="text-[11px] text-[#777777] mt-1">
              Connect to Supabase Storage in production to upload raw camera JPEG/PNG files.
            </p>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-[#262626]">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2.5 rounded-xl text-xs uppercase font-semibold bg-[#222222] text-[#F7F5F0]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs uppercase font-semibold bg-[#C8A66A] text-[#151515]"
            >
              Add to Gallery
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
