/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendorSource}  from "@/puff-smith/service/vendor/interface";
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

export const VendorApiLink      = "/api/vendor/query";
export const VendorCountApiLink = "/api/vendor/query/count";

export type IVendorQueryParams = any;

export const useVendorQuery      = createQueryHook<SourceInfer.Query<IVendorSource>, SourceInfer.Item<IVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");
export const useVendorCountQuery = createQueryHook<SourceInfer.Query<IVendorSource>, number, IVendorQueryParams>(VendorCountApiLink, "post");

export const useVendorSource = () => useSourceContext<SourceInfer.Item<IVendorSource>>();

export interface IVendorSourceContext extends ISourceContext<SourceInfer.Item<IVendorSource>> {
}

export interface IVendorSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IVendorSource>>> {
}

export const VendorSourceConsumer: FC<IVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVendorProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IVendorSource>>> {
}

export const VendorProvider: FC<IVendorProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IVendorSource>>
		name={"Vendor"}
		useQuery={useVendorQuery}
		useCountQuery={useVendorCountQuery}
		{...props}
	/>;
};

export const toVendorLink  = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<SourceInfer.Query<IVendorSource>, SourceInfer.Item<IVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");
export const VendorPromise    = createPromise<SourceInfer.Query<IVendorSource>, SourceInfer.Item<IVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");

export interface IVendorFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IVendorSource>>>> {
}

export const VendorFilterProvider: FC<IVendorFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IVendorSource>>>();
export const useVendorFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IVendorSource>>>();

export interface IVendorProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IVendorSource>>> {
}

export const VendorProviderFilter: FC<IVendorProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Vendor"}
/>;

export interface IVendorOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IVendorSource>>>> {
}

export const VendorOrderByProvider: FC<IVendorOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IVendorSource>>>();
export const useVendorOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IVendorSource>>>();

export interface IVendorProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IVendorSource>>, QueryInfer.OrderBy<SourceInfer.Query<IVendorSource>>, IVendorQueryParams>> {
}

export const VendorProviderControl: FC<IVendorProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IVendorSource>>, QueryInfer.OrderBy<SourceInfer.Query<IVendorSource>>> name={"Vendor"} {...props}/>;

export interface IVendorTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorTableSource: FC<IVendorTableSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IVendorSource>>
			translation={VendorApiLink}
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorListSourceProps extends Partial<IListProps<SourceInfer.Item<IVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorListSource: FC<IVendorListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IVendorSource>>
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorInfiniteListSource: FC<IVendorInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IVendorSource>>
			translation={{
				namespace: VendorApiLink,
			}}
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IVendorSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IVendorSource>>;
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({providerProps, ...props}) => {
	return <VendorProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IVendorSource>> {...props}/>
	</VendorProvider>;
};

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IVendorSource>>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IVendorSource>> {...props}/>;
}

export const useVendorCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorCountApiLink]);
};

export const useVendorQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([VendorApiLink]),
		withCount && queryClient.invalidateQueries([VendorCountApiLink]),
	]);
};

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IVendorSource>>();
export const useVendorSelectionContext         = () => useSelectionContext<SourceInfer.Item<IVendorSource>>();

export interface IVendorDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IVendorSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const VendorDrawerItem: FC<IVendorDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IVendorSource>>
			sourceProviderProps={{
				name:          "Vendor",
				useQuery:      useVendorQuery,
				useCountQuery: useVendorCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					VendorPromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: VendorApiLink,
					text: "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>
}
