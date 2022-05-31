import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {LiquidAromaSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidAromaSelect";
import {LiquidBaseSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidBaseSelect";
import {LiquidBoosterSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidBoosterSelect";
import {ILiquidProviderFilterProps, LiquidProviderFilter} from "@/sdk/api/lab/liquid/query";
import {IQueryFilter} from "@leight-core/api";
import {FormItem} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidFilterProps extends Partial<ILiquidProviderFilterProps> {
	applyFilter?: IQueryFilter<ILiquidQuery>;
}

export const LiquidFilter: FC<ILiquidFilterProps> = ({applyFilter, ...props}) => {
	return <LiquidProviderFilter
		spaceProps={{
			size: 0,
		}}
		toFilter={({aromaId, boosterId, baseId, ...values}) => ({
			...values,
			mixture: {
				aromaId,
				boosterId,
				baseId,
			},
		})}
		{...props}
	>
		<FormItem field={"aromaId"}>
			<LiquidAromaSelect
				allowClear
				applyFilter={applyFilter}
			/>
		</FormItem>
		<FormItem field={"boosterId"}>
			<LiquidBoosterSelect
				allowClear
				applyFilter={applyFilter}
			/>
		</FormItem>
		<FormItem field={"baseId"}>
			<LiquidBaseSelect
				allowClear
				applyFilter={applyFilter}
			/>
		</FormItem>
	</LiquidProviderFilter>;
};
