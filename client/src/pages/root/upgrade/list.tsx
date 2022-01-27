import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UpgradePageMenu, UpgradeTable} from "@/puff-smith/site/root/upgrade";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.upgrade.list"}
	>
		<RootMenu/>
		<UpgradePageMenu/>
		<UpgradeTable/>
	</RootPage>;
});
