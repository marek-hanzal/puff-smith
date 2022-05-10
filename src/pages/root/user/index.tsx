import {UserIcon} from "@/puff-smith/component/icon/UserIcon";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserList} from "@/puff-smith/site/root/user/@module/list/UserList";
import {UserMenu} from "@/puff-smith/site/root/user/@module/menu/UserMenu";
import {UserSourceControlProvider} from "@/sdk/api/user/query";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.user"}
		menuSelection={["/root/user"]}
		icon={<UserIcon/>}
		headerPostfix={<UserMenu/>}
	>
		<UserSourceControlProvider>
			<UserList/>
		</UserSourceControlProvider>
	</RootPage>;
});
