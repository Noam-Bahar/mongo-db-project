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
exports.deleteUser = exports.updateUser = exports.addUser = void 0;
const User_1 = __importDefault(require("./models/User"));
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
    console.log('deleteUser method activated', id);
});
exports.deleteUser = deleteUser;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () { });
const addGroup = (group) => __awaiter(void 0, void 0, void 0, function* () { });
const updateGroup = (id, groupInfo) => __awaiter(void 0, void 0, void 0, function* () { });
const deleteGroup = (id) => __awaiter(void 0, void 0, void 0, function* () { });
const getGroup = (id) => __awaiter(void 0, void 0, void 0, function* () { });
