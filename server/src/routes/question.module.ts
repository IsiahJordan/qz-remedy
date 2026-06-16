import express from 'express' 
import { 
  createQuestion, 
  fetchQuestion, 
  fetchQuestions,
  updateQuestion,
  dropQuestion,
  searchQuestion
}from '../controllers/questionController.ts'

const router = express.Router();

router.get('/:id', fetchQuestion);
router.put('/:id', updateQuestion);
router.delete('/:id', dropQuestion);
router.get('', fetchQuestions);
router.post('/search', searchQuestion);
router.post('/create', createQuestion);

export default router
