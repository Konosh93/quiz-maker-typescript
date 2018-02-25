///<reference path="./types/index.ts"/>

import * as express from 'express';
import apiTypes from './types';

let controller = express.Router();

controller.get('/', getQuizzes);

function getQuizzes(req: express.Request, res: express.Response, next: express.NextFunction) {
	return res.status(200).json({message: "Hello from the quizzes controller"});
}

export default controller;