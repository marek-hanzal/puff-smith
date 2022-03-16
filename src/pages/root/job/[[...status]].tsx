import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {IJobListProps, JobsList} from "@/puff-smith/site/leight";
import {JobsSourceControlProvider} from "@/sdk/api/leight/shared/job/query";
import {IJobStatus} from "@leight-core/api";
import {JobMenu} from "@/puff-smith/site/root/job";
import {useParams} from "@leight-core/client";
import {JobIcon} from "@/puff-smith";

export default withRootLayout(function Index() {
	const {status} = useParams();

	const tabs: {
		[index in string]: {
			filter?: IJobStatus[],
			listProps?: Partial<IJobListProps>,
		}
	} = {
		'running': {
			filter: ['RUNNING', 'NEW'],
			listProps: {
				disableToolbar: true,
			},
		},
		'review': {
			filter: ['REVIEW'],
			listProps: {
				showFilter: false,
			},
		},
		'failure': {
			filter: ['FAILURE'],
			listProps: {
				showFilter: false,
			},
		},
		'success': {
			filter: ['SUCCESS'],
			listProps: {
				showFilter: false,
			},
		},
		'done': {
			filter: ['DONE'],
			listProps: {
				showFilter: false,
			},
		},
		'all': {
			listProps: {
				showCommit: false,
			},
		},
	};

	const config = tabs[status || 'running'];

	return <RootPage
		title={"root.job"}
		menuSelection={['/root/job', '/root/job/' + (status || 'running')]}
		icon={<JobIcon/>}
		headerPostfix={<JobMenu/>}
	>
		<JobsSourceControlProvider
			applyFilter={config.filter && {
				status: {
					in: config.filter,
				},
			}}
			defaultOrderBy={{
				created: 'desc',
			}}
		>
			<JobsList {...config.listProps}/>
		</JobsSourceControlProvider>
	</RootPage>;
});
