import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {Tags} from "@/puff-smith/component/Tags";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {LiquidFilter} from "@/puff-smith/site/lab/liquid/@module/filter/LiquidFilter";
import {LiquidList} from "@/puff-smith/site/lab/liquid/@module/list/LiquidList";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {LiquidProviderControl} from "@/sdk/api/lab/liquid/query";
import {FireOutlined} from "@ant-design/icons";
import {TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withLabLayout(function Liquid({build}: IBuildFetch) {
	return <LabPage
		title={"lab.build.liquid"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/liquid"]}
		icon={<LiquidIcon/>}
		headerProps={{
			footer: <BuildIndexMenu build={build}/>,
		}}
	>
		<Template
			title={<AtomizerNameInline atomizer={build.atomizer}/>}
			subTitle={<Tags tags={build.atomizer.draws} translation={"common.draw"}/>}
			span={22}
		>
			<Tabs size={"large"}>
				<Tabs.TabPane key={"recommended"} tab={<TabInline icon={<FireOutlined/>} title={"lab.build.liquid.recommended.tab"}/>}>
					<LiquidProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						defaultOrderBy={{
							mixed: "asc",
						}}
						applyFilter={{
							mixture: {
								MixtureDraw: {
									some: {
										drawId: {
											in: build.atomizer.drawIds,
										}
									}
								}
							}
						}}
					>
						<LiquidList
							header={() => <RowInline>
								<LiquidFilter
									applyFilter={{
										mixture: {
											MixtureDraw: {
												some: {
													drawId: {
														in: build.atomizer.drawIds,
													}
												}
											}
										}
									}}
								/>
							</RowInline>}
						/>
					</LiquidProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"liquids"} tab={<TabInline icon={<LiquidIcon/>} title={"lab.build.liquid.liquids.tab"}/>}>
					<LiquidProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						defaultOrderBy={{
							mixed: "asc",
						}}
					>
						<LiquidList
							header={() => <RowInline>
								<LiquidFilter/>
							</RowInline>}
						/>
					</LiquidProviderControl>
				</Tabs.TabPane>
			</Tabs>
		</Template>
	</LabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");
