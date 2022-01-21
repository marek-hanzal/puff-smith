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
	createDeleteMutation,
	createDeleteQuery,
	createGetMutation,
	createGetQuery,
	createPatchMutation,
	createPatchQuery,
	createPostMutation,
	createPostQuery,
	isCallable,
	useContext,
	useOptionalContext,
	useParams,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/edde/config/dto/create/index").CreateDto, import("@/sdk/edde/config/dto/index").ConfigDto>("Edde.Root.Config.Create");

export type IDeleteQueryParams = {
	configId: string;
}


export const useDeleteMutation = createDeleteMutation<IDeleteQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto>("Edde.Root.Config.Delete");

export type IConfigsQueryParams = void;


export const useConfigsQuery = createPostQuery<IConfigsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/config/dto/index").ConfigDto>>("Edde.Root.Config.Configs");
export const useConfigsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Config.Configs"])
}

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/edde/config/dto/patch/index").PatchDto, import("@/sdk/edde/config/dto/index").ConfigDto>("Edde.Root.Config.Patch");

export type IConfigQueryParams = {
	configId: string;
}


export const useConfigQuery = createGetQuery<IConfigQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto>("Edde.Root.Config.Config");
export const useConfigQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Config.Config"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/edde/config/dto/create/index").CreateDto, import("@/sdk/edde/config/dto/index").ConfigDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/edde/config/dto/create/index").CreateDto, import("@/sdk/edde/config/dto/index").ConfigDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/edde/config/dto/patch/index").PatchDto, import("@/sdk/edde/config/dto/index").ConfigDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/edde/config/dto/patch/index").PatchDto, import("@/sdk/edde/config/dto/index").ConfigDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const ConfigContext = createContext(null as unknown as IEntityContext<import("@/sdk/edde/config/dto/index").ConfigDto>);

export const useConfigContext = (): IEntityContext<import("@/sdk/edde/config/dto/index").ConfigDto> => useContext(ConfigContext, "ConfigContext");

export const useOptionalConfigContext = () => useOptionalContext<IEntityContext<import("@/sdk/edde/config/dto/index").ConfigDto>>(ConfigContext as any);

export interface IConfigProvider extends IEntityProviderProps<import("@/sdk/edde/config/dto/index").ConfigDto> {
}

export const ConfigProvider: FC<IConfigProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <ConfigContext.Provider value={entityContext}>
				{children}
			</ConfigContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchConfigProps extends Partial<IQueryProps<IConfigQueryParams, void, import("@/sdk/edde/config/dto/index").ConfigDto>> {
	query: IConfigQueryParams;
}

export const FetchConfig: FC<IFetchConfigProps> = ({query, ...props}) => <Query<IConfigQueryParams, void, import("@/sdk/edde/config/dto/index").ConfigDto>
	useQuery={useConfigQuery}
	query={query}
	request={undefined}
	context={useOptionalConfigContext()}
	{...props}
/>;

export interface IConfigPageProps extends IPageProps {
	children?: ReactNode | ((data: import("@/sdk/edde/config/dto/index").ConfigDto) => ReactNode);
}

export const ConfigPage: FC<IConfigPageProps> = ({children, ...props}) => {
	const {configId} = useParams();
	return <ConfigProvider>
		<Page {...props}>
			<FetchConfig
				query={{configId}}
			>
				{client => isCallable(children) ? (children as any)(client) : children}
			</FetchConfig>
		</Page>
	</ConfigProvider>;
};

export const useConfigsSource = () => useSourceContext<IConfigsQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto, import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto>()

export interface IConfigsSourceContext extends ISourceContext<IConfigsQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto, import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto> {
}

export interface IConfigsSourceProps extends Partial<ISourceContextProviderProps<IConfigsQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto, import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto>> {
}

export const ConfigsSource: FC<IConfigsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IConfigsQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto, import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto>
		useQuery={useConfigsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IConfigsBaseTableProps extends ITableProps<IConfigsQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto, import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto> {
}

export const ConfigsBaseTable: FC<IConfigsBaseTableProps> = props => {
	return <Table<IConfigsQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto, import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto>
		{...props}
	/>
}

export interface IConfigsSourceTableProps extends IConfigsBaseTableProps {
	source?: IConfigsSourceProps;
	defaultFilter?: import("@/sdk/edde/config/dto/index").ConfigFilterDto;
	defaultOrderBy?: import("@/sdk/edde/config/dto/index").ConfigOrderByDto;
	defaultQuery?: IConfigsQueryParams;
	filter?: import("@/sdk/edde/config/dto/index").ConfigFilterDto;
	orderBy?: import("@/sdk/edde/config/dto/index").ConfigOrderByDto;
	query?: IConfigsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/config/dto/index").ConfigDto>>;
}

export const ConfigsSourceTable: FC<IConfigsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <ConfigsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<ConfigsBaseTable {...props}/>
	</ConfigsSource>
}

export interface IConfigsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/config/dto/index").ConfigDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/config/dto/index").ConfigDto>;
	source?: IConfigsSourceProps;
}

export const ConfigsSourceSelect: FC<IConfigsSourceSelectProps> = ({source, ...props}) => {
	return <ConfigsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IConfigsQueryParams, import("@/sdk/edde/config/dto/index").ConfigDto, import("@/sdk/edde/config/dto/index").ConfigOrderByDto, import("@/sdk/edde/config/dto/index").ConfigFilterDto> {...props}/>
	</ConfigsSource>;
};