  
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const resultSchema = new Schema({
  survey_id: {
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
  }
}, {
  timestamps: true,
})

const Result = mongoose.model("Result", resultSchema)

module.exports = Result