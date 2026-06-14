import mongoose from 'mongoose'

/*
 * Question schema relies on the ability
 * to randomize, this is delegate to the
 * client code
* */
const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  // options does not include the correct answer
  options: {
    type: [String],
    validate: {
      validator: function(arr) {
        return arr.length === 3; // enforce 3 question
      }
    }
  },
  answer: { type: String, required: true }
}); 

const Question = mongoose.models.Question || mongoose.model('Question', QuestionSchema);

export default Question
