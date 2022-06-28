import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {Tags} from "@/puff-smith/component/Tags";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {BuildLiquidList} from "@/puff-smith/site/lab/build/liquid/@module/list/BuildLiquidList";
import {LiquidFilter} from "@/puff-smith/site/lab/liquid/@module/filter/LiquidFilter";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {LiquidProviderControl, useLiquidCountQuery} from "@/sdk/api/lab/liquid/query";
import {FireOutlined, LikeOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, QueryParamsProvider, TabInline, Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";

export default withLabLayout(function Liquid({build}: IBuildFetch) {
	const liquidCountQuery = useLiquidCountQuery();
	return <LabPage
		title={"lab.build.liquid"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/liquid"]}
		icon={<LiquidIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/build"}
				label={"lab.build.label"}
			/>
			<BreadcrumbButton
				href={"/lab/build/[buildId]"}
				query={{
					buildId: build.id,
				}}
				label={<BuildNameInline build={build}/>}
			/>
			<BreadcrumbIcon
				icon={<LiquidIcon/>}
				label={"lab.build.liquid.title"}
			/>
		</Breadcrumbs>}
		footer={<BuildIndexMenu build={build}/>}
	>
		<Template
			title={<AtomizerNameInline atomizer={build.atomizer}/>}
			subTitle={<Tags tags={build.atomizer.draws} translation={"common.draw"}/>}
			span={22}
			extra={<Divider/>}
		>
			<Tabs size={"large"}>
				<Tabs.TabPane key={"recommended-unrated"} tab={<TabInline icon={<FireOutlined/>} title={"lab.build.liquid.recommended.unrated.tab"}/>}>
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
							},
							BuildLiquidRating: {
								every: {
									rating: null,
								},
							},
						}}
					>
						<QueryParamsProvider applyQueryParams={{id: build.id}}>
							<BuildLiquidList
								build={build}
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
											},
											BuildLiquidRating: {
												every: {
													rating: null,
												},
											},
										}}
									/>
								</RowInline>}
								emptyText={liquidCountQuery.isSuccess &&
									<Template
										icon={<LiquidIcon/>}
										label={liquidCountQuery.data === 0 ? "lab.liquid.rating.list.empty" : "lab.liquid.rating.list.rated"}
									/>}
							/>
						</QueryParamsProvider>
					</LiquidProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"recommended-rated"} tab={<TabInline icon={<LikeOutlined/>} title={"lab.build.liquid.recommended.rated.tab"}/>}>
					<LiquidProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						defaultOrderBy={{
							mixed: "asc",
						}}
						applyFilter={{
							BuildLiquidRating: {
								some: {
									NOT: {
										rating: null,
									},
									buildId: build.id,
								}
							},
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
						<QueryParamsProvider applyQueryParams={{id: build.id}}>
							<BuildLiquidList
								build={build}
								header={() => <RowInline>
									<LiquidFilter
										applyFilter={{
											BuildLiquidRating: {
												some: {
													NOT: {
														rating: null,
													}
												}
											},
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
								emptyText={liquidCountQuery.isSuccess &&
									<Template
										icon={<LiquidIcon/>}
										label={liquidCountQuery.data === 0 ? "lab.liquid.unrated.list.empty" : "lab.liquid.unrated.list.unrated"}
									/>}
							/>
						</QueryParamsProvider>
					</LiquidProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"liquids"} tab={<TabInline icon={<LiquidIcon/>} title={"lab.build.liquid.liquids.tab"}/>}>
					<LiquidProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						defaultOrderBy={{
							mixed: "asc",
						}}
					>
						<QueryParamsProvider applyQueryParams={{id: build.id}}>
							<BuildLiquidList
								build={build}
								header={() => <RowInline>
									<LiquidFilter/>
								</RowInline>}
								emptyText={liquidCountQuery.isSuccess &&
									<Template
										icon={<LiquidIcon/>}
										label={liquidCountQuery.data === 0 ? "lab.liquid.all.list.empty" : "lab.liquid.all.list.rated"}
									/>}
							/>
						</QueryParamsProvider>
					</LiquidProviderControl>
				</Tabs.TabPane>
			</Tabs>
		</Template>
	</LabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");
