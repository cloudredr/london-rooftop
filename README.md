# ROOFTOP LONDON CAFE & RESTAURANT

> **"A Little Taste of London. A Lot of Unforgettable Moments."**  
> Trisulia, Cuttack, Odisha, India

A modern luxury, production-grade website for **Rooftop London Cafe & Restaurant**, engineered with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Supabase integration.

---

## 🌟 Key Highlights

1. **London-Inspired Luxury Design:** Deep charcoal (`#151515`) and warm champagne gold (`#C8A66A`) aesthetic with typography (Playfair Display & Inter).
2. **Interactive Digital Food Menu:** Multi-cuisine categories (Tandoor Starters, Indian, Chinese, Continental, Dum Biryanis, Mocktails), live debounced search, vegetarian / non-veg toggles, and detail view modals with direct WhatsApp inquiry.
3. **Table Reservation System:** Validated reservation request workflow with unique reference numbers (`RLCR-XXXXX`), seating preference (Rooftop vs Indoor Lounge), and WhatsApp sync.
4. **Celebrations & Events Engine:** Specialized booking form for birthdays, anniversaries, corporate reunions, and group gatherings.
5. **Photo Gallery & Lightbox:** Filterable gallery by categories (Rooftop, Interiors, Food, Celebrations) with full-screen keyboard-navigable lightbox.
6. **Owner Admin Dashboard (`/admin`):**
   - **Menu Management:** Add, edit, delete dishes, adjust live prices, and toggle in-stock/out-of-stock.
   - **Reservation Tracking:** Approve, decline, mark completed, and add internal staff notes.
   - **Event Manager:** Review celebration requirements and customer contact details.
   - **Settings Panel:** Update phone numbers, WhatsApp, address, and operating hours dynamically.
7. **Local SEO & Structured Data:** Semantic JSON-LD Restaurant schema, OpenGraph previews, robots.txt, and sitemap targeting Cuttack and Trisulia.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Database:** Supabase PostgreSQL (SQL migrations included)
- **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd rooftop-london
npm install
```

### 2. Configure Environment Variables
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Fill in your Supabase project credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the restaurant website.

---

## 🔐 Admin Dashboard Access

Navigate to: `http://localhost:3000/admin`  
- **Email:** `admin@rooftoplondon.com`
- **Password:** `admin123`

*(These are development credentials. In production, configure Supabase Auth for multi-user role-based access.)*

---

## 🗄️ Database Setup (Supabase)

A complete PostgreSQL schema with Row Level Security (RLS) is provided in `supabase/migrations/001_initial_schema.sql`.

To apply:
1. Log in to [Supabase Console](https://supabase.com).
2. Open the **SQL Editor**.
3. Paste the contents of `supabase/migrations/001_initial_schema.sql` and run.
4. The migration creates tables for:
   - `menu_categories` & `menu_items`
   - `reservations` & `event_enquiries`
   - `contact_messages` & `gallery_images`
   - `restaurant_settings`
