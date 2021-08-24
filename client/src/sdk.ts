import {Server, IDiscoveryIndex} from "@leight-core/leight";

export namespace ps {
	export namespace discovery {
		export const doIndexFetch = Server.createGet<index.IndexResponse>("discovery.index");
		export namespace index {
			export interface IndexResponse {
				index: IDiscoveryIndex;
			}
		}
	}

	export namespace translation {
		export const doIndexFetch = Server.createGet<index.IndexResponse>("translation.index");
		export namespace index {
			export interface IndexResponse {
				translations: TranslationDto[];
			}

			export interface TranslationDto {
				label: string;
				language: string;
				text: string;
			}
		}
	}

	export namespace session {
		export interface SessionDto {
			user: ps.user.UserDto;
		}

		export const doTicketFetch = Server.createGet<SessionDto>("session.ticket");

	}

	export namespace user {
		export interface UserDto {
			id: string | null;
			roles: string[];
			site: string;
		}

		export interface SignInDto {
			login: string;
			password: string;
		}

		export interface SignUpDto {
			login: string;
			password: string;
		}

		export const doSignIn = Server.createPost<SignInDto, ps.session.SessionDto>("user.sign-in");


		export const doSignOut = Server.createDelete<never>("user.sign-out");


		export const doSignUp = Server.createPost<SignUpDto, ps.session.SessionDto>("user.sign-up");

	}
}
