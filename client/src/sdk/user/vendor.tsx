import {PageRequestDto, PageResponseDto} from "@/sdk/leight";
import {createPost, DataContextProvider as CoolDataContextProvider, IDataContextProviderProps as ICoolDataContextProviderProps, ISearchSelectProps, SearchSelect, useDataContext as useCoolDataContext,} from "@leight-core/leight";
import {FC} from "react";

export interface VendorDto {
	code: string;
	id: string;
	name: string;
}

export interface VendorOrderByDto {
	code?: boolean | null;
	name?: boolean | null;
}

export interface VendorFilterDto {
	category?: string | null;
	fulltext?: string | null;
}

export const doPage = createPost<PageRequestDto<VendorOrderByDto, VendorFilterDto>, PageResponseDto<VendorDto>>("user.vendor.page");

export const usePageData = () => useCoolDataContext<VendorDto, VendorOrderByDto, VendorFilterDto>();

export interface IPageDataProps extends Partial<ICoolDataContextProviderProps<VendorDto, VendorOrderByDto, VendorFilterDto>> {
}

export const PageData: FC<IPageDataProps> = ({children, ...props}) => {
	return <CoolDataContextProvider<VendorDto, VendorOrderByDto, VendorFilterDto>
		fetch={doPage}
		{...props}
	>
		{children}
	</CoolDataContextProvider>;
};

export type IPageSelectProps = Partial<ISearchSelectProps<VendorDto, VendorOrderByDto, VendorFilterDto>> & Pick<ISearchSelectProps<VendorDto, VendorOrderByDto, VendorFilterDto>, "toSearch" | "toOption">;

export const PageSelect: FC<IPageSelectProps> = props => {
	return <SearchSelect<VendorDto, VendorOrderByDto, VendorFilterDto>
		search={doPage}
		{...props}
	/>;
};
