import {AromaInventoryList} from "@/puff-smith/site/lab/aroma/inventory/@module/list/AromaInventoryList";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaInventorySourceControlProvider, AromaInventorySourceSelect, IAromaInventorySourceSelectProps} from "@/sdk/api/aroma/inventory/query";
import {FC} from "react";

export interface IAromaInventorySelectProps extends Partial<IAromaInventorySourceSelectProps> {
}

export const AromaInventorySelect: FC<IAromaInventorySelectProps> = props => {
	return <AromaInventorySourceControlProvider>
		<AromaInventorySourceSelect
			showSearch
			allowClear
			toOption={({aroma}) => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			selectionList={() => <AromaInventoryList/>}
			{...props}
		/>
	</AromaInventorySourceControlProvider>;
};
