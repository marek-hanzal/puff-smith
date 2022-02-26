import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {JobPageMenu} from "@/puff-smith/../../../_site/root/job";
import {JobTable} from "@/puff-smith/../../../_site/shared/job";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.job.list"}
	>
		<RootMenu/>
		<JobPageMenu/>
		<JobTable/>
	</RootPage>;
});
