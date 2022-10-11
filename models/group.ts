import { Schema, SchemaTypes, model } from 'mongoose';

interface IGroup {
  name: string;
  parentGroups: [Schema.Types.ObjectId];
  childGroups: [Schema.Types.ObjectId];
  members: [Schema.Types.ObjectId];
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
    type: [SchemaTypes.ObjectId],
    required: true,
  },
});

const group = model<IGroup>('group', groupSchema);

export default group;
