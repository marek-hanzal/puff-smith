import {FullLogoIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {Template} from "@leight-core/client";
import {Divider} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.welcome"}
		menuSelection={["/lab"]}
	>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			span={24}
		>
			<Divider/>
			# put some welcome shit here!
		</Template>
	</LabPage>;
});
