import {FC} from "react";
import {
	createGetQuery,
	createPostMutation,
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

export type IDisableQueryParams = void;


export const useDisableMutation = createPostMutation<IDisableQueryParams, void, void>("Edde.Root.Profiler.Disable");

export type IEnableQueryParams = void;


export const useEnableMutation = createPostMutation<IEnableQueryParams, void, void>("Edde.Root.Profiler.Enable");

export type IIsEnabledQueryParams = void;


export const useIsEnabledQuery = createGetQuery<IIsEnabledQueryParams, boolean>("Edde.Root.Profiler.IsEnabled");
export const useIsEnabledQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Profiler.IsEnabled"])
}

export type INamesQueryParams = void;


export const useNamesQuery = createPostQuery<INamesQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/profiler/dto/index").ProfilerNameDto>>("Edde.Root.Profiler.Names");
export const useNamesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Profiler.Names"])
}

export type IProfilersQueryParams = void;


export const useProfilersQuery = createPostQuery<IProfilersQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/profiler/dto/index").ProfilerDto>>("Edde.Root.Profiler.Profilers");
export const useProfilersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Profiler.Profilers"])
}

export const useNamesSource = () => useSourceContext<INamesQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerNameDto, void | undefined, void | undefined>()

export interface INamesSourceContext extends ISourceContext<INamesQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerNameDto, void | undefined, void | undefined> {
}

export interface INamesSourceProps extends Partial<ISourceContextProviderProps<INamesQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerNameDto, void | undefined, void | undefined>> {
}

export const NamesSource: FC<INamesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<INamesQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerNameDto, void | undefined, void | undefined>
		useQuery={useNamesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface INamesBaseTableProps extends ITableProps<INamesQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerNameDto, void | undefined, void | undefined> {
}

export const NamesBaseTable: FC<INamesBaseTableProps> = props => {
	return <Table<INamesQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerNameDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface INamesSourceTableProps extends INamesBaseTableProps {
	source?: INamesSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: INamesQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: INamesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/profiler/dto/index").ProfilerNameDto>>;
}

export const NamesSourceTable: FC<INamesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <NamesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<NamesBaseTable {...props}/>
	</NamesSource>
}

export interface INamesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/profiler/dto/index").ProfilerNameDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/profiler/dto/index").ProfilerNameDto>;
	source?: INamesSourceProps;
}

export const NamesSourceSelect: FC<INamesSourceSelectProps> = ({source, ...props}) => {
	return <NamesSource defaultSize={100} {...source}>
		<QuerySourceSelect<INamesQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerNameDto, void | undefined, void | undefined> {...props}/>
	</NamesSource>;
};

export interface INamesFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const NamesFilterContext: FC<INamesFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useNamesOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useNamesFilterContext = () => useFilterContext<void | undefined>()

export const useProfilersSource = () => useSourceContext<IProfilersQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerDto, import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>()

export interface IProfilersSourceContext extends ISourceContext<IProfilersQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerDto, import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto> {
}

export interface IProfilersSourceProps extends Partial<ISourceContextProviderProps<IProfilersQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerDto, import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>> {
}

export const ProfilersSource: FC<IProfilersSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IProfilersQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerDto, import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>
		useQuery={useProfilersQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IProfilersBaseTableProps extends ITableProps<IProfilersQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerDto, import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto> {
}

export const ProfilersBaseTable: FC<IProfilersBaseTableProps> = props => {
	return <Table<IProfilersQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerDto, import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>
		{...props}
	/>
}

export interface IProfilersSourceTableProps extends IProfilersBaseTableProps {
	source?: IProfilersSourceProps;
	defaultFilter?: import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto;
	defaultOrderBy?: import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto;
	defaultQuery?: IProfilersQueryParams;
	filter?: import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto;
	orderBy?: import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto;
	query?: IProfilersQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/profiler/dto/index").ProfilerDto>>;
}

export const ProfilersSourceTable: FC<IProfilersSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <ProfilersSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<ProfilersBaseTable {...props}/>
	</ProfilersSource>
}

export interface IProfilersSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/profiler/dto/index").ProfilerDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/profiler/dto/index").ProfilerDto>;
	source?: IProfilersSourceProps;
}

export const ProfilersSourceSelect: FC<IProfilersSourceSelectProps> = ({source, ...props}) => {
	return <ProfilersSource defaultSize={100} {...source}>
		<QuerySourceSelect<IProfilersQueryParams, import("@/sdk/edde/profiler/dto/index").ProfilerDto, import("@/sdk/edde/profiler/dto/index").ProfilerOrderByDto, import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto> {...props}/>
	</ProfilersSource>;
};

export interface IProfilersFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>> {
}

export const ProfilersFilterContext: FC<IProfilersFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto> {...props}/>
}

export const useProfilersOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>()
export const useProfilersFilterContext = () => useFilterContext<import("@/sdk/edde/profiler/dto/index").ProfilerFilterDto>()
