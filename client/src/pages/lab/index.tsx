import {useTranslation} from "react-i18next";
import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {FullLogoIcon} from "@/puff-smith";
import {MenuPlaceholder, Template} from "@leight-core/leight";
import {BrowserView, MobileView} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.home"}
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
