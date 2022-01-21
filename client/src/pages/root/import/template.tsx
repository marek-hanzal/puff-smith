import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {ImportPageMenu} from "@/puff-smith/site/root/import";
import {TemplateTable} from "@/puff-smith/site/shared/import/template";

export default withRootLayout(function Template() {
	return <RootPage
		name={"root.import.template"}
	>
		<RootMenu/>
		<ImportPageMenu/>
		<TemplateTable/>
	</RootPage>;
});
