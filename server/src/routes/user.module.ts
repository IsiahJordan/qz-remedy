import express from 'express'
import { register, login, fetchUsers } from '../controllers/userController.ts'

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('', fetchUsers);

export default router
