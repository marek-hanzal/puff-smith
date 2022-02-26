import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {UserPageMenu, UserTable} from "@/puff-smith/../../../_site/root/user";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.user.list"}
	>
		<RootMenu/>
		<UserPageMenu/>
		<UserTable/>
	</RootPage>;
});
