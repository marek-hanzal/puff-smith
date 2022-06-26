import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {AtomizerDrawSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerDrawSelect";
import {AtomizerVendorSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerVendorSelect";
import {AtomizerProviderFilter} from "@/sdk/api/atomizer/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {FC} from "react";

export type IIAtomizerFilterPropsExclude = "vendorId";

export interface IAtomizerFilterProps extends Partial<IFilterProps> {
	exclude?: IIAtomizerFilterPropsExclude[];
}

export const AtomizerFilter: FC<IAtomizerFilterProps> = ({exclude, toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	const onClear = () => {
	};

	return <AtomizerProviderFilter
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
				{!exclude?.includes("vendorId") && <FormItem field={"vendorId"}>
					<AtomizerVendorSelect
						allowClear
					/>
				</FormItem>}
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
	</AtomizerProviderFilter>;
};
