import { Schema, model } from 'mongoose';

interface IGroup {
  name: string;
}

const groupSchema = new Schema<IGroup>({
  name: {
    type: String,
    required: true,
  },
});

const group = model<IGroup>('group', groupSchema);

export default group;
