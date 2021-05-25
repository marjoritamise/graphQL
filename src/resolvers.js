const { models } = require("./db");
module.exports = {
    Query: {
        movies: () => models.Movie.findAll(),
        getMovieByName: (_, args) => models.Movie.findOne(args),
    },
};
