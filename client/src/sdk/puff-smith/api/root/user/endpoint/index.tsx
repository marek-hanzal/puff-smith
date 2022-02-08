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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/user/dto/create/index").CreateDto, import("@/sdk/edde/bridge/user/index").UserDto>("PuffSmith.Root.User.Create");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/user/dto/patch/index").PatchDto, import("@/sdk/edde/bridge/user/index").UserDto>("PuffSmith.Root.User.Patch");

export type IRolesQueryParams = void;


export const useRolesQuery = createPostQuery<IRolesQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/role/dto/index").RoleDto>>("PuffSmith.Root.User.Roles");
export const useRolesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Root.User.Roles"])
}

export type ISitesQueryParams = void;


export const useSitesQuery = createPostQuery<ISitesQueryParams, import("@/sdk/edde/query/dto/index").Query, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto>>("PuffSmith.Root.User.Sites");
export const useSitesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Root.User.Sites"])
}

export type IUserQueryParams = {
	userId: string;
}


export const useUserQuery = createGetQuery<IUserQueryParams, import("@/sdk/edde/bridge/user/index").UserDto>("PuffSmith.Root.User.User");
export const useUserQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Root.User.User"])
}

export type IUsersQueryParams = void;


export const useUsersQuery = createPostQuery<IUsersQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/bridge/user/index").UserDto>>("PuffSmith.Root.User.Users");
export const useUsersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Root.User.Users"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/user/dto/create/index").CreateDto, import("@/sdk/edde/bridge/user/index").UserDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/user/dto/create/index").CreateDto, import("@/sdk/edde/bridge/user/index").UserDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/user/dto/patch/index").PatchDto, import("@/sdk/edde/bridge/user/index").UserDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/user/dto/patch/index").PatchDto, import("@/sdk/edde/bridge/user/index").UserDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const UserContext = createContext(null as unknown as IEntityContext<import("@/sdk/edde/bridge/user/index").UserDto>);

export const useUserContext = (): IEntityContext<import("@/sdk/edde/bridge/user/index").UserDto> => useContext(UserContext, "UserContext");

export const useOptionalUserContext = () => useOptionalContext<IEntityContext<import("@/sdk/edde/bridge/user/index").UserDto>>(UserContext as any);

export interface IUserProvider extends IEntityProviderProps<import("@/sdk/edde/bridge/user/index").UserDto> {
}

export const UserProvider: FC<IUserProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <UserContext.Provider value={entityContext}>
				{children}
			</UserContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchUserProps extends Partial<IQueryProps<IUserQueryParams, void, import("@/sdk/edde/bridge/user/index").UserDto>> {
	query: IUserQueryParams;
}

export const FetchUser: FC<IFetchUserProps> = ({query, ...props}) => <Query<IUserQueryParams, void, import("@/sdk/edde/bridge/user/index").UserDto>
	useQuery={useUserQuery}
	query={query}
	request={undefined}
	context={useOptionalUserContext()}
	{...props}
/>;

export type IUserPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/edde/bridge/user/index").UserDto>) => ReactElement);
export type IUserPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/edde/bridge/user/index").UserDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface IUserPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/edde/bridge/user/index").UserDto) => ReactNode);
	breadcrumbProps?: IUserPageBreadcrumb;
	breadcrumbMobileProps?: IUserPageBreadcrumb;
	breadcrumbBrowserProps?: IUserPageBreadcrumb;
	extra?: IUserPageExtra;
	extraMobile?: IUserPageExtra;
	extraBrowser?: IUserPageExtra;
}

export const UserPage: FC<IUserPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {userId} = useParams();
	return <UserProvider>
		<UserContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extra) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extra) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchUser
					query={{userId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchUser>
			</Page>}
		</UserContext.Consumer>
	</UserProvider>;
};

export const useRolesSource = () => useSourceContext<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined>()

export interface IRolesSourceContext extends ISourceContext<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined> {
}

export interface IRolesSourceProps extends Partial<ISourceContextProviderProps<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined>> {
}

export const RolesSource: FC<IRolesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined>
		useQuery={useRolesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IRolesSourceConsumerProps extends ConsumerProps<ISourceContext<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined>> {
}

export const RolesSourceConsumer: FC<IRolesSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IRolesBaseTableProps extends ITableProps<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined> {
}

export const RolesBaseTable: FC<IRolesBaseTableProps> = props => {
	return <Table<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface IRolesSourceTableProps extends IRolesBaseTableProps {
	source?: IRolesSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: IRolesQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: IRolesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/role/dto/index").RoleDto>>;
}

export const RolesSourceTable: FC<IRolesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <RolesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<RolesBaseTable {...props}/>
	</RolesSource>
}

export interface IRolesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/role/dto/index").RoleDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/role/dto/index").RoleDto>;
	source?: IRolesSourceProps;
}

export const RolesSourceSelect: FC<IRolesSourceSelectProps> = ({source, ...props}) => {
	return <RolesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IRolesQueryParams, import("@/sdk/edde/role/dto/index").RoleDto, void | undefined, void | undefined> {...props}/>
	</RolesSource>;
};

export interface IRolesFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const RolesFilterContext: FC<IRolesFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useRolesOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useRolesFilterContext = () => useFilterContext<void | undefined>()

export const useSitesSource = () => useSourceContext<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined>()

export interface ISitesSourceContext extends ISourceContext<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined> {
}

export interface ISitesSourceProps extends Partial<ISourceContextProviderProps<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined>> {
}

export const SitesSource: FC<ISitesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined>
		useQuery={useSitesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ISitesSourceConsumerProps extends ConsumerProps<ISourceContext<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined>> {
}

export const SitesSourceConsumer: FC<ISitesSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ISitesBaseTableProps extends ITableProps<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined> {
}

export const SitesBaseTable: FC<ISitesBaseTableProps> = props => {
	return <Table<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined>
		{...props}
	/>
}

export interface ISitesSourceTableProps extends ISitesBaseTableProps {
	source?: ISitesSourceProps;
	defaultFilter?: void | undefined;
	defaultOrderBy?: void | undefined;
	defaultQuery?: ISitesQueryParams;
	filter?: void | undefined;
	orderBy?: void | undefined;
	query?: ISitesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto>>;
}

export const SitesSourceTable: FC<ISitesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <SitesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<SitesBaseTable {...props}/>
	</SitesSource>
}

export interface ISitesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto>;
	source?: ISitesSourceProps;
}

export const SitesSourceSelect: FC<ISitesSourceSelectProps> = ({source, ...props}) => {
	return <SitesSource defaultSize={100} {...source}>
		<QuerySourceSelect<ISitesQueryParams, import("@/sdk/puff-smith/api/root/user/dto/index").SiteDto, void | undefined, void | undefined> {...props}/>
	</SitesSource>;
};

export interface ISitesFilterContextProps extends Partial<IFilterContextProviderProps<void | undefined>> {
}

export const SitesFilterContext: FC<ISitesFilterContextProps> = props => {
	return <FilterContextProvider<void | undefined> {...props}/>
}

export const useSitesOptionalFilterContext = () => useOptionalFilterContext<void | undefined>()
export const useSitesFilterContext = () => useFilterContext<void | undefined>()

export const useUsersSource = () => useSourceContext<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto>()

export interface IUsersSourceContext extends ISourceContext<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto> {
}

export interface IUsersSourceProps extends Partial<ISourceContextProviderProps<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto>> {
}

export const UsersSource: FC<IUsersSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto>
		useQuery={useUsersQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IUsersSourceConsumerProps extends ConsumerProps<ISourceContext<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto>> {
}

export const UsersSourceConsumer: FC<IUsersSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IUsersBaseTableProps extends ITableProps<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto> {
}

export const UsersBaseTable: FC<IUsersBaseTableProps> = props => {
	return <Table<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto>
		{...props}
	/>
}

export interface IUsersSourceTableProps extends IUsersBaseTableProps {
	source?: IUsersSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/user/dto/index").UserFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/user/dto/index").UserOrderByDto;
	defaultQuery?: IUsersQueryParams;
	filter?: import("@/sdk/puff-smith/user/dto/index").UserFilterDto;
	orderBy?: import("@/sdk/puff-smith/user/dto/index").UserOrderByDto;
	query?: IUsersQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/bridge/user/index").UserDto>>;
}

export const UsersSourceTable: FC<IUsersSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <UsersSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<UsersBaseTable {...props}/>
	</UsersSource>
}

export interface IUsersSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/bridge/user/index").UserDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/bridge/user/index").UserDto>;
	source?: IUsersSourceProps;
}

export const UsersSourceSelect: FC<IUsersSourceSelectProps> = ({source, ...props}) => {
	return <UsersSource defaultSize={100} {...source}>
		<QuerySourceSelect<IUsersQueryParams, import("@/sdk/edde/bridge/user/index").UserDto, import("@/sdk/puff-smith/user/dto/index").UserOrderByDto, import("@/sdk/puff-smith/user/dto/index").UserFilterDto> {...props}/>
	</UsersSource>;
};

export interface IUsersFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/user/dto/index").UserFilterDto>> {
}

export const UsersFilterContext: FC<IUsersFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/user/dto/index").UserFilterDto> {...props}/>
}

export const useUsersOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/user/dto/index").UserFilterDto>()
export const useUsersFilterContext = () => useFilterContext<import("@/sdk/puff-smith/user/dto/index").UserFilterDto>()
