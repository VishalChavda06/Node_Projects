# Admin Panel

A full-stack admin panel with React frontend and Node.js backend, featuring user authentication, dashboard, and navigation.

## Features

- **Authentication**: Login and Register with JWT tokens
- **Dashboard**: Admin dashboard with navigation
- **Responsive Design**: Mobile-friendly sidebar and navbar
- **Protected Routes**: Secure access to admin pages
- **User Management**: User registration and authentication

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Heroicons
- Context API for state management

## Setup Instructions

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the Backend directory:
```env
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/admin-panel
```

4. Start MongoDB (make sure MongoDB is running on your system)

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

1. Open your browser and go to `http://localhost:5173`
2. Register a new admin account or login with existing credentials
3. Access the admin dashboard with sidebar navigation
4. Navigate between different admin pages (Dashboard, Users, Products, Orders, Settings)

## API Endpoints

### Authentication
- `POST /users/signup` - Register a new user
- `POST /users/login` - Login user
- `GET /users/profile` - Get user profile (protected)

### Health Check
- `GET /health` - Server health status

## Project Structure

```
Admin-Panel/
├── Backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── UserController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── index.js
│   └── package.json
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AdminLayout.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── contexts/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Users.jsx
    │   │   ├── Products.jsx
    │   │   ├── Orders.jsx
    │   │   └── Settings.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected routes
- Input validation
- CORS configuration

## Development

- Backend uses nodemon for auto-restart during development
- Frontend uses Vite for fast development and hot reload
- Both frontend and backend support hot reloading
