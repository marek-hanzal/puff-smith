import {FC} from "react";
import {useDataContext, IDataContextProviderProps, DataContextProvider, ISearchSelectProps, SearchSelect} from "@leight-core/leight";
import {createPost} from "@leight-core/leight";
import {PageRequestDto} from "@/sdk/leight"
import {PageResponseDto} from "@/sdk/leight"
import {UserDto} from "@/sdk/shared/user"
import {VendorDto} from "@/sdk/user/vendor"

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

export const doPage = createPost<PageRequestDto<ModOrderByDto, ModFilterDto>, PageResponseDto<ModDto>>("user.mod.page");

export const usePageData = () => useDataContext<ModDto, ModOrderByDto, ModFilterDto>()

export interface IPageDataProps extends Partial<IDataContextProviderProps<ModDto, ModOrderByDto, ModFilterDto>> {
}

export const PageData: FC<IPageDataProps> = ({children, ...props}) => {
	return <DataContextProvider<ModDto, ModOrderByDto, ModFilterDto>
		fetch={doPage}
		{...props}
	>
		{children}
	</DataContextProvider>;
}

export type IPageSelectProps = Partial<ISearchSelectProps<ModDto, ModOrderByDto, ModFilterDto>> & Pick<ISearchSelectProps<ModDto, ModOrderByDto, ModFilterDto>, "toSearch" | "toOption">;

export const PageSelect: FC<IPageSelectProps> = props => {
	return <SearchSelect<ModDto, ModOrderByDto, ModFilterDto>
		search={doPage}
		{...props}
	/>
}