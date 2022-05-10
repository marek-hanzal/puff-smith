import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaFilterProvider, AromaSourceSelect, IAromaSourceSelectProps} from "@/sdk/api/aroma/query";
import {FC} from "react";

export interface IAromaSelectProps extends Partial<IAromaSourceSelectProps> {
}

export const AromaSelect: FC<IAromaSelectProps> = props => {
	return <AromaFilterProvider>
		<AromaSourceSelect
			showSearch
			allowClear
			toOption={aroma => ({
				label: <AromaNameInline aroma={aroma}/>,
				value: aroma.id,
			})}
			{...props}
		/>
	</AromaFilterProvider>;
};
