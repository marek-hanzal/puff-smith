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

export type ICottonQueryParams = {
	cottonId: string;
}


export const useCottonQuery = createGetQuery<ICottonQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>("PuffSmith.Lab.Cotton.Cotton");
export const useCottonQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Cotton.Cotton"])
}

export type ICottonsQueryParams = void;


export const useCottonsQuery = createPostQuery<ICottonsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>>("PuffSmith.Lab.Cotton.Cottons");
export const useCottonsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Cotton.Cottons"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CreateDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>("PuffSmith.Lab.Cotton.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/cotton/dto/index").DeleteDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>("PuffSmith.Lab.Cotton.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/cotton/dto/index").PatchDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>("PuffSmith.Lab.Cotton.Patch");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CreateDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CreateDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/cotton/dto/index").DeleteDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/cotton/dto/index").DeleteDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/cotton/dto/index").PatchDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/cotton/dto/index").PatchDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const CottonContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>);

export const useCottonContext = (): IEntityContext<import("@/sdk/puff-smith/cotton/dto/index").CottonDto> => useContext(CottonContext, "CottonContext");

export const useOptionalCottonContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>>(CottonContext as any);

export interface ICottonProvider extends IEntityProviderProps<import("@/sdk/puff-smith/cotton/dto/index").CottonDto> {
}

export const CottonProvider: FC<ICottonProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <CottonContext.Provider value={entityContext}>
				{children}
			</CottonContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchCottonProps extends Partial<IQueryProps<ICottonQueryParams, void, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>> {
	query: ICottonQueryParams;
}

export const FetchCotton: FC<IFetchCottonProps> = ({query, ...props}) => <Query<ICottonQueryParams, void, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>
	useQuery={useCottonQuery}
	query={query}
	request={undefined}
	context={useOptionalCottonContext()}
	{...props}
/>;

export type ICottonPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>) => ReactElement);
export type ICottonPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface ICottonPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/cotton/dto/index").CottonDto) => ReactNode);
	breadcrumbProps?: ICottonPageBreadcrumb;
	breadcrumbMobileProps?: ICottonPageBreadcrumb;
	breadcrumbBrowserProps?: ICottonPageBreadcrumb;
	extra?: ICottonPageExtra;
	extraMobile?: ICottonPageExtra;
	extraBrowser?: ICottonPageExtra;
}

export const CottonPage: FC<ICottonPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {cottonId} = useParams();
	return <CottonProvider>
		<CottonContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchCotton
					query={{cottonId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchCotton>
			</Page>}
		</CottonContext.Consumer>
	</CottonProvider>;
};

export const useCottonsSource = () => useSourceContext<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>()

export interface ICottonsSourceContext extends ISourceContext<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {
}

export interface ICottonsSourceProps extends Partial<ISourceContextProviderProps<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>> {
}

export const CottonsSource: FC<ICottonsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>
		useQuery={useCottonsQuery}
		filter={useCottonsOptionalFilterContext()?.filter}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ICottonsSourceConsumerProps extends ConsumerProps<ISourceContext<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>> {
}

export const CottonsSourceConsumer: FC<ICottonsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ICottonsBaseTableProps extends ITableProps<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {
}

export const CottonsBaseTable: FC<ICottonsBaseTableProps> = props => {
	return <Table<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>
		{...props}
	/>
}

export interface ICottonsSourceTableProps extends ICottonsBaseTableProps {
	source?: ICottonsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto;
	defaultQuery?: ICottonsQueryParams;
	filter?: import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto;
	orderBy?: import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto;
	query?: ICottonsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>>;
}

export const CottonsSourceTable: FC<ICottonsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <CottonsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<CottonsBaseTable {...props}/>
	</CottonsSource>
}

export interface ICottonsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>;
	source?: ICottonsSourceProps;
}

export const CottonsSourceSelect: FC<ICottonsSourceSelectProps> = ({source, ...props}) => {
	return <CottonsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {...props}/>
	</CottonsSource>;
};

export interface ICottonsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>> {
}

export const CottonsFilterContext: FC<ICottonsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {...props}/>
}

export const useCottonsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>()
export const useCottonsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>()
