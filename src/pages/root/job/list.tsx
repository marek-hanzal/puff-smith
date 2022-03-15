import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobsSourceControlProvider} from "@/sdk/api/shared/job/query";
import {JobsFilter, JobsList} from "@/puff-smith/site/leight";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.job"}
		menuSelection={['/root/job']}
	>
		<JobsSourceControlProvider
			defaultOrderBy={{
				created: 'desc',
			}}
		>
			<JobsFilter/>
			<JobsList/>
		</JobsSourceControlProvider>
	</RootPage>;
});
