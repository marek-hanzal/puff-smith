import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromasFilterProvider, AromasSourceSelect, IAromasSourceSelectProps} from "@/sdk/api/aroma/query";
import {FC} from "react";

export interface IAromaSelectProps extends Partial<IAromasSourceSelectProps> {
}

export const AromaSelect: FC<IAromaSelectProps> = props => {
	return <AromasFilterProvider>
		<AromasSourceSelect
			showSearch
			allowClear
			toOption={aroma => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			{...props}
		/>
	</AromasFilterProvider>;
};
