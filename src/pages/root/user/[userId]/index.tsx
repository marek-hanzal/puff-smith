import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UserIcon} from "@/puff-smith";
import {UserMenu} from "@/puff-smith/site/root/user/@module/menu/UserMenu";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.user.index"}
		menuSelection={['/root/user']}
		icon={<UserIcon/>}
		headerPostfix={<UserMenu/>}
	>
		user detail here, transactions and so on
	</RootPage>;
});
