'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SAMPLE_MENU_ITEMS, SAMPLE_MENU_CATEGORIES } from '@/lib/constants';
import { MenuItem, FoodType } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Badge, Modal, useToast } from '@/components/ui';
import {
  Plus,
  Search,
  Trash2,
  Edit,
  Sparkles,
  Check,
  X,
  AlertTriangle,
} from 'lucide-react';

export default function AdminMenuPage() {
  const { success, error } = useToast();
  const [items, setItems] = useState<MenuItem[]>(SAMPLE_MENU_ITEMS);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(250);
  const [category, setCategory] = useState('starters');
  const [foodType, setFoodType] = useState<FoodType>('veg');
  const [isAvailable, setIsAvailable] = useState(true);
  const [isFeatured, setIsFeatured] = useState(false);

  const openAddModal = () => {
    setEditingItem(null);
    setName('');
    setDescription('');
    setPrice(250);
    setCategory('starters');
    setFoodType('veg');
    setIsAvailable(true);
    setIsFeatured(false);
    setIsModalOpen(true);
  };

  const openEditModal = (item: MenuItem) => {
    setEditingItem(item);
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setCategory(item.category);
    setFoodType(item.foodType);
    setIsAvailable(item.isAvailable);
    setIsFeatured(item.isFeatured);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      error('Dish name is required');
      return;
    }

    if (editingItem) {
      // Edit
      setItems((prev) =>
        prev.map((i) =>
          i.id === editingItem.id
            ? {
                ...i,
                name,
                description,
                price: Number(price),
                category,
                foodType,
                isAvailable,
                isFeatured,
              }
            : i
        )
      );
      success(`Updated "${name}" successfully!`);
    } else {
      // Add
      const newItem: MenuItem = {
        id: `custom-${Date.now()}`,
        name,
        description,
        price: Number(price),
        category,
        foodType,
        isAvailable,
        isFeatured,
        image: '/images/food-1.svg',
      };
      setItems([newItem, ...items]);
      success(`Added "${name}" to digital menu!`);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string, itemName: string) => {
    if (confirm(`Are you sure you want to delete "${itemName}"?`)) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      success(`Deleted "${itemName}" from menu.`);
    }
  };

  const toggleAvailability = (id: string) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const nextState = !i.isAvailable;
          success(`${i.name} is now ${nextState ? 'Available' : 'Unavailable'}`);
          return { ...i, isAvailable: nextState };
        }
        return i;
      })
    );
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#F7F5F0]">
            Menu Management
          </h1>
          <p className="text-xs text-[#A8A8A8] mt-1">
            Add, update dishes, modify live prices, and control availability without editing code.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all cursor-pointer shadow-lg shadow-[#C8A66A]/20"
        >
          <Plus className="w-4 h-4" />
          Add New Dish
        </button>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="p-4 rounded-2xl bg-[#181818] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A66A]" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141414] border border-[#333333] text-xs text-[#F7F5F0] placeholder-[#777777] focus:outline-none focus:border-[#C8A66A]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {SAMPLE_MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#C8A66A] text-[#151515] font-semibold'
                  : 'bg-[#222222] text-[#A8A8A8] hover:text-[#F7F5F0]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Table / Grid */}
      <div className="rounded-2xl bg-[#181818] border border-[#262626] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#A8A8A8]">
            <thead className="bg-[#141414] text-xs uppercase tracking-wider text-[#C8A66A] border-b border-[#262626]">
              <tr>
                <th className="p-4">Dish</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Type</th>
                <th className="p-4">Availability</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222222]">
              {filteredItems.map((dish) => (
                <tr key={dish.id} className="hover:bg-[#1C1C1C] transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#242424] shrink-0">
                      <Image
                        src={dish.image || '/images/food-1.svg'}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#F7F5F0] flex items-center gap-1.5">
                        {dish.name}
                        {dish.isFeatured && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#C8A66A]/20 text-[#C8A66A]">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#777777] line-clamp-1 max-w-xs">
                        {dish.description}
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-xs capitalize text-[#D1CCC4]">
                    {dish.category}
                  </td>

                  <td className="p-4 font-bold text-[#F7F5F0]">
                    {formatPrice(dish.price)}
                  </td>

                  <td className="p-4">
                    <Badge variant={dish.foodType === 'veg' ? 'veg' : 'nonveg'} />
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => toggleAvailability(dish.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                        dish.isAvailable
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {dish.isAvailable ? 'In Stock' : 'Out of Stock'}
                    </button>
                  </td>

                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => openEditModal(dish)}
                      className="p-1.5 rounded-lg text-[#A8A8A8] hover:text-[#C8A66A] hover:bg-[#222222] transition-colors"
                      title="Edit dish"
                    >
                      <Edit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(dish.id, dish.name)}
                      className="p-1.5 rounded-lg text-[#A8A8A8] hover:text-rose-400 hover:bg-[#222222] transition-colors"
                      title="Delete dish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Dish Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Dish Details' : 'Add New Dish to Menu'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Dish Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
              Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Price (₹) *
              </label>
              <input
                type="number"
                required
                min={1}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#151515] border border-[#333333] text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C8A66A]"
              >
                {SAMPLE_MENU_CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Food Classification
              </label>
              <div className="flex items-center gap-4 text-xs text-[#F7F5F0]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="foodType"
                    checked={foodType === 'veg'}
                    onChange={() => setFoodType('veg')}
                  />
                  <span>Vegetarian</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="foodType"
                    checked={foodType === 'non-veg'}
                    onChange={() => setFoodType('non-veg')}
                  />
                  <span>Non-Veg</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A66A] mb-1">
                Featured on Homepage?
              </label>
              <input
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#262626]">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2.5 rounded-xl text-xs uppercase font-semibold bg-[#222222] text-[#F7F5F0]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs uppercase font-semibold bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577]"
            >
              Save Dish
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
