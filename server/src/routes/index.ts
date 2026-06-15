import express from 'express'

import { default as questionRouter } from './question.module.ts'
import { default as quizRouter } from './quiz.module.ts'

const router = express.Router()

router.use('/question', questionRouter);
router.use('/quiz', quizRouter);

export default router
