import {CottonDrawSelect} from "@/puff-smith/site/market/cotton/@module/form/CottonDrawSelect";
import {CottonVendorSelect} from "@/puff-smith/site/market/cotton/@module/form/CottonVendorSelect";
import {CottonSourceFilter} from "@/sdk/api/cotton/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface ICottonFilterProps extends Partial<IFilterProps> {
}

export const CottonFilter: FC<ICottonFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const onClear = () => {
	};

	return <CottonSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.cotton"}
		onClear={onClear}
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
	</CottonSourceFilter>;
};
