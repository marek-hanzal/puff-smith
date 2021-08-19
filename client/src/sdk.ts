import {Server, IDiscoveryIndex} from "@leight-core/leight";

export namespace vapersdream {
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
				namespace: string;
				text: string;
			}
		}
	}

	export namespace session {
		export interface SessionDto {
			user: UserDto;
		}

		export interface UserDto {
			id: string;
			roles: string[];
			site: string;
		}

		export interface LoginDto {
			password: string;
			user: string;
		}

		export const doTicketFetch = Server.createGet<SessionDto>("session.ticket");


		export const doLogin = Server.createPost<LoginDto, SessionDto>("session.login");

	}
}
