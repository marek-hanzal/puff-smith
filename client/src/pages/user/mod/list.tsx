import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {useTranslation} from "react-i18next";

export default withUserLayout(function List() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.mod.list"}
		menu={() => <UserMenu/>}
	>
		# list
	</UserPage>;
});
