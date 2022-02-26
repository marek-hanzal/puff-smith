import {RootPage, withRootLayout} from "@/puff-smith/../../../../_site/root";
import {SettingsMenu} from "@/puff-smith/../../../../_site/root/settings";
import {ConfigPageMenu, ConfigTable} from "@/puff-smith/../../../../_site/root/settings/config";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.settings.config.list.index"}
	>
		<SettingsMenu/>
		<ConfigPageMenu/>
		<ConfigTable/>
	</RootPage>;
});
