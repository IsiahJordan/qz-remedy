import express from 'express'

import { default as questionRouter } from './question.module.ts'

const router = express.Router()

router.use('/question', questionRouter);

export default router
