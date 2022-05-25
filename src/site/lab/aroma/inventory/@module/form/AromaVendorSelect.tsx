import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/aroma/inventory/aroma/vendor";
import {FC} from "react";

export interface IAromaVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const AromaVendorSelect: FC<IAromaVendorSelectProps> = props => {
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
