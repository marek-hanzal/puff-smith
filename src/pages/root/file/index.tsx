import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/client";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.file"}
		menuSelection={['/root/file']}
	>
		<Template>
		</Template>
	</RootPage>;
});
