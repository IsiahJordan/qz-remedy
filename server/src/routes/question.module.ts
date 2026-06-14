import express from 'express'
import { createQuestion }from '../controllers/questionController.ts'

const router = express.Router();

router.post('/create', createQuestion);

export default router
