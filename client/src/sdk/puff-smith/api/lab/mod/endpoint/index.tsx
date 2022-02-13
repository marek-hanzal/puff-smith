import {
	ConsumerProps,
	FC,
	ReactElement,
	ReactNode,
	createContext
} from "react";
import {
	EntityContext,
	EntityProvider,
	FilterContextProvider,
	Form,
	IEntityContext,
	IEntityProviderProps,
	IFilterContextProviderProps,
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
	SourceContext,
	SourceContextProvider,
	Table,
	createGetMutation,
	createGetQuery,
	createPatchMutation,
	createPatchQuery,
	createPostMutation,
	createPostQuery,
	isCallable,
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

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/mod/dto/index").CreateDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>("PuffSmith.Lab.Mod.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/mod/dto/index").DeleteDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>("PuffSmith.Lab.Mod.Delete");

export type IModQueryParams = {
	modId: string;
}


export const useModQuery = createGetQuery<IModQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto>("PuffSmith.Lab.Mod.Mod");
export const useModQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Mod.Mod"])
}

export type IModsQueryParams = void;


export const useModsQuery = createPostQuery<IModsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/mod/dto/index").ModDto>>("PuffSmith.Lab.Mod.Mods");
export const useModsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Mod.Mods"])
}

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/mod/dto/index").PatchDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>("PuffSmith.Lab.Mod.Patch");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/mod/dto/index").CreateDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/mod/dto/index").CreateDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/mod/dto/index").DeleteDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/mod/dto/index").DeleteDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/mod/dto/index").PatchDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/mod/dto/index").PatchDto, import("@/sdk/puff-smith/mod/dto/index").ModDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const ModContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/mod/dto/index").ModDto>);

export const useModContext = (): IEntityContext<import("@/sdk/puff-smith/mod/dto/index").ModDto> => useContext(ModContext, "ModContext");

export const useOptionalModContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/mod/dto/index").ModDto>>(ModContext as any);

export interface IModProvider extends IEntityProviderProps<import("@/sdk/puff-smith/mod/dto/index").ModDto> {
}

export const ModProvider: FC<IModProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <ModContext.Provider value={entityContext}>
				{children}
			</ModContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchModProps extends Partial<IQueryProps<IModQueryParams, void, import("@/sdk/puff-smith/mod/dto/index").ModDto>> {
	query: IModQueryParams;
}

export const FetchMod: FC<IFetchModProps> = ({query, ...props}) => <Query<IModQueryParams, void, import("@/sdk/puff-smith/mod/dto/index").ModDto>
	useQuery={useModQuery}
	query={query}
	request={undefined}
	context={useOptionalModContext()}
	{...props}
/>;

export type IModPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/mod/dto/index").ModDto>) => ReactElement);
export type IModPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/mod/dto/index").ModDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IModPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/mod/dto/index").ModDto) => ReactNode);
	breadcrumbProps?: IModPageBreadcrumb;
	breadcrumbMobileProps?: IModPageBreadcrumb;
	breadcrumbBrowserProps?: IModPageBreadcrumb;
	extra?: IModPageExtra;
	extraMobile?: IModPageExtra; 
	extraBrowser?: IModPageExtra; 
}

export const ModPage: FC<IModPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {modId} = useParams();
	return <ModProvider>
		<ModContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchMod
					query={{modId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchMod>
			</Page>}
		</ModContext.Consumer>
	</ModProvider>;
};

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

export interface IModsSourceConsumerProps extends ConsumerProps<ISourceContext<IModsQueryParams, import("@/sdk/puff-smith/mod/dto/index").ModDto, import("@/sdk/puff-smith/mod/dto/index").ModOrderByDto, import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>> {
}

export const ModsSourceConsumer: FC<IModsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
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

export const useModsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>()
export const useModsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/mod/dto/index").ModFilterDto>()