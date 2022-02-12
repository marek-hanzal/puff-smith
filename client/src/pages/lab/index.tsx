import {LabMenu, LabPage, QuickPuff, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon, LiquidIcon, LogoIcon} from "@/puff-smith";
import {Template, useIsMobile} from "@leight-core/leight";
import {Divider} from "antd";

export default withLabLayout(function Index() {
	const isMobile = useIsMobile();
	return <LabPage
		title={"lab.home"}
		icon={<LiquidIcon/>}
		menuSelection={['/lab']}
		extraMobile={<LogoIcon style={{width: '7.5em'}}/>}
		headerProps={{style: isMobile ? {padding: "8px 12px"} : undefined}}
	>
		{isMobile ?
			<LabMenu/> :
			<Template
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				label={"lab.home"}
				span={24}
			>
				<Divider/>
				<QuickPuff/>
			</Template>}
	</LabPage>;
});
