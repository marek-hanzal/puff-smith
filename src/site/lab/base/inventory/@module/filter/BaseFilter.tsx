import {BaseRatioSelect} from "@/puff-smith/site/lab/base/inventory/@module/form/BaseRatioSelect";
import {BaseVendorSelect} from "@/puff-smith/site/lab/base/inventory/@module/form/BaseVendorSelect";
import {BasesSourceFilter} from "@/sdk/api/base/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC, useRef} from "react";

export interface IBaseFilterProps extends Partial<IFilterProps> {
}

export const BaseFilter: FC<IBaseFilterProps> = ({toFilter = filter => filter, toForm = values => values, ...props}) => {
	const ratio = useRef<{ pg: number, vg: number }>();

	const onClear = () => {
		ratio.current = undefined;
	};

	return <BasesSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.base"}
		onClear={onClear}
		toForm={filter => {
			filter = toForm(filter);
			return ({
				...filter,
				ratio: filter?.vg !== undefined ? `${filter.vg}/${filter.pg}` : undefined,
			});
		}}
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
		<FormItem field={"ratio"}>
			<BaseRatioSelect
				allowClear
				onClear={() => {
					ratio.current = undefined;
				}}
				onSelect={({entity}) => {
					ratio.current = {pg: entity.pg, vg: entity.vg};
				}}
			/>
		</FormItem>
		<FormItem field={"vendorId"}>
			<BaseVendorSelect
				allowClear
			/>
		</FormItem>
	</BasesSourceFilter>;
};
