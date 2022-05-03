import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/base/inventory/base/vendor";
import {FC} from "react";

export interface IBaseVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const BaseVendorSelect: FC<IBaseVendorSelectProps> = props => {
	return <VendorSourceControlProvider>
		<VendorSourceSelect
			toOption={item => ({
				value: item.id,
				label: item.name,
			})}
			{...props}
		/>
	</VendorSourceControlProvider>;
};
