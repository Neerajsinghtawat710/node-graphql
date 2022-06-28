const mongoose = require('mongoose');

const URI = process.env.URI

const db = mongoose.connect(URI, {

}).then(
    console.info("Connected..")
).catch((err) => {
    console.error(err.message)
    process.exit(1)
});

module.exports = db
