import {withRootLayout} from "@/puff-smith/site/root";
import {ConfigHomeMenu} from "@/puff-smith/site/root/settings/config";
import {ConfigPage} from "@/sdk/edde/api/root/config/endpoint";

export default withRootLayout(function Delete() {
	return <ConfigPage
		title={"root.settings.config.delete"}
	>
		{config => <>
			<ConfigHomeMenu/>
			{/*<DeleteTemplate*/}
			{/*	icon={<ToolOutlined/>}*/}
			{/*	label={"root.settings.config"}*/}
			{/*	onDelete={() => alert("todo - refactor to use mutation")}*/}
			{/*	deleteQuery={{configId: config.id}}*/}
			{/*	navigateTo={"/root/settings/config/list"}*/}
			{/*>*/}
			{/*	<ConfigPreview config={config}/>*/}
			{/*</DeleteTemplate>*/}
		</>}
	</ConfigPage>;
});
