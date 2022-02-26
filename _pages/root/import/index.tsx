import {ImportIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {ImportPageMenu} from "@/puff-smith/../../../_site/root/import";
import {Template} from "@leight-core/common";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.import.index"}
	>
		<RootMenu/>
		<ImportPageMenu/>
		<Template
			icon={<ImportIcon/>}
			label={"root.import.index"}
		/>
	</RootPage>;
});
