import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { mongoURI } from './definitions';
import user from './models/user';
import group from './models/group';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get(`/`, async (req, res) => {
  const userArr = await user.find({ age: 20 });
  console.log({ userArr });

  const groupArr = await group.find({ age: 20 });
  console.log({ groupArr });

  res.send([...userArr, ...groupArr]);
});

app.get(`/adduser`, async (req, res) => {
  const myUser = await user.create({
    name: 'Yoav',
    age: 20,
  });
  res.send('user saved');
});

app.get(`/addgroup`, async (req, res) => {
  const myGroup = await group.create({
    name: 'swimming',
  });

  res.send('group saved');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}…`);

  connect(mongoURI).catch((err) => console.log(err));
});
