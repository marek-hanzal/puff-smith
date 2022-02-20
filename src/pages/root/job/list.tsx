import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobPageMenu} from "@/puff-smith/site/root/job";
import {JobTable} from "@/puff-smith/site/shared/job";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.job.list"}
	>
		<RootMenu/>
		<JobPageMenu/>
		<JobTable/>
	</RootPage>;
});
