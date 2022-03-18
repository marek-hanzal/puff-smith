import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {FileOutlined} from "@ant-design/icons";
import {FileList} from "@/puff-smith/site/shared/file";
import {FilesSourceControlProvider} from "@/sdk/api/file/query";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.file"}
		menuSelection={['/root/file']}
		icon={<FileOutlined/>}
	>
		<FilesSourceControlProvider>
			<FileList/>
		</FilesSourceControlProvider>
	</RootPage>;
});
