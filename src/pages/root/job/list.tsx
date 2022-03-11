import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobsSource, JobsSourceConsumer} from "@/sdk/api/shared/job/query";

export default withRootLayout(function List() {
	return <RootPage
		title={"root.job"}
		menuSelection={['/root/job']}
	>
		<JobsSource live={1000} defaultOrderBy={{created: 'desc'}}>
			<JobsSourceConsumer>
				{sourceContext => sourceContext.data().items.map(job => <div key={job.id}>
					{job.status}
				</div>)}
			</JobsSourceConsumer>
		</JobsSource>
	</RootPage>;
});
