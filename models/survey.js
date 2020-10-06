const mongoose = require("mongoose")
const Schema = mongoose.Schema

const answerSchema = new Schema({
  order: { type: Number, required: false },
  content: { type: String, required: false },
})

const itemSchema = new Schema({
  order: { type: Number, required: false },
  question: { type: String, required: false },
  answers: [answerSchema],
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
  radio: [itemSchema],
  checkbox: [itemSchema],
  text: [itemSchema],
  textArea: [itemSchema],
  likert: [itemSchema]
}, {
  timestamps: true,
})

const Survey = mongoose.model("Survey", surveySchema)

module.exports = Survey