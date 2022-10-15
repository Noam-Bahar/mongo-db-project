import { Schema } from 'mongoose';

const mongoPort: number = 27023;
const mongoURI: string = `mongodb://localhost:${mongoPort}/MyDatabase`;

interface IUser {
  name: string;
  age: number;
  groups: Schema.Types.ObjectId[];
}

interface IGroup {
  name: string;
  childGroups: [Schema.Types.ObjectId];
  members: [Schema.Types.ObjectId];
}

export { IUser, IGroup, mongoURI };
