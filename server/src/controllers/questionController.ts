import connectDB from '../config/db.ts'
import Question from '../models/Question.ts'

export async function createQuestion(req, res) {
  try {
    console.info('creaetQuestion: called');
    await connectDB();
    
    const { text, options, answer } = req.body;
    console.log(`createQuestion: ${text}, ${JSON.stringify(options)}, ${answer}`);
    const doc = new Question({
      text: text,
      options: options,
      answer: answer
    });

    console.log('createQuestion: create question doc');
    await doc.save();
    
    res.status(201).json({ success: true });
  } catch (error) {
    console.error(`createQuestion: error catched ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}
