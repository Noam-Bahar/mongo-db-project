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
const updateUser = (id: Schema.Types.ObjectId, userInfo: IUser) => {
  console.log('updateUser method activated', id);
};
const deleteUser = (id: Schema.Types.ObjectId) => {
  console.log('deleteUser method activated', id);
};

export { addUser, updateUser, deleteUser };
