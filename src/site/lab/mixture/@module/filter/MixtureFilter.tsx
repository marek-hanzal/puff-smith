import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MixtureAromaSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureAromaSelect";
import {MixtureBaseSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBaseSelect";
import {MixtureBoosterSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBoosterSelect";
import {MixtureDrawSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureDrawSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureRatioSelect";
import {MixtureTasteSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureTasteSelect";
import {MixtureVendorSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureVendorSelect";
import {MixtureInventoryProviderControl, MixtureInventoryProviderFilter} from "@/sdk/api/inventory/mixture/query";
import {CloudOutlined, PercentageOutlined, QuestionOutlined} from "@ant-design/icons";
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

	return <MixtureInventoryProviderFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.mixture"}
		onClear={onClear}
		drawerButtonProps={{
			width: 860,
		}}
		toFilter={(
			{
				andDrawIds,
				orDrawIds,
				andTasteIds,
				orTasteIds,
				vendorId,
				ratio: unused,
				aromaId,
				boosterId,
				baseId,
				nicotineToRound,
			}) => toFilter({
			aromaId,
			boosterId,
			baseId,
			vendorId,
			aroma: {
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
			mixture: {
				nicotineToRound,
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
				...ratio.current,
			}
		})}
		{...props}
	>
		<MixtureInventoryProviderControl>
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
							defaultActiveKey={filterContext.source?.andDrawIds || filterContext.source?.orDrawIds ? "draw" : "ratio"}
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
								<TabAndOr
									name={"drawIds"}
									orCondition={() => filterContext.source?.orDrawIds}
									and={<FormItem field={"andDrawIds"} hasTooltip>
										<MixtureDrawSelect
											mode={"multiple"}
											allowClear
											onChange={() => formContext.setValues({
												ratio: undefined,
												orDrawIds: undefined,
											})}
										/>
									</FormItem>}
									or={<FormItem field={"orDrawIds"} hasTooltip>
										<MixtureDrawSelect
											mode={"multiple"}
											allowClear
											onChange={() => formContext.setValues({
												ratio: undefined,
												andDrawIds: undefined,
											})}
										/>
									</FormItem>}
								/>
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
					</Tabs.TabPane>
					<Tabs.TabPane forceRender key={"misc"} tab={<IconText icon={<QuestionOutlined/>} text={"market.mixture.filter.misc.tab"}/>}>
						<TabAndOr
							name={"tasteIds"}
							and={<FormItem field={"andTasteIds"} hasTooltip>
								<MixtureTasteSelect
									mode={"multiple"}
									allowClear
									onChange={() => formContext.setValues({
										orTasteIds: undefined,
									})}
								/>
							</FormItem>}
							or={<FormItem field={"orTasteIds"} hasTooltip>
								<MixtureTasteSelect
									mode={"multiple"}
									allowClear
									onChange={() => formContext.setValues({
										andTasteIds: undefined,
									})}
								/>
							</FormItem>}
						/>
						<FormItem field={"vendorId"}>
							<MixtureVendorSelect
								allowClear
							/>
						</FormItem>
					</Tabs.TabPane>
				</Tabs>}
			</FormContext.Consumer>
		</MixtureInventoryProviderControl>
	</MixtureInventoryProviderFilter>;
};
