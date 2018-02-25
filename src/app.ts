import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bluebird from 'bluebird';

import apiController from './controllers/api';


/* 
   Setting up the database connection 
   My original JS code use a strange & 
   upredictable way of importing and 
   setting up env variables using the
   config module

   It was decided to switch to using the
   dotenv module.
*/
dotenv.config({path: '.env'});

/*
	Using promise library blue-bird;
	refer to @types/mongoose lines
	2328 through 2360 
*/
(<any>mongoose).Promise = bluebird;
/*
	Connecting to the database
*/
mongoose.connect(process.env.MONGODB_URI, 
 	{});

const app = express();
app.set('port', process.env.PORT);
/*
	App middlewares
*/
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.static(__dirname + '/build'));


app.get('/$', (req, res, next) => { res.status(200).json({message: "Thanks, it's working"}); return res.end();})
app.use('/api', apiController);
/*
   Export the app to be served
*/

export default app;