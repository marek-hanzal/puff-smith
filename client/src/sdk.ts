import {Server, IDiscoveryIndex} from "@leight-core/leight";

export namespace vapersdream {
	export namespace discovery {
		export namespace index {
			export interface IndexResponse {
				index: IDiscoveryIndex;
			}
		}
	}

	export namespace translation {
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
			id: string;
			site: string;
		}

		export interface LoginDto {
			password: string;
			user: string;
		}
	}
}
