import {IPageSelectProps, PageSelect} from "@/sdk/user/vendor";
import {FC} from "react";

export interface IVendorSelectProps extends Partial<IPageSelectProps> {
	category: string;
}

export const VendorSelect: FC<IVendorSelectProps> = ({category, ...props}) => {
	return <PageSelect
		toSearch={fulltext => ({page: 0, size: 10, filter: {fulltext, category}, orderBy: {name: true}})}
		toOption={vendor => ({value: vendor.id, label: vendor.name})}
		{...props}
	/>;
};
