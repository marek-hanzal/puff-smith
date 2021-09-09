import {doPage, VendorDto, VendorFilterDto, VendorOrderByDto} from "@/ps/sdk/vendor";
import {ISearchSelectProps, SearchSelect} from "@leight-core/leight";
import {FC} from "react";

export interface IVendorSelectProps extends Partial<ISearchSelectProps<VendorDto, VendorOrderByDto, VendorFilterDto>> {
	category: string;
}

export const VendorSelect: FC<IVendorSelectProps> = ({category, ...props}) => {
	return <SearchSelect<VendorDto, VendorOrderByDto, VendorFilterDto>
		search={doPage}
		toSearch={fulltext => ({page: 0, size: 10, filter: {fulltext, category}, orderBy: {name: true}})}
		toOption={vendor => ({value: vendor.id, label: vendor.name})}
		{...props}
	/>;
};
