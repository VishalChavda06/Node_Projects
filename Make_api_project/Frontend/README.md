# Frontend - API Data Dashboard

A modern React.js frontend application that fetches and displays data from backend APIs using Tailwind CSS for styling.

## 📋 Overview

This frontend application displays data from three different APIs:
- **Users API** - Displays user information (ID, Name, Email, Age, City, Role)
- **Products API** - Displays product information (ID, Name, Category, Price, Stock, Rating)
- **Quotes API** - Displays inspirational quotes (ID, Quote, Author, Category)

## 🛠️ Technology Stack

- **React 19.1.1** - Modern React library for building user interfaces
- **Vite 7.1.7** - Next-generation frontend build tool
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **Axios 1.12.2** - HTTP client for making API requests
- **ESLint** - Code linting and quality assurance

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── UsersTable.jsx      # Users API component
│   │   ├── ProductsTable.jsx   # Products API component
│   │   └── QuotesTable.jsx     # Quotes API component
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Tailwind CSS import
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and Tailwind import
├── public/                      # Static assets
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🔌 API Configuration

The frontend connects to the backend API at `http://localhost:3000/api` by default.

### API Endpoints Used:

- `GET /api/users` - Fetch all users
- `GET /api/products` - Fetch all products
- `GET /api/quotes` - Fetch all quotes

**Note:** Make sure the backend server is running on port 3000 before using the frontend.

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Features

- **Responsive Design** - Works on all screen sizes
- **Modern UI** - Beautiful gradient design with Tailwind CSS
- **Real-time Data Fetching** - Fetches data from backend APIs
- **Error Handling** - Displays user-friendly error messages
- **Loading States** - Shows loading indicators while fetching data
- **Hover Effects** - Smooth animations and transitions
- **Full-width Layout** - Cards utilize full screen width

## 📱 Components

### UsersTable Component
- Displays user data in a table format
- Columns: ID, Name, Email, Age, City, Role
- Handles loading and error states

### ProductsTable Component
- Displays product data in a table format
- Columns: ID, Name, Category, Price, Stock, Rating
- Shows price with proper formatting
- Displays star rating

### QuotesTable Component
- Displays inspirational quotes
- Columns: ID, Quote (italic), Author, Category (badge)
- Category displayed as gradient badges

## 🎯 Key Features

1. **Full-width Cards** - Cards use 100% of screen width for better data visibility
2. **Vertical Layout** - All cards stack vertically for optimal viewing
3. **Gradient Design** - Beautiful purple gradient background
4. **Interactive Tables** - Alternating row colors and hover effects
5. **Tailwind CSS** - All styling done with utility classes

## 🔧 Configuration

### Tailwind CSS Setup

Tailwind CSS is configured via `vite.config.js` using `@tailwindcss/vite` plugin. The configuration includes:
- Full-width responsive design
- Custom gradient colors
- Modern card layouts
- Smooth transitions and animations

### Environment Variables

Currently, the API URL is hardcoded. To make it configurable, create a `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

Then update components to use: `import.meta.env.VITE_API_URL`

## 📝 Code Style

- Uses ES6+ JavaScript features
- Functional React components with hooks
- Tailwind utility classes for styling
- Clean and readable code structure

## 🐛 Troubleshooting

### Backend Connection Issues

If data is not loading:
1. Verify backend server is running on port 3000
2. Check browser console for CORS errors
3. Ensure API endpoints are correct
4. Check network tab in browser DevTools

### Port Already in Use

If port 5173 is already in use:
- Vite will automatically try the next available port
- Or specify a different port: `npm run dev -- --port 3001`

## 📄 License

This project is part of a full-stack application demonstration.

## 👥 Contributing

When making changes:
1. Follow the existing code style
2. Use Tailwind CSS for all styling
3. Ensure responsive design works on all devices
4. Test API connections thoroughly

---

**Note:** This frontend requires the backend API server to be running to function properly.
