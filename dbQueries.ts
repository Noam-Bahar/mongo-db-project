import User from './models/User';
import Group from './models/Group';
import { Schema } from 'mongoose';
import { IUser, IGroup } from './definitions';

export const addUser = async (user: IUser) => {
  try {
    const { name } = user;
    await User.create(user);
    console.log(`User ${name} saved`);
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (
  id: Schema.Types.ObjectId,
  userInfo: IUser
) => {
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

export const deleteUser = async (id: Schema.Types.ObjectId) => {
  try {
    await User.findByIdAndDelete(id);
    console.log('User has been deleted');
  } catch (e) {
    console.log('User not found');
  }
};

export const getUser = async (id: Schema.Types.ObjectId) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log('User not found');
  }
};

export const addGroup = async (group: IGroup) => {
  try {
    await Group.create(group);
    console.log(`New group ${group.name} created`);
  } catch (e) {
    console.log(e);
  }
};

export const updateGroup = async (
  id: Schema.Types.ObjectId,
  groupInfo: IGroup
) => {
  const group = await Group.findById(id);
  if (group) {
    const { name, childGroups, members } = groupInfo;

    group.name = name || group.name;
    group.childGroups = childGroups || group.childGroups;
    group.members = members || group.members;

    await group.save();
    console.log(`Group has been updated`);
  } else {
    console.log(`Group not found`);
  }
};

export const deleteGroup = async (id: Schema.Types.ObjectId) => {
  try {
    await Group.findByIdAndDelete(id);
    console.log(`Group has been deleted`);
  } catch (e) {
    console.log(`Group not found`);
  }
};

export const getGroup = async (id: Schema.Types.ObjectId) => {
  try {
    const group = await Group.findById(id);
    return group;
  } catch (e) {
    console.log(`Group not found`);
  }
};

export const addChildToGroup = async (
  parent_id: Schema.Types.ObjectId,
  child_id: Schema.Types.ObjectId
) => {};

export const createChildGroup = async (
  parent_id: Schema.Types.ObjectId,
  group: IGroup
) => {};
