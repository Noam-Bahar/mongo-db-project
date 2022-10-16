import User from './models/User';
import Group from './models/Group';
import { Schema } from 'mongoose';
import { IUser, IGroup } from './definitions';

const addUser = async (user: IUser) => {
  try {
    const { name } = user;
    await User.create(user);
    console.log(`User ${name} saved`);
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (id: Schema.Types.ObjectId, userInfo: IUser) => {
  console.log('updateUser method activated', id);
};

const deleteUser = async (id: Schema.Types.ObjectId) => {
  console.log('deleteUser method activated', id);
};

const getUser = async (id: Schema.Types.ObjectId) => {};

const addGroup = async (group: IGroup) => {};

const updateGroup = async (id: Schema.Types.ObjectId, groupInfo: IGroup) => {};

const deleteGroup = async (id: Schema.Types.ObjectId) => {};

const getGroup = async (id: Schema.Types.ObjectId) => {};

export { addUser, updateUser, deleteUser };
