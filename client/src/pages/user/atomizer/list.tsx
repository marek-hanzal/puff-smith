import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {AtomizerList} from "@/ps/site/user/module/atomizer";
import {useTranslation} from "react-i18next";

export default withUserLayout(function List() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.atomizer.list"}
		menu={() => <UserMenu/>}
	>
		<AtomizerList/>
	</UserPage>;
});
