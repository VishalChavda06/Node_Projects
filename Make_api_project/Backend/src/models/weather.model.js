import mongoose from 'mongoose'

const weatherSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const Weather = mongoose.model('Weather', weatherSchema)

export default Weather