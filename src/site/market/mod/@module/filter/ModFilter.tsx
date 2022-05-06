import {ModCellSelect} from "@/puff-smith/site/market/mod/@module/form/ModCellSelect";
import {ModVendorSelect} from "@/puff-smith/site/market/mod/@module/form/ModVendorSelect";
import {ModsSourceFilter} from "@/sdk/api/mod/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IModFilterProps extends Partial<IFilterProps> {
}

export const ModFilter: FC<IModFilterProps> = ({toFilter = filter => filter, toForm = values => values, ...props}) => {
	const onClear = () => {
	};

	return <ModsSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.mod"}
		onClear={onClear}
		toForm={(filter: any) => {
			filter = toForm(filter);
			return ({
				...filter,
				andCellIds: filter?.AND?.map(({ModCell}: any = {}) => ModCell?.some?.cellId),
				orCellIds: filter?.ModCell?.some?.cellId?.in as any,
			});
		}}
		toFilter={({andCellIds, orCellIds, ...values}) => toFilter({
			...values,
			AND: andCellIds?.map((cellId: string) => ({
				ModCell: {
					some: {
						cellId,
					}
				}
			})),
			ModCell: {
				some: {
					cellId: {
						in: orCellIds,
					},
				},
			},
		})}
		{...props}
	>
		<FormItem field={"vendorId"}>
			<ModVendorSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"andCellIds"} hasTooltip>
			<ModCellSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
		<FormItem field={"orCellIds"} hasTooltip>
			<ModCellSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
	</ModsSourceFilter>;
};
