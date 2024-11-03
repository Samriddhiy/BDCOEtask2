import mongoose, {Schema} from "mongoose";

const movieSchema = new mongoose.Schema ({
    title: {
        type: String,
    },
    plot: {
        type: String,
    },
    genres: {
        type: [String],
    },
    cast: {
        type: [String],
    },
    languages: {
        type: [String],
    },
    released: {
        type: Date,
    },
    directors: {
        type: [String],
    },
    writers: {
        type: [String],
    },
    rated: {
        type: String,
    },
    year: {
        type: Number,
    },
    countries: {
        type: [String],
    }
}); 


export const Movie = mongoose.model("Movie",movieSchema); 
