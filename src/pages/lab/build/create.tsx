import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildCreateForm} from "@/puff-smith/site/lab/build/@module/form/BuildCreateForm";
import {ButtonLink, ListIcon, Template} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.build.create"}
		menuSelection={["/lab/build"]}
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
		<Template span={10}>
			<BuildCreateForm/>
		</Template>
	</LabPage>;
});
