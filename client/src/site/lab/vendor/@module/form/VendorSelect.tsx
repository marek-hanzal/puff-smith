import {IVendorsSourceSelectProps, VendorsSourceSelect} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";

export interface IVendorSelectProps extends Partial<IVendorsSourceSelectProps> {
}

export const VendorSelect: FC<IVendorSelectProps> = props => {
	return <VendorsSourceSelect
		showSearch
		toOption={vendor => ({value: vendor.id, label: vendor.name})}
		{...props}
	/>
}
