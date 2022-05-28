import {IVendorSourceSelectProps, VendorSourceSelect} from "@/sdk/api/inventory/mixture/vendor/query";
import {FC} from "react";

export interface IMixtureVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const MixtureVendorSelect: FC<IMixtureVendorSelectProps> = props => {
	return <VendorSourceSelect
		showSearch
		toOption={item => ({
			value: item.id,
			label: item.name,
		})}
		{...props}
	/>;
};
