import {LogoFullIcon} from "@/ps";
import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

export default withUserLayout(function Index() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.index"}
		menuItems={["/user"]}
		menu={() => <UserMenu/>}
	>
		<Result
			icon={<LogoFullIcon/>}
			title={t("user.index.title")}
			subTitle={t("user.index.subtitle")}
		/>
	</UserPage>;
});
