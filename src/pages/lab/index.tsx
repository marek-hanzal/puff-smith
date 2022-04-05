import {FullLogoIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {HomeIcon, Template} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.index"}
		menuSelection={["/lab"]}
		icon={<HomeIcon/>}
	>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			label={"lab.home"}
		/>
	</LabPage>;
});
