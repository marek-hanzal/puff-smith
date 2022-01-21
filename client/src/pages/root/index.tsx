import {LogoIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	return <RootPage
		name={"root.index"}
	>
		<RootMenu/>
		<Result
			icon={<LogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			title={t("root.home.welcome-title")}
			subTitle={t("root.home.welcome-subtitle")}
		/>
	</RootPage>;
});
