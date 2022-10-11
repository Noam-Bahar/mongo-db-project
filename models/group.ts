import { Schema, model } from 'mongoose';

interface IGroup {}

const groupSchema = new Schema<IGroup>({});

const group = model<IGroup>('group', groupSchema);

export default group;
