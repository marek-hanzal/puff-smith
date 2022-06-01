import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AtomizerInventoryList} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerInventoryList";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildCreateForm} from "@/puff-smith/site/lab/build/@module/form/BuildCreateForm";
import {AtomizerInventoryProviderControl} from "@/sdk/api/inventory/atomizer/query";
import {ButtonLink, ListIcon, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.create"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build")}
		icon={<BuildIcon/>}
		extra={<ButtonLink
			href={"/lab/build"}
			icon={<ListIcon/>}
			label={"lab.build.index.button"}
		/>}
		withHelp={{
			translation: "lab.build.create",
		}}
	>
		<Tabs size={"large"}>
			<Tabs.TabPane key={"atomizer"} tab={<TabInline icon={<AtomizerIcon/>} title={"lab.build.create.atomizer.tab"}/>}>
				<AtomizerInventoryProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
				>
					<AtomizerInventoryList
						header={() => <RowInline>
							filter
						</RowInline>}
					/>
				</AtomizerInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"quick-build"} tab={<TabInline icon={<BuildIcon/>} title={"lab.build.create.quick-build.tab"}/>}>
				<Template span={10}>
					<BuildCreateForm/>
				</Template>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});
