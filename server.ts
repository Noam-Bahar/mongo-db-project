import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import user from './models/user';
import { mongoURI } from './definitions';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const run = async () => {
  const myUser = new user({
    name: 'Yoav',
    age: 20,
  });

  await myUser.save();

  console.log({ myUser });
};

app.get(`/`, async (req, res) => {
  const array = await user.find({ age: 19 });
  console.log('user', user);
  console.log('ARRAY', array);

  res.send(array);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}…`);

  connect(mongoURI).catch((err) => console.log(err));

  run().catch((err) => console.log(err));
});
