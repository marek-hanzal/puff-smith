import {ConsumerProps, FC} from "react";
import {
	createDeleteMutation,
	createPostQuery,
	FilterContextProvider,
	IFilterContextProviderProps,
	IQueryOptions,
	IQueryResult,
	IQuerySourceSelectProps,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	QuerySourceSelect,
	SourceContext,
	SourceContextProvider,
	Table,
	useFilterContext,
	useOptionalFilterContext,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IDropLogsQueryParams = void;


export const useDropLogsMutation = createDeleteMutation<IDropLogsQueryParams, void | undefined>("Edde.Root.Log.DropLogs");

export type ILogsQueryParams = void;


export const useLogsQuery = createPostQuery<ILogsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/log/dto/index").LogDto>>("Edde.Root.Log.Logs");
export const useLogsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Log.Logs"])
}

export type ILogTagsQueryParams = void;


export const useLogTagsQuery = createPostQuery<ILogTagsQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/tag/dto/index").TagDto>>("Edde.Root.Log.LogTags");
export const useLogTagsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Log.LogTags"])
}

export const useLogsSource = () => useSourceContext<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto>()

export interface ILogsSourceContext extends ISourceContext<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto> {
}

export interface ILogsSourceProps extends Partial<ISourceContextProviderProps<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto>> {
}

export const LogsSource: FC<ILogsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto>
		useQuery={useLogsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ILogsSourceConsumerProps extends ConsumerProps<ISourceContext<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto>> {
}

export const LogsSourceConsumer: FC<ILogsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ILogsBaseTableProps extends ITableProps<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto> {
}

export const LogsBaseTable: FC<ILogsBaseTableProps> = props => {
	return <Table<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto>
		{...props}
	/>
}

export interface ILogsSourceTableProps extends ILogsBaseTableProps {
	source?: ILogsSourceProps;
	defaultFilter?: import("@/sdk/edde/log/dto/index").LogFilterDto;
	defaultOrderBy?: import("@/sdk/edde/log/dto/index").LogOrderByDto;
	defaultQuery?: ILogsQueryParams;
	filter?: import("@/sdk/edde/log/dto/index").LogFilterDto;
	orderBy?: import("@/sdk/edde/log/dto/index").LogOrderByDto;
	query?: ILogsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/log/dto/index").LogDto>>;
}

export const LogsSourceTable: FC<ILogsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <LogsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<LogsBaseTable {...props}/>
	</LogsSource>
}

export interface ILogsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/log/dto/index").LogDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/log/dto/index").LogDto>;
	source?: ILogsSourceProps;
}

export const LogsSourceSelect: FC<ILogsSourceSelectProps> = ({source, ...props}) => {
	return <LogsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ILogsQueryParams, import("@/sdk/edde/log/dto/index").LogDto, import("@/sdk/edde/log/dto/index").LogOrderByDto, import("@/sdk/edde/log/dto/index").LogFilterDto> {...props}/>
	</LogsSource>;
};

export interface ILogsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/log/dto/index").LogFilterDto>> {
}

export const LogsFilterContext: FC<ILogsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/log/dto/index").LogFilterDto> {...props}/>
}

export const useLogsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/edde/log/dto/index").LogFilterDto>()
export const useLogsFilterContext = () => useFilterContext<import("@/sdk/edde/log/dto/index").LogFilterDto>()

export const useLogTagsSource = () => useSourceContext<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined>()

export interface ILogTagsSourceContext extends ISourceContext<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined> {
}

export interface ILogTagsSourceProps extends Partial<ISourceContextProviderProps<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined>> {
}

export const LogTagsSource: FC<ILogTagsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined>
		useQuery={useLogTagsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ILogTagsSourceConsumerProps extends ConsumerProps<ISourceContext<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined>> {
}

export const LogTagsSourceConsumer: FC<ILogTagsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ILogTagsBaseTableProps extends ITableProps<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined> {
}

export const LogTagsBaseTable: FC<ILogTagsBaseTableProps> = props => {
	return <Table<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface ILogTagsSourceTableProps extends ILogTagsBaseTableProps {
	source?: ILogTagsSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: ILogTagsQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: ILogTagsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/tag/dto/index").TagDto>>;
}

export const LogTagsSourceTable: FC<ILogTagsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <LogTagsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<LogTagsBaseTable {...props}/>
	</LogTagsSource>
}

export interface ILogTagsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/tag/dto/index").TagDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/tag/dto/index").TagDto>;
	source?: ILogTagsSourceProps;
}

export const LogTagsSourceSelect: FC<ILogTagsSourceSelectProps> = ({source, ...props}) => {
	return <LogTagsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ILogTagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, void | undefined, void | undefined> {...props}/>
	</LogTagsSource>;
};

export interface ILogTagsFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const LogTagsFilterContext: FC<ILogTagsFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useLogTagsOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useLogTagsFilterContext = () => useFilterContext<void | undefined>()
