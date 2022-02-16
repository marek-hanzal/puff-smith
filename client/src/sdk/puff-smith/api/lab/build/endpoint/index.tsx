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

export type IActiveQueryParams = void;


export const useActiveMutation = createPostMutation<IActiveQueryParams, import("@/sdk/puff-smith/api/lab/build/dto/index").ActiveDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>("PuffSmith.Lab.Build.Active");

export type IBuildQueryParams = {
	buildId: string;
}


export const useBuildQuery = createGetQuery<IBuildQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto>("PuffSmith.Lab.Build.Build");
export const useBuildQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Build.Build"])
}

export type IBuildsQueryParams = void;


export const useBuildsQuery = createPostQuery<IBuildsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/build/dto/index").BuildDto>>("PuffSmith.Lab.Build.Builds");
export const useBuildsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Build.Builds"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>("PuffSmith.Lab.Build.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/build/dto/index").DeleteDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>("PuffSmith.Lab.Build.Delete");

export type IOhmQueryParams = void;


export const useOhmMutation = createPostMutation<IOhmQueryParams, import("@/sdk/puff-smith/api/lab/build/dto/index").OhmDto, number | null>("PuffSmith.Lab.Build.Ohm");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/build/dto/index").PatchDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>("PuffSmith.Lab.Build.Patch");

export interface IActiveDefaultFormProps extends Partial<IFormProps<IActiveQueryParams, import("@/sdk/puff-smith/api/lab/build/dto/index").ActiveDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
}

export const ActiveDefaultForm: FC<IActiveDefaultFormProps> = props => {
	return <Form<IActiveQueryParams, import("@/sdk/puff-smith/api/lab/build/dto/index").ActiveDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>
		useMutation={useActiveMutation}
		{...props}
	/>
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/build/dto/index").DeleteDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/build/dto/index").DeleteDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IOhmDefaultFormProps extends Partial<IFormProps<IOhmQueryParams, import("@/sdk/puff-smith/api/lab/build/dto/index").OhmDto, number | null>> {
}

export const OhmDefaultForm: FC<IOhmDefaultFormProps> = props => {
	return <Form<IOhmQueryParams, import("@/sdk/puff-smith/api/lab/build/dto/index").OhmDto, number | null>
		useMutation={useOhmMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/build/dto/index").PatchDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/build/dto/index").PatchDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const BuildContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/build/dto/index").BuildDto>);

export const useBuildContext = (): IEntityContext<import("@/sdk/puff-smith/build/dto/index").BuildDto> => useContext(BuildContext, "BuildContext");

export const useOptionalBuildContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/build/dto/index").BuildDto>>(BuildContext as any);

export interface IBuildProvider extends IEntityProviderProps<import("@/sdk/puff-smith/build/dto/index").BuildDto> {
}

export const BuildProvider: FC<IBuildProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <BuildContext.Provider value={entityContext}>
				{children}
			</BuildContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchBuildProps extends Partial<IQueryProps<IBuildQueryParams, void, import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
	query: IBuildQueryParams;
}

export const FetchBuild: FC<IFetchBuildProps> = ({query, ...props}) => <Query<IBuildQueryParams, void, import("@/sdk/puff-smith/build/dto/index").BuildDto>
	useQuery={useBuildQuery}
	query={query}
	request={undefined}
	context={useOptionalBuildContext()}
	{...props}
/>;

export type IBuildPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/build/dto/index").BuildDto>) => ReactElement);
export type IBuildPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/build/dto/index").BuildDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IBuildPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/build/dto/index").BuildDto) => ReactNode);
	breadcrumbProps?: IBuildPageBreadcrumb;
	breadcrumbMobileProps?: IBuildPageBreadcrumb;
	breadcrumbBrowserProps?: IBuildPageBreadcrumb;
	extra?: IBuildPageExtra;
	extraMobile?: IBuildPageExtra; 
	extraBrowser?: IBuildPageExtra; 
}

export const BuildPage: FC<IBuildPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {buildId} = useParams();
	return <BuildProvider>
		<BuildContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchBuild
					query={{buildId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchBuild>
			</Page>}
		</BuildContext.Consumer>
	</BuildProvider>;
};

export const useBuildsSource = () => useSourceContext<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>()

export interface IBuildsSourceContext extends ISourceContext<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto> {
}

export interface IBuildsSourceProps extends Partial<ISourceContextProviderProps<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>> {
}

export const BuildsSource: FC<IBuildsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>
		useQuery={useBuildsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IBuildsSourceConsumerProps extends ConsumerProps<ISourceContext<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>> {
}

export const BuildsSourceConsumer: FC<IBuildsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IBuildsBaseTableProps extends ITableProps<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto> {
}

export const BuildsBaseTable: FC<IBuildsBaseTableProps> = props => {
	return <Table<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>
		{...props}
	/>
}

export interface IBuildsSourceTableProps extends IBuildsBaseTableProps {
	source?: IBuildsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/build/dto/index").BuildFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto;
	defaultQuery?: IBuildsQueryParams;
	filter?: import("@/sdk/puff-smith/build/dto/index").BuildFilterDto;
	orderBy?: import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto;
	query?: IBuildsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/build/dto/index").BuildDto>>;
}

export const BuildsSourceTable: FC<IBuildsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <BuildsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<BuildsBaseTable {...props}/>
	</BuildsSource>
}

export interface IBuildsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/build/dto/index").BuildDto>;
	source?: IBuildsSourceProps;
}

export const BuildsSourceSelect: FC<IBuildsSourceSelectProps> = ({source, ...props}) => {
	return <BuildsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto> {...props}/>
	</BuildsSource>;
};

export interface IBuildsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>> {
}

export const BuildsFilterContext: FC<IBuildsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/build/dto/index").BuildFilterDto> {...props}/>
}

export const useBuildsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>()
export const useBuildsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>()