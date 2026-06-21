import connectDB from '../config/db.ts'
import User from '../models/User.ts'
import bcrypt from 'bcrypt'

export async function register(req, res) {
  try {
    console.info('register: called');
    await connectDB();

    const { username, password } = req.body;
    console.log(`register: ${username}, ${password}`);

    console.log('register: verify if account exists');
    const user = await User.findOne({ username: username });

    if (user !== null) {
      console.log('register: user existed');
      return res.status(401).json({ success: false, message: `cannot register existing user` });
    }
    
    const hash_password = await bcrypt.hash(password, 10);
    console.log(`register: ${hash_password}`);

    const doc = new User({
        username: username,
        password: hash_password
    });
    
    await doc.save();
    res.status(201).json({ success: true });
  } catch(error) {
    console.error(`register Error: ${error}`);
    res.status(401).json({ success: false, message: `Error: ${error}` });
  }
}

export async function login(req, res) {
  try {
    console.info('login: called');
    await connectDB();

    const { username, password } = req.body;
    console.log(`login: ${username} ${password}`);

    const user = await User.findOne({ username: username });
    console.log(`login: user ${user.username} ${user.password}`);

    if (user === null) {
      console.log('login: user does not exist');
      return res.status(400).json({ success: false, message: `cannot find user` });
    }
    
    const match = await bcrypt.compare(password, user.password);
    console.log(`login: ${match}`);

    if (!match) {
      console.warn("login: password doesn't match");
      return res.status(400).json({ success: false, message: `password doesn't match` });
    }

    res.status(200).json({ success: true, payload: { id: user._id, username: user.username } });
  } catch(error) {
    console.error(`login Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}

export async function fetchUsers(req, res) {
  try {
    console.info('fetchUsers: called');
    await connectDB();

    const content = await User.find({});

    res.status(200).json({ success: true, payload: content });
  } catch(error) {
    console.error(`fetchUsers Error: ${error}`);
    res.status(400).json({ success: false, message: `Error: ${error}` });
  }
}
