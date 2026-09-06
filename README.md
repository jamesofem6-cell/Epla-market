# Epla — Starter Project

This is a minimal, deployable Next.js + Prisma project for Epla, set up so it
can go live via GitHub's website and Vercel with no terminal required.

## What's in here

- `prisma/schema.prisma` — the full data model (users, wallet, ledger, escrow,
  orders, shops, etc.)
- `app/` — the Next.js pages (currently just a homepage + a health-check API)
- `lib/prisma.js` — shared database connection helper
- `.env.example` — template for the environment variables you'll set in Vercel

## Steps to go live (all via web browser, phone or desktop)

1. **Create a Postgres database**
   - Sign up at neon.tech (or supabase.com) — free tier is enough to start
   - Create a new project/database
   - Copy the connection string it gives you (starts with `postgresql://`)

2. **Upload this project to GitHub**
   - Create a GitHub account if you don't have one
   - Create a new repository (e.g. `epla`)
   - Use "Add file -> Upload files" and upload every file/folder in this
     project, keeping the folder structure intact (e.g. `prisma/schema.prisma`
     must stay inside a `prisma` folder, not at the top level)
   - Do NOT upload a real `.env` file — only `.env.example` should go to
     GitHub

3. **Connect Vercel**
   - Sign up at vercel.com, choose "Import Project"
   - Select the GitHub repo you just created
   - Vercel will detect it's a Next.js project automatically

4. **Set environment variables in Vercel**
   - In the project's Settings -> Environment Variables, add:
     - `DATABASE_URL` — the connection string from step 1
     - `PAYSTACK_SECRET_KEY` — from your Paystack dashboard
     - `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` — from your Paystack dashboard

5. **Deploy**
   - Click Deploy. Vercel will run `prisma generate`, `prisma migrate deploy`,
     then build the app — this is what actually creates all the tables in
     your database from `schema.prisma`
   - Once deployed, visit `https://your-project.vercel.app/api/health` — it
     should show `{"status":"ok","database":"connected"}` if everything is
     wired up correctly

## What's still missing

This starter only proves the plumbing works (app -> database connection). It
does not yet include the checkout flow, Paystack payment integration, or
escrow release logic — those come next.
