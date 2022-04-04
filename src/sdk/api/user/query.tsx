/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUser, IUserQuery} from "@/puff-smith/service/user";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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
		name={"Users"}
		useQuery={useUsersQuery}
		{...props}
	/>;
}

export const useUsersLink = (): ((queryParams?: IUsersQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(UsersApiLink, queryParams);
}

export const useUsersPromise = createPromiseHook<IUserQuery, IUser, IUsersQueryParams>(UsersApiLink, "post");

export interface IUsersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IUserQuery>>> {
}

export const UsersFilterProvider: FC<IUsersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IUserQuery>> name={"Users"} {...props}/>;

export const useUsersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IUserQuery>>()
export const useUsersFilterContext = () => useFilterContext<IQueryFilter<IUserQuery>>()

export interface IUsersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IUserQuery>> {
}

export const UsersSourceFilter: FC<IUsersSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Users'}
/>;

export interface IUsersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IUserQuery>>> {
}

export const UsersOrderByProvider: FC<IUsersOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IUserQuery>> name={"Users"} {...props}/>;

export const useUsersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IUserQuery>>()
export const useUsersOrderByContext = () => useOrderByContext<IQueryFilter<IUserQuery>>()

export interface IUsersListSourceProps extends Partial<IListProps<IUser>> {
	sourceProps?: Partial<IUsersSourceProps>;
}

export interface IUsersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IUserQuery>, IQueryOrderBy<IUserQuery>, IUsersQueryParams>> {
}

export const UsersSourceControlProvider: FC<IUsersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IUserQuery>, IQueryOrderBy<IUserQuery>> name={"Users"} {...props}/>;

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
