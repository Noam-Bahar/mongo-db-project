import { Schema, SchemaTypes, model } from 'mongoose';

interface IGroup {
  name: string;
  childGroups: [Schema.Types.ObjectId];
  members: [Schema.Types.ObjectId];
}

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
