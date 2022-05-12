import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {AromaTasteSelect} from "@/puff-smith/site/shared/aroma/@module/form/AromaTasteSelect";
import {MixtureAromaSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureAromaSelect";
import {MixtureBaseSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureBaseSelect";
import {MixtureBoosterSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureBoosterSelect";
import {MixtureDrawSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureDrawSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureRatioSelect";
import {MixtureVendorSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureVendorSelect";
import {MixtureMarketSourceControlProvider, MixtureMarketSourceFilter} from "@/sdk/api/mixture/market/query";
import {CloseOutlined, CloudOutlined, PercentageOutlined, PlusOutlined, QuestionOutlined} from "@ant-design/icons";
import {FormContext, FormItem, IconText, IFilterProps, useFilterContext} from "@leight-core/client";
import {Tabs} from "antd";
import {FC, useRef} from "react";

export interface IMixtureFilterProps extends Partial<IFilterProps> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();
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
			width: 860,
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
			<FormContext.Consumer>
				{formContext => <Tabs size={"large"}>
					<Tabs.TabPane forceRender key={"liquid"} tab={<IconText icon={<PercentageOutlined/>} text={"market.mixture.filter.liquid.tab"}/>}>
						<FormItem field={"aromaId"}>
							<MixtureAromaSelect
								allowClear
							/>
						</FormItem>
						<FormItem field={"nicotineToRound"}>
							<MixtureNicotineSelect
								allowClear
							/>
						</FormItem>
						<Tabs
							size={"small"}
							tabPosition={"top"}
						>
							<Tabs.TabPane key={"ratio"} tab={<IconText icon={<PercentageOutlined/>} text={"market.mixture.filter.ratio.tab"}/>}>
								<FormItem field={"ratio"}>
									<MixtureRatioSelect
										allowClear
										onClear={() => {
											ratio.current = undefined;
										}}
										onSelect={({entity}) => {
											ratio.current = {pgToRound: entity.pg, vgToRound: entity.vg};
										}}
										onChange={() => formContext.setValues({
											andDrawIds: undefined,
											orDrawIds: undefined,
										})}
									/>
								</FormItem>
							</Tabs.TabPane>
							<Tabs.TabPane key={"draw"} tab={<IconText icon={<CloudOutlined/>} text={"market.mixture.filter.draw.tab"}/>}>
								<Tabs
									size={"small"}
									tabPosition={"right"}
								>
									<Tabs.TabPane key={"draw.and"} tab={<IconText icon={<PlusOutlined/>} text={"common.filter.and.tab"}/>}>
										<FormItem field={"andDrawIds"} hasTooltip>
											<MixtureDrawSelect
												mode={"multiple"}
												allowClear
												onChange={() => formContext.setValues({
													ratio: undefined,
													orDrawIds: undefined,
												})}
											/>
										</FormItem>
									</Tabs.TabPane>
									<Tabs.TabPane key={"draw.or"} tab={<IconText icon={<CloseOutlined/>} text={"common.filter.or.tab"}/>}>
										<FormItem field={"orDrawIds"} hasTooltip>
											<MixtureDrawSelect
												mode={"multiple"}
												allowClear
												onChange={() => formContext.setValues({
													ratio: undefined,
													andDrawIds: undefined,
												})}
											/>
										</FormItem>
									</Tabs.TabPane>
								</Tabs>
							</Tabs.TabPane>
						</Tabs>
					</Tabs.TabPane>
					<Tabs.TabPane forceRender key={"source"} tab={<IconText icon={<LiquidIcon/>} text={"market.mixture.filter.source.tab"}/>}>
						<FormItem field={"boosterId"}>
							<MixtureBoosterSelect
								allowClear
							/>
						</FormItem>
						<FormItem field={"baseId"}>
							<MixtureBaseSelect
								allowClear
							/>
						</FormItem>
						<FormItem field={"vendorId"}>
							<MixtureVendorSelect
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
					</Tabs.TabPane>
				</Tabs>}
			</FormContext.Consumer>
		</MixtureMarketSourceControlProvider>
	</MixtureMarketSourceFilter>;
};
