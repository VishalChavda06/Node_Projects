# Backend - RESTful API Server

A Node.js and Express.js backend server that provides RESTful APIs with fake data for users, products, and quotes.

## 📋 Overview

This backend server provides three main API endpoints that return fake/mock data:
- **Users API** - Returns user information
- **Products API** - Returns product information  
- **Quotes API** - Returns inspirational quotes

The server is built with Express.js and uses CORS to allow frontend connections.

## 🛠️ Technology Stack

- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Fast, unopinionated web framework
- **CORS 2.8.5** - Cross-Origin Resource Sharing middleware
- **Nodemon 3.1.10** - Development server with auto-restart

## 📁 Project Structure

```
Backend/
├── src/
│   └── routes/
│       ├── users.routes.js      # Users API routes
│       ├── products.routes.js   # Products API routes
│       └── quotes.routes.js     # Quotes API routes
├── Server.js                    # Main server file
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** package manager

### Installation

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

### Running the Server

Start the development server:
```bash
npm start
```

The server will start on `http://localhost:3000` by default.

**Note:** The server uses `nodemon` which automatically restarts when code changes are detected.

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Available Endpoints

#### 1. Users API

**Get All Users**
```
GET /api/users
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 28,
      "city": "New York",
      "role": "Developer"
    },
    ...
  ]
}
```

**Get Single User**
```
GET /api/users/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 28,
    "city": "New York",
    "role": "Developer"
  }
}
```

#### 2. Products API

**Get All Products**
```
GET /api/products
```

**Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "id": 1,
      "name": "Laptop Pro",
      "category": "Electronics",
      "price": 1299.99,
      "stock": 15,
      "rating": 4.8
    },
    ...
  ]
}
```

**Get Single Product**
```
GET /api/products/:id
```

#### 3. Quotes API

**Get All Quotes**
```
GET /api/quotes
```

**Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "id": 1,
      "text": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs",
      "category": "Motivation"
    },
    ...
  ]
}
```

**Get Single Quote**
```
GET /api/quotes/:id
```

**Get Random Quote**
```
GET /api/quotes/random
```

#### 4. Health Check

**Server Health**
```
GET /api/health
```

**Response:**
```json
{
  "message": "API is running successfully!"
}
```

## 📦 Available Scripts

- `npm start` - Start the server with nodemon (auto-restart on changes)

## ⚙️ Configuration

### Port Configuration

The server runs on port 3000 by default. You can change it by setting the `PORT` environment variable:

```bash
PORT=3001 npm start
```

Or create a `.env` file:
```env
PORT=3000
```

### CORS Configuration

CORS is enabled for all origins (`*`). This allows the frontend (running on a different port) to access the API.

**Current CORS settings:**
- Origin: `*` (allows all origins)
- Credentials: `true`

## 🗄️ Data Structure

### Users Data
Each user contains:
- `id` (number) - Unique identifier
- `name` (string) - Full name
- `email` (string) - Email address
- `age` (number) - Age in years
- `city` (string) - City name
- `role` (string) - Job role

### Products Data
Each product contains:
- `id` (number) - Unique identifier
- `name` (string) - Product name
- `category` (string) - Product category
- `price` (number) - Price in USD
- `stock` (number) - Available stock
- `rating` (number) - Rating out of 5

### Quotes Data
Each quote contains:
- `id` (number) - Unique identifier
- `text` (string) - Quote text
- `author` (string) - Quote author
- `category` (string) - Quote category

## 🔒 Error Handling

All endpoints return consistent error responses:

**404 Not Found:**
```json
{
  "success": false,
  "message": "Resource not found"
}
```

## 🌐 API Usage Examples

### Using cURL

**Get all users:**
```bash
curl http://localhost:3000/api/users
```

**Get a specific user:**
```bash
curl http://localhost:3000/api/users/1
```

**Get all products:**
```bash
curl http://localhost:3000/api/products
```

**Get a random quote:**
```bash
curl http://localhost:3000/api/quotes/random
```

### Using JavaScript (Fetch API)

```javascript
// Get all users
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:
1. Stop the other service using port 3000
2. Or change the port using `PORT` environment variable

### CORS Issues

If you encounter CORS errors:
- Verify CORS middleware is properly configured in `Server.js`
- Check that the frontend URL is allowed

### Server Not Starting

1. Check if Node.js is installed: `node --version`
2. Verify all dependencies are installed: `npm install`
3. Check for syntax errors in `Server.js`
4. Look at the console for specific error messages

## 📝 Code Structure

### Route Files

Each route file (`users.routes.js`, `products.routes.js`, `quotes.routes.js`) contains:
- Fake data array
- Route handlers for GET requests
- Error handling for 404 cases

### Server File

`Server.js` contains:
- Express app setup
- CORS middleware configuration
- Route mounting
- Server startup

## 🔄 Development

### Adding New Endpoints

1. Create a new route file in `src/routes/`
2. Define your routes and handlers
3. Import and mount in `Server.js`

### Modifying Data

Edit the data arrays directly in the route files:
- `src/routes/users.routes.js` - User data
- `src/routes/products.routes.js` - Product data
- `src/routes/quotes.routes.js` - Quote data

## 📄 License

This project is part of a full-stack application demonstration.

## 👥 Contributing

When making changes:
1. Follow Express.js best practices
2. Maintain consistent API response format
3. Add proper error handling
4. Test all endpoints after modifications

---

**Note:** This backend provides mock/fake data and is designed for development and demonstration purposes.

