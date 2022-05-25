import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/cotton/vendor/query";
import {FC} from "react";

export interface ICottonVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const CottonVendorSelect: FC<ICottonVendorSelectProps> = props => {
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
