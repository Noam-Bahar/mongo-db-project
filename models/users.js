"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definitions_1 = require("../definitions");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});
const list = (0, mongoose_1.model)('users', userSchema);
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connect)(definitions_1.mongoURI);
    const user = new list({
        name: 'Yoav',
        age: 20,
    });
    yield user.save();
    console.log('Users.ts', { user });
});
run().catch((err) => console.log(err));
exports.default = list;
