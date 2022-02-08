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

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/liquid/dto/index").CreateDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>("PuffSmith.Lab.Liquid.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/liquid/dto/index").DeleteDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>("PuffSmith.Lab.Liquid.Delete");

export type ILiquidQueryParams = {
	liquidId: string;
}


export const useLiquidQuery = createGetQuery<ILiquidQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>("PuffSmith.Lab.Liquid.Liquid");
export const useLiquidQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Liquid.Liquid"])
}

export type ILiquidsQueryParams = void;


export const useLiquidsQuery = createPostQuery<ILiquidsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>>("PuffSmith.Lab.Liquid.Liquids");
export const useLiquidsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Liquid.Liquids"])
}

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/liquid/dto/index").PatchDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>("PuffSmith.Lab.Liquid.Patch");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/liquid/dto/index").CreateDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/liquid/dto/index").CreateDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/liquid/dto/index").DeleteDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/liquid/dto/index").DeleteDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/liquid/dto/index").PatchDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/liquid/dto/index").PatchDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const LiquidContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>);

export const useLiquidContext = (): IEntityContext<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto> => useContext(LiquidContext, "LiquidContext");

export const useOptionalLiquidContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>>(LiquidContext as any);

export interface ILiquidProvider extends IEntityProviderProps<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto> {
}

export const LiquidProvider: FC<ILiquidProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <LiquidContext.Provider value={entityContext}>
				{children}
			</LiquidContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchLiquidProps extends Partial<IQueryProps<ILiquidQueryParams, void, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>> {
	query: ILiquidQueryParams;
}

export const FetchLiquid: FC<IFetchLiquidProps> = ({query, ...props}) => <Query<ILiquidQueryParams, void, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>
	useQuery={useLiquidQuery}
	query={query}
	request={undefined}
	context={useOptionalLiquidContext()}
	{...props}
/>;

export type ILiquidPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>) => ReactElement);
export type ILiquidPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface ILiquidPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/liquid/dto/index").LiquidDto) => ReactNode);
	breadcrumbProps?: ILiquidPageBreadcrumb;
	breadcrumbMobileProps?: ILiquidPageBreadcrumb;
	breadcrumbBrowserProps?: ILiquidPageBreadcrumb;
	extra?: ILiquidPageExtra;
	extraMobile?: ILiquidPageExtra;
	extraBrowser?: ILiquidPageExtra;
}

export const LiquidPage: FC<ILiquidPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {liquidId} = useParams();
	return <LiquidProvider>
		<LiquidContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchLiquid
					query={{liquidId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchLiquid>
			</Page>}
		</LiquidContext.Consumer>
	</LiquidProvider>;
};

export const useLiquidsSource = () => useSourceContext<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>()

export interface ILiquidsSourceContext extends ISourceContext<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto> {
}

export interface ILiquidsSourceProps extends Partial<ISourceContextProviderProps<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>> {
}

export const LiquidsSource: FC<ILiquidsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>
		useQuery={useLiquidsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ILiquidsSourceConsumerProps extends ConsumerProps<ISourceContext<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>> {
}

export const LiquidsSourceConsumer: FC<ILiquidsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ILiquidsBaseTableProps extends ITableProps<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto> {
}

export const LiquidsBaseTable: FC<ILiquidsBaseTableProps> = props => {
	return <Table<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>
		{...props}
	/>
}

export interface ILiquidsSourceTableProps extends ILiquidsBaseTableProps {
	source?: ILiquidsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto;
	defaultQuery?: ILiquidsQueryParams;
	filter?: import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto;
	orderBy?: import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto;
	query?: ILiquidsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>>;
}

export const LiquidsSourceTable: FC<ILiquidsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <LiquidsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<LiquidsBaseTable {...props}/>
	</LiquidsSource>
}

export interface ILiquidsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>;
	source?: ILiquidsSourceProps;
}

export const LiquidsSourceSelect: FC<ILiquidsSourceSelectProps> = ({source, ...props}) => {
	return <LiquidsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto> {...props}/>
	</LiquidsSource>;
};

export interface ILiquidsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>> {
}

export const LiquidsFilterContext: FC<ILiquidsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto> {...props}/>
}

export const useLiquidsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>()
export const useLiquidsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>()
