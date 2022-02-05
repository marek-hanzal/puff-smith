import {useTranslation} from "react-i18next";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon, LiquidIcon, LogoIcon} from "@/puff-smith";
import {MenuPlaceholder, Template} from "@leight-core/leight";
import {BrowserView, isMobile, MobileView} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.home"}
		icon={<LiquidIcon/>}
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
			<MenuPlaceholder/>
		</MobileView>
	</LabPage>;
});
