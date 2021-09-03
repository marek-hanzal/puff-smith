import {
	createDelete,
	createGet,
	createPost,
	DataSourceContextProvider as CoolDataSourceContextProvider,
	IDataSourceContextProviderProps as ICoolDataSourceContextProviderProps,
	IDiscoveryIndex,
	useDataSourceContext as useCoolDataSourceContext
} from "@leight-core/leight";
import {FC} from "react";

export namespace ps {
	export namespace discovery {
		export const doIndexFetch = createGet<ps.discovery.index.IndexResponse>("discovery.index");

		export namespace index {
			export interface IndexResponse {
				index: IDiscoveryIndex;
			}
		}
	}

	export namespace translation {
		export const doIndexFetch = createGet<ps.translation.index.IndexResponse>("translation.index");

		export namespace index {
			export interface IndexResponse {
				translations: ps.translation.index.TranslationDto[];
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

		export const doTicketFetch = createGet<ps.session.SessionDto>("session.ticket");
	}

	export namespace user {
		export interface UserDto {
			id: string | null;
			name: string;
			roles: ps.role.RoleDto[];
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

		export const doSignIn = createPost<ps.user.SignInDto, ps.session.SessionDto>("user.sign-in");

		export const doSignOut = createDelete<never>("user.sign-out");

		export const doSignUp = createPost<ps.user.SignUpDto, ps.session.SessionDto>("user.sign-up");

		export namespace atomizer {
			export interface CreateDto {
				base: number;
				capacity: number;
				code: string;
				coils: number | null;
				maxCoilSize: number;
				maxWraps: number;
				name: string;
				squonk: number | null;
				vendorId: string;
			}

			export const doCreate = createPost<ps.user.atomizer.CreateDto, ps.atomizer.AtomizerDto>("user.atomizer.create");

			export const doPage = createPost<leight.page.PageRequestDto<ps.storage.atomizer.AtomizerOrderByDto, ps.storage.atomizer.AtomizerFilterDto>, leight.page.PageResponseDto<ps.atomizer.AtomizerDto>>("user.atomizer.page");

			export namespace datasource {
				export const useDataSourceContext = () => useCoolDataSourceContext<ps.atomizer.AtomizerDto, ps.storage.atomizer.AtomizerOrderByDto, ps.storage.atomizer.AtomizerFilterDto>();

				export interface IDataSourceContextProviderProps extends Partial<ICoolDataSourceContextProviderProps<ps.atomizer.AtomizerDto, ps.storage.atomizer.AtomizerOrderByDto, ps.storage.atomizer.AtomizerFilterDto>> {
				}

				export const DataSourceContextProvider: FC<IDataSourceContextProviderProps> = ({children, ...props}) => {
					return <CoolDataSourceContextProvider<ps.atomizer.AtomizerDto, ps.storage.atomizer.AtomizerOrderByDto, ps.storage.atomizer.AtomizerFilterDto>
						fetch={doPage}
						{...props}
					>
						{children}
					</CoolDataSourceContextProvider>;
				};
			}
		}

		export namespace mod {
			export const doPage = createPost<leight.page.PageRequestDto<ps.storage.mod.ModOrderByDto, ps.storage.mod.ModFilterDto>, leight.page.PageResponseDto<ps.mod.ModDto>>("user.mod.page");

			export namespace datasource {
				export const useDataSourceContext = () => useCoolDataSourceContext<ps.mod.ModDto, ps.storage.mod.ModOrderByDto, ps.storage.mod.ModFilterDto>();

				export interface IDataSourceContextProviderProps extends Partial<ICoolDataSourceContextProviderProps<ps.mod.ModDto, ps.storage.mod.ModOrderByDto, ps.storage.mod.ModFilterDto>> {
				}

				export const DataSourceContextProvider: FC<IDataSourceContextProviderProps> = ({children, ...props}) => {
					return <CoolDataSourceContextProvider<ps.mod.ModDto, ps.storage.mod.ModOrderByDto, ps.storage.mod.ModFilterDto>
						fetch={doPage}
						{...props}
					>
						{children}
					</CoolDataSourceContextProvider>;
				};
			}
		}
	}

	export namespace role {
		export interface RoleDto {
			id: string;
			name: string;
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
			export interface AtomizerOrderByDto {
				base?: boolean | null;
				capacity?: boolean | null;
				code?: boolean | null;
				coils?: boolean | null;
				maxCoilSize?: boolean | null;
				maxWraps?: boolean | null;
				name?: boolean | null;
			}

			export interface AtomizerFilterDto {
				fulltext?: string | null;
			}
		}

		export namespace mod {
			export interface ModOrderByDto {
				code?: boolean | null;
				name?: boolean | null;
				power?: boolean | null;
			}

			export interface ModFilterDto {
				fulltext?: string | null;
			}
		}
	}

	export namespace mod {
		export interface ModDto {
			approvedBy: ps.user.UserDto | null;
			code: string;
			id: string;
			isApproved: boolean;
			name: string;
			power: number;
		}
	}
}

export namespace leight {
	export namespace page {
		export interface PageRequestDto<TOrderBy, TFilter> {
			filter?: TFilter | null;
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
