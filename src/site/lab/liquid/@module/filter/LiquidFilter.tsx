import {LiquidAromaSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidAromaSelect";
import {LiquidBaseSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidBaseSelect";
import {LiquidBoosterSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidBoosterSelect";
import {ILiquidProviderFilterProps, LiquidProviderControl, LiquidProviderFilter} from "@/sdk/api/lab/liquid/query";
import {FormItem} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidFilterProps extends Partial<ILiquidProviderFilterProps> {
}

export const LiquidFilter: FC<ILiquidFilterProps> = props => {
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
		<LiquidProviderControl>
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
		</LiquidProviderControl>
	</LiquidProviderFilter>;
};
