import {IVendorSourceSelectProps, VendorSourceSelect} from "@/sdk/api/mixture/inventory/mixture/vendor";
import {FC} from "react";

export interface IMixtureVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const MixtureVendorSelect: FC<IMixtureVendorSelectProps> = props => {
	return <VendorSourceSelect
		toOption={item => ({
			value: item.id,
			label: item.name,
		})}
		{...props}
	/>;
};
