import db from '../data';
export const resolvers = {
    Query: {
        getAllCourses: () => {
            return db.courses;
        }
    }
};