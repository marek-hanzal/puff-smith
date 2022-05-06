import {CottonDrawSelect} from "@/puff-smith/site/market/cotton/@module/form/CottonDrawSelect";
import {CottonVendorSelect} from "@/puff-smith/site/market/cotton/@module/form/CottonVendorSelect";
import {CottonsSourceFilter} from "@/sdk/api/cotton/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface ICottonFilterProps extends Partial<IFilterProps> {
}

export const CottonFilter: FC<ICottonFilterProps> = ({toFilter = filter => filter, toForm = values => values, ...props}) => {
	const onClear = () => {
	};

	return <CottonsSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.cotton"}
		onClear={onClear}
		toForm={(filter: any) => {
			filter = toForm(filter);
			return ({
				...filter,
				andDrawIds: filter?.AND?.map(({CottonDraw}: any = {}) => CottonDraw?.some?.drawId),
				orDrawIds: filter?.CottonDraw?.some?.drawId?.in as any,
			});
		}}
		toFilter={({andDrawIds, orDrawIds, ...values}) => toFilter({
			...values,
			AND: andDrawIds?.map((drawId: string) => ({
				CottonDraw: {
					some: {
						drawId,
					}
				}
			})),
			CottonDraw: {
				some: {
					drawId: {
						in: orDrawIds,
					},
				},
			},
		})}
		{...props}
	>
		<FormItem field={"vendorId"}>
			<CottonVendorSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"andDrawIds"} hasTooltip>
			<CottonDrawSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
		<FormItem field={"orDrawIds"} hasTooltip>
			<CottonDrawSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
	</CottonsSourceFilter>;
};
