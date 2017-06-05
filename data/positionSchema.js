import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
    name: String,
    description: String,
    skills: String,
    yearsOfExperience: Number,
    salaryMin: Number,
    salaryMax: Number
});

export default positionSchema;