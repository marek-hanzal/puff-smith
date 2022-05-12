import {IVendorSourceSelectProps, VendorSourceSelect} from "@/sdk/api/mixture/vendor/query";
import {FC} from "react";

export interface IMixtureVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const MixtureVendorSelect: FC<IMixtureVendorSelectProps> = props => {
	return <VendorSourceSelect
		showSearch
		toOption={vendor => ({
			label: vendor.name,
			value: vendor.id,
		})}
		{...props}
	/>;
};
