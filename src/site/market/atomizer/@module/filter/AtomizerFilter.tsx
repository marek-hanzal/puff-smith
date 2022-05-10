import {AtomizerDrawSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerDrawSelect";
import {AtomizerVendorSelect} from "@/puff-smith/site/market/atomizer/@module/form/AtomizerVendorSelect";
import {AtomizerSourceFilter} from "@/sdk/api/atomizer/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerFilterProps extends Partial<IFilterProps> {
}

export const AtomizerFilter: FC<IAtomizerFilterProps> = ({toFilter = filter => filter, ...props}) => {
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
		<FormItem field={"vendorId"}>
			<AtomizerVendorSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"andDrawIds"} hasTooltip>
			<AtomizerDrawSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
		<FormItem field={"orDrawIds"} hasTooltip>
			<AtomizerDrawSelect
				mode={"multiple"}
				allowClear
			/>
		</FormItem>
	</AtomizerSourceFilter>;
};
