import {UserDto} from "@/ps/sdk/user";
import {VendorDto} from "@/ps/sdk/vendor";
import {createPost, DataContextProvider as CoolDataContextProvider, IDataContextProviderProps as ICoolDataContextProviderProps, IPageRequest, IPageResponse, useDataContext as useCoolDataContext} from "@leight-core/leight";
import {FC} from "react";

export interface ModOrderByDto {
	code?: boolean | null;
	name?: boolean | null;
	power?: boolean | null;
}

export interface ModFilterDto {
	fulltext?: string | null;
}

export interface ModDto {
	approvedBy: UserDto | null;
	code: string;
	id: string;
	isApproved: boolean;
	name: string;
	power: number;
	vendor: VendorDto;
}

export const doPage = createPost<IPageRequest<ModOrderByDto, ModFilterDto>, IPageResponse<ModDto>>("user.mod.page");

export const usePageData = () => useCoolDataContext<ModDto, ModOrderByDto, ModFilterDto>();

export interface IPageDataProps extends Partial<ICoolDataContextProviderProps<ModDto, ModOrderByDto, ModFilterDto>> {
}

export const PageData: FC<IPageDataProps> = ({children, ...props}) => {
	return <CoolDataContextProvider<ModDto, ModOrderByDto, ModFilterDto>
		fetch={doPage}
		{...props}
	>
		{children}
	</CoolDataContextProvider>;
};
