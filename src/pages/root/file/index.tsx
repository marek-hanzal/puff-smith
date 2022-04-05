import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {FileList} from "@/puff-smith/site/shared/file";
import {FilesSourceControlProvider} from "@/sdk/api/file/query";
import {FileIcon} from "@leight-core/client";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.file"}
		menuSelection={["/root/file"]}
		icon={<FileIcon/>}
	>
		<FilesSourceControlProvider>
			<FileList/>
		</FilesSourceControlProvider>
	</RootPage>;
});
