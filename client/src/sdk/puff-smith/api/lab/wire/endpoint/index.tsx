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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/wire/dto/index").CreateDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>("PuffSmith.Lab.Wire.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/wire/dto/index").DeleteDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>("PuffSmith.Lab.Wire.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/wire/dto/index").PatchDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>("PuffSmith.Lab.Wire.Patch");

export type IWireQueryParams = {
	wireId: string;
}


export const useWireQuery = createGetQuery<IWireQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto>("PuffSmith.Lab.Wire.Wire");
export const useWireQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Wire.Wire"])
}

export type IWiresQueryParams = void;


export const useWiresQuery = createPostQuery<IWiresQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/wire/dto/index").WireDto>>("PuffSmith.Lab.Wire.Wires");
export const useWiresQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Wire.Wires"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/wire/dto/index").CreateDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/wire/dto/index").CreateDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/wire/dto/index").DeleteDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/wire/dto/index").DeleteDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/wire/dto/index").PatchDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/wire/dto/index").PatchDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const WireContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/wire/dto/index").WireDto>);

export const useWireContext = (): IEntityContext<import("@/sdk/puff-smith/wire/dto/index").WireDto> => useContext(WireContext, "WireContext");

export const useOptionalWireContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/wire/dto/index").WireDto>>(WireContext as any);

export interface IWireProvider extends IEntityProviderProps<import("@/sdk/puff-smith/wire/dto/index").WireDto> {
}

export const WireProvider: FC<IWireProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <WireContext.Provider value={entityContext}>
				{children}
			</WireContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchWireProps extends Partial<IQueryProps<IWireQueryParams, void, import("@/sdk/puff-smith/wire/dto/index").WireDto>> {
	query: IWireQueryParams;
}

export const FetchWire: FC<IFetchWireProps> = ({query, ...props}) => <Query<IWireQueryParams, void, import("@/sdk/puff-smith/wire/dto/index").WireDto>
	useQuery={useWireQuery}
	query={query}
	request={undefined}
	context={useOptionalWireContext()}
	{...props}
/>;

export type IWirePageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/wire/dto/index").WireDto>) => ReactElement);
export type IWirePageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/wire/dto/index").WireDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IWirePageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/wire/dto/index").WireDto) => ReactNode);
	breadcrumbProps?: IWirePageBreadcrumb;
	breadcrumbMobileProps?: IWirePageBreadcrumb;
	breadcrumbBrowserProps?: IWirePageBreadcrumb;
	extra?: IWirePageExtra;
	extraMobile?: IWirePageExtra;
	extraBrowser?: IWirePageExtra;
}

export const WirePage: FC<IWirePageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {wireId} = useParams();
	return <WireProvider>
		<WireContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchWire
					query={{wireId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchWire>
			</Page>}
		</WireContext.Consumer>
	</WireProvider>;
};

export const useWiresSource = () => useSourceContext<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>()

export interface IWiresSourceContext extends ISourceContext<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {
}

export interface IWiresSourceProps extends Partial<ISourceContextProviderProps<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>> {
}

export const WiresSource: FC<IWiresSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>
		useQuery={useWiresQuery}
		filter={useWiresOptionalFilterContext()?.filter}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IWiresSourceConsumerProps extends ConsumerProps<ISourceContext<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>> {
}

export const WiresSourceConsumer: FC<IWiresSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IWiresBaseTableProps extends ITableProps<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {
}

export const WiresBaseTable: FC<IWiresBaseTableProps> = props => {
	return <Table<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>
		{...props}
	/>
}

export interface IWiresSourceTableProps extends IWiresBaseTableProps {
	source?: IWiresSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/wire/dto/index").WireFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto;
	defaultQuery?: IWiresQueryParams;
	filter?: import("@/sdk/puff-smith/wire/dto/index").WireFilterDto;
	orderBy?: import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto;
	query?: IWiresQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/wire/dto/index").WireDto>>;
}

export const WiresSourceTable: FC<IWiresSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <WiresSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<WiresBaseTable {...props}/>
	</WiresSource>
}

export interface IWiresSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/wire/dto/index").WireDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/wire/dto/index").WireDto>;
	source?: IWiresSourceProps;
}

export const WiresSourceSelect: FC<IWiresSourceSelectProps> = ({source, ...props}) => {
	return <WiresSource defaultSize={100} {...source}>
		<QuerySourceSelect<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {...props}/>
	</WiresSource>;
};

export interface IWiresFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>> {
}

export const WiresFilterContext: FC<IWiresFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {...props}/>
}

export const useWiresOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>()
export const useWiresFilterContext = () => useFilterContext<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>()
