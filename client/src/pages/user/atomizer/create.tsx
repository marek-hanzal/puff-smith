import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {AtomizerCreateForm} from "@/ps/site/user/module/atomizer";
import {useTranslation} from "react-i18next";

export default withUserLayout(function Create() {
	const {t} = useTranslation();
	return <UserPage
		name={"user.atomizer.create"}
		menu={() => <UserMenu/>}
	>
		<AtomizerCreateForm/>
	</UserPage>;
});
