import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {SettingsMenu} from "@/puff-smith/site/root/settings";
import {ConfigPageMenu} from "@/puff-smith/site/root/settings/config";
import {ToolOutlined} from "@ant-design/icons";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	return <RootPage
		title={"root.settings.config"}
	>
		<SettingsMenu/>
		<ConfigPageMenu/>
		<Result
			icon={<ToolOutlined/>}
			title={t("root.settings.config.title")}
			subTitle={t("root.settings.config.subtitle")}
		/>
	</RootPage>;
});
