import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {FilePageMenu} from "@/puff-smith/site/root/file";
import {FileTable} from "@/puff-smith/site/shared/file";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.file.list"}
	>
		<RootMenu/>
		<FilePageMenu/>
		<FileTable/>
	</RootPage>;
});
