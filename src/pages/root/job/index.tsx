import {JobIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobPageMenu} from "@/puff-smith/site/root/job";
import {Template} from "@leight-core/common";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.job.index"}
	>
		<RootMenu/>
		<JobPageMenu/>
		<Template
			icon={<JobIcon/>}
			label={"root.job.index"}
		/>
	</RootPage>;
});
