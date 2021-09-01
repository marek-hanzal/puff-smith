import {AtomizerIcon} from "@/ps";
import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

export default withUserLayout(function Index() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.atomizer.index"}
		menu={() => <UserMenu/>}
	>
		<Result
			icon={<AtomizerIcon/>}
			title={t("user.atomizer.index.title")}
			subTitle={t("user.atomizer.index.subtitle")}
		/>
	</UserPage>;
});
