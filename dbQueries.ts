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
  const user = await User.findById(id);
  if (user) {
    const { name, age, groups } = userInfo;

    user.name = name || user.name;
    user.age = age || user.age;
    user.groups = groups || user.groups;

    await user.save();
    console.log(`User ${user.name} saved`);
  } else {
    console.log('User not found');
  }
};

const deleteUser = async (id: Schema.Types.ObjectId) => {
  try {
    await User.deleteOne({ _id: id });
    console.log('User has been deleted');
  } catch (e) {
    console.log('User not found');
  }
};

const getUser = async (id: Schema.Types.ObjectId) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log('User not found');
  }
};

const addGroup = async (group: IGroup) => {
  try {
    await Group.create(group);
    console.log(`New group ${group.name} created`);
  } catch (e) {
    console.log(e);
  }
};

const updateGroup = async (id: Schema.Types.ObjectId, groupInfo: IGroup) => {};

const deleteGroup = async (id: Schema.Types.ObjectId) => {};

const getGroup = async (id: Schema.Types.ObjectId) => {};

export {
  addUser,
  updateUser,
  deleteUser,
  getUser,
  addGroup,
  updateGroup,
  deleteGroup,
  getGroup,
};
