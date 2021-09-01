import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {useTranslation} from "react-i18next";

export default withUserLayout(function Create() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.mod.create"}
		menu={() => <UserMenu/>}
	>
		# create form
	</UserPage>;
});
