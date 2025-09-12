# Serve To Save India 🇮🇳

A food-redistribution platform connecting donors (restaurants, corporates, individuals) with NGOs and communities in need.

This repository contains a Next.js frontend (App Router + TypeScript) and an Express backend (Node + MongoDB).

## Quickstart (local)

Prerequisites:
- Node.js 18+ and npm (or pnpm)
- MongoDB (Atlas or local)

1) Clone

```bash
git clone https://github.com/geeky-vaiiib/ServeToSave.git
cd ServeToSave
```

2) Backend

```bash
cd Backend
npm install
cp .env.example .env
# edit .env and set MONGODB_URI and other secrets
npm run dev
```

Backend default: http://localhost:5000

3) Frontend

From repo root:

```bash
npm install
cp .env.example .env.local
# edit .env.local (NEXT_PUBLIC_API_URL=http://localhost:5000/api)
npm run dev
```

Frontend default: http://localhost:3000

## Important env vars (examples)

Backend `.env` (Backend/.env):
- MONGODB_URI=
- JWT_SECRET=
- PORT=5000

Frontend `.env.local`:
- NEXT_PUBLIC_API_URL=http://localhost:5000/api

## Features (high level)

- Donations and requests with location data
- Interactive map (Leaflet)
- Role-based access (Donor / NGO / Admin)
- File uploads for images
- Basic analytics/impact tracking

## Development notes

- The frontend uses Next.js App Router and client/server components. Keep `"use client"` at the top of client files.
- The map component is client-only (React-Leaflet) and is dynamically imported to avoid SSR issues.

## Tests

- Backend: from `Backend/` run `npm test` if tests exist
- Frontend: run `npm test` from the project root if configured

## Contributing

1. Fork
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push and open a PR

## License

See `LICENSE` or choose a license for this project.

---

