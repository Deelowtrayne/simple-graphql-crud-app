const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const customers = [
    {id: '1', name: 'Luvuyo', email: 'luvuyo@steadfastweb.co.za', age: 25},
    {id: '2', name: 'Deelow', email: 'deelow@steadfastweb.co.za', age: 29},
    {id: '3', name: 'Developer', email: 'developer@steadfastweb.co.za', age: 35},
    {id: '4', name: 'Tshepo', email: 'tshepo@steadfastweb.co.za', age: 20}
];

// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt},
    }),
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                for (let i = 0; i < customers.length; i++) {
                    if (customers[i].id === args.id) {
                        return customers[i];
                    }
                }
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args) {
                return customers;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});