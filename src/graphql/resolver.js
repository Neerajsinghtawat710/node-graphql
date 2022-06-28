const Product = require("../model/product");

module.exports = {
  createProduct: async ({ productInputs }) => {
    const user = await new Product({
      title: productInputs.title,
      desciption: productInputs.desciption,
      price: productInputs.price,
      category: productInputs.category,
    });

    const newUser = await user.save();
    return { newUser, id: String(newUser.id) };
  },

  // query
  Product: async () => {
    const product = await Product.find();
    return {...product};
  },
};
