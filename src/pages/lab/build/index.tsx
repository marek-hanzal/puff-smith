import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {FavoriteIcon} from "@/puff-smith/component/icon/FavoriteIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildDeleteButton} from "@/puff-smith/site/lab/build/@module/button/BuildDeleteButton";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {BuildListInactiveEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListInactiveEmpty";
import {BuildListToolbar} from "@/puff-smith/site/lab/build/@module/list/BuildListToolbar";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import Icon, {MenuOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, BrowserContent, ButtonBar, ButtonLink, DrawerButton, MobileContent, SelectionProvider, TabInline, Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {Swiper, Tabs as MobileTabs} from "antd-mobile";
import {SwiperRef} from "antd-mobile/es/components/swiper";
import {useRef, useState} from "react";
import {BsArchive} from "react-icons/bs";

const tabItems = [
	{key: "a", title: "AAA"},
	{key: "b", title: "BBB"},
	{key: "c", title: "CCC"},
];

export default withLabLayout(function Index() {
	const swiperRef = useRef<SwiperRef>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	return <SelectionProvider type={"multi"}>
		<BrowserLabPage
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
				size={"large"}
				tabBarExtraContent={<BuildListToolbar/>}
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
							emptyText={<BuildListInactiveEmpty/>}
						/>
					</BuildProviderControl>
				</Tabs.TabPane>
			</Tabs>
		</BrowserLabPage>
		<MobileLabPage
			title={"lab.build.index"}
			menuSelection={["/lab/build"]}
			icon={<BuildIcon/>}
			onBack={navigate => navigate("/lab")}
		>
			<MobileTabs
				activeKey={tabItems[activeIndex].key}
				onChange={key => {
					const index = tabItems.findIndex(item => item.key === key);
					setActiveIndex(index);
					swiperRef.current?.swipeTo(index);
				}}
			>
				{tabItems.map(item => (
					<MobileTabs.Tab title={item.title} key={item.key}/>
				))}
			</MobileTabs>
			<Swiper
				direction="horizontal"
				loop
				indicator={() => null}
				ref={swiperRef}
				defaultIndex={activeIndex}
				onIndexChange={setActiveIndex}
			>
				<Swiper.Item>
					<div
						style={{
							height: "120px",
							color: "#999999",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "24px",
							userSelect: "none",
						}}
					>
						AAA
					</div>
				</Swiper.Item>
				<Swiper.Item>
					<div
						style={{
							height: "120px",
							color: "#999999",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "24px",
							userSelect: "none",
						}}
					>
						BBB
					</div>
				</Swiper.Item>
				<Swiper.Item>
					<div
						style={{
							height: "120px",
							color: "#999999",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "24px",
							userSelect: "none",
						}}
					>
						CCC
					</div>
				</Swiper.Item>
			</Swiper>
		</MobileLabPage>
	</SelectionProvider>;
});
