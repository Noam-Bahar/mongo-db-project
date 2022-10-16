import express from 'express';
import dotenv from 'dotenv';

import { connect, Schema } from 'mongoose';
import { IUser, mongoURI } from './definitions';
import User from './models/User';
import Group from './models/Group';
import { addUser } from './dbQueries';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get(`/`, async (req, res) => {
  const userArr = await User.find({ age: 20 });
  console.log({ userArr });

  const groupArr = await Group.find({ age: 20 });
  console.log({ groupArr });

  res.send([...userArr, ...groupArr]);
});

app.get(`/adduser`, async (req, res) => {
  const myUser: IUser = {
    name: 'Yoav',
    age: 20,
    groups: [] as Schema.Types.ObjectId[],
  };
  await addUser(myUser);
  res.send('User saved');
});
app.get(`/addgroup`, async (req, res) => {});

app.get(`/addgroup`, async (req, res) => {
  const myGroup = await Group.create({
    name: 'swimming',
  });

  res.send('group saved');
});

app.listen(PORT, () => {
  connect(mongoURI).catch((err) => console.log(err));

  console.log(`Listening on port ${PORT}…`);
});
