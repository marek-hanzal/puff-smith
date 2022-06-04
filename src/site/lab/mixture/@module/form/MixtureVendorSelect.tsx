import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/inventory/mixture/vendor/query";
import {ComponentProps, FC} from "react";

export interface IMixtureVendorSelectProps extends Partial<IVendorSourceSelectProps> {
	control?: ComponentProps<typeof VendorProviderControl>;
}

export const MixtureVendorSelect: FC<IMixtureVendorSelectProps> = ({control, ...props}) => {
	return <VendorProviderControl
		{...control}
	>
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
