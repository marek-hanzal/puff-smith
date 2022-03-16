import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {IJobListProps, JobsList} from "@/puff-smith/site/leight";
import {JobsSourceControlProvider} from "@/sdk/api/leight/shared/job/query";
import {Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {IJobStatus} from "@leight-core/api";

export default withRootLayout(function List() {
	const {t} = useTranslation();

	const tabs: {
		[index in string]: {
			filter?: IJobStatus[],
			listProps?: Partial<IJobListProps>,
		}
	} = {
		'RUNNING': {
			filter: ['RUNNING', 'NEW'],
			listProps: {
				disableToolbar: true,
			},
		},
		'REVIEW': {
			filter: ['REVIEW'],
			listProps: {
				showFilter: false,
			},
		},
		'FAILURE': {
			filter: ['FAILURE'],
			listProps: {
				showFilter: false,
			},
		},
		'SUCCESS': {
			filter: ['SUCCESS'],
			listProps: {
				showFilter: false,
			},
		},
		'DONE': {
			filter: ['DONE'],
			listProps: {
				showFilter: false,
			},
		},
		'ALL': {
			listProps: {
				showCommit: false,
			},
		},
	};

	return <RootPage
		title={"root.job"}
		menuSelection={['/root/job']}
	>
		<Tabs size={'large'}>
			{Object.entries(tabs).map(([tab, config]) => <Tabs.TabPane key={tab} tab={t(`common.job.status.${tab}.tab`)}>
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
			</Tabs.TabPane>)}
		</Tabs>
	</RootPage>;
});
