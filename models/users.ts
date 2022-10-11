import { Schema, model, connect } from 'mongoose';
import { mongoURI } from '../definitions';

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

const list = model<User>('users', userSchema);

const run = async () => {
  await connect(mongoURI);

  const user = new list({
    name: 'Yoav',
    age: 20,
  });

  await user.save();

  console.log('Users.ts', { user });
};

run().catch((err) => console.log(err));

export default list;
