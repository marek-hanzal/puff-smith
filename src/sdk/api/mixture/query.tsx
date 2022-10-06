/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {
	ISourceContext,
	IToOptionMapper,
	QueryInfer,
	SourceInfer
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

export const MixtureApiLink      = "/api/mixture/query";
export const MixtureCountApiLink = "/api/mixture/query/count";

export type IMixtureQueryParams = any;

export const useMixtureQuery      = createQueryHook<SourceInfer.Query<IMixtureSource>, SourceInfer.Item<IMixtureSource>[], IMixtureQueryParams>(MixtureApiLink, "post");
export const useMixtureCountQuery = createQueryHook<SourceInfer.Query<IMixtureSource>, number, IMixtureQueryParams>(MixtureCountApiLink, "post");

export const useMixtureSource = () => useSourceContext<SourceInfer.Item<IMixtureSource>>();

export interface IMixtureSourceContext extends ISourceContext<SourceInfer.Item<IMixtureSource>> {
}

export interface IMixtureSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IMixtureSource>>> {
}

export const MixtureSourceConsumer: FC<IMixtureSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IMixtureSource>>> {
}

export const MixtureProvider: FC<IMixtureProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IMixtureSource>>
		name={"Mixture"}
		useQuery={useMixtureQuery}
		useCountQuery={useMixtureCountQuery}
		{...props}
	/>;
};

export const toMixtureLink  = (queryParams?: IMixtureQueryParams) => toLink(MixtureApiLink, queryParams);
export const useMixtureLink = () => toMixtureLink;

export const useMixturePromise = createPromiseHook<SourceInfer.Query<IMixtureSource>, SourceInfer.Item<IMixtureSource>[], IMixtureQueryParams>(MixtureApiLink, "post");
export const MixturePromise    = createPromise<SourceInfer.Query<IMixtureSource>, SourceInfer.Item<IMixtureSource>[], IMixtureQueryParams>(MixtureApiLink, "post");

export interface IMixtureFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IMixtureSource>>>> {
}

export const MixtureFilterProvider: FC<IMixtureFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IMixtureSource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IMixtureSource>>>();
export const useMixtureFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IMixtureSource>>>();

export interface IMixtureProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IMixtureSource>>> {
}

export const MixtureProviderFilter: FC<IMixtureProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mixture"}
/>;

export interface IMixtureOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IMixtureSource>>>> {
}

export const MixtureOrderByProvider: FC<IMixtureOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IMixtureSource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IMixtureSource>>>();
export const useMixtureOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IMixtureSource>>>();

export interface IMixtureProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IMixtureSource>>, QueryInfer.OrderBy<SourceInfer.Query<IMixtureSource>>, IMixtureQueryParams>> {
}

export const MixtureProviderControl: FC<IMixtureProviderControlProps> = props =>
	<SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IMixtureSource>>, QueryInfer.OrderBy<SourceInfer.Query<IMixtureSource>>> name={"Mixture"} {...props}/>;

export interface IMixtureTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IMixtureSource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureTableSource: FC<IMixtureTableSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IMixtureSource>>
			translation={MixtureApiLink}
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureListSourceProps extends Partial<IListProps<SourceInfer.Item<IMixtureSource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureListSource: FC<IMixtureListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IMixtureSource>>
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IMixtureSource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureInfiniteListSource: FC<IMixtureInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IMixtureSource>>
			translation={{
				namespace: MixtureApiLink,
			}}
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IMixtureSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IMixtureSource>>;
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureSourceSelect: FC<IMixtureSourceSelectProps> = ({providerProps, ...props}) => {
	return <MixtureProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IMixtureSource>> {...props}/>
	</MixtureProvider>;
};

export interface IMixtureSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IMixtureSource>>> {
}

export const MixtureSelectionProvider: FC<IMixtureSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IMixtureSource>> {...props}/>;
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

export const useMixtureOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IMixtureSource>>();
export const useMixtureSelectionContext         = () => useSelectionContext<SourceInfer.Item<IMixtureSource>>();

export interface IMixtureDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IMixtureSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const MixtureDrawerItem: FC<IMixtureDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IMixtureSource>>
			sourceProviderProps={{
				name:          "Mixture",
				useQuery:      useMixtureQuery,
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
