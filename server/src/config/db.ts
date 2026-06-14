import mongoose from 'mongoose'

let cached = globalThis.pool;

if (!cached) {
  cached = globalThis.pool = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = await mongoose.connect(process.env.DB_URI);
  }

  try {
    cached.conn = await cached.promise;
    console.log(`MongoDB connected: ${cached.conn.connection.host}`);
  } catch (error) {
    cached.promise = null;
    console.error(`Error: ${error.message}`);
    throw error;
  }

  return cached.conn;
}

export default connectDB
