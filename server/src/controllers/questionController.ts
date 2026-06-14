import connectDB from '../config/db.ts'
import Question from '../models/Question.ts'

export async function createQuestion(req, res) {
  try {
    console.info('createQuestion: called');
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
    res.status(401).json({ success: false, message: `Error: ${error}` });
  }
}

export async function fetchQuestions(req, res) {
  try {
    console.info('fetchQuestions: called');
    await connectDB();

    const { limit, offset } = req.query;
    console.log(`fetchQuestions: ${limit}, ${offset}`);

    let query = Question.find({})
    if (offset) {
      console.log(`fetchQuestions: aggregate with skip`);
      query = query.skip(Number(offset));
    }
    if (limit) {
      console.log(`fetchQuestions: aggregate with limit`);
      query = query.limit(Number(limit));
    }

    const content = await query;

    res.status(200).json({ success: true, payload: content });
  } catch (error) {
    console.error(`fetchQuestions: error catched ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}

export async function fetchQuestion(req, res) {
  try {
    console.info('fetchQuestion: called');
    await connectDB();

    const qid = req.params.id;
    const content = await Question.find({ _id: qid });

    res.status(200).json({ success: true, payload: content });
  } catch (error) {
    console.error(`fetchQuestion: error catched ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}

export async function updateQuestion(req, res) {
  try {
    console.info('updateQuestion: called');
    await connectDB();

    const qid = req.params.id;
    const { text, options, answer } = req.query;
    console.log(`updateQuestion: ${text}, ${options}, ${answer}`);

    const doc = await Question.findOne({ _id: qid });

    doc.text = text ?? doc.text;
    doc.options = options ?? doc.options;
    doc.answer = answer ?? doc.answer;

    if (text || options || answer) {
      await doc.save();
    }

    res.status(200).json({ success: true });

  } catch (error) {
    console.error(`updateQuestion: error catched ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}

export async function dropQuestion(req, res) {
  try {
    console.info('dropQuestion: called');
    await connectDB();

    const qid = req.params.id;
    console.log(`dropQuestion: ${qid}`);

    const doc = await Question.findByIdAndDelete(qid);

    if (doc) {
      console.log(`dropQuestion: successfully deleted user: ${doc.name}`);
    } else {
      console.log('dropQuestion: no document found with that ID');
    }

    res.status(200).json({ success: true });

  } catch (error) {
    console.error(`dropQuestion: error catched ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}
