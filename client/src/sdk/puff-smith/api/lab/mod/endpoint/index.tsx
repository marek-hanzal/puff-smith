import {FC} from "react";
import {
	createPostMutation,
	createPostQuery,
	FilterContextProvider,
	Form,
	IFilterContextProviderProps,
	IFormProps,
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
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/mod/dto/create/index").CreateDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>("PuffSmith.Lab.Mod.Create");

export type IModsQueryParams = void;


export const useModsQuery = createPostQuery<IModsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/mod/dto/index").ModDto>>("PuffSmith.Lab.Mod.Mods");
export const useModsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Mod.Mods"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/mod/dto/create/index").CreateDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/mod/dto/create/index").CreateDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useModsSource = () => useSourceContext<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>()

export interface IModsSourceContext extends ISourceContext<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto> {
}

export interface IModsSourceProps extends Partial<ISourceContextProviderProps<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>> {
}

export const ModsSource: FC<IModsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>
		useQuery={useModsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IModsBaseTableProps extends ITableProps<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto> {
}

export const ModsBaseTable: FC<IModsBaseTableProps> = props => {
	return <Table<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>
		{...props}
	/>
}

export interface IModsSourceTableProps extends IModsBaseTableProps {
	source?: IModsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/mod/dto/index").ModFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto;
	defaultQuery?: IModsQueryParams;
	filter?: import("@/sdk/puff-smith/mod/dto/index").ModFilterDto;
	orderBy?: import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto;
	query?: IModsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/mod/dto/index").ModDto>>;
}

export const ModsSourceTable: FC<IModsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <ModsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<ModsBaseTable {...props}/>
	</ModsSource>
}

export interface IModsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/mod/dto/index").ModDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/mod/dto/index").ModDto>;
	source?: IModsSourceProps;
}

export const ModsSourceSelect: FC<IModsSourceSelectProps> = ({source, ...props}) => {
	return <ModsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto> {...props}/>
	</ModsSource>;
};

export interface IModsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>> {
}

export const ModsFilterContext: FC<IModsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/mod/dto/index").ModFilterDto> {...props}/>
}
