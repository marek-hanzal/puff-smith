import {AromaTasteSelect} from "@/puff-smith/site/lab/aroma/inventory/@module/form/AromaTasteSelect";
import {AromaVendorSelect} from "@/puff-smith/site/lab/aroma/inventory/@module/form/AromaVendorSelect";
import {AromasSourceFilter} from "@/sdk/api/aroma/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IAromaFilterProps extends Partial<IFilterProps> {
}

export const AromaFilter: FC<IAromaFilterProps> = ({toFilter = filter => filter, toForm = values => values, ...props}) => {
	const onClear = () => {
	};

	return <AromasSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.aroma"}
		onClear={onClear}
		toForm={(filter: any) => {
			filter = toForm(filter);
			return ({
				...filter,
				tasteIds: filter?.aroma?.AromaTaste?.some?.tasteId?.in,
			});
		}}
		toFilter={({tasteIds, ...values}) => toFilter({
			...values,
			aroma: {
				AromaTaste: {
					some: {
						tasteId: {
							in: tasteIds,
						},
					},
				},
			},
		})}
		{...props}
	>
		<FormItem field={"tasteIds"}>
			<AromaTasteSelect
				allowClear
				mode={"multiple"}
			/>
		</FormItem>
		<FormItem field={"vendorId"}>
			<AromaVendorSelect
				allowClear
			/>
		</FormItem>
	</AromasSourceFilter>;
};
