import {ConsumerProps, createContext, FC, ReactElement, ReactNode} from "react";
import {
	createGetQuery,
	createPostMutation,
	createPostQuery,
	EntityContext,
	EntityProvider,
	FilterContextProvider,
	IEntityContext,
	IEntityProviderProps,
	IFilterContextProviderProps,
	IPageProps,
	IQueryOptions,
	IQueryProps,
	IQueryResult,
	IQuerySourceSelectProps,
	isCallable,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	Page,
	Query,
	QuerySourceSelect,
	SourceContext,
	SourceContextProvider,
	Table,
	useContext,
	useFilterContext,
	useOptionalContext,
	useOptionalFilterContext,
	useParams,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";
import {BreadcrumbProps} from "antd";
import Breadcrumb from "antd/lib/breadcrumb";

export type ICommitQueryParams = void;


export const useCommitMutation = createPostMutation<ICommitQueryParams, import("@/sdk/edde/job/dto/commit/index").CommitDto | null | undefined, void>("Edde.Shared.Job.Commit");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/edde/job/dto/delete/index").DeleteDto | null | undefined, void>("Edde.Shared.Job.Delete");

export type IInterruptQueryParams = void;


export const useInterruptMutation = createPostMutation<IInterruptQueryParams, import("@/sdk/edde/job/dto/interrupt/index").InterruptDto | null | undefined, void>("Edde.Shared.Job.Interrupt");

export type IJobQueryParams = {
	jobId: string;
}


export const useJobQuery = createGetQuery<IJobQueryParams, import("@/sdk/edde/job/dto/index").JobDto>("Edde.Shared.Job.Job");
export const useJobQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Job.Job"])
}

export type IJobsQueryParams = void;


export const useJobsQuery = createPostQuery<IJobsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/job/dto/index").JobDto>>("Edde.Shared.Job.Jobs");
export const useJobsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Job.Jobs"])
}

export const JobContext = createContext(null as unknown as IEntityContext<import("@/sdk/edde/job/dto/index").JobDto>);

export const useJobContext = (): IEntityContext<import("@/sdk/edde/job/dto/index").JobDto> => useContext(JobContext, "JobContext");

export const useOptionalJobContext = () => useOptionalContext<IEntityContext<import("@/sdk/edde/job/dto/index").JobDto>>(JobContext as any);

export interface IJobProvider extends IEntityProviderProps<import("@/sdk/edde/job/dto/index").JobDto> {
}

export const JobProvider: FC<IJobProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <JobContext.Provider value={entityContext}>
				{children}
			</JobContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchJobProps extends Partial<IQueryProps<IJobQueryParams, void, import("@/sdk/edde/job/dto/index").JobDto>> {
	query: IJobQueryParams;
}

export const FetchJob: FC<IFetchJobProps> = ({query, ...props}) => <Query<IJobQueryParams, void, import("@/sdk/edde/job/dto/index").JobDto>
	useQuery={useJobQuery}
	query={query}
	request={undefined}
	context={useOptionalJobContext()}
	{...props}
/>;

export type IJobPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/edde/job/dto/index").JobDto>) => ReactElement);
export type IJobPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/edde/job/dto/index").JobDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IJobPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/edde/job/dto/index").JobDto) => ReactNode);
	breadcrumbProps?: IJobPageBreadcrumb;
	breadcrumbMobileProps?: IJobPageBreadcrumb;
	breadcrumbBrowserProps?: IJobPageBreadcrumb;
	extra?: IJobPageExtra;
	extraMobile?: IJobPageExtra;
	extraBrowser?: IJobPageExtra;
}

export const JobPage: FC<IJobPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {jobId} = useParams();
	return <JobProvider>
		<JobContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchJob
					query={{jobId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchJob>
			</Page>}
		</JobContext.Consumer>
	</JobProvider>;
};

export const useJobsSource = () => useSourceContext<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto>()

export interface IJobsSourceContext extends ISourceContext<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto> {
}

export interface IJobsSourceProps extends Partial<ISourceContextProviderProps<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto>> {
}

export const JobsSource: FC<IJobsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto>
		useQuery={useJobsQuery}
		filter={useJobsOptionalFilterContext()?.filter}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IJobsSourceConsumerProps extends ConsumerProps<ISourceContext<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto>> {
}

export const JobsSourceConsumer: FC<IJobsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IJobsBaseTableProps extends ITableProps<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto> {
}

export const JobsBaseTable: FC<IJobsBaseTableProps> = props => {
	return <Table<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto>
		{...props}
	/>
}

export interface IJobsSourceTableProps extends IJobsBaseTableProps {
	source?: IJobsSourceProps;
	defaultFilter?: import("@/sdk/edde/job/dto/index").JobFilterDto;
	defaultOrderBy?: import("@/sdk/edde/job/dto/index").JobOrderByDto;
	defaultQuery?: IJobsQueryParams;
	filter?: import("@/sdk/edde/job/dto/index").JobFilterDto;
	orderBy?: import("@/sdk/edde/job/dto/index").JobOrderByDto;
	query?: IJobsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/job/dto/index").JobDto>>;
}

export const JobsSourceTable: FC<IJobsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <JobsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<JobsBaseTable {...props}/>
	</JobsSource>
}

export interface IJobsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/job/dto/index").JobDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/job/dto/index").JobDto>;
	source?: IJobsSourceProps;
}

export const JobsSourceSelect: FC<IJobsSourceSelectProps> = ({source, ...props}) => {
	return <JobsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IJobsQueryParams, import("@/sdk/edde/job/dto/index").JobDto, import("@/sdk/edde/job/dto/index").JobOrderByDto, import("@/sdk/edde/job/dto/index").JobFilterDto> {...props}/>
	</JobsSource>;
};

export interface IJobsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/job/dto/index").JobFilterDto>> {
}

export const JobsFilterContext: FC<IJobsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/job/dto/index").JobFilterDto> {...props}/>
}

export const useJobsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/edde/job/dto/index").JobFilterDto>()
export const useJobsFilterContext = () => useFilterContext<import("@/sdk/edde/job/dto/index").JobFilterDto>()
