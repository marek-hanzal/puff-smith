import {LiquidAromaSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidAromaSelect";
import {LiquidBaseSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidBaseSelect";
import {LiquidBoosterSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidBoosterSelect";
import {ILiquidSourceFilterProps, LiquidSourceControlProvider, LiquidSourceFilter} from "@/sdk/api/liquid/query";
import {FormItem} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidFilterProps extends Partial<ILiquidSourceFilterProps> {
}

export const LiquidFilter: FC<ILiquidFilterProps> = props => {
	return <LiquidSourceFilter
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
		<LiquidSourceControlProvider>
			<FormItem field={"aromaId"}>
				<LiquidAromaSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"boosterId"}>
				<LiquidBoosterSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"baseId"}>
				<LiquidBaseSelect
					allowClear
				/>
			</FormItem>
		</LiquidSourceControlProvider>
	</LiquidSourceFilter>;
};
