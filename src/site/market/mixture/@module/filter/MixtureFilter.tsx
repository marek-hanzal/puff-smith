import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MixtureDrawSelect} from "@/puff-smith/site/market/mixture/@module/form/MixtureDrawSelect";
import {AromaSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaSelect";
import {AromaTasteSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaTasteSelect";
import {AromaVendorSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaVendorSelect";
import {BaseSelect} from "@/puff-smith/site/shared/base/@module/form/BaseSelect";
import {BoosterSelect} from "@/puff-smith/site/shared/booster/@module/form/BoosterSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureRatioSelect";
import {MixtureMarketSourceControlProvider, MixtureMarketSourceFilter} from "@/sdk/api/mixture/market/query";
import {PercentageOutlined, QuestionOutlined} from "@ant-design/icons";
import {FormItem, IconText, IFilterProps} from "@leight-core/client";
import {Tabs} from "antd";
import {FC, useRef} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureFilterProps extends Partial<IFilterProps> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const {t} = useTranslation();
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
		drawerButtonProps={{
			width: 820,
		}}
		toFilter={({andDrawIds, orDrawIds, andTasteIds, orTasteIds, vendorId, ratio: unused, ...values}) => toFilter({
			...values,
			AND: andDrawIds?.map((drawId: string) => ({
				MixtureDraw: {
					some: {
						drawId,
					},
				},
			})),
			MixtureDraw: {
				some: {
					drawId: {
						in: orDrawIds,
					},
				},
			},
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
				],
				AromaTaste: {
					some: {
						tasteId: {
							in: orTasteIds,
						},
					},
				},
			},
			...ratio.current,
		})}
		{...props}
	>
		<MixtureMarketSourceControlProvider>
			<Tabs>
				<Tabs.TabPane forceRender key={"liquid"} tab={<IconText icon={<PercentageOutlined/>} text={"market.mixture.filter.liquid.tab"}/>}>
					<FormItem field={"aromaId"}>
						<AromaSelect
							allowClear
						/>
					</FormItem>
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
				</Tabs.TabPane>
				<Tabs.TabPane forceRender key={"source"} tab={<IconText icon={<LiquidIcon/>} text={"market.mixture.filter.source.tab"}/>}>
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
				</Tabs.TabPane>
				<Tabs.TabPane forceRender key={"misc"} tab={<IconText icon={<QuestionOutlined/>} text={"market.mixture.filter.misc.tab"}/>}>
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
						<MixtureDrawSelect
							mode={"multiple"}
							allowClear
						/>
					</FormItem>
					<FormItem field={"orDrawIds"} hasTooltip>
						<MixtureDrawSelect
							mode={"multiple"}
							allowClear
						/>
					</FormItem>
				</Tabs.TabPane>
			</Tabs>
		</MixtureMarketSourceControlProvider>
	</MixtureMarketSourceFilter>;
};
