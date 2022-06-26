import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildDeleteButton} from "@/puff-smith/site/lab/build/@module/button/BuildDeleteButton";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {BuildListInactiveEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListInactiveEmpty";
import {BuildListToolbar} from "@/puff-smith/site/lab/build/@module/list/BuildListToolbar";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import Icon, {MenuOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, BrowserContent, ButtonBar, ButtonLink, DrawerButton, MobileContent, SelectionProvider, TabInline, Template, useIsMobile} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {BsArchive} from "react-icons/bs";

export default withLabLayout(function Index() {
	const isMobile = useIsMobile();
	return <SelectionProvider type={"multi"}>
		<LabPage
			title={"lab.build.index"}
			menuSelection={["/lab/build"]}
			icon={<BuildIcon/>}
			extra={<>
				<BrowserContent>
					<ButtonBar size={8}>
						<ButtonLink
							type={"primary"}
							href={"/lab/build/create"}
							icon={<BuildIcon/>}
							label={"lab.build.create.button"}
						/>
					</ButtonBar>
				</BrowserContent>
				<MobileContent>
					<DrawerButton
						type={"text"}
						size={"large"}
						icon={<MenuOutlined/>}
						title={"lab.build.context.menu.title"}
					>
						<Template
							forceIcon
							icon={<BuildIcon/>}
							extra={<>
								<Divider/>
								<ButtonBar direction={"vertical"} size={8}>
									<ButtonLink
										type={"primary"}
										href={"/lab/build/create"}
										icon={<BuildIcon/>}
										label={"lab.build.create.button"}
									/>
									<BuildDeleteButton/>
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
				<BreadcrumbIcon
					icon={<BuildIcon/>}
					label={"lab.build.label"}
				/>
			</Breadcrumbs>}
			withHelp={{
				translation: "lab.build.index",
			}}
		>
			<Tabs
				size={isMobile ? "small" : "large"}
				tabBarExtraContent={!isMobile && <BuildListToolbar/>}
			>
				<Tabs.TabPane key={"active"} tab={<TabInline icon={<BuildIcon/>} title={"lab.build.active.tab"}/>}>
					<BuildProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						defaultOrderBy={{
							created: "desc",
						}}
						applyFilter={{
							active: true,
						}}
					>
						<BuildList/>
					</BuildProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"favorite"} tab={<TabInline icon={<FavoriteIcon/>} title={"lab.build.favorite.tab"}/>}>
					<BuildProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						defaultOrderBy={[
							{active: "desc"},
							{rating: "desc"},
						] as any}
						applyFilter={{
							rating: {
								gt: 0,
							}
						}}
					>
						<BuildList/>
					</BuildProviderControl>
				</Tabs.TabPane>
				<Tabs.TabPane key={"inactive"} tab={<TabInline icon={<Icon component={BsArchive}/>} title={"lab.build.inactive.tab"}/>}>
					<BuildProviderControl
						defaultSize={DEFAULT_LIST_SIZE}
						defaultOrderBy={{
							created: "desc",
						}}
						applyFilter={{
							active: false,
						}}
					>
						<BuildList
							locale={{
								emptyText: <BuildListInactiveEmpty/>,
							}}
						/>
					</BuildProviderControl>
				</Tabs.TabPane>
			</Tabs>
		</LabPage>
	</SelectionProvider>;
});
