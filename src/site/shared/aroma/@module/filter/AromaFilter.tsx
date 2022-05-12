import {AromaSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaSelect";
import {AromaTasteSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaTasteSelect";
import {AromaVendorSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaVendorSelect";
import {AromaSourceFilter} from "@/sdk/api/aroma/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IAromaFilterProps extends Partial<IFilterProps> {
}

export const AromaFilter: FC<IAromaFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const onClear = () => {
	};

	return <AromaSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.aroma"}
		onClear={onClear}
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
		<FormItem field={"id"} hasTooltip>
			<AromaSelect
				allowClear
			/>
		</FormItem>
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
	</AromaSourceFilter>;
};
