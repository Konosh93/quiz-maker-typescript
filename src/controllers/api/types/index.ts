import * as express from 'express';
export namespace apiTypes {
	export interface loginRequest extends express.Request {
		body: {
			user: {
				email: string;
				password: string;
			}
		}
	}
	
	export interface signupRequest extends loginRequest {
		body: {
			user: {
				email: string;
				password: string;
				name: string;
			}
		}
	}	

}

export default apiTypes;