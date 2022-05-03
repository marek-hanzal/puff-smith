import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/aroma/inventory/aroma/vendor";
import {FC} from "react";

export interface IAromaVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const AromaVendorSelect: FC<IAromaVendorSelectProps> = props => {
	return <VendorSourceControlProvider>
		<VendorSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: item.name,
			})}
			{...props}
		/>
	</VendorSourceControlProvider>;
};
