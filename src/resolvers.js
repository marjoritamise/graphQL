const { models } = require("./db");
module.exports = {
    Query: {
        movies: () => models.Movie.findAll(),
        getMovieByName: (_, args) => models.Movie.findOne(args),
        users: () => models.User.findAll(),
        getUserByName: (_, args) => models.User.findOne(args),
    },
    Mutation: {
        createUser: async (_, { data }) => models.User.create(data),
    },
};
