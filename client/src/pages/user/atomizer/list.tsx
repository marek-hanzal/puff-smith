import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {useTranslation} from "react-i18next";

export default withUserLayout(function List() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.atomizer.list"}
		menuItems={["/user/atomizer/list"]}
		menu={() => <UserMenu/>}
	>
		# list
	</UserPage>;
});
