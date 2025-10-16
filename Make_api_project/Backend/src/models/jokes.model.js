import mongoose from 'mongoose'

const jokesSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
})

const Jokes = mongoose.model('Jokes', jokesSchema)

export default Jokes