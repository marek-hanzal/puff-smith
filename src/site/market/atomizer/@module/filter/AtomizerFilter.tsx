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
				andDrawIds: filter?.AND?.map(({AtomizerDraw}: any = {}) => AtomizerDraw?.some?.drawId),
				orDrawIds: filter?.AtomizerDraw?.some?.drawId?.in as any,
			});
		}}
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
	</AtomizersSourceFilter>;
};
