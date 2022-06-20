const mongoose = require("mongoose")

const DB_URI = process.env.DB_URI

const db = mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.info(`connected to the database`)
}).catch((err) => {
    console.error(err)
    process.exit(1)
})