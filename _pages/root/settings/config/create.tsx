import {RootPage, withRootLayout} from "@/puff-smith/../../../../_site/root";
import {SettingsMenu} from "@/puff-smith/../../../../_site/root/settings";
import {ConfigCreateForm, ConfigPageMenu} from "@/puff-smith/../../../../_site/root/settings/config";
import {ToolOutlined} from "@ant-design/icons";
import {CreateTemplate} from "@leight-core/common";

export default withRootLayout(function Create() {
	return <RootPage
		title={"root.settings.config.create"}
	>
		<SettingsMenu/>
		<ConfigPageMenu/>
		<CreateTemplate
			label={"root.settings.config"}
			subTitle={false}
			icon={<ToolOutlined/>}
		>
			<ConfigCreateForm/>
		</CreateTemplate>
	</RootPage>;
});
