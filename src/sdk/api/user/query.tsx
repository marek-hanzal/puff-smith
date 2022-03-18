import {IUser, IUserFilter, IUserOrderBy, IUserQuery} from "@/puff-smith/service/user";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
import {IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromiseHook,
	createQueryHook,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	useFilterContext,
	useLinkContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext,
	useSourceContext
} from "@leight-core/client";

export const UsersApiLink = "/api/user/query";

export type IUsersQueryParams = undefined;

export const useUsersQuery = createQueryHook<IUserQuery, IQueryResult<IUser>, IUsersQueryParams>(UsersApiLink, "post");

export const useUsersSource = () => useSourceContext<IUser>()

export interface IUsersSourceContext extends ISourceContext<IUser> {
}

export interface IUsersSourceConsumerProps extends ConsumerProps<ISourceContext<IUser>> {
}

export const UsersSourceConsumer: FC<IUsersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUsersSourceProps extends Partial<ISourceProviderProps<IUser>> {
}

export const UsersSource: FC<IUsersSourceProps> = props => {
	return <SourceProvider<IUser>
		useQuery={useUsersQuery}
		{...props}
	/>;
}

export const useUsersLink = (): ((queryParams?: IUsersQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(UsersApiLink, queryParams);
}

export const useUsersPromise = createPromiseHook<IUserQuery, IUser, IUsersQueryParams>(UsersApiLink, "post");

export interface IUsersFilterProviderProps extends Partial<IFilterProviderProps<IUserFilter>> {
}

export const UsersFilterProvider: FC<IUsersFilterProviderProps> = props => <FilterProvider<IUserFilter> {...props}/>;

export const useUsersOptionalFilterContext = () => useOptionalFilterContext<IUserFilter>()
export const useUsersFilterContext = () => useFilterContext<IUserFilter>()

export interface IUsersSourceFilterProps extends IFilterWithoutTranslationProps<IUserFilter> {
}

export const UsersSourceFilter: FC<IUsersSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Users'}
/>;

export interface IUsersOrderByProviderProps extends Partial<IOrderByProviderProps<IUserFilter>> {
}

export const UsersOrderByProvider: FC<IUsersOrderByProviderProps> = props => <OrderByProvider<IUserFilter> {...props}/>;

export const useUsersOptionalOrderByContext = () => useOptionalOrderByContext<IUserFilter>()
export const useUsersOrderByContext = () => useOrderByContext<IUserFilter>()

export interface IUsersListSourceProps extends Partial<IListProps<IUser>> {
	sourceProps?: Partial<IUsersSourceProps>;
}

export interface IUsersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IUserFilter, IUserOrderBy, IUsersQueryParams>> {
}

export const UsersSourceControlProvider: FC<IUsersSourceControlProviderProps> = props => <SourceControlProvider<IUserFilter, IUserOrderBy> {...props}/>;

export const UsersListSource: FC<IUsersListSourceProps> = ({sourceProps, ...props}) => {
	return <UsersSource
		{...sourceProps}
	>
		<List<IUser>
			{...props}
		/>
	</UsersSource>
}

export interface IUsersSourceSelectProps extends IQuerySourceSelectProps<IUser> {
	toOption: IToOptionMapper<IUser>;
	sourceProps?: IUsersSourceProps;
}

export const UsersSourceSelect: FC<IUsersSourceSelectProps> = ({sourceProps, ...props}) => {
	return <UsersSource {...sourceProps}>
		<QuerySourceSelect<IUser> {...props}/>
	</UsersSource>;
};

export const useUsersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UsersApiLink]);
}
