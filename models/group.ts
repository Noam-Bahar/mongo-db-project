import { Schema, SchemaTypes, model } from 'mongoose';
import { IGroup } from '../definitions';

const groupSchema = new Schema<IGroup>({
  name: {
    type: String,
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

const Group = model<IGroup>('group', groupSchema);

export default Group;
