const { buildSchema } = require("graphql");

module.exports = buildSchema(
  `
    type Product {
        _id:ID
        title:String
        desciption:String
        price:String
        category:String
    }

    input ProductInputs {
        title:String!
        desciption:String!
        price:String!
        category:String!
    }

    type RootQuery {
        Product : Product
    }
    
    type RootMutation {
        createProduct(productInputs : ProductInputs) : Product
    }

    schema {
        query: RootQuery
        mutation : RootMutation
    }

  `
);
