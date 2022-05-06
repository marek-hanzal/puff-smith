import {AtomizerDrawSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerDrawSelect";
import {AtomizerVendorSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerVendorSelect";
import {AtomizersSourceFilter} from "@/sdk/api/atomizer/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerFilterProps extends Partial<IFilterProps> {
}

export const AtomizerFilter: FC<IAtomizerFilterProps> = ({toFilter = filter => filter, toForm = values => values, ...props}) => {
	const onClear = () => {
	};

	return <AtomizersSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.atomizer"}
		onClear={onClear}
		toForm={(filter: any) => {
			filter = toForm(filter);
			return ({
				...filter,
				drawIds: filter?.AtomizerDraw?.some?.drawId?.in as any,
			});
		}}
		toFilter={({drawIds, ...values}) => toFilter({
			...values,
			AtomizerDraw: {
				some: {
					drawId: {
						in: drawIds,
					}
				}
			}
		})}
		{...props}
	>
		<FormItem field={"vendorId"}>
			<AtomizerVendorSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"drawIds"}>
			<AtomizerDrawSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
	</AtomizersSourceFilter>;
};
