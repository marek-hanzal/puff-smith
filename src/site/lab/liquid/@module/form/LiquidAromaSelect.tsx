import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AromaProviderControl, AromaSourceSelect, IAromaSourceSelectProps} from "@/sdk/api/lab/liquid/aroma/query";
import {IQueryFilter} from "@leight-core/api";
import {FC} from "react";

export interface ILiquidAromaSelectProps extends Partial<IAromaSourceSelectProps> {
	applyFilter?: IQueryFilter<ILiquidQuery>;
}

export const LiquidAromaSelect: FC<ILiquidAromaSelectProps> = ({applyFilter, ...props}) => {
	return <AromaProviderControl
		applyFilter={applyFilter}
	>
		<AromaSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: <AromaNameInline aroma={item}/>
			})}
			{...props}
		/>
	</AromaProviderControl>;
};
