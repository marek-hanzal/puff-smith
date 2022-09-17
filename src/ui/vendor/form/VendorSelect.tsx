import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/vendor/query";
import {FC} from "react";

export interface IVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const VendorSelect: FC<IVendorSelectProps> = props => {
	return <VendorProviderControl
		defaultSize={10}
	>
		<VendorSourceSelect
			showSearch
			allowClear
			toOption={vendor => ({
				value: vendor.id,
				label: vendor.name,
			})}
			{...props}
		/>
	</VendorProviderControl>;
};
