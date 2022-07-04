const {gql} = require('apollo-server');
// const casual = require('casual');

 const typeDefs = gql `
    type User {
        id: ID!
        name: String!
        address: String!
        city: String!
        email: String!
        phoneNumber: String! 
    }
    type Query {
        users : [User!]!
    }
    
`
module.exports = {typeDefs};
// input CreateUsers {
//     setUserCount: number!
// }