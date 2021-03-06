import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {Template} from "@leight-core/client";
import {Divider} from "antd";

export default withLabLayout(function Index() {
	return <BrowserLabPage
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
	</BrowserLabPage>;
});
