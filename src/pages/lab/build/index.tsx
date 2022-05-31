import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {BuildListInactiveEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListInactiveEmpty";
import {BuildListToolbar} from "@/puff-smith/site/lab/build/@module/list/BuildListToolbar";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import Icon from "@ant-design/icons";
import {ButtonBar, ButtonLink, SelectionProvider, TabInline} from "@leight-core/client";
import {Tabs} from "antd";
import {BsArchive} from "react-icons/bs";

export default withLabLayout(function Index() {
	return <SelectionProvider type={"multi"}>
		<LabPage
			title={"lab.build.index"}
			menuSelection={["/lab/build"]}
			icon={<BuildIcon/>}
			extra={<ButtonBar size={8}>
				<ButtonLink
					type={"primary"}
					href={"/lab/build/create"}
					icon={<BuildIcon/>}
					label={"lab.build.create.button"}
				/>
			</ButtonBar>}
			withHelp={{
				translation: "lab.build.index",
			}}
		>
			<Tabs size={"large"} tabBarExtraContent={<BuildListToolbar/>}>
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
