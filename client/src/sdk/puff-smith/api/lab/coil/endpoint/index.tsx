import {ConsumerProps, createContext, FC, ReactElement, ReactNode} from "react";
import {
	createGetQuery,
	createPatchMutation,
	createPostMutation,
	createPostQuery,
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

export type ICoilQueryParams = {
	coilId: string;
}


export const useCoilQuery = createGetQuery<ICoilQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto>("PuffSmith.Lab.Coil.Coil");
export const useCoilQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Coil.Coil"])
}

export type ICoilsQueryParams = void;


export const useCoilsQuery = createPostQuery<ICoilsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/coil/dto/index").CoilDto>>("PuffSmith.Lab.Coil.Coils");
export const useCoilsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Coil.Coils"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/coil/dto/create/index").CreateDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>("PuffSmith.Lab.Coil.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/coil/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>("PuffSmith.Lab.Coil.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/coil/dto/patch/index").PatchDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>("PuffSmith.Lab.Coil.Patch");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/coil/dto/create/index").CreateDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/coil/dto/create/index").CreateDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/coil/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/coil/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/coil/dto/patch/index").PatchDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/coil/dto/patch/index").PatchDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const CoilContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/coil/dto/index").CoilDto>);

export const useCoilContext = (): IEntityContext<import("@/sdk/puff-smith/coil/dto/index").CoilDto> => useContext(CoilContext, "CoilContext");

export const useOptionalCoilContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/coil/dto/index").CoilDto>>(CoilContext as any);

export interface ICoilProvider extends IEntityProviderProps<import("@/sdk/puff-smith/coil/dto/index").CoilDto> {
}

export const CoilProvider: FC<ICoilProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <CoilContext.Provider value={entityContext}>
				{children}
			</CoilContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchCoilProps extends Partial<IQueryProps<ICoilQueryParams, void, import("@/sdk/puff-smith/coil/dto/index").CoilDto>> {
	query: ICoilQueryParams;
}

export const FetchCoil: FC<IFetchCoilProps> = ({query, ...props}) => <Query<ICoilQueryParams, void, import("@/sdk/puff-smith/coil/dto/index").CoilDto>
	useQuery={useCoilQuery}
	query={query}
	request={undefined}
	context={useOptionalCoilContext()}
	{...props}
/>;

export type ICoilPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/coil/dto/index").CoilDto>) => ReactElement);
export type ICoilPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/coil/dto/index").CoilDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface ICoilPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/coil/dto/index").CoilDto) => ReactNode);
	breadcrumbProps?: ICoilPageBreadcrumb;
	breadcrumbMobileProps?: ICoilPageBreadcrumb;
	breadcrumbBrowserProps?: ICoilPageBreadcrumb;
	extra?: ICoilPageExtra;
	extraMobile?: ICoilPageExtra;
	extraBrowser?: ICoilPageExtra;
}

export const CoilPage: FC<ICoilPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {coilId} = useParams();
	return <CoilProvider>
		<CoilContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extra) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extra) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchCoil
					query={{coilId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchCoil>
			</Page>}
		</CoilContext.Consumer>
	</CoilProvider>;
};

export const useCoilsSource = () => useSourceContext<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>()

export interface ICoilsSourceContext extends ISourceContext<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto> {
}

export interface ICoilsSourceProps extends Partial<ISourceContextProviderProps<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>> {
}

export const CoilsSource: FC<ICoilsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>
		useQuery={useCoilsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ICoilsSourceConsumerProps extends ConsumerProps<ISourceContext<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>> {
}

export const CoilsSourceConsumer: FC<ICoilsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ICoilsBaseTableProps extends ITableProps<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto> {
}

export const CoilsBaseTable: FC<ICoilsBaseTableProps> = props => {
	return <Table<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>
		{...props}
	/>
}

export interface ICoilsSourceTableProps extends ICoilsBaseTableProps {
	source?: ICoilsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto;
	defaultQuery?: ICoilsQueryParams;
	filter?: import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto;
	orderBy?: import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto;
	query?: ICoilsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/coil/dto/index").CoilDto>>;
}

export const CoilsSourceTable: FC<ICoilsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <CoilsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<CoilsBaseTable {...props}/>
	</CoilsSource>
}

export interface ICoilsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/coil/dto/index").CoilDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/coil/dto/index").CoilDto>;
	source?: ICoilsSourceProps;
}

export const CoilsSourceSelect: FC<ICoilsSourceSelectProps> = ({source, ...props}) => {
	return <CoilsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto> {...props}/>
	</CoilsSource>;
};

export interface ICoilsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>> {
}

export const CoilsFilterContext: FC<ICoilsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto> {...props}/>
}

export const useCoilsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>()
export const useCoilsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>()
