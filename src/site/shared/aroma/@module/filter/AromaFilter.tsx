import {AromaTasteSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaTasteSelect";
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
		toForm={(filter: any) => {
			filter = toForm(filter);
			return ({
				...filter,
				andTasteIds: filter?.AND?.map(({AromaTaste}: any = {}) => AromaTaste?.some?.tasteId),
				orTasteIds: filter?.AromaTaste?.some?.tasteId?.in,
			});
		}}
		toFilter={({orTasteIds, andTasteIds, ...values}) => toFilter({
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
		<FormItem field={"andTasteIds"} hasTooltip>
			<AromaTasteSelect
				allowClear
				mode={"multiple"}
			/>
		</FormItem>
		<FormItem field={"orTasteIds"} hasTooltip>
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
