import {AromaVendorSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaVendorSelect";
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
		toForm={filter => {
			filter = toForm(filter);
			return ({
				...filter,
			});
		}}
		toFilter={values => toFilter({
			...values,
		})}
		{...props}
	>
		<FormItem field={"vendorId"}>
			<AromaVendorSelect
				allowClear
			/>
		</FormItem>
	</AromasSourceFilter>;
};
