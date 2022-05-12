import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/cotton/vendor/query";
import {FC} from "react";

export interface ICottonVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const CottonVendorSelect: FC<ICottonVendorSelectProps> = props => {
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
