import {withRootLayout} from "@/puff-smith/../../../../../_site/root";
import {ConfigHomeMenu, ConfigPreview} from "@/puff-smith/../../../../../_site/root/settings/config";
import {ToolOutlined} from "@ant-design/icons";
import {PreviewTemplate} from "@leight-core/common";
import {ConfigPage} from "@/sdk/edde/api/root/config/endpoint";

export default withRootLayout(function Index() {
	return <ConfigPage
		title={"root.settings.config.index"}
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
