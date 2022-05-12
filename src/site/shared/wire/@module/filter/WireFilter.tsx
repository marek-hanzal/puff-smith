import {WireDrawSelect} from "@/puff-smith/site/shared/wire/@module/form/WireDrawSelect";
import {WireFiberSelect} from "@/puff-smith/site/shared/wire/@module/form/WireFiberSelect";
import {WireVendorSelect} from "@/puff-smith/site/shared/wire/@module/form/WireVendorSelect";
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
		toFilter={({andDrawIds, orDrawIds, andFiberIds, orFiberIds, ...values}) => toFilter({
			...values,
			AND: [].concat(
				andDrawIds?.map((drawId: string) => ({
					WireDraw: {
						some: {
							drawId,
						}
					}
				})),
				andFiberIds?.map((fiberId: string) => ({
					WireFiber: {
						some: {
							fiberId,
						}
					}
				}))
			),
			WireDraw: {
				some: {
					drawId: {
						in: orDrawIds,
					},
				},
			},
			WireFiber: {
				some: {
					fiberId: {
						in: orFiberIds,
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
		<FormItem field={"andFiberIds"} hasTooltip>
			<WireFiberSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
		<FormItem field={"orFiberIds"} hasTooltip>
			<WireFiberSelect
				mode={"multiple"}
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
