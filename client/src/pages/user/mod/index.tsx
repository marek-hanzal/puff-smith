import {ModIcon} from "@/ps";
import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

export default withUserLayout(function Index() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.mod.index"}
		menuItems={["/user/mod"]}
		menu={() => <UserMenu/>}
	>
		<Result
			icon={<ModIcon/>}
			title={t("user.mod.index.title")}
			subTitle={t("user.mod.index.subtitle")}
		/>
	</UserPage>;
});
