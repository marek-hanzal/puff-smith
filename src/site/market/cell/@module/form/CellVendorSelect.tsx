import {IVendorSourceSelectProps, VendorSourceControlProvider, VendorSourceSelect} from "@/sdk/api/cell/vendor/query";
import {FC} from "react";

export interface ICellVendorSelectProps extends Partial<IVendorSourceSelectProps> {
}

export const CellVendorSelect: FC<ICellVendorSelectProps> = props => {
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
