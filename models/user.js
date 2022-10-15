"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    groups: {
        type: [mongoose_1.SchemaTypes.ObjectId],
        required: true,
    },
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.default = User;
