/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {
	IQueryFilter,
	IQueryOrderBy,
	ISourceContext,
	ISourceItem,
	ISourceQuery,
	IToOptionMapper
}                       from "@leight-core/api";
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
	ISourceControlProviderProps,
	ISourceProviderProps,
	ITableProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
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
}                       from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {
	ConsumerProps,
	FC
}                       from "react";

export const MixtureApiLink = "/api/mixture/query";
export const MixtureCountApiLink = "/api/mixture/query/count";

export type IMixtureQueryParams = any;

export const useMixtureQuery = createQueryHook<ISourceQuery<IMixtureSource>, ISourceItem<IMixtureSource>[], IMixtureQueryParams>(MixtureApiLink, "post");
export const useMixtureCountQuery = createQueryHook<ISourceQuery<IMixtureSource>, number, IMixtureQueryParams>(MixtureCountApiLink, "post");

export const useMixtureSource = () => useSourceContext<ISourceItem<IMixtureSource>>();

export interface IMixtureSourceContext extends ISourceContext<ISourceItem<IMixtureSource>> {
}

export interface IMixtureSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureSource>>> {
}

export const MixtureSourceConsumer: FC<IMixtureSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureSource>>> {
}

export const MixtureProvider: FC<IMixtureProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureSource>>
		name={"Mixture"}
		useQuery={useMixtureQuery}
		useCountQuery={useMixtureCountQuery}
		{...props}
	/>;
};

export const toMixtureLink  = (queryParams?: IMixtureQueryParams) => toLink(MixtureApiLink, queryParams);
export const useMixtureLink = () => toMixtureLink;

export const useMixturePromise = createPromiseHook<ISourceQuery<IMixtureSource>, ISourceItem<IMixtureSource>[], IMixtureQueryParams>(MixtureApiLink, "post");
export const MixturePromise    = createPromise<ISourceQuery<IMixtureSource>, ISourceItem<IMixtureSource>[], IMixtureQueryParams>(MixtureApiLink, "post");

export interface IMixtureFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureSource>>>> {
}

export const MixtureFilterProvider: FC<IMixtureFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureSource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureSource>>>();
export const useMixtureFilterContext         = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureSource>>>();

export interface IMixtureProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureSource>>> {
}

export const MixtureProviderFilter: FC<IMixtureProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mixture"}
/>;

export interface IMixtureOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureSource>>>> {
}

export const MixtureOrderByProvider: FC<IMixtureOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureSource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureSource>>>();
export const useMixtureOrderByContext         = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureSource>>>();

export interface IMixtureProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureSource>>, IQueryOrderBy<ISourceQuery<IMixtureSource>>, IMixtureQueryParams>> {
}

export const MixtureProviderControl: FC<IMixtureProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureSource>>, IQueryOrderBy<ISourceQuery<IMixtureSource>>> name={"Mixture"} {...props}/>;

export interface IMixtureTableSourceProps extends Partial<ITableProps<ISourceItem<IMixtureSource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureTableSource: FC<IMixtureTableSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IMixtureSource>>
			translation={MixtureApiLink}
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureListSourceProps extends Partial<IListProps<ISourceItem<IMixtureSource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureListSource: FC<IMixtureListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IMixtureSource>>
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IMixtureSource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureInfiniteListSource: FC<IMixtureInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IMixtureSource>>
			translation={{
				namespace: MixtureApiLink,
			}}
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureSource>>;
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureSourceSelect: FC<IMixtureSourceSelectProps> = ({providerProps, ...props}) => {
	return <MixtureProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<IMixtureSource>> {...props}/>
	</MixtureProvider>;
};

export interface IMixtureSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureSource>>> {
}

export const MixtureSelectionProvider: FC<IMixtureSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureSource>> {...props}/>;
}

export const useMixtureCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureCountApiLink]);
};

export const useMixtureQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([MixtureApiLink]),
		withCount && queryClient.invalidateQueries([MixtureCountApiLink]),
	]);
};

export const useMixtureOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureSource>>();
export const useMixtureSelectionContext = () => useSelectionContext<ISourceItem<IMixtureSource>>();

export interface IMixtureDrawerItemProps extends Omit<IDrawerSelectItemProps<ISourceItem<IMixtureSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const MixtureDrawerItem: FC<IMixtureDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<ISourceItem<IMixtureSource>>
			sourceProviderProps={{
				name: "Mixture",
				useQuery: useMixtureQuery,
				useCountQuery: useMixtureCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					MixturePromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: MixtureApiLink,
					text: "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>
}
