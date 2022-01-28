import {useTranslation} from "react-i18next";
import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon, LogoIcon} from "@/puff-smith";
import {MenuPlaceholder, Template} from "@leight-core/leight";
import {BrowserView, isMobile, MobileView} from "react-device-detect";
import {HomeIcon} from "@leight-core/leight";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.home"}
		icon={<HomeIcon/>}
		extra={isMobile ? <LogoIcon style={{width: '7.5em'}}/> : null}
	>
		<BrowserView>
			<LabMenu/>
			<Template
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				label={t("lab.home")}
			/>
		</BrowserView>
		<MobileView>
			<MenuPlaceholder/>
			<LabMenu/>
		</MobileView>
	</LabPage>;
});
