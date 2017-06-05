import mongoose from "mongoose";
import candidateSchema from "./candidateSchema";
import positionSchema from "./positionSchema";

const feedbackSchema = mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    rating: Number,
    candidate: candidateSchema,
    position: positionSchema
});

export default feedbackSchema;
