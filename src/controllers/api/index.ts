import * as express from 'express';
import accountsController from './accounts';
import quizzesController from './quizzes';

let controller = express.Router();

controller.use('/accounts', accountsController);
controller.use('/quizzes', quizzesController);

export default controller;