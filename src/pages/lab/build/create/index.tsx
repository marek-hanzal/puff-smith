import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AtomizerFilter} from "@/puff-smith/site/inventory/atomizer/@module/filter/AtomizerFilter";
import {AtomizerInventoryList} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerInventoryList";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildCreateForm} from "@/puff-smith/site/lab/build/@module/form/BuildCreateForm";
import {AtomizerCreateButton} from "@/puff-smith/site/shared/atomizer/@module/button/AtomizerCreateButton";
import {AtomizerInventoryProviderControl, useAtomizerInventoryCountQuery} from "@/sdk/api/inventory/atomizer/query";
import {MenuOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, DrawerButton, EditIcon, MobileContent, TabInline, Template, useIsMobile} from "@leight-core/client";
import {Divider, Tabs} from "antd";

export default withLabLayout(function Create() {
	const atomizerInventoryCountQuery = useAtomizerInventoryCountQuery();
	const isMobile = useIsMobile();
	return <LabPage
		title={"lab.build.create"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build")}
		icon={<BuildIcon/>}
		extra={<>
			<MobileContent>
				<DrawerButton
					type={"text"}
					size={"large"}
					icon={<MenuOutlined/>}
					title={"lab.build.create.context.menu.title"}
				>
					<Template
						forceIcon
						icon={<BuildIcon/>}
						extra={<>
							<Divider/>
							<ButtonBar direction={"vertical"} size={8}>
								<AtomizerCreateButton
									size={"large"}
									type={"link"}
									icon={<EditIcon/>}
									width={960}
									title={"lab.atomizer.create.title"}
									label={"lab.atomizer.create.button"}
									onSuccess={({navigate, response}) => {
										navigate("/lab/build/create/atomizer/[atomizerId]", {
											atomizerId: response.id,
										});
									}}
								/>
							</ButtonBar>
						</>}
					/>
				</DrawerButton>
			</MobileContent>
		</>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/build"}
				label={"lab.build.label"}
			/>
			<BreadcrumbIcon
				icon={<BuildIcon/>}
				label={"lab.build.create.label"}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "lab.build.create",
		}}
	>
		<Tabs size={isMobile ? "small" : "large"}>
			<Tabs.TabPane key={"atomizer.favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"lab.build.create.atomizer.favorite.tab"}/>}>
				<AtomizerInventoryProviderControl
					defaultSize={5}
					applyFilter={{
						rating: {
							gt: 0,
						}
					}}
				>
					<AtomizerInventoryList
						hidden={["rating"]}
						header={() => <RowInline>
							<AtomizerFilter
								toFilter={values => ({atomizer: values})}
							/>
						</RowInline>}
					/>
				</AtomizerInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"atomizer"} tab={<TabInline icon={<AtomizerIcon/>} title={"lab.build.create.atomizer.tab"}/>}>
				<AtomizerInventoryProviderControl
					defaultSize={5}
				>
					<AtomizerInventoryList
						hidden={["rating"]}
						header={() => <RowInline
							extra={<AtomizerCreateButton
								size={"small"}
								type={"link"}
								icon={<EditIcon/>}
								width={960}
								title={"lab.atomizer.create.title"}
								label={"lab.atomizer.create.button"}
								onSuccess={({navigate, response}) => {
									navigate("/lab/build/create/atomizer/[atomizerId]", {
										atomizerId: response.id,
									});
								}}
							/>}
						>
							<AtomizerFilter
								toFilter={values => ({atomizer: values})}
							/>
						</RowInline>}
					/>
				</AtomizerInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"quick-build"} disabled={atomizerInventoryCountQuery.isLoading || atomizerInventoryCountQuery.data === 0} tab={<TabInline icon={<BuildIcon/>} title={"lab.build.create.quick-build.tab"}/>}>
				<Template span={10}>
					<BuildCreateForm/>
				</Template>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});
