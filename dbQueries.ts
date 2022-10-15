import User from './models/User';
import Group from './models/Group';
import { Schema } from 'mongoose';
import { IUser, IGroup } from './definitions';

const addUser = async (user: any) => {
  try {
    const { name } = user;
    await User.create(user);
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
