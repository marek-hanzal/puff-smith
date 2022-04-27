import {VapeIcon} from "@/puff-smith/component/icon/VapeIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.vape.index"}
		menuSelection={["/lab/vape"]}
		icon={<VapeIcon/>}
	>
	</LabPage>;
});
