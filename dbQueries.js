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
exports.getGroup = exports.deleteGroup = exports.updateGroup = exports.addGroup = exports.getUser = exports.deleteUser = exports.updateUser = exports.addUser = void 0;
const User_1 = __importDefault(require("./models/User"));
const Group_1 = __importDefault(require("./models/Group"));
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = user;
        yield User_1.default.create(user);
        console.log(`User ${name} saved`);
    }
    catch (e) {
        console.log(e);
    }
});
exports.addUser = addUser;
const updateUser = (id, userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(id);
    if (user) {
        const { name, age, groups } = userInfo;
        user.name = name || user.name;
        user.age = age || user.age;
        user.groups = groups || user.groups;
        yield user.save();
        console.log(`User ${user.name} saved`);
    }
    else {
        console.log('User not found');
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_1.default.deleteOne({ _id: id });
        console.log('User has been deleted');
    }
    catch (e) {
        console.log('User not found');
    }
});
exports.deleteUser = deleteUser;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.find(id);
        return user;
    }
    catch (e) {
        console.log('User not found');
    }
});
exports.getUser = getUser;
const addGroup = (group) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Group_1.default.create(group);
        console.log(`New group ${group.name} created`);
    }
    catch (e) {
        console.log(e);
    }
});
exports.addGroup = addGroup;
const updateGroup = (id, groupInfo) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateGroup = updateGroup;
const deleteGroup = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteGroup = deleteGroup;
const getGroup = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getGroup = getGroup;
