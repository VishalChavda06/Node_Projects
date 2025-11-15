# Node Projects

A collection of Node.js projects showcasing various web development concepts, APIs, and full-stack applications.

## 📁 Projects Overview

### 1. **Admin-Panel**
A full-stack admin panel application with React frontend and Node.js backend.

- **Frontend**: React.js with Vite, Tailwind CSS, React Router
- **Backend**: Node.js with Express.js, MongoDB
- **Features**: 
  - User authentication and authorization
  - Dashboard with statistics
  - User management
  - Product management
  - Order management
  - Settings page
- **Admin Credentials**: 
  - Email: `admin@admin.com`
  - Password: `admin123`

### 2. **Blog Management System**
A complete blog management system built with Node.js and Express.

- **Stack**: Node.js, Express.js, MongoDB (Mongoose)
- **Features**:
  - User authentication (signup/login)
  - Create, read, update, delete blog posts
  - Comment system
  - User dashboard
- **Frontend**: HTML, CSS, JavaScript (vanilla)

### 3. **Blog_management_with_login**
An enhanced version of the blog management system with separated frontend and backend.

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js with Vite
- **Features**: 
  - Complete authentication system
  - Blog post CRUD operations
  - Comment functionality
  - Modern React UI

### 4. **Movie Project**
A RESTful API for managing movies with authentication and comprehensive testing.

- **Stack**: Node.js, Express.js, MongoDB (Mongoose)
- **Features**:
  - User authentication (signup/login)
  - Movie CRUD operations
  - Movie ratings system
  - Comments on movies
  - Movie filtering (by title, category, release date, addedBy)
  - Admin-only delete functionality
- **Testing**: Cypress E2E tests
- **Port**: Runs on port 8090
- **Structure**: MVC architecture

### 5. **Book Store Details**
A simple Express.js application for managing book store data.

- **Stack**: Node.js, Express.js
- **Features**:
  - Book catalog with details (title, author, genre, year, price)
  - Member management system
  - Sample data for books and members
- **Port**: 3000

### 6. **Custom Server**
A basic HTTP server built using Node.js core modules.

- **Stack**: Node.js native `http` module, File System (`fs`)
- **Features**:
  - Custom HTTP server
  - Route handling for `/`, `/home`, `/about`, `/index`
  - HTML file serving
- **Port**: 3000

### 7. **HTML to Node.js**
A simple Express.js application demonstrating HTML page routing.

- **Stack**: Node.js, Express.js
- **Features**:
  - Multiple route handling (`/`, `/home`, `/about`)
  - HTML file serving from Pages directory
  - URL-encoded form data support
- **Port**: 8990

### 8. **Make API Project**
A full-stack project with separate backend and frontend for API development.

- **Backend**: Node.js, Express.js
- **Frontend**: React.js with Vite
- **Structure**: Organized with database, models, and routes folders
- **Features**: API endpoints with frontend integration

### 9. **To-Do List**
A task management application using EJS templating engine.

- **Stack**: Node.js, Express.js, EJS
- **Features**:
  - Create, read, update, delete todos
  - EJS template rendering
  - Express routing
- **Dependencies**: Express, EJS, dotenv, nodemon

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for projects using MongoDB)

### Installation

Each project has its own `package.json`. Navigate to the project directory and install dependencies:

```bash
cd [project-name]
npm install
```

### Running Projects

Most projects can be started with:

```bash
npm start
# or
npm run dev
# or
node Index.js
```

For frontend projects (React/Vite):
```bash
npm run dev
```

## 🛠️ Technologies Used

- **Runtime**: Node.js
- **Frameworks**: Express.js
- **Frontend**: React.js, HTML/CSS/JavaScript, EJS
- **Database**: MongoDB (Mongoose)
- **Build Tools**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Cypress

## 📝 Notes

- Each project is independent with its own dependencies
- Some projects use environment variables (`.env` files) - make sure to configure them
- MongoDB connection strings may need to be configured in `config/db.js` files
- Check individual project directories for specific setup instructions

## 📦 Project Structure

```
Node_Projects/
├── Admin-Panel/
│   ├── Frontend/
│   └── Backend/
├── Blog Management System/
├── Blog_management_with_login/
│   ├── Frontend/
│   └── Backend/
├── book_store_details/
├── custom_server/
├── html_to_nodejs/
├── Make_api_project/
│   ├── Frontend/
│   └── Backend/
├── movie projeact/
│   ├── movie/
│   └── test/
└── to-do-list/
```

## 🤝 Contributing

Feel free to explore, learn, and contribute to any of these projects!

## 📄 License

This repository contains multiple projects for learning and development purposes.

---

**Created by**: VishalChavda06  
**Repository**: [Node_Projects](https://github.com/VishalChavda06/Node_Projects)

