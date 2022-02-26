import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {UpgradePageMenu, UpgradeTable} from "@/puff-smith/../../../_site/root/upgrade";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.upgrade.list"}
	>
		<RootMenu/>
		<UpgradePageMenu/>
		<UpgradeTable/>
	</RootPage>;
});
