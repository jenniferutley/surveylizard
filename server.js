const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const routes = require("./routes/api")

const app = express()
const PORT = process.env.PORT || 8080
const MONGODB_URI = "mongodb+srv://User:M6P4nH7D7QCitVWe@cluster.2a28b.mongodb.net/surveylizard?retryWrites=true&w=majority"


mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,})

mongoose.connection.on("connected", () => {
  console.log("MongoDB database connection established successfully.")
})

app.use(express.json()) //parse every json
app.use(express.urlencoded({extended: false})) //parse every url, set to true if deeply nested object


app.use(morgan("tiny"))
app.use("/surveys", routes)

//production = running on Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`))