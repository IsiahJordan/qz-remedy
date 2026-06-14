import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/index.ts'

dotenv.config();

const api = express();
api.use(express.json());
api.use(cors({
  origin: ['http://127.0.0.1:5000', 'http://localhost:5000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

api.use("/api/v1", router);

export default api
