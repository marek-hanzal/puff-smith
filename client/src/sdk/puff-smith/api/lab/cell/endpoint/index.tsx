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

export type ICellQueryParams = {
	cellId: string;
}


export const useCellQuery = createGetQuery<ICellQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto>("PuffSmith.Lab.Cell.Cell");
export const useCellQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Cell.Cell"])
}

export type ICellsQueryParams = void;


export const useCellsQuery = createPostQuery<ICellsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/cell/dto/index").CellDto>>("PuffSmith.Lab.Cell.Cells");
export const useCellsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Cell.Cells"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/cell/dto/index").CreateDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>("PuffSmith.Lab.Cell.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/cell/dto/index").DeleteDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>("PuffSmith.Lab.Cell.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/cell/dto/index").PatchDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>("PuffSmith.Lab.Cell.Patch");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/cell/dto/index").CreateDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/cell/dto/index").CreateDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/cell/dto/index").DeleteDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/cell/dto/index").DeleteDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/cell/dto/index").PatchDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/cell/dto/index").PatchDto, import("@/sdk/puff-smith/cell/dto/index").CellDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const CellContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/cell/dto/index").CellDto>);

export const useCellContext = (): IEntityContext<import("@/sdk/puff-smith/cell/dto/index").CellDto> => useContext(CellContext, "CellContext");

export const useOptionalCellContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/cell/dto/index").CellDto>>(CellContext as any);

export interface ICellProvider extends IEntityProviderProps<import("@/sdk/puff-smith/cell/dto/index").CellDto> {
}

export const CellProvider: FC<ICellProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <CellContext.Provider value={entityContext}>
				{children}
			</CellContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchCellProps extends Partial<IQueryProps<ICellQueryParams, void, import("@/sdk/puff-smith/cell/dto/index").CellDto>> {
	query: ICellQueryParams;
}

export const FetchCell: FC<IFetchCellProps> = ({query, ...props}) => <Query<ICellQueryParams, void, import("@/sdk/puff-smith/cell/dto/index").CellDto>
	useQuery={useCellQuery}
	query={query}
	request={undefined}
	context={useOptionalCellContext()}
	{...props}
/>;

export type ICellPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/cell/dto/index").CellDto>) => ReactElement);
export type ICellPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/cell/dto/index").CellDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface ICellPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/cell/dto/index").CellDto) => ReactNode);
	breadcrumbProps?: ICellPageBreadcrumb;
	breadcrumbMobileProps?: ICellPageBreadcrumb;
	breadcrumbBrowserProps?: ICellPageBreadcrumb;
	extra?: ICellPageExtra;
	extraMobile?: ICellPageExtra;
	extraBrowser?: ICellPageExtra;
}

export const CellPage: FC<ICellPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {cellId} = useParams();
	return <CellProvider>
		<CellContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchCell
					query={{cellId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchCell>
			</Page>}
		</CellContext.Consumer>
	</CellProvider>;
};

export const useCellsSource = () => useSourceContext<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>()

export interface ICellsSourceContext extends ISourceContext<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto> {
}

export interface ICellsSourceProps extends Partial<ISourceContextProviderProps<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>> {
}

export const CellsSource: FC<ICellsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>
		useQuery={useCellsQuery}
		filter={useCellsOptionalFilterContext()?.filter}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ICellsSourceConsumerProps extends ConsumerProps<ISourceContext<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>> {
}

export const CellsSourceConsumer: FC<ICellsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ICellsBaseTableProps extends ITableProps<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto> {
}

export const CellsBaseTable: FC<ICellsBaseTableProps> = props => {
	return <Table<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>
		{...props}
	/>
}

export interface ICellsSourceTableProps extends ICellsBaseTableProps {
	source?: ICellsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/cell/dto/index").CellFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto;
	defaultQuery?: ICellsQueryParams;
	filter?: import("@/sdk/puff-smith/cell/dto/index").CellFilterDto;
	orderBy?: import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto;
	query?: ICellsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/cell/dto/index").CellDto>>;
}

export const CellsSourceTable: FC<ICellsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <CellsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<CellsBaseTable {...props}/>
	</CellsSource>
}

export interface ICellsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/cell/dto/index").CellDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/cell/dto/index").CellDto>;
	source?: ICellsSourceProps;
}

export const CellsSourceSelect: FC<ICellsSourceSelectProps> = ({source, ...props}) => {
	return <CellsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ICellsQueryParams, import("@/sdk/puff-smith/cell/dto/index").CellDto, import("@/sdk/puff-smith/cell/dto/index").CellOrderByDto, import("@/sdk/puff-smith/cell/dto/index").CellFilterDto> {...props}/>
	</CellsSource>;
};

export interface ICellsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>> {
}

export const CellsFilterContext: FC<ICellsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/cell/dto/index").CellFilterDto> {...props}/>
}

export const useCellsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>()
export const useCellsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/cell/dto/index").CellFilterDto>()
