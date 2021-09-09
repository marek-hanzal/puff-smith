import {RoleDto} from "@/sdk/shared/role";
import {SessionDto} from "@/sdk/shared/session";
import {createDelete, createPost,} from "@leight-core/leight";

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

export const doSignOut = createDelete<void>("user.sign-out");

export const doSignUp = createPost<SignUpDto, SessionDto>("user.sign-up");
