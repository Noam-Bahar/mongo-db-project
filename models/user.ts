import { Schema, SchemaTypes, model } from 'mongoose';
import { IUser } from '../definitions';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  groups: {
    type: [SchemaTypes.ObjectId],
    required: true,
  },
});

const User = model<IUser>('user', userSchema);

export default User;
