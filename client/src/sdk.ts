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

			export const doCreate = createPost<CreateDto, ps.atomizer.AtomizerDto>("user.atomizer.create");

			export const doPage = createPost<leight.page.PageRequestDto<ps.storage.atomizer.repository.AtomizerOrderBy>, leight.page.PageResponseDto<ps.atomizer.AtomizerDto>>("user.atomizer.page");
		}
	}

	export namespace atomizer {
		export interface AtomizerDto {
			base: number;
			capacity: number | null;
			code: string;
			coils: number;
			id: string;
			maxCoilSize: number | null;
			maxWraps: number | null;
			name: string;
			squonk: boolean;
			vendor: ps.vendor.VendorDto;
		}
	}

	export namespace vendor {
		export interface VendorDto {
			code: string;
			id: string;
			name: string;
		}
	}

	export namespace storage {
		export namespace atomizer {
			export namespace repository {
				export interface AtomizerOrderBy {
					code?: boolean | null;
					name?: boolean | null;
				}
			}
		}
	}
}

export namespace leight {
	export namespace page {
		export interface PageRequestDto<TOrderBy> {
			orderBy?: TOrderBy | null;
			page: number;
			size: number;
		}

		export interface PageResponseDto<TItem> {
			count: number;
			items: TItem[];
			pages: number;
			size: number;
			total: number;
		}
	}
}
