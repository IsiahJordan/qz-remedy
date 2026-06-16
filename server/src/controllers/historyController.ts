import connectDB from '../config/db.ts'
import History from '../models/History.ts'

export async function fetchHistory(req, res) {
  try {
    console.info('fetchHistory: called');
    await connectDB();
    
    const uid = req.params.uid;
    const qid = req.params.qid;
    console.log(`fetchHistory: ${uid} ${qid}`);

    const content = await History.findOne({ uid: uid, quizId: qid });

    res.status(200).json({ success: true, payload: content });
  } catch(error) { console.error(`fetchHistory Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}

export async function createHistory(req, res) {
  try {
    console.info('createHistory: called');
    await connectDB();
    
    const { uid, qid, answers } = req.body;
    console.log(`createHistory: ${uid} ${qid} ${answers}`);
    
    const doc = new History({
      uid: uid,
      quizId: qid,
      answers: answers,
      score: 0,
      attempt: Date.now(),
      lastUpdate: Date.now()
    });

    await doc.save();

    res.status(201).json({ success: true });
  } catch(error) {
    console.error(`createHistory Error: ${error}`);
    res.status(401).json({ success: false, message: `Error: ${error}` });
  }
}

export async function setAnswers(req, res) {
  try {
    console.info('setAnswers: called');
    await connectDB();
    
    const uid = req.params.uid;
    const qid = req.params.qid;
    console.log(`setAnswers: ${uid} ${qid}`);

    const { answers } = req.body;
    
    await History.findOneAndUpdate(
      { uid: uid, quizId: qid },
      { 
        $set: { 
          answers: answers, 
          lastUpdate: Date.now()
        } 
      }
    );
    res.status(200).json({ success: true });
  } catch(error) {
    console.error(`setAnswers Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}

// score is computed on the client side for
// simple reasons
export async function updateScore(req, res) {
  try {
    console.info('updateScore: called');
    await connectDB();

    const uid = req.params.uid;
    const qid = req.params.qid;
    const { score } = req.body;
    console.log(`updateScore: ${uid} ${qid}`);

    await History.findOneAndUpdate({ uid: uid, quizId: qid }, { $set: { score: score, lastUpdate: Date.now() } });

    res.status(200).json({ success: true });
  } catch(error) {
    console.error(`updateScore Error: ${error}`);
    res.status(400).json({ success: false, message: `updateScore Error: ${error}` });
  }
}
