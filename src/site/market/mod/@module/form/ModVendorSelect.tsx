import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/mod/vendor/query";
import {FC} from "react";

export interface IModVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const ModVendorSelect: FC<IModVendorSelectProps> = props => {
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
