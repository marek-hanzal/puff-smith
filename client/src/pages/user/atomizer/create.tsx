import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {useTranslation} from "react-i18next";

export default withUserLayout(function Create() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.atomizer.create"}
		menuItems={["/user/atomizer/create"]}
		menu={() => <UserMenu/>}
	>
		# create form
	</UserPage>;
});
