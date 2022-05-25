import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/base/inventory/base/vendor";
import {FC} from "react";

export interface IBaseVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const BaseVendorSelect: FC<IBaseVendorSelectProps> = props => {
	return <VendorProviderControl>
		<VendorSourceSelect
			toOption={item => ({
				value: item.id,
				label: item.name,
			})}
			{...props}
		/>
	</VendorProviderControl>;
};
