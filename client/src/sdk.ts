import {createDelete, createGet, createPost, createPut, IDiscoveryIndex} from "@leight-core/leight";

export namespace ps {
	export namespace discovery {
		export const doIndexFetch = createGet<index.IndexResponse>("discovery.index");
		export namespace index {
			export interface IndexResponse {
				index: IDiscoveryIndex;
			}
		}
	}

	export namespace translation {
		export const doIndexFetch = createGet<index.IndexResponse>("translation.index");
		export namespace index {
			export interface IndexResponse {
				translations: TranslationDto[];
			}

			export interface TranslationDto {
				label: string;
				language: string;
				text: string | null;
			}
		}
	}

	export namespace session {
		export interface SessionDto {
			user: ps.user.UserDto;
		}

		export const doTicketFetch = createGet<SessionDto>("session.ticket");

	}

	export namespace user {
		export interface UserDto {
			id: string | null;
			roles: RoleDto[];
			site: string;
		}

		export interface RoleDto {
			id: string;
			name: string;
		}

		export interface SignInDto {
			login: string;
			password: string;
		}

		export interface SignUpDto {
			login: string;
			password: string;
		}

		export const doSignIn = createPost<SignInDto, ps.session.SessionDto>("user.sign-in");


		export const doSignOut = createDelete<never>("user.sign-out");


		export const doSignUp = createPost<SignUpDto, ps.session.SessionDto>("user.sign-up");
		export namespace atomizer {
			export interface CreateDto {
				base: number;
				capacity: number;
				code: string;
				coils: number | null;
				maxCoilSize: number;
				maxWraps: number;
				name: string;
				squonk: boolean | null;
				vendorId: string;
			}

			export interface AtomizerDto {
				base: number;
				capacity: number;
				code: string;
				coils: number;
				maxCoilSize: number;
				maxWraps: number;
				name: string;
				squonk: boolean;
				vendorId: string;
			}

			export const doCreate = createPost<CreateDto, AtomizerDto>("user.atomizer.create");

		}
	}
}
