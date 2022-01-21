import {
	FC,
	ReactNode,
	createContext
} from "react";
import {
	EntityContext,
	EntityProvider,
	Form,
	IEntityContext,
	IEntityProviderProps,
	IFormProps,
	IPageProps,
	IQueryOptions,
	IQueryProps,
	IQueryResult,
	IQuerySourceSelectProps,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	Page,
	Query,
	QuerySourceSelect,
	SourceContextProvider,
	Table,
	createGetMutation,
	createGetQuery,
	createPostMutation,
	createPostQuery,
	isCallable,
	useContext,
	useOptionalContext,
	useParams,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

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

export interface IJobPageProps extends IPageProps {
	children?: ReactNode | ((data: import("@/sdk/edde/job/dto/index").JobDto) => ReactNode);
}

export const JobPage: FC<IJobPageProps> = ({children, ...props}) => {
	const {jobId} = useParams();
	return <JobProvider>
		<Page {...props}>
			<FetchJob
				query={{jobId}}
			>
				{client => isCallable(children) ? (children as any)(client) : children}
			</FetchJob>
		</Page>
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
		{...props}
	>
		{children}
	</SourceContextProvider>;
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