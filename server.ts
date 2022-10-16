import express from 'express';
import dotenv from 'dotenv';

import { connect, Schema } from 'mongoose';
import { IUser, IGroup, mongoURI } from './definitions';
import User from './models/User';
import Group from './models/Group';
import {
  addUser,
  updateUser,
  deleteUser,
  getUser,
  addGroup,
  updateGroup,
  deleteGroup,
  getGroup,
} from './dbQueries';

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
  const myId: any = '634bffad2461f0fa42fedb8c';

  const myUserInfo: IUser = {
    name: 'I SHALL BE DELETED',
    age: 21,
    groups: [],
  };

  await updateUser(myId, myUserInfo);
  res.send('User updated');
});

app.get(`/addgroup`, async (req, res) => {
  const myGroup: IGroup = {
    name: 'basketball',
    childGroups: [],
    members: [],
  };

  await addGroup(myGroup);

  res.send('group saved');
});

app.get(`/deleteuser`, async (req, res) => {
  const myId: any = `634bffad2461f0fa42fedb8c`;
  await deleteUser(myId);
  res.send('delete successful');
});

app.listen(PORT, () => {
  connect(mongoURI).catch((err) => console.log(err));

  console.log(`Listening on port ${PORT}…`);
});
