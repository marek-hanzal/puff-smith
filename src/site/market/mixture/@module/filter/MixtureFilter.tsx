import {AromaDrawSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaDrawSelect";
import {AromaSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaSelect";
import {AromaTasteSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaTasteSelect";
import {AromaVendorSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaVendorSelect";
import {MixtureMarketSourceControlProvider, MixtureMarketSourceFilter} from "@/sdk/api/mixture/market/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC} from "react";

export interface IMixtureFilterProps extends Partial<IFilterProps> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const onClear = () => {
	};

	return <MixtureMarketSourceFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.mixture"}
		onClear={onClear}
		toFilter={({andDrawIds, orDrawIds, andTasteIds, orTasteIds, vendorId, ...values}) => toFilter({
			...values,
			aroma: {
				vendorId,
				OR: [
					{
						AND: andTasteIds?.map((tasteId: string) => ({
							AromaTaste: {
								some: {
									tasteId,
								},
							},
						}))
					},
					{
						AND: orDrawIds?.map((drawId: string) => ({
							AromaDraw: {
								some: {
									drawId,
								},
							},
						}))
					}
				],
				AromaTaste: {
					some: {
						tasteId: {
							in: orTasteIds,
						},
					},
				},
				AromaDraw: {
					some: {
						drawId: {
							in: orDrawIds,
						},
					},
				},
			}
		})}
		{...props}
	>
		<MixtureMarketSourceControlProvider>
			<FormItem field={"aromaId"}>
				<AromaSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"vendorId"}>
				<AromaVendorSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"andTasteIds"} hasTooltip>
				<AromaTasteSelect
					mode={"multiple"}
					allowClear
				/>
			</FormItem>
			<FormItem field={"orTasteIds"} hasTooltip>
				<AromaTasteSelect
					mode={"multiple"}
					allowClear
				/>
			</FormItem>
			<FormItem field={"andDrawIds"} hasTooltip>
				<AromaDrawSelect
					mode={"multiple"}
					allowClear
				/>
			</FormItem>
			<FormItem field={"orDrawIds"} hasTooltip>
				<AromaDrawSelect
					mode={"multiple"}
					allowClear
				/>
			</FormItem>
		</MixtureMarketSourceControlProvider>
	</MixtureMarketSourceFilter>;
};
