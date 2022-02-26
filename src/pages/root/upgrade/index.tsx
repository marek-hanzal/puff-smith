import {UpgradeIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UpgradePageMenu} from "@/puff-smith/site/root/upgrade";
import {Template} from "@leight-core/common";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.upgrade.index"}
	>
		<RootMenu/>
		<UpgradePageMenu/>
		<Template
			icon={<UpgradeIcon/>}
			label={"root.upgrade.index"}
		/>
	</RootPage>;
});
