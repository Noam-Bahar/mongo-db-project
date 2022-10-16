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
const definitions_1 = require("./definitions");
const User_1 = __importDefault(require("./models/User"));
const Group_1 = __importDefault(require("./models/Group"));
const dbQueries_1 = require("./dbQueries");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userArr = yield User_1.default.find({ age: 20 });
    console.log({ userArr });
    const groupArr = yield Group_1.default.find({ age: 20 });
    console.log({ groupArr });
    res.send([...userArr, ...groupArr]);
}));
app.get(`/adduser`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myUser = {
        name: 'Yoav',
        age: 20,
        groups: [],
    };
    yield (0, dbQueries_1.addUser)(myUser);
    res.send('User saved');
}));
app.get(`/updateuser`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myId = '634bffad2461f0fa42fedb8c';
    const myUserInfo = {
        name: 'I SHALL BE DELETED',
        age: 21,
        groups: [],
    };
    yield (0, dbQueries_1.updateUser)(myId, myUserInfo);
    res.send('User updated');
}));
app.get(`/addgroup`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myGroup = {
        name: 'basketball',
        childGroups: [],
        members: [],
    };
    yield (0, dbQueries_1.addGroup)(myGroup);
    res.send('group saved');
}));
app.get(`/deleteuser`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myId = `634bffad2461f0fa42fedb8c`;
    yield (0, dbQueries_1.deleteUser)(myId);
    res.send('delete successful');
}));
app.listen(PORT, () => {
    (0, mongoose_1.connect)(definitions_1.mongoURI).catch((err) => console.log(err));
    console.log(`Listening on port ${PORT}…`);
});
