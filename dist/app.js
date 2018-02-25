"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const bluebird_1 = __importDefault(require("bluebird"));
const api_1 = __importDefault(require("./controllers/api"));
/*
   Setting up the database connection
   My original JS code use a strange &
   upredictable way of importing and
   setting up env variables using the
   config module

   It was decided to switch to using the
   dotenv module.
*/
dotenv_1.default.config({ path: '.env' });
/*
    Using promise library blue-bird;
    refer to @types/mongoose lines
    2328 through 2360
*/
mongoose_1.default.Promise = bluebird_1.default;
/*
    Connecting to the database
*/
mongoose_1.default.connect(process.env.MONGODB_URI, {});
const app = express_1.default();
app.set('port', process.env.PORT);
/*
    App middlewares
*/
app.use(morgan_1.default('combined'));
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(cookie_parser_1.default());
app.use(express_1.default.static(__dirname + '/build'));
app.get('/$', (req, res, next) => { res.status(200).json({ message: "Thanks, it's working" }); return res.end(); });
app.use('/api', api_1.default);
/*
   Export the app to be served
*/
exports.default = app;
//# sourceMappingURL=app.js.map