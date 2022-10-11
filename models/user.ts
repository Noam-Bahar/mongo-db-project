import { Schema, SchemaTypes, model } from 'mongoose';

interface IUser {
  name: string;
  groups: [Schema.Types.ObjectId];
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  groups: {
    type: [SchemaTypes.ObjectId],
    required: true,
  },
});

const user = model<IUser>('user', userSchema);

export default user;
