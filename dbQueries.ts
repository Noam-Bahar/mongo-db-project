import User from './models/user';
import Group from './models/group';
import { Schema } from 'mongoose';

const addUser = async (
  name: string,
  age: number,
  groups: [Schema.Types.ObjectId]
) => {
  try {
    await User.create({ name, age, groups });
    console.log(`User ${name} saved`);
  } catch (e) {
    console.log(e);
  }
};
const updateUser = () => {};

export {};
