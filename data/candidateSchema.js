import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    company: String,
    currentRole: String,
    yearsOfExperience: Number
});

export default candidateSchema;