import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {SettingsMenu} from "@/puff-smith/site/root/settings";
import {ConfigCreateForm, ConfigPageMenu} from "@/puff-smith/site/root/settings/config";
import {ToolOutlined} from "@ant-design/icons";
import {CreateTemplate} from "@leight-core/leight";

export default withRootLayout(function Create() {
	return <RootPage
		name={"root.settings.config.create"}
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
