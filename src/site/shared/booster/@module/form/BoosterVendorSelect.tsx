import {IVendorSourceSelectProps, VendorProviderControl, VendorSourceSelect} from "@/sdk/api/booster/vendor/query";
import {FC} from "react";

export interface IBoosterVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const BoosterVendorSelect: FC<IBoosterVendorSelectProps> = props => {
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
