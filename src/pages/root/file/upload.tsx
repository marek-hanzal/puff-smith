import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {FilePageMenu} from "@/puff-smith/site/root/file";
import {FileUpload} from "@/puff-smith/site/shared/file";
import {FileAddOutlined} from "@ant-design/icons";

export default withRootLayout(function Upload() {
	return <RootPage
		title={"root.file.upload"}
	>
		<RootMenu/>
		<FilePageMenu/>
		<FileUpload
			icon={<FileAddOutlined/>}
			translation={"root.file"}
		/>
	</RootPage>;
});
