import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon, LiquidIcon, LogoIcon} from "@/puff-smith";
import {Template, useIsMobile} from "@leight-core/leight";
import {BrowserView, MobileView} from "react-device-detect";

export default withLabLayout(function Index() {
	const isMobile = useIsMobile();
	return <LabPage
		title={"lab.home"}
		collapsed={false}
		icon={<LiquidIcon/>}
		menuSelection={['/lab']}
		extraMobile={<LogoIcon style={{width: '7.5em'}}/>}
		headerProps={{style: isMobile ? {padding: "8px 12px"} : undefined}}
	>
		<BrowserView>
			<Template
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				label={"lab.home"}
			/>
		</BrowserView>
		<MobileView>
			<LabMenu/>
		</MobileView>
	</LabPage>;
});
