import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/booster/inventory/booster/vendor";
import {FC} from "react";

export interface IBoosterVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const BoosterVendorSelect: FC<IBoosterVendorSelectProps> = props => {
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
