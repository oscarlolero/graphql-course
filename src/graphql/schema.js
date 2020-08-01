import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
    type Query {
        getAllCourses: [Course]
    }
    type Course {
        id: ID
        title: String
        topic: String
    }
`;
export default makeExecutableSchema({
    typeDefs,
    resolvers
});


