import {withRootLayout} from "@/puff-smith/site/root";
import {ConfigHomeMenu, ConfigPatchForm} from "@/puff-smith/site/root/settings/config";
import {ToolOutlined} from "@ant-design/icons";
import {EditTemplate} from "@leight-core/leight";
import {ConfigPage} from "@/sdk/edde/api/root/config/endpoint";

export default withRootLayout(function Edit() {
	return <ConfigPage
		title={"root.settings.config.edit"}
	>
		{config => <>
			<ConfigHomeMenu/>
			<EditTemplate
				title={config.key}
				icon={<ToolOutlined/>}
			>
				<ConfigPatchForm config={config}/>
			</EditTemplate>
		</>}
	</ConfigPage>;
});
