import {FullLogoIcon, LiquidIcon, LogoIcon} from "@/puff-smith";
import {Template} from "@leight-core/component";
import {Divider} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabPage} from "@/puff-smith/site/lab/@module/component";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.home"}
		icon={<LiquidIcon/>}
		menuSelection={['/lab']}
		extraMobile={<LogoIcon style={{width: '7.5em'}}/>}
	>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			span={24}
		>
			<Divider/>
			{/*<QuickPuff/>*/}
		</Template>
	</LabPage>;
});
