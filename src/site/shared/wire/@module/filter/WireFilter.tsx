import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {WireDrawSelect} from "@/puff-smith/site/shared/wire/@module/form/WireDrawSelect";
import {WireFiberSelect} from "@/puff-smith/site/shared/wire/@module/form/WireFiberSelect";
import {WireVendorSelect} from "@/puff-smith/site/shared/wire/@module/form/WireVendorSelect";
import {WireProviderControl, WireProviderFilter} from "@/sdk/api/wire/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IWireFilterProps extends Partial<IFilterProps> {
}

export const WireFilter: FC<IWireFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	const onClear = () => {
	};

	return <WireProviderFilter
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
		<WireProviderControl>
			<FormContext.Consumer>
				{formContext => <>
					<FormItem field={"vendorId"}>
						<WireVendorSelect
							allowClear
						/>
					</FormItem>
					<FormItem field={"orFiberIds"} hasTooltip>
						<WireFiberSelect
							mode={"multiple"}
							allowClear
							onChange={() => formContext.setValues({
								andFiberIds: undefined,
							})}
						/>
					</FormItem>
					<Divider/>
					<TabAndOr
						name={"drawIds"}
						orCondition={() => filterContext.source?.orDrawIds}
						and={<FormItem field={"andDrawIds"} hasTooltip>
							<WireDrawSelect
								mode={"multiple"}
								allowClear
								onChange={() => formContext.setValues({
									orDrawIds: undefined,
								})}
							/>
						</FormItem>}
						or={<FormItem field={"orDrawIds"} hasTooltip>
							<WireDrawSelect
								mode={"multiple"}
								allowClear
								onChange={() => formContext.setValues({
									andDrawIds: undefined,
								})}
							/>
						</FormItem>}
					/>
				</>}
			</FormContext.Consumer>
		</WireProviderControl>
	</WireProviderFilter>;
};
