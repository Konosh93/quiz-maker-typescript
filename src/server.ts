import app from './app';
import errorHandler from 'errorhandler';

/*
	Some dummy route for testing
*/
app.get('/*?', (req, res, next) => { res.status(200).json({message: "Thanks, it's working"}); return res.end();})

/*
	This middleware should be the last to handle errors
*/
app.use(errorHandler);

/*
	Run the server
*/
app.listen(app.get('port'), () => {
	console.log('App is running on port ' + app.get('port') + ' on a ' +  app.get('env') + ' environment');
})