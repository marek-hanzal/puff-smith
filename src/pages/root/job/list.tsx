import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobsFilter, JobsSourceControlProvider} from "@/sdk/api/shared/job/query";
import {JobsList} from "@/puff-smith/site/leight";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.job"}
		menuSelection={['/root/job']}
	>
		<JobsSourceControlProvider
			defaultFilter={{status: 'SUCCESS'}}
			defaultOrderBy={{
				created: 'desc',
			}}
		>
			<JobsFilter
				toFilter={values => ({
					status: 'FAILURE',
				})}
			>
			</JobsFilter>
			<JobsList/>
		</JobsSourceControlProvider>
	</RootPage>;
});
