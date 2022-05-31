import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterProviderControl, BoosterSourceSelect, IBoosterSourceSelectProps} from "@/sdk/api/lab/liquid/booster/query";
import {IQueryFilter} from "@leight-core/api";
import {FC} from "react";

export interface ILiquidBoosterSelectProps extends Partial<IBoosterSourceSelectProps> {
	applyFilter?: IQueryFilter<ILiquidQuery>;
}

export const LiquidBoosterSelect: FC<ILiquidBoosterSelectProps> = ({applyFilter, ...props}) => {
	return <BoosterProviderControl
		applyFilter={applyFilter}
	>
		<BoosterSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: <BoosterNameInline booster={item}/>
			})}
			{...props}
		/>
	</BoosterProviderControl>;
};
