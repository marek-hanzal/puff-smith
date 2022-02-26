import {UserIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {UserPageMenu} from "@/puff-smith/../../../_site/root/user";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	return <RootPage
		title={"root.user.index"}
	>
		<RootMenu/>
		<UserPageMenu/>
		<Result
			icon={<UserIcon/>}
			title={t("root.user.index.title")}
			subTitle={t("root.user.index.subtitle")}
		/>
	</RootPage>;
});
