import express from 'express'
import { createHistory, fetchHistory, setAnswers, updateScore } from '../controllers/historyController.ts'

const router = express.Router();

router.post('/create', createHistory);
router.get('/:uid/:qid', fetchHistory);
router.put('/:uid/:qid/update', setAnswers);
router.put('/:uid/:qid/score', updateScore);

export default router
