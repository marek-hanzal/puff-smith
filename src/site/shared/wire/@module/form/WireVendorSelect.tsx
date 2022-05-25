import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/wire/vendor/query";
import {FC} from "react";

export interface IWireVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const WireVendorSelect: FC<IWireVendorSelectProps> = props => {
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
