import {AromaVendorProviderControl, AromaVendorSourceSelect, IAromaVendorSourceSelectProps} from "@/sdk/api/inventory/aroma/vendor/query";
import {FC} from "react";

export interface IAromaVendorSelectProps extends Partial<IAromaVendorSourceSelectProps> {
}

export const AromaVendorSelect: FC<IAromaVendorSelectProps> = props => {
	return <AromaVendorProviderControl>
		<AromaVendorSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: item.name,
			})}
			{...props}
		/>
	</AromaVendorProviderControl>;
};
