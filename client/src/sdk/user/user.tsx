import {RoleDto} from "@/ps/sdk/role";
import {SessionDto} from "@/ps/sdk/session";
import {createDelete, createPost} from "@leight-core/leight";

export interface UserDto {
	id: string | null;
	name: string;
	roles: RoleDto[];
	site: string;
}

export interface SignInDto {
	login: string;
	password: string;
}

export interface SignUpDto {
	login: string;
	name: string;
	password: string;
}


export const doSignIn = createPost<SignInDto, SessionDto>("user.sign-in");

export const doSignOut = createDelete<never>("user.sign-out");

export const doSignUp = createPost<SignUpDto, SessionDto>("user.sign-up");
