import {IJob, IQueryResult, ISourceContext} from "@leight-core/api";
import {IJobFilter, IJobOrderBy, IJobQuery} from "@/puff-smith/service/job";
import {ConsumerProps, FC} from "react";
import {createPromiseHook, createQueryHook, IListProps, ISourceProviderProps, List, SourceContext, SourceProvider, useLinkContext, useSourceContext} from "@leight-core/client";

export const JobsApiLink = "/api/shared/job/query";

export type IJobsQueryParams = void;

export const useJobsQuery = createQueryHook<IJobQuery, IQueryResult<IJob>, IJobsQueryParams>(JobsApiLink, "post");

export const useJobsSource = () => useSourceContext<IJob, IJobFilter, IJobOrderBy, IJobsQueryParams>()

export interface IJobsSourceContext extends ISourceContext<IJob, IJobFilter, IJobOrderBy, IJobsQueryParams> {
}

export interface IJobsSourceProps extends Partial<ISourceProviderProps<IJob, IJobFilter, IJobOrderBy, IJobsQueryParams>> {
}

export interface IJobsSourceConsumerProps extends ConsumerProps<ISourceContext<IJob, IJobFilter, IJobOrderBy, IJobsQueryParams>> {
}

export const JobsSourceConsumer: FC<IJobsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export const JobsSource: FC<IJobsSourceProps> = props => {
	return <SourceProvider<IJob, IJobFilter, IJobOrderBy, IJobsQueryParams>
		useQuery={useJobsQuery}
		{...props}
	/>;
}

export const useJobsLink = (): ((query: IJobsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(JobsApiLink, query);
}

export const useJobsPromise = createPromiseHook<IJobQuery, IJob, IJobsQueryParams>(JobsApiLink, "post");

export interface IJobsListSourceProps extends Partial<IListProps<IJob, IJobFilter, IJobOrderBy, IJobsQueryParams>> {
	sourceProps?: Partial<IJobsSourceProps>;
}

export const JobsListSource: FC<IJobsListSourceProps> = ({sourceProps, ...props}) => {
	return <JobsSource {...sourceProps}>
		<List<IJob, IJobFilter, IJobOrderBy, IJobsQueryParams>
			{...props}
		/>
	</JobsSource>
}
