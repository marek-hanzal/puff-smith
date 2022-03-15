import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobsList} from "@/puff-smith/site/leight";
import {JobsSourceControlProvider} from "@/sdk/api/leight/shared/job/query";

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
			<JobsList/>
		</JobsSourceControlProvider>
	</RootPage>;
});
