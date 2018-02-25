///<reference path="./types/index.ts"/>

import * as express from 'express';
import apiTypes from './types';

let controller = express.Router();

controller.get('/signup', signup);
controller.get('/login', login);



function login(req: apiTypes.loginRequest, res: express.Response, next: express.NextFunction) {}

function signup(req: apiTypes.signupRequest) {}

export default controller;