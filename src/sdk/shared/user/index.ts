export interface ISignInRequest {
	readonly login: string;
	readonly password: string;
}

export interface ISignUpRequest {
	readonly name: string;
	readonly login: string;
	readonly password: string;
}
