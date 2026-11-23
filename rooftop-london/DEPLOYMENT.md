# Production Deployment Guide: Rooftop London

This guide walks you through deploying the **ROOFTOP LONDON CAFE & RESTAURANT** website to **Vercel** with **Supabase**.

---

## Step 1: Push Code to GitHub

1. Initialize a git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production website for Rooftop London"
   ```
2. Create a new GitHub repository (e.g. `rooftop-london`) and push:
   ```bash
   git remote add origin https://github.com/cloudredr/london-rooftop.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Supabase Production Setup

1. Create a new project on [Supabase](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase project dashboard.
3. Open `supabase/migrations/001_initial_schema.sql` from this codebase and execute it.
4. Go to **Project Settings → API** to copy:
   - Project URL (`NEXT_PUBLIC_SUPABASE_URL`)
   - Anon Public API Key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - Service Role Secret (`SUPABASE_SERVICE_ROLE_KEY`)

---

## Step 3: Deploy to Vercel

1. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
2. Import the `rooftop-london` repository.
3. Select **Framework Preset:** Next.js.
4. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_RESTAURANT_PHONE` = `+91 99384 85755`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `919938485755`
5. Click **"Deploy"**.

---

## Step 4: Custom Domain Connection

1. In Vercel, go to **Project Settings → Domains**.
2. Add your custom domain (e.g. `rooftoplondon.com` or `www.rooftoplondon.com`).
3. Add the DNS records (A Record or CNAME) in your domain registrar (GoDaddy, Namecheap, Hostinger, etc.):
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`
4. SSL certification is automatically provisioned by Vercel.

---

## Step 5: Post-Launch Owner Handover

1. Provide the restaurant owner with the URL: `https://rooftoplondon.com/admin`.
2. Ensure the owner confirms:
   - Live food item prices and availability.
   - Operating hours for weekdays and weekends.
   - High-resolution photographs of the actual rooftop and indoor dining tables.
