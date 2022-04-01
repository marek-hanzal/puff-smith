import {FC} from "react";
import {AromasFilterProvider, AromasSourceSelect, IAromasSourceSelectProps} from "@/sdk/api/aroma/query";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma";

export interface IAromaSelectProps extends Partial<IAromasSourceSelectProps> {
}

export const AromaSelect: FC<IAromaSelectProps> = props => {
	return <AromasFilterProvider>
		<AromasSourceSelect
			showSearch
			toOption={aroma => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			{...props}
		/>
	</AromasFilterProvider>
}
