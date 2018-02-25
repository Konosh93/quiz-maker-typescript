"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const errorhandler_1 = __importDefault(require("errorhandler"));
/*
    Some dummy route for testing
*/
/*
    This middleware should be the last to handle errors
*/
app_1.default.use(errorhandler_1.default);
/*
    Run the server
*/
app_1.default.listen(app_1.default.get('port'), () => {
    console.log('App is running on port ' + app_1.default.get('port') + ' on a ' + app_1.default.get('env') + ' environment');
});
//# sourceMappingURL=server.js.map