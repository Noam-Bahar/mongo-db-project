import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import list from './models/users';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = `mongodb://localhost:27023/MyDatabase`;

app.get(`/`, async (req, res) => {
  const array = JSON.stringify(list);

  res.send(array);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}…`);
  mongoose.connect(mongoURI).catch((err) => console.log(err));
});
