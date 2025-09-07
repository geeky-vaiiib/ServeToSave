# Serve To Save India

A comprehensive food redistribution platform that connects food donors with NGOs and communities in need, powered by AI and modern web technologies.

## 🌟 Features

- **Smart Food Donation System**: Easy-to-use forms for restaurants, hotels, and individuals to donate surplus food
- **NGO Request Management**: Streamlined process for NGOs to request food for their beneficiaries
- **Real-time Matching**: AI-powered system to match donations with requests based on location, quantity, and urgency
- **Impact Analytics**: Comprehensive dashboard showing environmental and social impact metrics
- **Logistics Integration**: Built-in logistics options for food pickup and delivery
- **User Authentication**: Secure JWT-based authentication with role-based access control
- **File Upload System**: Support for food images and safety certificates
- **Geographic Search**: Location-based matching and mapping features
- **Mobile Responsive**: Optimized for all devices

## 🛠 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** for components
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Multer** for file uploads
- **Express Validator** for input validation
- **Helmet** for security headers
- **CORS** for cross-origin requests

## 📋 Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB)
- Git

## 🚀 Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd serve-to-save-india
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
nano .env
```

**Required Backend Environment Variables:**

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/serve-to-save

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-refresh-secret-here
JWT_EXPIRES_IN=24h
JWT_REFRESH_EXPIRES_IN=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:3000

# File Upload Configuration
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880

# Email Configuration (for notifications)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# API Keys (Optional)
OPENAI_API_KEY=your-openai-api-key
```

```bash
# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd .

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local with your configuration
nano .env.local
```

**Required Frontend Environment Variables:**

```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

```bash
# Start the frontend development server
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🗄 MongoDB Atlas Setup

### 1. Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (M0 Sandbox is free)

### 2. Configure Database Access

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a user with "Read and write to any database" permissions
4. Note down the username and password

### 3. Configure Network Access

1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. For development, you can add `0.0.0.0/0` (allow access from anywhere)
4. For production, add only your server's IP address

### 4. Get Connection String

1. Go to "Clusters" and click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Replace `<dbname>` with your database name (e.g., `serve-to-save`)

## 🚀 Deployment

### Backend Deployment (Render/Heroku)

#### Using Render:

1. Create account on [Render](https://render.com)
2. Connect your GitHub repository
3. Create a new "Web Service"
4. Configure:
   - **Build Command**: `cd Backend && npm install`
   - **Start Command**: `cd Backend && npm start`
   - **Environment**: Add all environment variables from `.env.example`

#### Using Heroku:

```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret
# ... add all other environment variables

# Deploy
git subtree push --prefix Backend heroku main
```

### Frontend Deployment (Vercel)

#### Using Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`
4. Set environment variables in Vercel dashboard
5. Update `NEXT_PUBLIC_API_URL` to your deployed backend URL

#### Using Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

## 📱 API Documentation

### Authentication Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### Donation Endpoints

- `POST /api/donations` - Create donation
- `GET /api/donations` - Get all donations (with filters)
- `GET /api/donations/:id` - Get specific donation
- `GET /api/donations/nearby` - Get nearby donations
- `PATCH /api/donations/:id` - Update donation
- `DELETE /api/donations/:id` - Cancel donation

### Request Endpoints

- `POST /api/requests` - Create food request
- `GET /api/requests` - Get all requests (with filters)
- `GET /api/requests/:id` - Get specific request
- `GET /api/requests/urgent` - Get urgent requests
- `PATCH /api/requests/:id` - Update request

### Impact Endpoints

- `GET /api/impact/summary` - Get impact summary
- `GET /api/impact/charts` - Get chart data
- `GET /api/impact/city-wise` - Get city-wise impact

## 🧪 Testing

```bash
# Backend tests
cd Backend
npm test

# Frontend tests
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed description
3. Contact support at support@servetosaveindia.org

## 🙏 Acknowledgments

- Thanks to all contributors and supporters
- Special thanks to NGO partners across India
- Built with ❤️ for a hunger-free India
