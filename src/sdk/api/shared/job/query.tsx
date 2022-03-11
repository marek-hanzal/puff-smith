import {IJob, IQuery, IQueryParams, ISourceContext} from "@leight-core/api";
import {createPromiseHook, createQueryHook, ISourceProviderProps, useLinkContext, useSourceContext} from "@leight-core/client";

export const JobsApiLink = "/api/shared/job/query";

export type IJobsQueryParams = IQueryParams;

export const useJobsQuery = createQueryHook<IQuery, IJob[], IJobsQueryParams>(JobsApiLink, "post");

export const useJobsSource = () => useSourceContext<IJob[], IJobsQueryParams>()

export interface IJobsSourceContext extends ISourceContext<IJob[], IJobsQueryParams> {
}

export interface IJobsSourceProps extends Partial<ISourceProviderProps<IJob[], IJobsQueryParams>> {
}

export const useJobsLink = (): ((query: IJobsQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(JobsApiLink, query);
}

export const useJobsPromise = createPromiseHook<IQuery, IJob[], IJobsQueryParams>(JobsApiLink, "post");
