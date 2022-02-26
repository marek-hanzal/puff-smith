import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {FilePageMenu} from "@/puff-smith/../../../_site/root/file";
import {FileTable} from "@/puff-smith/../../../_site/shared/file";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.file.list"}
	>
		<RootMenu/>
		<FilePageMenu/>
		<FileTable/>
	</RootPage>;
});
