import mongoose from 'mongoose'

const HistorySchema = new mongoose.Schema({
  uid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true }, 
  answers: [String], // user answer
  score: Number,
  attempt: Date,
  lastUpdate: Date
});

const History = mongoose.models.History || mongoose.model('History', HistorySchema);

export default History
