import {WireDrawSelect} from "@/puff-smith/site/market/wire/@module/form/WireDrawSelect";
import {WireVendorSelect} from "@/puff-smith/site/market/wire/@module/form/WireVendorSelect";
import {WireSourceFilter} from "@/sdk/api/wire/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IWireFilterProps extends Partial<IFilterProps> {
}

export const WireFilter: FC<IWireFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const onClear = () => {
	};

	return <WireSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.wire"}
		onClear={onClear}
		toFilter={({andDrawIds, orDrawIds, ...values}) => toFilter({
			...values,
			AND: andDrawIds?.map((drawId: string) => ({
				WireDraw: {
					some: {
						drawId,
					}
				}
			})),
			WireDraw: {
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
			<WireVendorSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"andDrawIds"} hasTooltip>
			<WireDrawSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
		<FormItem field={"orDrawIds"} hasTooltip>
			<WireDrawSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
	</WireSourceFilter>;
};
