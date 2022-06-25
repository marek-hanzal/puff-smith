import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {MixtureBaseSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureBaseSelect";
import {MixtureBoosterSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureBoosterSelect";
import {MixtureDrawSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureDrawSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureRatioSelect";
import {MixtureMarketProviderFilter} from "@/sdk/api/market/mixture/query";
import {CloudOutlined, PercentageOutlined} from "@ant-design/icons";
import {ButtonBar, ButtonLink, FormContext, FormItem, IconText, IFilterProps, useFilterContext} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {FC, useRef, useState} from "react";

export interface IMixtureFilterProps extends Partial<IFilterProps> {
	aroma?: IAroma;
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({aroma, toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();
	const ratio = useRef<{ pgToRound: number, vgToRound: number }>();
	const [filter, setFilter] = useState<any>({
		...filterContext.source,
		nicotineToRound: filterContext?.source?.nicotineToRound || 0,
	});

	const onClear = () => {
		ratio.current = undefined;
	};

	return <MixtureMarketProviderFilter
		spaceProps={{
			size: 0,
		}}
		translation={"common.mixture"}
		onClear={onClear}
		drawerButtonProps={{
			width: 860,
		}}
		formProps={{
			onChange: ({values}) => setFilter(values),
			withTokenProps: {
				tokens: [
					"feature.mixture.search",
				],
				template: {
					extra: <>
						<Divider/>
						<ButtonBar split={<Divider type={"vertical"}/>}>
							<ButtonLink icon={<CertificateIcon/>} href={"/to/market/certificate"} label={"shared.certificate.link.button"}/>
							<ButtonLink icon={<LicenseIcon/>} href={"/to/market/license"} label={"shared.license.link.button"}/>
						</ButtonBar>
					</>
				}
			},
		}}
		toFilter={({andDrawIds, orDrawIds, ratio: unused, ...values}) => toFilter({
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
			...ratio.current,
		})}
		{...props}
	>
		<FormContext.Consumer>
			{formContext => <Tabs size={"large"}>
				<Tabs.TabPane forceRender key={"liquid"} tab={<IconText icon={<PercentageOutlined/>} text={"market.mixture.filter.liquid.tab"}/>}>
					<FormItem field={"nicotineToRound"}>
						<MixtureNicotineSelect
							allowClear
							control={{
								applyFilter: {
									aromaId: aroma?.id,
									baseId: filter?.baseId,
									boosterId: filter?.boosterId,
								}
							}}
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
									control={{
										applyFilter: {
											aromaId: aroma?.id,
											nicotineToRound: filter?.nicotineToRound,
											baseId: filter?.baseId,
											boosterId: filter?.boosterId,
										}
									}}
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
										control={{
											applyFilter: {
												aromaId: aroma?.id,
												nicotineToRound: filter?.nicotineToRound,
												baseId: filter?.baseId,
												boosterId: filter?.boosterId,
											}
										}}
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
										control={{
											applyFilter: {
												aromaId: aroma?.id,
												nicotineToRound: filter?.nicotineToRound,
												baseId: filter?.baseId,
												boosterId: filter?.boosterId,
											}
										}}
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
							control={{
								applyFilter: {
									aromaId: aroma?.id,
									nicotineToRound: filter?.nicotineToRound,
									baseId: filter?.baseId,
									...ratio.current,
								}
							}}
						/>
					</FormItem>
					<FormItem field={"baseId"}>
						<MixtureBaseSelect
							allowClear
							control={{
								applyFilter: {
									aromaId: aroma?.id,
									nicotineToRound: filter?.nicotineToRound,
									boosterId: filter?.boosterId,
									...ratio.current,
								}
							}}
						/>
					</FormItem>
				</Tabs.TabPane>
			</Tabs>}
		</FormContext.Consumer>
	</MixtureMarketProviderFilter>;
};
