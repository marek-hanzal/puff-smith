import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {ModCellSelect} from "@/puff-smith/site/market/mod/@module/form/ModCellSelect";
import {ModVendorSelect} from "@/puff-smith/site/market/mod/@module/form/ModVendorSelect";
import {ModSourceControlProvider, ModSourceFilter} from "@/sdk/api/mod/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {FC} from "react";

export interface IModFilterProps extends Partial<IFilterProps> {
}

export const ModFilter: FC<IModFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	const onClear = () => {
	};

	return <ModSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.mod"}
		onClear={onClear}
		toFilter={({andCellIds, orCellIds, ...values}) => toFilter({
			...values,
			AND: andCellIds?.map((cellId: string) => ({
				ModCell: {
					some: {
						cellId,
					}
				}
			})),
			ModCell: {
				some: {
					cellId: {
						in: orCellIds,
					},
				},
			},
		})}
		{...props}
	>
		<ModSourceControlProvider>
			<FormContext.Consumer>
				{formContext => <>
					<FormItem field={"vendorId"}>
						<ModVendorSelect
							allowClear
						/>
					</FormItem>
					<TabAndOr
						name={"cellIds"}
						orCondition={() => filterContext.source?.orDrawIds}
						and={<FormItem field={"andCellIds"} hasTooltip>
							<ModCellSelect
								mode={"multiple"}
								allowClear
								onChange={() => formContext.setValues({
									orCellIds: undefined,
								})}
							/>
						</FormItem>}
						or={<FormItem field={"orCellIds"} hasTooltip>
							<ModCellSelect
								mode={"multiple"}
								allowClear
								onChange={() => formContext.setValues({
									andCellIds: undefined,
								})}
							/>
						</FormItem>}
					/>
				</>}
			</FormContext.Consumer>
		</ModSourceControlProvider>
	</ModSourceFilter>;
};
