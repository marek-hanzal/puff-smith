import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/client";
import {FileOutlined} from "@ant-design/icons";
import {FileList} from "@/puff-smith/site/shared/file";
import {FilesSourceControlProvider} from "@/sdk/api/leight/shared/file/query";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.file"}
		menuSelection={['/root/file']}
		icon={<FileOutlined/>}
	>
		<Template>
			<FilesSourceControlProvider>
				<FileList/>
			</FilesSourceControlProvider>
		</Template>
	</RootPage>;
});
