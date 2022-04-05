import {UserIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UsersList} from "@/puff-smith/site/root/user";
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
