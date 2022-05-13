import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {AtomizerDrawSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerDrawSelect";
import {AtomizerVendorSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerVendorSelect";
import {AtomizerSourceControlProvider, AtomizerSourceFilter} from "@/sdk/api/atomizer/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerFilterProps extends Partial<IFilterProps> {
}

export const AtomizerFilter: FC<IAtomizerFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	const onClear = () => {
	};

	return <AtomizerSourceFilter
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
		<AtomizerSourceControlProvider>
			<FormContext.Consumer>
				{formContext => <>
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
		</AtomizerSourceControlProvider>
	</AtomizerSourceFilter>;
};
