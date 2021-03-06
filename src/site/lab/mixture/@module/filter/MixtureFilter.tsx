import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {MixtureAromaSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureAromaSelect";
import {MixtureBaseSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBaseSelect";
import {MixtureBoosterSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBoosterSelect";
import {MixtureDrawSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureDrawSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureRatioSelect";
import {MixtureTasteSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureTasteSelect";
import {MixtureVendorSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureVendorSelect";
import {MixtureInventoryProviderFilter} from "@/sdk/api/inventory/mixture/query";
import {CloudOutlined, PercentageOutlined, QuestionOutlined} from "@ant-design/icons";
import {ButtonBar, ButtonLink, FormContext, FormItem, IconText, IFilterProps, useFilterContext, useIsMobile} from "@leight-core/client";
import {Divider, Spin, Tabs} from "antd";
import {FC, useRef, useState} from "react";

export interface IMixtureFilterProps extends Partial<IFilterProps> {
	aroma?: IAroma;
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({aroma, toFilter = filter => filter, ...props}) => {
	const filterContext = useFilterContext();
	const isMobile = useIsMobile();
	const ratio = useRef<{ pgToRound: number, vgToRound: number }>();
	const [filter, setFilter] = useState<any>({
		...filterContext.source,
		nicotineToRound: filterContext?.source?.nicotineToRound || 0,
	});

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
		})}
		{...props}
	>
		<FormContext.Consumer>
			{formContext => <Tabs size={isMobile ? "small" : "large"}>
				<Tabs.TabPane forceRender key={"liquid"} tab={<IconText icon={<PercentageOutlined/>} text={"market.mixture.filter.liquid.tab"}/>}>
					{!aroma && <FormItem field={"aromaId"}>
						<MixtureAromaSelect
							allowClear
						/>
					</FormItem>}
					<Spin indicator={<></>} spinning={!filter?.aromaId && !aroma}>
						<FormItem field={"nicotineToRound"}>
							<MixtureNicotineSelect
								allowClear
								control={{
									applyFilter: {
										aromaId: aroma?.id || filter?.aromaId,
									}
								}}
								onChange={() => formContext.setValues({
									boosterId: undefined,
								})}
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
											baseId: undefined,
										})}
										control={{
											applyFilter: {
												aromaId: filter?.aromaId,
												nicotineToRound: filter?.nicotineToRound,
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
												baseId: undefined,
											})}
											control={{
												applyFilter: {
													aromaId: filter?.aromaId,
													nicotineToRound: filter?.nicotineToRound,
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
												baseId: undefined,
											})}
											control={{
												applyFilter: {
													aromaId: filter?.aromaId,
													nicotineToRound: filter?.nicotineToRound,
												}
											}}
										/>
									</FormItem>}
								/>
							</Tabs.TabPane>
						</Tabs>
					</Spin>
				</Tabs.TabPane>
				<Tabs.TabPane forceRender key={"source"} disabled={!aroma?.id && !filter?.aromaId} tab={<IconText icon={<LiquidIcon/>} text={"market.mixture.filter.source.tab"}/>}>
					<FormItem field={"boosterId"}>
						<MixtureBoosterSelect
							allowClear
							control={{
								applyFilter: {
									aromaId: aroma?.id || filter?.aromaId,
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
									aromaId: aroma?.id || filter?.aromaId,
									nicotineToRound: filter?.nicotineToRound,
									boosterId: filter?.boosterId,
									...ratio.current,
								}
							}}
						/>
					</FormItem>
				</Tabs.TabPane>
				<Tabs.TabPane forceRender key={"misc"} disabled={aroma || filter?.aromaId} tab={<IconText icon={<QuestionOutlined/>} text={"market.mixture.filter.misc.tab"}/>}>
					<TabAndOr
						name={"tasteIds"}
						and={<FormItem field={"andTasteIds"} hasTooltip>
							<MixtureTasteSelect
								mode={"multiple"}
								allowClear
								onChange={() => formContext.setValues({
									orTasteIds: undefined,
								})}
								control={{
									applyFilter: {
										aromaId: aroma?.id || filter?.aromaId,
									}
								}}
							/>
						</FormItem>}
						or={<FormItem field={"orTasteIds"} hasTooltip>
							<MixtureTasteSelect
								mode={"multiple"}
								allowClear
								onChange={() => formContext.setValues({
									andTasteIds: undefined,
								})}
								control={{
									applyFilter: {
										aromaId: aroma?.id || filter?.aromaId,
									}
								}}
							/>
						</FormItem>}
					/>
					<FormItem field={"vendorId"}>
						<MixtureVendorSelect
							allowClear
							control={{
								applyFilter: {
									aromaId: aroma?.id || filter?.aromaId,
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
	</MixtureInventoryProviderFilter>;
};
