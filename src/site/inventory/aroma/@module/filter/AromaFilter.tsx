import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {AromaTasteSelect} from "@/puff-smith/site/inventory/aroma/@module/form/AromaTasteSelect";
import {AromaVendorSelect} from "@/puff-smith/site/inventory/aroma/@module/form/AromaVendorSelect";
import {AromaProviderFilter} from "@/sdk/api/aroma/query";
import {FormContext, FormItem, IFilterProps, useFilterContext} from "@leight-core/client";
import {FC} from "react";

export interface IAromaFilterProps extends Partial<IFilterProps> {
}

export const AromaFilter: FC<IAromaFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();

	const onClear = () => {
	};

	return <AromaProviderFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.aroma"}
		onClear={onClear}
		toFilter={({andTasteIds, orTasteIds, ...values}) => toFilter({
			...values,
			AND: andTasteIds?.map((tasteId: string) => ({
				AromaTaste: {
					some: {
						tasteId,
					}
				}
			})),
			AromaTaste: {
				some: {
					tasteId: {
						in: orTasteIds,
					}
				}
			}
		})}
		{...props}
	>
		<FormContext.Consumer>
			{formContext => <>
				<TabAndOr
					name={"tasteIds"}
					orCondition={() => filterContext?.source?.orTasteIds}
					and={<FormItem field={"andTasteIds"} hasTooltip>
						<AromaTasteSelect
							allowClear
							mode={"multiple"}
							onChange={() => formContext.setValues({
								orTasteIds: undefined,
							})}
						/>
					</FormItem>}
					or={<FormItem field={"orTasteIds"} hasTooltip>
						<AromaTasteSelect
							allowClear
							mode={"multiple"}
							onChange={() => formContext.setValues({
								andTasteIds: undefined,
							})}
						/>
					</FormItem>}
				/>
				<FormItem field={"vendorId"}>
					<AromaVendorSelect
						allowClear
					/>
				</FormItem>
			</>}
		</FormContext.Consumer>
	</AromaProviderFilter>;
};
