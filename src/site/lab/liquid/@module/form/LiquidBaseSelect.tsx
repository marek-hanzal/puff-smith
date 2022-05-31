import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseProviderControl, BaseSourceSelect, IBaseSourceSelectProps} from "@/sdk/api/lab/liquid/base/query";
import {IQueryFilter} from "@leight-core/api";
import {FC} from "react";

export interface ILiquidBaseSelectProps extends Partial<IBaseSourceSelectProps> {
	applyFilter?: IQueryFilter<ILiquidQuery>;
}

export const LiquidBaseSelect: FC<ILiquidBaseSelectProps> = ({applyFilter, ...props}) => {
	return <BaseProviderControl
		applyFilter={applyFilter}
	>
		<BaseSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: <BaseNameInline base={item}/>
			})}
			{...props}
		/>
	</BaseProviderControl>;
};
