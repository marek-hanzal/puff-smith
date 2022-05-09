import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/wire/vendor/query";
import {FC} from "react";

export interface IWireVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const WireVendorSelect: FC<IWireVendorSelectProps> = props => {
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
