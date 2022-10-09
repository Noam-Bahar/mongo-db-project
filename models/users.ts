import { Schema, model, connect } from 'mongoose';

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
  await connect(`mongodb://localhost:27023/MyDatabase`);

  const user = new list({
    name: 'Yoav',
    age: 20,
  });

  await user.save();

  console.log(user.age);
};

run().catch((err) => console.log(err));

export default list;
