import express from 'express'
import cors from 'cors'
import usersRoutes from './src/routes/users.routes.js'
import productsRoutes from './src/routes/products.routes.js'
import quotesRoutes from './src/routes/quotes.routes.js'

// MiddleWares
const app = express()

app.use(cors({
  origin: '*',
  credentials: true
}))

app.use(express.json())

// Routes
app.use('/api', usersRoutes)
app.use('/api', productsRoutes)
app.use('/api', quotesRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running successfully!' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})