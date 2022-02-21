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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").CreateDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>("PuffSmith.Lab.User.Atomizer.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").DeleteDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>("PuffSmith.Lab.User.Atomizer.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").PatchDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>("PuffSmith.Lab.User.Atomizer.Patch");

export type IUserAtomizerQueryParams = {
	userAtomizerId: string;
}


export const useUserAtomizerQuery = createGetQuery<IUserAtomizerQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>("PuffSmith.Lab.User.Atomizer.UserAtomizer");
export const useUserAtomizerQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.User.Atomizer.UserAtomizer"])
}

export type IUserAtomizersQueryParams = void;


export const useUserAtomizersQuery = createPostQuery<IUserAtomizersQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>>("PuffSmith.Lab.User.Atomizer.UserAtomizers");
export const useUserAtomizersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.User.Atomizer.UserAtomizers"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").CreateDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").CreateDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").DeleteDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").DeleteDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").PatchDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").PatchDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const UserAtomizerContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>);

export const useUserAtomizerContext = (): IEntityContext<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto> => useContext(UserAtomizerContext, "UserAtomizerContext");

export const useOptionalUserAtomizerContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>>(UserAtomizerContext as any);

export interface IUserAtomizerProvider extends IEntityProviderProps<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto> {
}

export const UserAtomizerProvider: FC<IUserAtomizerProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <UserAtomizerContext.Provider value={entityContext}>
				{children}
			</UserAtomizerContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchUserAtomizerProps extends Partial<IQueryProps<IUserAtomizerQueryParams, void, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>> {
	query: IUserAtomizerQueryParams;
}

export const FetchUserAtomizer: FC<IFetchUserAtomizerProps> = ({query, ...props}) => <Query<IUserAtomizerQueryParams, void, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>
	useQuery={useUserAtomizerQuery}
	query={query}
	request={undefined}
	context={useOptionalUserAtomizerContext()}
	{...props}
/>;

export type IUserAtomizerPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>) => ReactElement);
export type IUserAtomizerPageBreadcrumb =
	BreadcrumbProps
	| ReactElement<typeof Breadcrumb>
	| ((entityContext: IEntityContext<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IUserAtomizerPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto) => ReactNode);
	breadcrumbProps?: IUserAtomizerPageBreadcrumb;
	breadcrumbMobileProps?: IUserAtomizerPageBreadcrumb;
	breadcrumbBrowserProps?: IUserAtomizerPageBreadcrumb;
	extra?: IUserAtomizerPageExtra;
	extraMobile?: IUserAtomizerPageExtra;
	extraBrowser?: IUserAtomizerPageExtra;
}

export const UserAtomizerPage: FC<IUserAtomizerPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {userAtomizerId} = useParams();
	return <UserAtomizerProvider>
		<UserAtomizerContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchUserAtomizer
					query={{userAtomizerId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchUserAtomizer>
			</Page>}
		</UserAtomizerContext.Consumer>
	</UserAtomizerProvider>;
};

export const useUserAtomizersSource = () => useSourceContext<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>()

export interface IUserAtomizersSourceContext extends ISourceContext<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto> {
}

export interface IUserAtomizersSourceProps extends Partial<ISourceContextProviderProps<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>> {
}

export const UserAtomizersSource: FC<IUserAtomizersSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>
		useQuery={useUserAtomizersQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IUserAtomizersSourceConsumerProps extends ConsumerProps<ISourceContext<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>> {
}

export const UserAtomizersSourceConsumer: FC<IUserAtomizersSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IUserAtomizersBaseTableProps extends ITableProps<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto> {
}

export const UserAtomizersBaseTable: FC<IUserAtomizersBaseTableProps> = props => {
	return <Table<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>
		{...props}
	/>
}

export interface IUserAtomizersSourceTableProps extends IUserAtomizersBaseTableProps {
	source?: IUserAtomizersSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto;
	defaultQuery?: IUserAtomizersQueryParams;
	filter?: import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto;
	orderBy?: import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto;
	query?: IUserAtomizersQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>>;
}

export const UserAtomizersSourceTable: FC<IUserAtomizersSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <UserAtomizersSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<UserAtomizersBaseTable {...props}/>
	</UserAtomizersSource>
}

export interface IUserAtomizersSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto>;
	source?: IUserAtomizersSourceProps;
}

export const UserAtomizersSourceSelect: FC<IUserAtomizersSourceSelectProps> = ({source, ...props}) => {
	return <UserAtomizersSource defaultSize={100} {...source}>
		<QuerySourceSelect<IUserAtomizersQueryParams, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerOrderByDto, import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto> {...props}/>
	</UserAtomizersSource>;
};

export interface IUserAtomizersFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>> {
}

export const UserAtomizersFilterContext: FC<IUserAtomizersFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto> {...props}/>
}

export const useUserAtomizersOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>()
export const useUserAtomizersFilterContext = () => useFilterContext<import("@/sdk/puff-smith/user/dto/atomizer/index").UserAtomizerFilterDto>()
