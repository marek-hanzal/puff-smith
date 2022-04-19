/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobQuery} from "@/puff-smith/service/job";
import {ReadOutlined} from "@ant-design/icons";
import {IJob, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISelectionProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";
import {useQueryClient} from "react-query";

export const JobsApiLink = "/api/job/query";

export type IJobsQueryParams = undefined;

export const useJobsQuery = createQueryHook<IJobQuery, IQueryResult<IJob>, IJobsQueryParams>(JobsApiLink, "post");

export const useJobsSource = () => useSourceContext<IJob>();

export interface IJobsSourceContext extends ISourceContext<IJob> {
}

export interface IJobsSourceConsumerProps extends ConsumerProps<ISourceContext<IJob>> {
}

export const JobsSourceConsumer: FC<IJobsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IJobsSourceProps extends Partial<ISourceProviderProps<IJob>> {
}

export const JobsSource: FC<IJobsSourceProps> = props => {
	return <SourceProvider<IJob>
		name={"Jobs"}
		useQuery={useJobsQuery}
		{...props}
	/>;
};

export const toJobsLink = (queryParams?: IJobsQueryParams) => toLink(JobsApiLink, queryParams);
export const useJobsLink = () => toJobsLink;

export const useJobsPromise = createPromiseHook<IJobQuery, IJob, IJobsQueryParams>(JobsApiLink, "post");
export const JobsPromise = createPromise<IJobQuery, IJob, IJobsQueryParams>(JobsApiLink, "post");

export interface IJobsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IJobQuery>>> {
}

export const JobsFilterProvider: FC<IJobsFilterProviderProps> = props => <FilterProvider<IQueryFilter<IJobQuery>> name={"Jobs"} {...props}/>;

export const useJobsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IJobQuery>>();
export const useJobsFilterContext = () => useFilterContext<IQueryFilter<IJobQuery>>();

export interface IJobsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IJobQuery>> {
}

export const JobsSourceFilter: FC<IJobsSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Jobs"}
/>;

export interface IJobsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IJobQuery>>> {
}

export const JobsOrderByProvider: FC<IJobsOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IJobQuery>> name={"Jobs"} {...props}/>;

export const useJobsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IJobQuery>>();
export const useJobsOrderByContext = () => useOrderByContext<IQueryOrderBy<IJobQuery>>();

export interface IJobsListSourceProps extends Partial<IListProps<IJob>> {
	sourceProps?: Partial<IJobsSourceProps>;
}

export interface IJobsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IJobQuery>, IQueryOrderBy<IJobQuery>, IJobsQueryParams>> {
}

export const JobsSourceControlProvider: FC<IJobsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IJobQuery>, IQueryOrderBy<IJobQuery>> name={"Jobs"} {...props}/>;

export const JobsListSource: FC<IJobsListSourceProps> = ({sourceProps, ...props}) => {
	return <JobsSource
		{...sourceProps}
	>
		<List<IJob>
			{...props}
		/>
	</JobsSource>;
}

export interface IJobsSourceSelectProps extends IQuerySourceSelectProps<IJob> {
	toOption: IToOptionMapper<IJob>;
	sourceProps?: IJobsSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const JobsSourceSelect: FC<IJobsSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<JobsSource {...sourceProps}>
					<QuerySourceSelect<IJob> {...props}/>
				</JobsSource>
			</Col>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.Jobs.title"}
					tooltip={"common.selection.Jobs.title.tooltip"}
					width={800}
				>
					<JobsSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</JobsSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useJobsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([JobsApiLink]);
};

export const useJobsOptionalSelectionContext = () => useOptionalSelectionContext<IJob>();
export const useJobsSelectionContext = () => useSelectionContext<IJob>();
