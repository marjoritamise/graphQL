const { gql } = require("apollo-server");

const typeDefs = gql`
    scalar Timestamp

    type Movie {
        id: ID
        createdAt: Timestamp
        name: String
        genre: String
        country: String
        language: String
        money: Float
    }

    type User {
        id: ID
        name: String
    }

    type Awards {
        idMovie: ID
        oscar: Int
    }

    type Query {
        movies: [Movie]
        getMovie(name: String, language: String, money: Float, id: ID): [Movie]
        getAwards(id: ID): Awards
        users: [User]
        getUserByName(name: String): [User]
    }

    input userInput {
        name: String
    }

    enum Genre {
        ACTION
        COMMEDY
        DRAMA
        FANTASY
        HORROR
        MYSTERY
        ROMANCE
        THRILLER
    }

    enum Languege {
        PORTURGUESE
        ENGLISH
        SPANISH
    }

    input movieInput {
        name: String
        genre: Genre
        country: String
        language: Languege
        money: Float
    }

    type Mutation {
        createUser(data: userInput): User
        createMovie(data: movieInput): Movie
    }
`;

module.exports = typeDefs;
