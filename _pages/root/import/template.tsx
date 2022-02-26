import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {ImportPageMenu} from "@/puff-smith/../../../_site/root/import";
import {TemplateTable} from "@/puff-smith/../../../_site/shared/import/template";

export default withRootLayout(function Template() {
	return <RootPage
		title={"root.import.template"}
	>
		<RootMenu/>
		<ImportPageMenu/>
		<TemplateTable/>
	</RootPage>;
});
