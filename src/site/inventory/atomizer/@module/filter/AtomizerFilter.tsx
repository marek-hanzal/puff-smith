import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {AtomizerDrawSelect} from "@/puff-smith/site/inventory/atomizer/@module/form/AtomizerDrawSelect";
import {AtomizerSelect} from "@/puff-smith/site/inventory/atomizer/@module/form/AtomizerSelect";
import {AtomizerVendorSelect} from "@/puff-smith/site/inventory/atomizer/@module/form/AtomizerVendorSelect";
import {AtomizerInventoryProviderFilter} from "@/sdk/api/inventory/atomizer/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerFilterProps extends Partial<IFilterProps> {
}

export const AtomizerFilter: FC<IAtomizerFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	const onClear = () => {
	};

	return <AtomizerInventoryProviderFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.atomizer"}
		onClear={onClear}
		toFilter={({andDrawIds, orDrawIds, ...values}) => toFilter({
			...values,
			AND: andDrawIds?.map((drawId: string) => ({
				AtomizerDraw: {
					some: {
						drawId,
					}
				}
			})),
			AtomizerDraw: {
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
					<AtomizerSelect
						allowClear
					/>
				</FormItem>
				<FormItem field={"vendorId"}>
					<AtomizerVendorSelect
						allowClear
					/>
				</FormItem>
				<TabAndOr
					name={"drawIds"}
					orCondition={() => filterContext.source?.orDrawIds}
					and={<FormItem field={"andDrawIds"} hasTooltip>
						<AtomizerDrawSelect
							mode={"multiple"}
							allowClear
							onChange={() => formContext.setValues({
								orDrawIds: undefined,
							})}
						/>
					</FormItem>}
					or={<FormItem field={"orDrawIds"} hasTooltip>
						<AtomizerDrawSelect
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
	</AtomizerInventoryProviderFilter>;
};
