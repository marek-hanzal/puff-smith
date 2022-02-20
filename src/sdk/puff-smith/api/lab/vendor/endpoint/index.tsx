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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/vendor/dto/index").CreateDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>("PuffSmith.Lab.Vendor.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/vendor/dto/index").DeleteDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>("PuffSmith.Lab.Vendor.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/vendor/dto/index").PatchDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>("PuffSmith.Lab.Vendor.Patch");

export type IVendorQueryParams = {
	vendorId: string;
}


export const useVendorQuery = createGetQuery<IVendorQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>("PuffSmith.Lab.Vendor.Vendor");
export const useVendorQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vendor.Vendor"])
}

export type IVendorsQueryParams = void;


export const useVendorsQuery = createPostQuery<IVendorsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>>("PuffSmith.Lab.Vendor.Vendors");
export const useVendorsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vendor.Vendors"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/vendor/dto/index").CreateDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/vendor/dto/index").CreateDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/vendor/dto/index").DeleteDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/vendor/dto/index").DeleteDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/vendor/dto/index").PatchDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/vendor/dto/index").PatchDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const VendorContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>);

export const useVendorContext = (): IEntityContext<import("@/sdk/puff-smith/vendor/dto/index").VendorDto> => useContext(VendorContext, "VendorContext");

export const useOptionalVendorContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>>(VendorContext as any);

export interface IVendorProvider extends IEntityProviderProps<import("@/sdk/puff-smith/vendor/dto/index").VendorDto> {
}

export const VendorProvider: FC<IVendorProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <VendorContext.Provider value={entityContext}>
				{children}
			</VendorContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchVendorProps extends Partial<IQueryProps<IVendorQueryParams, void, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>> {
	query: IVendorQueryParams;
}

export const FetchVendor: FC<IFetchVendorProps> = ({query, ...props}) => <Query<IVendorQueryParams, void, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>
	useQuery={useVendorQuery}
	query={query}
	request={undefined}
	context={useOptionalVendorContext()}
	{...props}
/>;

export type IVendorPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>) => ReactElement);
export type IVendorPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IVendorPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/vendor/dto/index").VendorDto) => ReactNode);
	breadcrumbProps?: IVendorPageBreadcrumb;
	breadcrumbMobileProps?: IVendorPageBreadcrumb;
	breadcrumbBrowserProps?: IVendorPageBreadcrumb;
	extra?: IVendorPageExtra;
	extraMobile?: IVendorPageExtra;
	extraBrowser?: IVendorPageExtra;
}

export const VendorPage: FC<IVendorPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {vendorId} = useParams();
	return <VendorProvider>
		<VendorContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchVendor
					query={{vendorId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchVendor>
			</Page>}
		</VendorContext.Consumer>
	</VendorProvider>;
};

export const useVendorsSource = () => useSourceContext<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>()

export interface IVendorsSourceContext extends ISourceContext<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto> {
}

export interface IVendorsSourceProps extends Partial<ISourceContextProviderProps<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>> {
}

export const VendorsSource: FC<IVendorsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>
		useQuery={useVendorsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IVendorsSourceConsumerProps extends ConsumerProps<ISourceContext<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>> {
}

export const VendorsSourceConsumer: FC<IVendorsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IVendorsBaseTableProps extends ITableProps<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto> {
}

export const VendorsBaseTable: FC<IVendorsBaseTableProps> = props => {
	return <Table<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>
		{...props}
	/>
}

export interface IVendorsSourceTableProps extends IVendorsBaseTableProps {
	source?: IVendorsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto;
	defaultQuery?: IVendorsQueryParams;
	filter?: import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto;
	orderBy?: import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto;
	query?: IVendorsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>>;
}

export const VendorsSourceTable: FC<IVendorsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <VendorsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<VendorsBaseTable {...props}/>
	</VendorsSource>
}

export interface IVendorsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>;
	source?: IVendorsSourceProps;
}

export const VendorsSourceSelect: FC<IVendorsSourceSelectProps> = ({source, ...props}) => {
	return <VendorsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto> {...props}/>
	</VendorsSource>;
};

export interface IVendorsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>> {
}

export const VendorsFilterContext: FC<IVendorsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto> {...props}/>
}

export const useVendorsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>()
export const useVendorsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>()
