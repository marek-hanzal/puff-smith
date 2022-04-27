import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.build.index"}
		menuSelection={["/lab/build"]}
		icon={<BuildIcon/>}
	>
	</LabPage>;
});
