import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {CottonDrawSelect} from "@/puff-smith/site/market/cotton/@module/form/CottonDrawSelect";
import {CottonVendorSelect} from "@/puff-smith/site/market/cotton/@module/form/CottonVendorSelect";
import {CottonProviderControl, CottonProviderFilter} from "@/sdk/api/cotton/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {FC} from "react";

export interface ICottonFilterProps extends Partial<IFilterProps> {
}

export const CottonFilter: FC<ICottonFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	const onClear = () => {
	};

	return <CottonProviderFilter
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
		<CottonProviderControl>
			<FormContext.Consumer>
				{formContext => <>
					<FormItem field={"vendorId"}>
						<CottonVendorSelect
							allowClear
						/>
					</FormItem>
					<TabAndOr
						name={"drawIds"}
						orCondition={() => filterContext.source?.orDrawIds}
						and={<FormItem field={"andDrawIds"} hasTooltip>
							<CottonDrawSelect
								mode={"multiple"}
								allowClear
								onChange={() => formContext.setValues({
									orDrawIds: undefined,
								})}
							/>
						</FormItem>}
						or={<FormItem field={"orDrawIds"} hasTooltip>
							<CottonDrawSelect
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
		</CottonProviderControl>
	</CottonProviderFilter>;
};
