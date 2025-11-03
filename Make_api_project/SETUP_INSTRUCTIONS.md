# API Data Dashboard Setup Instructions

## Overview
This project creates a Node.js API that fetches data from external APIs (News, Weather, Jokes) and displays it in a beautiful table format on the frontend.

## Backend Setup

1. **Navigate to Backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create .env file in Backend directory:**
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/api_project
   
   # Server Port
   PORT=3000
   
   # API Keys (Get free API keys from the links below)
   NEWS_API_KEY=your_news_api_key_here
   WEATHER_API_KEY=your_weather_api_key_here
   ```

4. **Get API Keys:**
   - **News API**: Visit https://newsapi.org/ and get a free API key
   - **Weather API**: Visit https://openweathermap.org/ and get a free API key
   - **Jokes API**: No API key required (using free JokeAPI)

5. **Update API keys in route files:**
   - Replace `YOUR_NEWS_API_KEY` in `src/routes/news.routes.js`
   - Replace `YOUR_WEATHER_API_KEY` in `src/routes/weather.routes.js`

6. **Start the backend server:**
   ```bash
   npm start
   ```

## Frontend Setup

1. **Navigate to Frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

## Features

### News Table
- Fetches latest news from NewsAPI
- Displays title, description, source, published date, image, and link
- Refresh button to get new news

### Weather Table
- Fetches weather data from OpenWeatherMap API
- City search functionality
- Displays city, temperature, description, and weather icon
- Real-time weather updates

### Jokes Table
- Fetches random jokes from JokeAPI
- Displays joke text, category, and rating
- Refresh button to get new jokes

## API Endpoints

- `GET /api/news` - Get latest news
- `GET /api/weather?city=London` - Get weather for a city
- `GET /api/jokes` - Get random jokes
- `GET /api/health` - Health check

## Technologies Used

### Backend
- Node.js
- Express.js
- Axios (for external API calls)
- MongoDB (with Mongoose)
- CORS

### Frontend
- React
- Vite
- Axios (for API calls)
- CSS3 (with modern styling)

## Notes

- The application uses external APIs that may have rate limits
- Some APIs require free registration to get API keys
- The Jokes API doesn't require an API key
- Make sure MongoDB is running if you want to use the database features
- The frontend runs on port 5173 (Vite default) and backend on port 3000
