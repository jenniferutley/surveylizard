const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = new Schema({
  type: { type: String, required: false },
  order: { type: Number, required: false },
  content: { type: String, required: false },
}, {
  timestamps: true,
})

const surveySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3
  },
  description: {
    type: String,
    trim: true,
    minLength: 3
  },
  items: [itemSchema]
}, {
  timestamps: true,
})

const Survey = mongoose.model("Survey", surveySchema)

module.exports = Survey