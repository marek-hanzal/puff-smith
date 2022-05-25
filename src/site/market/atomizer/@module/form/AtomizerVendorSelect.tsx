import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/atomizer/vendor/query";
import {FC} from "react";

export interface IAtomizerVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const AtomizerVendorSelect: FC<IAtomizerVendorSelectProps> = props => {
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
