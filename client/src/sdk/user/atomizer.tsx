import {PageRequestDto, PageResponseDto} from "@/sdk/leight";

import {VendorDto} from "@/sdk/user/vendor";
import {createPost, DataContextProvider as CoolDataContextProvider, IDataContextProviderProps as ICoolDataContextProviderProps, ISearchSelectProps, SearchSelect, useDataContext as useCoolDataContext,} from "@leight-core/leight";
import {FC} from "react";

export interface CreateDto {
	base: number | null;
	capacity: number | null;
	code: string;
	coils: number | null;
	maxCoilSize: number | null;
	maxWraps: number | null;
	name: string;
	squonk: boolean;
	vendorId: string;
}

export interface AtomizerDto {
	base: number | null;
	capacity: number | null;
	code: string;
	coils: number | null;
	id: string;
	maxCoilSize: number | null;
	maxWraps: number | null;
	name: string;
	squonk: boolean;
	vendor: VendorDto;
}

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

export const doCreate = createPost<CreateDto, AtomizerDto>("user.atomizer.create");

export const doPage = createPost<PageRequestDto<AtomizerOrderByDto, AtomizerFilterDto>, PageResponseDto<AtomizerDto>>("user.atomizer.page");

export const usePageData = () => useCoolDataContext<AtomizerDto, AtomizerOrderByDto, AtomizerFilterDto>();

export interface IPageDataProps extends Partial<ICoolDataContextProviderProps<AtomizerDto, AtomizerOrderByDto, AtomizerFilterDto>> {
}

export const PageData: FC<IPageDataProps> = ({children, ...props}) => {
	return <CoolDataContextProvider<AtomizerDto, AtomizerOrderByDto, AtomizerFilterDto>
		fetch={doPage}
		{...props}
	>
		{children}
	</CoolDataContextProvider>;
};

export type IPageSelectProps = Partial<ISearchSelectProps<AtomizerDto, AtomizerOrderByDto, AtomizerFilterDto>> & Pick<ISearchSelectProps<AtomizerDto, AtomizerOrderByDto, AtomizerFilterDto>, "toSearch" | "toOption">;

export const PageSelect: FC<IPageSelectProps> = props => {
	return <SearchSelect<AtomizerDto, AtomizerOrderByDto, AtomizerFilterDto>
		search={doPage}
		{...props}
	/>;
};
