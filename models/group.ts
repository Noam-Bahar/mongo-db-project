import { Schema, SchemaTypes, model } from 'mongoose';

interface IGroup {
  name: string;
  parentGroups: [Schema.Types.ObjectId];
  childGroups: [Schema.Types.ObjectId];
  members: [string];
}

const groupSchema = new Schema<IGroup>({
  name: {
    type: String,
    required: true,
  },
  parentGroups: {
    type: [SchemaTypes.ObjectId],
    required: true,
  },
  childGroups: {
    type: [SchemaTypes.ObjectId],
    required: true,
  },
  members: {
    type: [String],
    required: true,
  },
});

const group = model<IGroup>('group', groupSchema);

export default group;
