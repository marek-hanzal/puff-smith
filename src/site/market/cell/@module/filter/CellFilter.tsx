import {CellTypeSelect} from "@/puff-smith/site/market/cell/@module/form/CellTypeSelect";
import {CellVendorSelect} from "@/puff-smith/site/market/cell/@module/form/CellVendorSelect";
import {CellSourceFilter} from "@/sdk/api/cell/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface ICellFilterProps extends Partial<IFilterProps> {
}

export const CellFilter: FC<ICellFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const onClear = () => {
	};

	return <CellSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.cell"}
		onClear={onClear}
		toFilter={({orTypeIds, ...values}) => toFilter({
			...values,
			typeId: {
				in: orTypeIds,
			},
		})}
		{...props}
	>
		<FormItem field={"vendorId"}>
			<CellVendorSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"orTypeIds"} hasTooltip>
			<CellTypeSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
	</CellSourceFilter>;
};
