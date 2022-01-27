import {SettingsIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {SettingsMenu} from "@/puff-smith/site/root/settings";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	return <RootPage
		title={"root.settings"}
	>
		<SettingsMenu/>
		<Result
			icon={<SettingsIcon/>}
			title={t("root.settings.title")}
			subTitle={t("root.settings.subtitle")}
		/>
	</RootPage>;
});
