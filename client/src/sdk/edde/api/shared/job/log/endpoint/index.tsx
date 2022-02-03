import {FC} from "react";
import {
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
	SourceContextProvider,
	Table,
	useFilterContext,
	useOptionalFilterContext,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IJobLogsQueryParams = void;


export const useJobLogsQuery = createPostQuery<IJobLogsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/job/dto/log/index").JobLogDto>>("Edde.Shared.Job.Log.JobLogs");
export const useJobLogsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Job.Log.JobLogs"])
}

export type ILevelsQueryParams = void;


export const useLevelsQuery = createPostQuery<ILevelsQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/job/dto/log/index").LogLevelDto>>("Edde.Shared.Job.Log.Levels");
export const useLevelsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Job.Log.Levels"])
}

export type ITypesQueryParams = void;


export const useTypesQuery = createPostQuery<ITypesQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/job/dto/log/index").LogTypeDto>>("Edde.Shared.Job.Log.Types");
export const useTypesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Job.Log.Types"])
}

export const useJobLogsSource = () => useSourceContext<IJobLogsQueryParams, import("@/sdk/edde/job/dto/log/index").JobLogDto, import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>()

export interface IJobLogsSourceContext extends ISourceContext<IJobLogsQueryParams, import("@/sdk/edde/job/dto/log/index").JobLogDto, import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto> {
}

export interface IJobLogsSourceProps extends Partial<ISourceContextProviderProps<IJobLogsQueryParams, import("@/sdk/edde/job/dto/log/index").JobLogDto, import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>> {
}

export const JobLogsSource: FC<IJobLogsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IJobLogsQueryParams, import("@/sdk/edde/job/dto/log/index").JobLogDto, import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>
		useQuery={useJobLogsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IJobLogsBaseTableProps extends ITableProps<IJobLogsQueryParams, import("@/sdk/edde/job/dto/log/index").JobLogDto, import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto> {
}

export const JobLogsBaseTable: FC<IJobLogsBaseTableProps> = props => {
	return <Table<IJobLogsQueryParams, import("@/sdk/edde/job/dto/log/index").JobLogDto, import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>
		{...props}
	/>
}

export interface IJobLogsSourceTableProps extends IJobLogsBaseTableProps {
	source?: IJobLogsSourceProps;
	defaultFilter?: import("@/sdk/edde/job/dto/log/index").JobLogFilterDto;
	defaultOrderBy?: import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto;
	defaultQuery?: IJobLogsQueryParams;
	filter?: import("@/sdk/edde/job/dto/log/index").JobLogFilterDto;
	orderBy?: import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto;
	query?: IJobLogsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/job/dto/log/index").JobLogDto>>;
}

export const JobLogsSourceTable: FC<IJobLogsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <JobLogsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<JobLogsBaseTable {...props}/>
	</JobLogsSource>
}

export interface IJobLogsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/job/dto/log/index").JobLogDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/job/dto/log/index").JobLogDto>;
	source?: IJobLogsSourceProps;
}

export const JobLogsSourceSelect: FC<IJobLogsSourceSelectProps> = ({source, ...props}) => {
	return <JobLogsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IJobLogsQueryParams, import("@/sdk/edde/job/dto/log/index").JobLogDto, import("@/sdk/edde/job/dto/log/index").JobLogOrderByDto, import("@/sdk/edde/job/dto/log/index").JobLogFilterDto> {...props}/>
	</JobLogsSource>;
};

export interface IJobLogsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>> {
}

export const JobLogsFilterContext: FC<IJobLogsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/job/dto/log/index").JobLogFilterDto> {...props}/>
}

export const useJobLogsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>()
export const useJobLogsFilterContext = () => useFilterContext<import("@/sdk/edde/job/dto/log/index").JobLogFilterDto>()

export const useLevelsSource = () => useSourceContext<ILevelsQueryParams, import("@/sdk/edde/job/dto/log/index").LogLevelDto, void | undefined, void | undefined>()

export interface ILevelsSourceContext extends ISourceContext<ILevelsQueryParams, import("@/sdk/edde/job/dto/log/index").LogLevelDto, void | undefined, void | undefined> {
}

export interface ILevelsSourceProps extends Partial<ISourceContextProviderProps<ILevelsQueryParams, import("@/sdk/edde/job/dto/log/index").LogLevelDto, void | undefined, void | undefined>> {
}

export const LevelsSource: FC<ILevelsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ILevelsQueryParams, import("@/sdk/edde/job/dto/log/index").LogLevelDto, void | undefined, void | undefined>
		useQuery={useLevelsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ILevelsBaseTableProps extends ITableProps<ILevelsQueryParams, import("@/sdk/edde/job/dto/log/index").LogLevelDto, void | undefined, void | undefined> {
}

export const LevelsBaseTable: FC<ILevelsBaseTableProps> = props => {
	return <Table<ILevelsQueryParams, import("@/sdk/edde/job/dto/log/index").LogLevelDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface ILevelsSourceTableProps extends ILevelsBaseTableProps {
	source?: ILevelsSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: ILevelsQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: ILevelsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/job/dto/log/index").LogLevelDto>>;
}

export const LevelsSourceTable: FC<ILevelsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <LevelsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<LevelsBaseTable {...props}/>
	</LevelsSource>
}

export interface ILevelsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/job/dto/log/index").LogLevelDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/job/dto/log/index").LogLevelDto>;
	source?: ILevelsSourceProps;
}

export const LevelsSourceSelect: FC<ILevelsSourceSelectProps> = ({source, ...props}) => {
	return <LevelsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ILevelsQueryParams, import("@/sdk/edde/job/dto/log/index").LogLevelDto, void | undefined, void | undefined> {...props}/>
	</LevelsSource>;
};

export interface ILevelsFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const LevelsFilterContext: FC<ILevelsFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useLevelsOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useLevelsFilterContext = () => useFilterContext<void | undefined>()

export const useTypesSource = () => useSourceContext<ITypesQueryParams, import("@/sdk/edde/job/dto/log/index").LogTypeDto, void | undefined, void | undefined>()

export interface ITypesSourceContext extends ISourceContext<ITypesQueryParams, import("@/sdk/edde/job/dto/log/index").LogTypeDto, void | undefined, void | undefined> {
}

export interface ITypesSourceProps extends Partial<ISourceContextProviderProps<ITypesQueryParams, import("@/sdk/edde/job/dto/log/index").LogTypeDto, void | undefined, void | undefined>> {
}

export const TypesSource: FC<ITypesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ITypesQueryParams, import("@/sdk/edde/job/dto/log/index").LogTypeDto, void | undefined, void | undefined>
		useQuery={useTypesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ITypesBaseTableProps extends ITableProps<ITypesQueryParams, import("@/sdk/edde/job/dto/log/index").LogTypeDto, void | undefined, void | undefined> {
}

export const TypesBaseTable: FC<ITypesBaseTableProps> = props => {
	return <Table<ITypesQueryParams, import("@/sdk/edde/job/dto/log/index").LogTypeDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface ITypesSourceTableProps extends ITypesBaseTableProps {
	source?: ITypesSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: ITypesQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: ITypesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/job/dto/log/index").LogTypeDto>>;
}

export const TypesSourceTable: FC<ITypesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <TypesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<TypesBaseTable {...props}/>
	</TypesSource>
}

export interface ITypesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/job/dto/log/index").LogTypeDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/job/dto/log/index").LogTypeDto>;
	source?: ITypesSourceProps;
}

export const TypesSourceSelect: FC<ITypesSourceSelectProps> = ({source, ...props}) => {
	return <TypesSource defaultSize={100} {...source}>
		<QuerySourceSelect<ITypesQueryParams, import("@/sdk/edde/job/dto/log/index").LogTypeDto, void | undefined, void | undefined> {...props}/>
	</TypesSource>;
};

export interface ITypesFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const TypesFilterContext: FC<ITypesFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useTypesOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useTypesFilterContext = () => useFilterContext<void | undefined>()
