import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/base/vendor/query";
import {FC} from "react";

export interface IBaseVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const BaseVendorSelect: FC<IBaseVendorSelectProps> = props => {
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
