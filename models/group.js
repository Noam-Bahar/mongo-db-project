"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const groupSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    childGroups: {
        type: [mongoose_1.SchemaTypes.ObjectId],
        required: true,
    },
    members: {
        type: [mongoose_1.SchemaTypes.ObjectId],
        required: true,
    },
});
const Group = (0, mongoose_1.model)('group', groupSchema);
exports.default = Group;
