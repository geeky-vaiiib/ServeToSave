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

If you'd like additional sections (detailed API docs, deployment, CI), tell me which ones and I'll add them.
# Serve To Save India 🇮🇳

A modern, comprehensive food redistribution platform that connects food donors with NGOs and communities in need. Built with Next.js 14, featuring a clean design system with light/dark themes and role-based dashboards.

## 🌟 Key Features

- **Smart Food Donation System**: Streamlined donation process for restaurants, corporates, and individuals
- **NGO Request Management**: Efficient food request system for verified NGOs
- **Real-time Matching**: Intelligent matching system based on location, quantity, and urgency
- **Interactive Map**: Live map showing nearby donations and requests with filtering
- **Impact Analytics**: Comprehensive dashboards showing meals served, CO₂ saved, and community impact
- **Role-based Dashboards**: Separate dashboards for Donors, NGOs, and Corporates
- **Modern UI/UX**: Glassmorphism design with light/dark theme support
- **Mobile-First**: Fully responsive design optimized for all devices
- **Secure Authentication**: JWT-based auth with Google OAuth integration

NGO Request Management: Streamlined process for NGOs to request food for their beneficiaries

Real-time Matching: AI-powered system matches donations with requests based on location, quantity, and urgency

Impact Analytics: Dashboards display social and environmental impact metrics

Logistics Integration: Built-in logistics options for food pickup and delivery

User Authentication: Secure JWT-based authentication with role-based access control

File Uploads: Support for food images and safety certificates

Geographic Search: Location-based matching and mapping features

Mobile Responsive: Optimized for all device sizes

Tech Stack
Frontend

Next.js 14 (App Router)

React 18 with TypeScript

Tailwind CSS for styling

Radix UI for components

Axios for API communication

Backend

Node.js with Express.js

MongoDB with Mongoose ODM

JWT for authentication

Multer for file uploads

Express Validator for input validation

Helmet for security headers

CORS for cross-origin requests

Prerequisites

Node.js 18+ and npm

MongoDB Atlas account (or local MongoDB)

Git

Local Development Setup
1. Clone the Repository
git clone <repository-url>
cd serve-to-save-india

2. Backend Setup
cd Backend
npm install
cp .env.example .env


Edit .env with your configuration:

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/serve-to-save
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRES_IN=24h
JWT_REFRESH_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password


Start the backend server:

npm run dev


The backend runs on http://localhost:5000.

3. Frontend Setup
cd ..
npm install
cp .env.example .env.local


Edit .env.local with your configuration:

NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000


Start the frontend server:

npm run dev


The frontend runs on http://localhost:3000.

MongoDB Atlas Setup

Create a free MongoDB Atlas account and cluster.

Add a new database user with read and write permissions.

Configure network access (0.0.0.0/0 for development, IP-restricted for production).

Copy the connection string and update it in your .env.

API Documentation
Authentication

POST /api/auth/signup — User registration

POST /api/auth/login — User login

GET /api/auth/me — Get current user

PUT /api/auth/profile — Update user profile

Donations

POST /api/donations — Create a donation

GET /api/donations — Get all donations (with filters)

GET /api/donations/:id — Get specific donation

GET /api/donations/nearby — Get nearby donations

PATCH /api/donations/:id — Update donation

DELETE /api/donations/:id — Cancel donation

Requests

POST /api/requests — Create a request

GET /api/requests — Get all requests (with filters)

GET /api/requests/:id — Get specific request

GET /api/requests/urgent — Get urgent requests

PATCH /api/requests/:id — Update request

Impact

GET /api/impact/summary — Get overall impact summary

GET /api/impact/charts — Get chart data

GET /api/impact/city-wise — Get city-wise impact

Testing

Backend tests:

cd Backend
npm test


Frontend tests:

npm test

Contributing

Fork the repository

Create a feature branch: git checkout -b feature/your-feature

Commit changes: git commit -m "Add your feature"

Push branch: git push origin feature/your-feature

Open a Pull Request
