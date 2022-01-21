import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UserPageMenu, UserTable} from "@/puff-smith/site/root/user";

export default withRootLayout(function List() {
	return <RootPage
		name={"root.user.list"}
	>
		<RootMenu/>
		<UserPageMenu/>
		<UserTable/>
	</RootPage>;
});
