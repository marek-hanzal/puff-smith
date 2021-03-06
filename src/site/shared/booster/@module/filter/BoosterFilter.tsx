import {BoosterNicotineSelect} from "@/puff-smith/site/shared/booster/@module/form/BoosterNicotineSelect";
import {BoosterRatioSelect} from "@/puff-smith/site/shared/booster/@module/form/BoosterRatioSelect";
import {BoosterSelect} from "@/puff-smith/site/shared/booster/@module/form/BoosterSelect";
import {BoosterVendorSelect} from "@/puff-smith/site/shared/booster/@module/form/BoosterVendorSelect";
import {BoosterProviderFilter} from "@/sdk/api/booster/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC, useRef} from "react";

export interface IBoosterFilterProps extends Partial<IFilterProps> {
}

export const BoosterFilter: FC<IBoosterFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const ratio = useRef<{ pg: number, vg: number }>();

	const onClear = () => {
		ratio.current = undefined;
	};

	return <BoosterProviderFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.booster"}
		onClear={onClear}
		toFilter={values => toFilter({
			...values,
			/**
			 * We're sending all values from the form, thus removing ones not belonging to the Filter.
			 */
			ratio: undefined,
			...ratio.current,
		})}
		{...props}
	>
		<FormItem field={"id"}>
			<BoosterSelect/>
		</FormItem>
		<FormItem field={"ratio"}>
			<BoosterRatioSelect
				allowClear
				onClear={() => {
					ratio.current = undefined;
				}}
				onSelect={({entity}) => {
					ratio.current = {pg: entity.pg, vg: entity.vg};
				}}
			/>
		</FormItem>
		<FormItem field={"nicotine"}>
			<BoosterNicotineSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"vendorId"}>
			<BoosterVendorSelect
				allowClear
			/>
		</FormItem>
	</BoosterProviderFilter>;
};
