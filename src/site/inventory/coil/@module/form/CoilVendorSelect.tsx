import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/inventory/coil/vendor/query";
import {FC} from "react";

export interface ICoilVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const CoilVendorSelect: FC<ICoilVendorSelectProps> = props => {
	return <VendorProviderControl>
		<VendorSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: item.name,
			})}
			{...props}
		/>
	</VendorProviderControl>;
};
