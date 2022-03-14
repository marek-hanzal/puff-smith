import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobsListSource} from "@/sdk/api/shared/job/query";
import {ListItem, ListItemMeta, toLocalDateTime} from '@leight-core/client';

export default withRootLayout(function List() {
	return <RootPage
		title={"root.job"}
		menuSelection={['/root/job']}
	>
		<JobsListSource
			sourceProps={{
				live: 1000,
				defaultFilter: {
					status: 'SUCCESS',
				},
				defaultOrderBy: {
					created: 'asc',
				}
			}}
		>
			{job => <ListItem key={job.id}>
				<ListItemMeta
					title={job.status}
					description={toLocalDateTime(job.created)}
				/>
			</ListItem>}
		</JobsListSource>
	</RootPage>;
});
