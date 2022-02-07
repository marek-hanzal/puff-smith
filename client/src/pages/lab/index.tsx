import {useTranslation} from "react-i18next";
import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon, LiquidIcon, LogoIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";
import {BrowserView, isMobile, MobileView} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.home"}
		icon={<LiquidIcon/>}
		menuSelection={['/lab']}
		extra={isMobile ? <LogoIcon style={{width: '7.5em'}}/> : null}
		headerProps={{style: isMobile ? {padding: "8px 12px"} : undefined}}
	>
		<BrowserView>
			<Template
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				label={t("lab.home")}
			/>
		</BrowserView>
		<MobileView>
			<LabMenu/>
		</MobileView>
	</LabPage>;
});
