import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {FireOutlined, StarOutlined} from "@ant-design/icons";
import {ButtonLink, ListIcon, TabInline} from "@leight-core/client";
import {Tabs} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.build.create.atomizer"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create")}
		icon={<AtomizerIcon/>}
		extra={<ButtonLink
			href={"/lab/build"}
			icon={<ListIcon/>}
			label={"lab.build.index.button"}
		/>}
		withHelp={{
			translation: "lab.build.atomizer",
		}}
	>
		<Tabs>
			<Tabs.TabPane key={"recommended"} tab={<TabInline icon={<FireOutlined/>} title={"lab.build.atomizer.coil.recommended.tab"}/>}>
			</Tabs.TabPane>
			<Tabs.TabPane key={"favourites"} tab={<TabInline icon={<StarOutlined/>} title={"lab.build.atomizer.coil.favourites.tab"}/>}>
			</Tabs.TabPane>
			<Tabs.TabPane key={"coils"} tab={<TabInline icon={<CoilIcon/>} title={"lab.build.atomizer.coil.coils.tab"}/>}>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});
