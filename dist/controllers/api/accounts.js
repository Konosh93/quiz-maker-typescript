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
controller.get('/signup', signup);
controller.get('/login', login);
function login(req, res, next) { }
function signup(req) { }
exports.default = controller;
//# sourceMappingURL=accounts.js.map