import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/client";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.job"}
		menuSelection={['/root/job']}
	>
		<Template>
			<h1>job list here</h1>
		</Template>
	</RootPage>;
});
