import express from 'express'

import { default as questionRouter } from './question.module.ts'
import { default as quizRouter } from './quiz.module.ts'
import { default as userRouter } from './user.module.ts'
import { default as historyRouter } from './history.module.ts'

const router = express.Router()

router.use('/question', questionRouter);
router.use('/quiz', quizRouter);
router.use('/user', userRouter);
router.use('/history', historyRouter);

export default router
