import mongoose from 'mongoose';

const feedbackSchema = mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  rating: Number,
});

const feedbackModel = mongoose.Model('Feedback', feedbackSchema);

export default feedbackModel;
