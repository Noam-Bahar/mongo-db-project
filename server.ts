import express from 'express';
import dotenv from 'dotenv';

import { connect, Schema } from 'mongoose';
import { IUser, mongoURI } from './definitions';
import User from './models/User';
import Group from './models/Group';
import { addUser, updateUser } from './dbQueries';

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
    groups: [],
  };

  await addUser(myUser);
  res.send('User saved');
});

app.get(`/updateuser`, async (req, res) => {
  const myId: any = '634be4e0d5d5ef08e49a0756';

  const myUserInfo: IUser = {
    name: 'Bob',
    age: 21,
    groups: [],
  };

  await updateUser(myId, myUserInfo);
  res.send('User updated');
});

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
