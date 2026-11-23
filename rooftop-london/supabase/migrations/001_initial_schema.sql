-- ============================================================================
-- Supabase PostgreSQL Initial Migration Schema for Rooftop London Cafe
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Menu Categories
CREATE TABLE IF NOT EXISTS menu_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Menu Items
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_id UUID REFERENCES menu_categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  food_type TEXT CHECK (food_type IN ('veg', 'non-veg')) NOT NULL DEFAULT 'veg',
  is_available BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  is_spicy BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Reservations
CREATE TABLE IF NOT EXISTS reservations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  reference_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  reservation_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  guest_count INT NOT NULL DEFAULT 2,
  seating_preference TEXT DEFAULT 'No Preference',
  special_requests TEXT,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'rejected', 'completed')) DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Event Enquiries
CREATE TABLE IF NOT EXISTS event_enquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  reference_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  guest_count INT NOT NULL DEFAULT 10,
  preferred_time TEXT,
  requirements TEXT,
  status TEXT CHECK (status IN ('pending', 'reviewed', 'confirmed', 'completed', 'cancelled')) DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Contact Messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Gallery Images
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  image_url TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT CHECK (category IN ('Rooftop', 'Interiors', 'Food', 'Celebrations', 'Events', 'All')) DEFAULT 'Rooftop',
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Restaurant Settings
CREATE TABLE IF NOT EXISTS restaurant_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── Indexes ────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_menu_items_cat ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_avail ON menu_items(is_available);
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations(reservation_date);
CREATE INDEX IF NOT EXISTS idx_reservations_status ON reservations(status);
CREATE INDEX IF NOT EXISTS idx_events_date ON event_enquiries(event_date);
CREATE INDEX IF NOT EXISTS idx_gallery_cat ON gallery_images(category);

-- ── Row Level Security (RLS) ───────────────────────────────────────────────
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_settings ENABLE ROW LEVEL SECURITY;

-- Public can read active categories, available items, and active gallery photos
CREATE POLICY "Public can view active categories" ON menu_categories FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view available menu items" ON menu_items FOR SELECT USING (is_available = true);
CREATE POLICY "Public can view active gallery images" ON gallery_images FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view settings" ON restaurant_settings FOR SELECT USING (true);

-- Public can submit reservations, events, and contact notes
CREATE POLICY "Public can insert reservation requests" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert event enquiries" ON event_enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert contact messages" ON contact_messages FOR INSERT WITH CHECK (true);

-- Authenticated admins have full CRUD permissions on all tables
CREATE POLICY "Admins full access menu_categories" ON menu_categories FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins full access menu_items" ON menu_items FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins full access reservations" ON reservations FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins full access event_enquiries" ON event_enquiries FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins full access contact_messages" ON contact_messages FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins full access gallery_images" ON gallery_images FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins full access restaurant_settings" ON restaurant_settings FOR ALL TO authenticated USING (true);

-- ── Seed Initial Categories ────────────────────────────────────────────────
INSERT INTO menu_categories (name, slug, description, display_order) VALUES
('Starters', 'starters', 'Crispy, smoky and appetizing bites', 1),
('Indian Cuisine', 'indian', 'Rich gravies and aromatic curries', 2),
('Chinese Cuisine', 'chinese', 'Wok-tossed delicacies and stir-fries', 3),
('Continental Cuisine', 'continental', 'Sizzlers, grills and creamy pastas', 4),
('Main Course', 'main-course', 'Hearty specialty platters', 5),
('Rice & Biryani', 'rice-biryani', 'Fragrant dum biryanis and fried rices', 6),
('Tandoori Breads', 'breads', 'Fresh clay oven breads', 7),
('Desserts', 'desserts', 'Decadent sweet finishes', 8),
('Beverages & Mocktails', 'beverages', 'Chilled coolers and London signatures', 9)
ON CONFLICT (slug) DO NOTHING;
