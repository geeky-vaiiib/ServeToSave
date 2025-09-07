Serve To Save India

Serve To Save India is a food redistribution platform that connects donors with NGOs and communities in need. It leverages AI and modern web technologies to reduce food waste and fight hunger.

Features

Smart Food Donation System: Simple forms for restaurants, hotels, and individuals to donate surplus food

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
