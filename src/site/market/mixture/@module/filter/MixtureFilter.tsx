import {AromaDrawSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaDrawSelect";
import {AromaSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaSelect";
import {AromaTasteSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaTasteSelect";
import {AromaVendorSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaVendorSelect";
import {BaseSelect} from "@/puff-smith/site/shared/base/@module/form/BaseSelect";
import {BoosterSelect} from "@/puff-smith/site/shared/booster/@module/form/BoosterSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureRatioSelect";
import {MixtureMarketSourceControlProvider, MixtureMarketSourceFilter} from "@/sdk/api/mixture/market/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC, useRef} from "react";

export interface IMixtureFilterProps extends Partial<IFilterProps> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const ratio = useRef<{ pgToRound: number, vgToRound: number }>();

	const onClear = () => {
		ratio.current = undefined;
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
			},
			...ratio.current,
		})}
		{...props}
	>
		<MixtureMarketSourceControlProvider>
			<FormItem field={"nicotineToRound"}>
				<MixtureNicotineSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"ratio"}>
				<MixtureRatioSelect
					allowClear
					onClear={() => {
						ratio.current = undefined;
					}}
					onSelect={({entity}) => {
						ratio.current = {pgToRound: entity.pg, vgToRound: entity.vg};
					}}
				/>
			</FormItem>
			<FormItem field={"aromaId"}>
				<AromaSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"boosterId"}>
				<BoosterSelect
					allowClear
				/>
			</FormItem>
			<FormItem field={"baseId"}>
				<BaseSelect
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
