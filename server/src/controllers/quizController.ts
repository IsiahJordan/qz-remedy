import connectDB from '../config/db.ts'
import Quiz from '../models/Quiz.ts'

export async function createQuiz(req, res) {
  try {
    console.info('createQuiz: called');
    await connectDB();
    
    const { name, description, author } = req.body;
    console.log(`createQuiz: ${name}, ${description}, ${author}`);
    const doc = new Quiz({
      name: name,
      description: description,
      author: author,
      qids: []
    });

    console.log('createQuiz: create quiz doc');
    await doc.save();
    
    res.status(201).json({ success: true });
  } catch(error) {
    console.error(`createQuiz Error: ${error}`);
    res.status(401).json({ success: false, message: `Error: ${error}` });
  } 
}

// continue from here
export async function updateQuiz(req, res) {
  try {
    console.info('updateQuiz: called');
    await connectDB();
    
    const qid = req.params.id;// quiz id
    const { name, description } = req.query;
    console.log(`updateQuiz: ${qid} ${name} ${description}`);

    const doc = await Quiz.findById(qid);
    doc.name = name ?? doc.name;
    doc.description = description ?? doc.description;

    if (name || description) {
      console.log('updateQuiz: change reflected');
      await doc.save();
    }

    res.status(200).json({ success: true });
  } catch(error) {
    console.error(`updateQuiz Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  } 
}

export async function dropQuiz(req, res) {
  try {
    console.info('dropQuiz: called');
    await connectDB();

    const qid = req.params.id;
    console.log(`dropQuiz: ${qid}`);

    const doc = await Quiz.findByIdAndDelete(qid);
    
    if (doc) {
      console.log(`dropQuiz: successfully deleted user: ${doc.name}`);
    } else {
      console.log('dropQuiz: no document found with that ID');
    }

    res.status(200).json({ success: true });
  } catch(error) {
    console.error(`dropQuiz Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  } 
}

export async function fetchQuiz(req, res) {
  try {
    console.info('fetchQuiz: called');
    await connectDB();

    const qid = req.params.id;
    console.log(`fetchQuiz: ${qid}`);

    const doc = await Quiz.findById(qid);
    
    res.status(200).json({ success: true, payload: doc });
  } catch(error) {
    console.error(`fetchQuiz Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  } 
}

export async function fetchQuizByAuthor() {
  try {
    console.info('fetchQuizByAuthor: called');
    await connectDB();

    const username = req.params.username;
    console.log(`fetchQuizByAuthor: ${username}`);

    const doc = await Quiz.find({ author: username });
    
    res.status(200).json({ success: true, payload: doc });
  } catch(error) {
    console.error(`fetchQuizByAuthor Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  } 
}

export async function fetchQuizzes(req, res) {
  try {
    console.info('fetchQuizzes: called');
    await connectDB();
    
    const { limit, offset } = req.query;
    console.log(`fetchQuizzes: ${limit}, ${offset}`);

    let query = Quiz.find({})
    if (offset) {
      console.log(`fetchQuizzes: aggregate with skip`);
      query = query.skip(Number(offset));
    }
    if (limit) {
      console.log(`fetchQuizzes: aggregate with limit`);
      query = query.limit(Number(limit));
    }

    const content = await query;

    res.status(200).json({ success: true, payload: content });
  } catch(error) {
    console.error(`fetchQuizzes Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}

/*
 * all below are operation on question key 
 * that comprises of ids
 **/

export async function pushQuestion(req, res) {
  try {
    console.info('pushQuestion: called');
    await connectDB();
    
    const qid = req.params.id;
    const { questionID } = req.body;
    console.log(`pushQuestion: ${qid} ${questionID}`);

    await Quiz.findByIdAndUpdate(qid, { $push: { qids: questionID }});
    
    res.status(201).json({ success: true });
  } catch(error) {
    console.error(`pushQuestion Error: ${error}`);
    res.status(401).json({ success: false, message: `Error: ${error}` });
  } 
}

export async function popQuestion(req, res) {
  try {
    console.info('popQuestion: called');
    await connectDB();
    
    const qid = req.params.id;
    const { questionID } = req.body;
    console.log(`popQuestion: ${qid} ${questionID}`);

    await Quiz.findByIdAndUpdate(qid, { $pull: { qids: questionID }});
    res.status(200).json({ success: true });
  } catch(error) {
    console.error(`popQuestion Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  } 
}

export async function clearQuestions(req, res) {
  try {
    console.info(`clearQuestions: called`);
    await connectDB();
    
    const qid = req.params.id;
    console.log(`clearQuestions: ${qid}`);

    await Quiz.findByIdAndUpdate(qid, { $set: { qids: [] }});
    res.status(200).json({ success: true });
  } catch(error) {
    console.error(`clearQuestions Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  } 
}
