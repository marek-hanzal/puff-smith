import {ps} from "@/ps";
import {ISearchSelectProps, SearchSelect} from "@leight-core/leight";
import {FC} from "react";
import VendorFilterDto = ps.storage.vendor.VendorFilterDto;
import VendorOrderByDto = ps.storage.vendor.VendorOrderByDto;
import VendorDto = ps.vendor.VendorDto;

const doPage = ps.user.vendor.doPage;

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
