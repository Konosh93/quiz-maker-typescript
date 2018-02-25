"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const accounts_1 = __importDefault(require("./accounts"));
const quizzes_1 = __importDefault(require("./quizzes"));
let controller = express.Router();
controller.use('/quizzes', quizzes_1.default);
controller.use('/accounts', accounts_1.default);
exports.default = controller;
//# sourceMappingURL=index.js.map