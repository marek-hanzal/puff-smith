/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserSource}    from "@/puff-smith/service/user/interface";
import {
	BlockProvider,
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerSelectItem,
	Filter,
	FilterProvider,
	IDrawerSelectItemProps,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IInfiniteListProps,
	IListProps,
	InfiniteList,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISelectionProviderProps,
	ISourceContext,
	ISourceControlProviderProps,
	ISourceProviderProps,
	ITableProps,
	IToOptionMapper,
	List,
	OrderByProvider,
	QueryInfer,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceInfer,
	SourceProvider,
	Table,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
}                       from "@leight-core/viv";
import {useQueryClient} from "@tanstack/react-query";
import {
	ConsumerProps,
	FC
}                       from "react";

export const UserApiLink      = "/api/user/query";
export const UserCountApiLink = "/api/user/query/count";

export type IUserQueryParams = any;

export const useUserQuery      = createQueryHook<SourceInfer.Query<IUserSource>, SourceInfer.Item<IUserSource>[], IUserQueryParams>(UserApiLink, "post");
export const useUserCountQuery = createQueryHook<SourceInfer.Query<IUserSource>, number, IUserQueryParams>(UserCountApiLink, "post");

export const useUserSource = () => useSourceContext<SourceInfer.Item<IUserSource>>();

export interface IUserSourceContext extends ISourceContext<SourceInfer.Item<IUserSource>> {
}

export interface IUserSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IUserSource>>> {
}

export const UserSourceConsumer: FC<IUserSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUserProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IUserSource>>> {
}

export const UserProvider: FC<IUserProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IUserSource>>
		name={"User"}
		useQuery={useUserQuery}
		useCountQuery={useUserCountQuery}
		{...props}
	/>;
};

export const toUserLink  = (queryParams?: IUserQueryParams) => toLink(UserApiLink, queryParams);
export const useUserLink = () => toUserLink;

export const useUserPromise = createPromiseHook<SourceInfer.Query<IUserSource>, SourceInfer.Item<IUserSource>[], IUserQueryParams>(UserApiLink, "post");
export const UserPromise    = createPromise<SourceInfer.Query<IUserSource>, SourceInfer.Item<IUserSource>[], IUserQueryParams>(UserApiLink, "post");

export interface IUserFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IUserSource>>>> {
}

export const UserFilterProvider: FC<IUserFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IUserSource>>> name={"User"} {...props}/>;

export const useUserOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IUserSource>>>();
export const useUserFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IUserSource>>>();

export interface IUserProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IUserSource>>> {
}

export const UserProviderFilter: FC<IUserProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.User"}
/>;

export interface IUserOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IUserSource>>>> {
}

export const UserOrderByProvider: FC<IUserOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IUserSource>>> name={"User"} {...props}/>;

export const useUserOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IUserSource>>>();
export const useUserOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IUserSource>>>();

export interface IUserProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IUserSource>>, QueryInfer.OrderBy<SourceInfer.Query<IUserSource>>, IUserQueryParams>> {
}

export const UserProviderControl: FC<IUserProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IUserSource>>, QueryInfer.OrderBy<SourceInfer.Query<IUserSource>>> name={"User"} {...props}/>;

export interface IUserTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IUserSource>>> {
	providerProps?: Partial<IUserProviderProps>;
}

export const UserTableSource: FC<IUserTableSourceProps> = ({providerProps, ...props}) => {
	return <UserProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IUserSource>>
			translation={UserApiLink}
			{...props}
		/>
	</UserProvider>;
};

export interface IUserListSourceProps extends Partial<IListProps<SourceInfer.Item<IUserSource>>> {
	providerProps?: Partial<IUserProviderProps>;
}

export const UserListSource: FC<IUserListSourceProps> = ({providerProps, ...props}) => {
	return <UserProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IUserSource>>
			{...props}
		/>
	</UserProvider>;
};

export interface IUserInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IUserSource>>> {
	providerProps?: Partial<IUserProviderProps>;
}

export const UserInfiniteListSource: FC<IUserInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <UserProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IUserSource>>
			translation={{
				namespace: UserApiLink,
			}}
			{...props}
		/>
	</UserProvider>;
};

export interface IUserSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IUserSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IUserSource>>;
	providerProps?: Partial<IUserProviderProps>;
}

export const UserSourceSelect: FC<IUserSourceSelectProps> = ({providerProps, ...props}) => {
	return <UserProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IUserSource>> {...props}/>
	</UserProvider>;
};

export interface IUserSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IUserSource>>> {
}

export const UserSelectionProvider: FC<IUserSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IUserSource>> {...props}/>;
};

export const useUserCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserCountApiLink]);
};

export const useUserQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([UserApiLink]),
		withCount && queryClient.invalidateQueries([UserCountApiLink]),
	]);
};

export const useUserOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IUserSource>>();
export const useUserSelectionContext         = () => useSelectionContext<SourceInfer.Item<IUserSource>>();

export interface IUserDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IUserSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const UserDrawerItem: FC<IUserDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IUserSource>>
			sourceProviderProps={{
				name:          "User",
				useQuery:      useUserQuery,
				useCountQuery: useUserCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					UserPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: UserApiLink,
					text:      "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>;
};
