import {withRootLayout} from "@/puff-smith/site/root";
import {ConfigHomeMenu, ConfigPreview} from "@/puff-smith/site/root/settings/config";
import {ToolOutlined} from "@ant-design/icons";
import {PreviewTemplate} from "@leight-core/leight";
import {ConfigPage} from "@/sdk/edde/api/root/config/endpoint";

export default withRootLayout(function Index() {
	return <ConfigPage
		name={"root.settings.config.index"}
	>
		{config => <>
			<ConfigHomeMenu/>
			<PreviewTemplate
				title={config.key}
				icon={<ToolOutlined/>}
			>
				<ConfigPreview config={config}/>
			</PreviewTemplate>
		</>}
	</ConfigPage>;
});
