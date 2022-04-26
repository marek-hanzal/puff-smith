import {UserIcon} from "@/puff-smith/component/icon/UserIcon";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UsersList} from "@/puff-smith/site/root/user/@module/list/UsersList";
import {UserMenu} from "@/puff-smith/site/root/user/@module/menu/UserMenu";
import {UsersSourceControlProvider} from "@/sdk/api/user/query";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.user"}
		menuSelection={["/root/user"]}
		icon={<UserIcon/>}
		headerPostfix={<UserMenu/>}
	>
		<UsersSourceControlProvider>
			<UsersList/>
		</UsersSourceControlProvider>
	</RootPage>;
});
