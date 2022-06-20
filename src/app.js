const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()


app.use(express.json({ extended: false }));

const userRoute = require("./routes/user")

require("./config/db")

app.use(userRoute)


module.exports = app