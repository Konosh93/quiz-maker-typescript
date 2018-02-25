"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
let controller = express.Router();
controller.get('/', getQuizzes);
function getQuizzes(req, res, next) {
    return res.status(200).json({ message: "Hello from the quizzes controller" });
}
exports.default = controller;
//# sourceMappingURL=quizzes.js.map