import {JobIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobPageMenu} from "@/puff-smith/site/root/job";
import {Template} from "@leight-core/leight";

export default withRootLayout(function Index() {
	return <RootPage
		name={"root.job.index"}
	>
		<RootMenu/>
		<JobPageMenu/>
		<Template
			icon={<JobIcon/>}
			label={"root.job.index"}
		/>
	</RootPage>;
});
