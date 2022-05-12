import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {FileList} from "@/puff-smith/site/shared/file/@module/list/FileList";
import {FilesSourceControlProvider} from "@/sdk/api/file/query";
import {FileIcon} from "@leight-core/client";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.file"}
		menuSelection={["/root/file"]}
		icon={<FileIcon/>}
	>
		<FilesSourceControlProvider
			defaultSize={10}
		>
			<FileList/>
		</FilesSourceControlProvider>
	</RootPage>;
});
