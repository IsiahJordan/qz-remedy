import express from 'express'
import {
  fetchQuiz, 
  fetchQuizzes,
  createQuiz,
  dropQuiz,
  updateQuiz,
  fetchQuizByAuthor,
  pushQuestion,
  popQuestion,
  clearQuestions
} from '../controllers/quizController.ts'

const router = express.Router();

router.get('', fetchQuizzes);
router.get('/:id', fetchQuiz);
router.post('/create', createQuiz);
router.delete('/:id', dropQuiz);
router.put('/:id', updateQuiz);
router.get('/author/:username', fetchQuizByAuthor);

router.put('/:id/push', pushQuestion);
router.put('/:id/pop', popQuestion);
router.put('/:id/clear', clearQuestions);

export default router
