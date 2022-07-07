import {UserIcon} from "@/puff-smith/component/icon/UserIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {BrowserRootPage} from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserList} from "@/puff-smith/site/root/user/@module/list/UserList";
import {UserMenu} from "@/puff-smith/site/root/user/@module/menu/UserMenu";
import {UserProviderControl} from "@/sdk/api/user/query";

export default withRootLayout(function Index() {
	return <BrowserRootPage
		title={"root.user"}
		menuSelection={["/root/user"]}
		icon={<UserIcon/>}
		footer={<UserMenu/>}
	>
		<UserProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<UserList/>
		</UserProviderControl>
	</BrowserRootPage>;
});
