import * as express from 'express';
import accountsController from './accounts';
import quizzesController from './quizzes';

let controller = express.Router();

controller.use('/quizzes', quizzesController);
controller.use('/accounts', accountsController);


export default controller;