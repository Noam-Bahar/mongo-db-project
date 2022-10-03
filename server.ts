import express from 'express';
import dotenv from 'dotenv';
const app = express();

const env = dotenv.config();
const PORT = process.env.PORT || 3000;

app.get(`/`, (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}…`));
