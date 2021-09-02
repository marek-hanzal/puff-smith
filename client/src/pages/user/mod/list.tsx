import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {ModList} from "@/ps/site/user/module/mod";
import {useTranslation} from "react-i18next";

export default withUserLayout(function List() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.mod.list"}
		menu={() => <UserMenu/>}
	>
		<ModList/>
	</UserPage>;
});
