import { Schema, model } from 'mongoose';

interface User {
  name: string;
  age: number;
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
});

const user = model<User>('user', userSchema);

export default user;
