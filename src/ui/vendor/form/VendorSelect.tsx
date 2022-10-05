import {
	IVendorSourceSelectProps,
	VendorSourceSelect
}           from "@/sdk/api/vendor/query";
import {FC} from "react";

export interface IVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const VendorSelect: FC<IVendorSelectProps> = props => {
	return <VendorSourceSelect
		showSearch
		allowClear
		toOption={vendor => ({
			value: vendor.id,
			label: vendor.name,
		})}
		{...props}
	/>;
};
