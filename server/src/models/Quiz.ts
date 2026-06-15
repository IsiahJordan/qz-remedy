import mongoose from 'mongoose'

const QuizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  qids: [String] // question ids
});

const Quiz = mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);

export default Quiz
