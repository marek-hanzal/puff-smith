import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {CoilDrawSelect} from "@/puff-smith/site/inventory/coil/@module/form/CoilDrawSelect";
import {CoilSelect} from "@/puff-smith/site/inventory/coil/@module/form/CoilSelect";
import {CoilVendorSelect} from "@/puff-smith/site/inventory/coil/@module/form/CoilVendorSelect";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {CoilInventoryProviderFilter} from "@/sdk/api/inventory/coil/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {InputNumber} from "antd";
import {FC} from "react";

export interface ICoilFilterProps extends Partial<IFilterProps> {
}

export const CoilFilter: FC<ICoilFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	return <CoilInventoryProviderFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.coil"}
		toFilter={({andDrawIds, orDrawIds, vendorId, materialIds, ...values}) => toFilter({
			...values,
			wire: {
				vendorId,
				WireFiber: {
					some: {
						fiber: {
							materialId: {
								in: materialIds,
							},
						}
					},
				},
			},
			AND: andDrawIds?.map((drawId: string) => ({
				CoilDraw: {
					some: {
						drawId,
					}
				}
			})),
			CoilDraw: {
				some: {
					drawId: {
						in: orDrawIds,
					},
				},
			},
		})}
		{...props}
	>
		<FormContext.Consumer>
			{formContext => <>
				<FormItem field={"id"}>
					<CoilSelect
						allowClear
					/>
				</FormItem>
				<FormItem field={"size"}>
					<InputNumber min={0.15} max={1} step={0.05} style={{width: "100%"}}/>
				</FormItem>
				<FormItem field={"wraps"}>
					<InputNumber min={3} max={16} step={1} style={{width: "100%"}}/>
				</FormItem>
				<FormItem field={"materialIds"}>
					<TagSelect
						allowClear
						mode={"multiple"}
						applyFilter={{
							group: "material",
						}}
					/>
				</FormItem>
				<FormItem field={"vendorId"}>
					<CoilVendorSelect
						allowClear
					/>
				</FormItem>
				<TabAndOr
					name={"drawIds"}
					orCondition={() => filterContext.source?.orDrawIds}
					and={<FormItem field={"andDrawIds"} hasTooltip>
						<CoilDrawSelect
							mode={"multiple"}
							allowClear
							onChange={() => formContext.setValues({
								orDrawIds: undefined,
							})}
						/>
					</FormItem>}
					or={<FormItem field={"orDrawIds"} hasTooltip>
						<CoilDrawSelect
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
	</CoilInventoryProviderFilter>;
};
