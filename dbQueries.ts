import User from './models/user';
import Group from './models/group';
import { Schema } from 'mongoose';
import { IUser, IGroup } from './definitions';

const addUser = async (user: IUser) => {
  const { name, age, groups }: IUser = user;
  try {
    await User.create({ name, age, groups });
    console.log(`User ${name} saved`);
  } catch (e) {
    console.log(e);
  }
};
const updateUser = () => {};

export {};
