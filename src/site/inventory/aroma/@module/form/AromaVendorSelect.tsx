import {IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {AromaVendorProviderControl, AromaVendorSourceSelect, IAromaVendorSourceSelectProps} from "@/sdk/api/inventory/aroma/vendor/query";
import {IQueryFilter} from "@leight-core/api";
import {FC} from "react";

export interface IAromaVendorSelectProps extends Partial<IAromaVendorSourceSelectProps> {
	applyFilter?: IQueryFilter<IAromaQuery>;
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
