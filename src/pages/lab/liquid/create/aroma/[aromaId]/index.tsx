import {TabAndOr} from "@/puff-smith/component/filter/TabAndOr";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaFetch} from "@/puff-smith/service/aroma/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {AromaView} from "@/puff-smith/site/market/aroma/@module/view/AromaView";
import {MixtureDrawSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureDrawSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/shared/mixture/@module/form/MixtureRatioSelect";
import {CloudOutlined, PercentageOutlined} from "@ant-design/icons";
import {Centered, Form, FormContext, FormItem, IconText, Submit, Template} from "@leight-core/client";
import {cleanOf} from "@leight-core/utils";
import {Col, Divider, Row, Tabs} from "antd";
import {useRef, useState} from "react";

export default withLabLayout(function Index({aroma}: IAromaFetch) {
	const ratio = useRef<{ pgToRound: number, vgToRound: number }>();
	const [nicotine, setNicotine] = useState<number>(0);

	return <LabPage
		onBack={navigate => navigate("/lab/liquid/create")}
		title={"lab.liquid.create.aroma"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
	>
		<Template span={22}>
			<Row gutter={32}>
				<Col span={12}>
					<Template
						label={"lab.liquid.create.aroma"}
						extra={<Divider/>}
						span={24}
					>
						<Form
							translation={"lab.liquid.create.aroma"}
							toForm={() => ({
								nicotine: 0,
							})}
							onSuccess={({navigate, values}) => {
								navigate("/lab/liquid/create/aroma/[aromaId]/booster", cleanOf({
									...values,
									aromaId: aroma.id,
									ratio: ratio.current ? [ratio.current.vgToRound, ratio.current.pgToRound] : undefined,
								}));
							}}
						>
							<FormContext.Consumer>
								{formContext => <>
									<FormItem field={"nicotine"} required>
										<MixtureNicotineSelect
											control={{
												applyFilter: {
													aroma: aroma.content,
													volume: aroma.volume,
													aromaVg: aroma.vg,
													aromaPg: aroma.pg,
												}
											}}
											onSelect={({value}) => {
												setNicotine(value);
											}}
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
													control={{
														defaultFilter: {
															aroma: aroma.content,
															volume: aroma.volume,
															aromaVg: aroma.vg,
															aromaPg: aroma.pg,
															nicotineToRound: nicotine,
														}
													}}
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
												and={<FormItem field={"andDrawIds"} hasTooltip>
													<MixtureDrawSelect
														mode={"multiple"}
														allowClear
														control={{
															defaultFilter: {
																aroma: aroma.content,
																volume: aroma.volume,
																aromaVg: aroma.vg,
																aromaPg: aroma.pg,
																nicotineToRound: nicotine,
															}
														}}
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
														control={{
															defaultFilter: {
																aroma: aroma.content,
																volume: aroma.volume,
																aromaVg: aroma.vg,
																aromaPg: aroma.pg,
																nicotineToRound: nicotine,
															}
														}}
														onChange={() => formContext.setValues({
															ratio: undefined,
															andDrawIds: undefined,
														})}
													/>
												</FormItem>}
											/>
										</Tabs.TabPane>
									</Tabs>
									<Divider/>
									<Centered>
										<Submit icon={<LiquidIcon/>} label={"continue"}/>
									</Centered>
								</>}
							</FormContext.Consumer>
						</Form>
					</Template>
				</Col>
				<Col span={12}>
					<AromaView aroma={aroma}/>
				</Col>
			</Row>
		</Template>
	</LabPage>;
});

export const getServerSideProps = AromaSource().withFetch("aroma", "aromaId");
