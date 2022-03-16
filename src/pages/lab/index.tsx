import {FullLogoIcon, LiquidIcon, LogoIcon} from "@/puff-smith";
import {MobileContent, Template} from "@leight-core/client";
import {Divider} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabPage} from "@/puff-smith/site/lab/@module/component";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.home"}
		icon={<LiquidIcon/>}
		menuSelection={['/lab']}
		extra={<MobileContent>
			<LogoIcon style={{width: '7.5em'}}/>
		</MobileContent>}
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
