import {createContext, FC, ReactElement, ReactNode} from "react";
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

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/index").CreateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>("PuffSmith.Lab.Vape.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/vape/dto/index").DeleteDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>("PuffSmith.Lab.Vape.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/vape/dto/index").PatchDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>("PuffSmith.Lab.Vape.Patch");

export type IPlotQueryParams = void;


export const usePlotQuery = createPostQuery<IPlotQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>, import("@/sdk/edde/plot/dto/index").PlotDto>("PuffSmith.Lab.Vape.Plot");
export const usePlotQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vape.Plot"])
}

export type IRateQueryParams = void;


export const useRateMutation = createPatchMutation<IRateQueryParams, import("@/sdk/puff-smith/vape/dto/index").RateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>("PuffSmith.Lab.Vape.Rate");

export type IVapeQueryParams = {
	vapeId: string;
}


export const useVapeQuery = createGetQuery<IVapeQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto>("PuffSmith.Lab.Vape.Vape");
export const useVapeQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vape.Vape"])
}

export type IVapesQueryParams = void;


export const useVapesQuery = createPostQuery<IVapesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/vape/dto/index").VapeDto>>("PuffSmith.Lab.Vape.Vapes");
export const useVapesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vape.Vapes"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/index").CreateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/index").CreateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/vape/dto/index").DeleteDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/vape/dto/index").DeleteDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/vape/dto/index").PatchDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/vape/dto/index").PatchDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export interface IRateDefaultFormProps extends Partial<IFormProps<IRateQueryParams, import("@/sdk/puff-smith/vape/dto/index").RateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
}

export const RateDefaultForm: FC<IRateDefaultFormProps> = props => {
	return <Form<IRateQueryParams, import("@/sdk/puff-smith/vape/dto/index").RateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>
		useMutation={useRateMutation}
		{...props}
	/>
}

export const VapeContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/vape/dto/index").VapeDto>);

export const useVapeContext = (): IEntityContext<import("@/sdk/puff-smith/vape/dto/index").VapeDto> => useContext(VapeContext, "VapeContext");

export const useOptionalVapeContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/vape/dto/index").VapeDto>>(VapeContext as any);

export interface IVapeProvider extends IEntityProviderProps<import("@/sdk/puff-smith/vape/dto/index").VapeDto> {
}

export const VapeProvider: FC<IVapeProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <VapeContext.Provider value={entityContext}>
				{children}
			</VapeContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchVapeProps extends Partial<IQueryProps<IVapeQueryParams, void, import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
	query: IVapeQueryParams;
}

export const FetchVape: FC<IFetchVapeProps> = ({query, ...props}) => <Query<IVapeQueryParams, void, import("@/sdk/puff-smith/vape/dto/index").VapeDto>
	useQuery={useVapeQuery}
	query={query}
	request={undefined}
	context={useOptionalVapeContext()}
	{...props}
/>;

export interface IVapePageProps extends Omit<IPageProps, "breadcrumbProps" | "extra"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/vape/dto/index").VapeDto) => ReactNode);
	breadcrumbProps?: BreadcrumbProps | React.ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/vape/dto/index").VapeDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);
	extra?: ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/vape/dto/index").VapeDto>) => ReactElement);
}

export const VapePage: FC<IVapePageProps> = ({children, breadcrumbProps, extra, ...props}) => {
	const {vapeId} = useParams();
	return <VapeProvider>
		<VapeContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				{...props}
			>
				<FetchVape
					query={{vapeId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchVape>
			</Page>}
		</VapeContext.Consumer>
	</VapeProvider>;
};

export const useVapesSource = () => useSourceContext<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>()

export interface IVapesSourceContext extends ISourceContext<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto> {
}

export interface IVapesSourceProps extends Partial<ISourceContextProviderProps<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>> {
}

export const VapesSource: FC<IVapesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>
		useQuery={useVapesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IVapesBaseTableProps extends ITableProps<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto> {
}

export const VapesBaseTable: FC<IVapesBaseTableProps> = props => {
	return <Table<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>
		{...props}
	/>
}

export interface IVapesSourceTableProps extends IVapesBaseTableProps {
	source?: IVapesSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto;
	defaultQuery?: IVapesQueryParams;
	filter?: import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto;
	orderBy?: import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto;
	query?: IVapesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/vape/dto/index").VapeDto>>;
}

export const VapesSourceTable: FC<IVapesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <VapesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<VapesBaseTable {...props}/>
	</VapesSource>
}

export interface IVapesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/vape/dto/index").VapeDto>;
	source?: IVapesSourceProps;
}

export const VapesSourceSelect: FC<IVapesSourceSelectProps> = ({source, ...props}) => {
	return <VapesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto> {...props}/>
	</VapesSource>;
};

export interface IVapesFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>> {
}

export const VapesFilterContext: FC<IVapesFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto> {...props}/>
}

export const useVapesOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>()
export const useVapesFilterContext = () => useFilterContext<import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>()
