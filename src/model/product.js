const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
  },
  desciption: {
    type: String,
  },
  price: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Porduct = new model("Product", productSchema);

module.exports = Porduct;
