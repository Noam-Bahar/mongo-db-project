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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const user_1 = __importDefault(require("./models/user"));
const definitions_1 = require("./definitions");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const myUser = new user_1.default({
        name: 'Yoav',
        age: 20,
    });
    yield myUser.save();
    console.log({ myUser });
});
app.get(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const array = yield user_1.default.find({ age: 19 });
    console.log('user', user_1.default);
    console.log('ARRAY', array);
    res.send(array);
}));
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}…`);
    (0, mongoose_1.connect)(definitions_1.mongoURI).catch((err) => console.log(err));
    run().catch((err) => console.log(err));
});
