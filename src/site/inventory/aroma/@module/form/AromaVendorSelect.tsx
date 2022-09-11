import {AromaVendorProviderControl, AromaVendorSourceSelect, IAromaVendorSourceSelectProps} from "@/sdk/api/inventory/aroma/vendor/query";
import {ComponentProps, FC} from "react";

export interface IAromaVendorSelectProps extends Partial<IAromaVendorSourceSelectProps> {
	applyFilter?: ComponentProps<typeof AromaVendorProviderControl>["applyFilter"];
}

export const AromaVendorSelect: FC<IAromaVendorSelectProps> = ({applyFilter, ...props}) => {
	return <AromaVendorProviderControl
		applyFilter={applyFilter}
	>
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
