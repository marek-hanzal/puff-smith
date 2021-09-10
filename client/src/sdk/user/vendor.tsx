import {FC} from "react";
import {useDataContext, IDataContextProviderProps, DataContextProvider, ISearchSelectProps, SearchSelect} from "@leight-core/leight";
import {createPost} from "@leight-core/leight";
import {PageRequestDto} from "@/sdk/leight"
import {PageResponseDto} from "@/sdk/leight"

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

export const usePageData = () => useDataContext<VendorDto, VendorOrderByDto, VendorFilterDto>()

export interface IPageDataProps extends Partial<IDataContextProviderProps<VendorDto, VendorOrderByDto, VendorFilterDto>> {
}

export const PageData: FC<IPageDataProps> = ({children, ...props}) => {
	return <DataContextProvider<VendorDto, VendorOrderByDto, VendorFilterDto>
		fetch={doPage}
		{...props}
	>
		{children}
	</DataContextProvider>;
}

export type IPageSelectProps = Partial<ISearchSelectProps<VendorDto, VendorOrderByDto, VendorFilterDto>> & Pick<ISearchSelectProps<VendorDto, VendorOrderByDto, VendorFilterDto>, "toSearch" | "toOption">;

export const PageSelect: FC<IPageSelectProps> = props => {
	return <SearchSelect<VendorDto, VendorOrderByDto, VendorFilterDto>
		search={doPage}
		{...props}
	/>
}