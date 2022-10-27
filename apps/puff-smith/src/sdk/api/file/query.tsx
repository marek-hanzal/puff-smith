/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFileSource}    from "@/puff-smith/service/file/interface";
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

export const FileApiLink      = "/api/file/query";
export const FileCountApiLink = "/api/file/query/count";

export type IFileQueryParams = any;

export const useFileQuery      = createQueryHook<SourceInfer.Query<IFileSource>, SourceInfer.Item<IFileSource>[], IFileQueryParams>(FileApiLink, "post");
export const useFileCountQuery = createQueryHook<SourceInfer.Query<IFileSource>, number, IFileQueryParams>(FileCountApiLink, "post");

export const useFileSource = () => useSourceContext<SourceInfer.Item<IFileSource>>();

export interface IFileSourceContext extends ISourceContext<SourceInfer.Item<IFileSource>> {
}

export interface IFileSourceConsumerProps extends ConsumerProps<ISourceContext<SourceInfer.Item<IFileSource>>> {
}

export const FileSourceConsumer: FC<IFileSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IFileProviderProps extends Partial<ISourceProviderProps<SourceInfer.Item<IFileSource>>> {
}

export const FileProvider: FC<IFileProviderProps> = props => {
	return <SourceProvider<SourceInfer.Item<IFileSource>>
		name={"File"}
		useQuery={useFileQuery}
		useCountQuery={useFileCountQuery}
		{...props}
	/>;
};

export const toFileLink  = (queryParams?: IFileQueryParams) => toLink(FileApiLink, queryParams);
export const useFileLink = () => toFileLink;

export const useFilePromise = createPromiseHook<SourceInfer.Query<IFileSource>, SourceInfer.Item<IFileSource>[], IFileQueryParams>(FileApiLink, "post");
export const FilePromise    = createPromise<SourceInfer.Query<IFileSource>, SourceInfer.Item<IFileSource>[], IFileQueryParams>(FileApiLink, "post");

export interface IFileFilterProviderProps extends Partial<IFilterProviderProps<QueryInfer.Filter<SourceInfer.Query<IFileSource>>>> {
}

export const FileFilterProvider: FC<IFileFilterProviderProps> = props => <FilterProvider<QueryInfer.Filter<SourceInfer.Query<IFileSource>>> name={"File"} {...props}/>;

export const useFileOptionalFilterContext = () => useOptionalFilterContext<QueryInfer.Filter<SourceInfer.Query<IFileSource>>>();
export const useFileFilterContext         = () => useFilterContext<QueryInfer.Filter<SourceInfer.Query<IFileSource>>>();

export interface IFileProviderFilterProps extends IFilterWithoutTranslationProps<QueryInfer.Filter<SourceInfer.Query<IFileSource>>> {
}

export const FileProviderFilter: FC<IFileProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.File"}
/>;

export interface IFileOrderByProviderProps extends Partial<IOrderByProviderProps<QueryInfer.OrderBy<SourceInfer.Query<IFileSource>>>> {
}

export const FileOrderByProvider: FC<IFileOrderByProviderProps> = props => <OrderByProvider<QueryInfer.OrderBy<SourceInfer.Query<IFileSource>>> name={"File"} {...props}/>;

export const useFileOptionalOrderByContext = () => useOptionalOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IFileSource>>>();
export const useFileOrderByContext         = () => useOrderByContext<QueryInfer.OrderBy<SourceInfer.Query<IFileSource>>>();

export interface IFileProviderControlProps extends Partial<ISourceControlProviderProps<QueryInfer.Filter<SourceInfer.Query<IFileSource>>, QueryInfer.OrderBy<SourceInfer.Query<IFileSource>>, IFileQueryParams>> {
}

export const FileProviderControl: FC<IFileProviderControlProps> = props => <SourceControlProvider<QueryInfer.Filter<SourceInfer.Query<IFileSource>>, QueryInfer.OrderBy<SourceInfer.Query<IFileSource>>> name={"File"} {...props}/>;

export interface IFileTableSourceProps extends Partial<ITableProps<SourceInfer.Item<IFileSource>>> {
	providerProps?: Partial<IFileProviderProps>;
}

export const FileTableSource: FC<IFileTableSourceProps> = ({providerProps, ...props}) => {
	return <FileProvider
		withCount
		{...providerProps}
	>
		<Table<SourceInfer.Item<IFileSource>>
			translation={FileApiLink}
			{...props}
		/>
	</FileProvider>;
};

export interface IFileListSourceProps extends Partial<IListProps<SourceInfer.Item<IFileSource>>> {
	providerProps?: Partial<IFileProviderProps>;
}

export const FileListSource: FC<IFileListSourceProps> = ({providerProps, ...props}) => {
	return <FileProvider
		withCount
		{...providerProps}
	>
		<List<SourceInfer.Item<IFileSource>>
			{...props}
		/>
	</FileProvider>;
};

export interface IFileInfiniteListSourceProps extends Partial<IInfiniteListProps<SourceInfer.Item<IFileSource>>> {
	providerProps?: Partial<IFileProviderProps>;
}

export const FileInfiniteListSource: FC<IFileInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <FileProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<SourceInfer.Item<IFileSource>>
			translation={{
				namespace: FileApiLink,
			}}
			{...props}
		/>
	</FileProvider>;
};

export interface IFileSourceSelectProps extends IQuerySourceSelectProps<SourceInfer.Item<IFileSource>> {
	toOption: IToOptionMapper<SourceInfer.Item<IFileSource>>;
	providerProps?: Partial<IFileProviderProps>;
}

export const FileSourceSelect: FC<IFileSourceSelectProps> = ({providerProps, ...props}) => {
	return <FileProvider {...providerProps}>
		<QuerySourceSelect<SourceInfer.Item<IFileSource>> {...props}/>
	</FileProvider>;
};

export interface IFileSelectionProviderProps extends Partial<ISelectionProviderProps<SourceInfer.Item<IFileSource>>> {
}

export const FileSelectionProvider: FC<IFileSelectionProviderProps> = props => {
	return <SelectionProvider<SourceInfer.Item<IFileSource>> {...props}/>;
};

export const useFileCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([FileCountApiLink]);
};

export const useFileQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([FileApiLink]),
		withCount && queryClient.invalidateQueries([FileCountApiLink]),
	]);
};

export const useFileOptionalSelectionContext = () => useOptionalSelectionContext<SourceInfer.Item<IFileSource>>();
export const useFileSelectionContext         = () => useSelectionContext<SourceInfer.Item<IFileSource>>();

export interface IFileDrawerItemProps extends Omit<IDrawerSelectItemProps<SourceInfer.Item<IFileSource>>, "ofSelection" | "sourceProviderProps"> {
}

export const FileDrawerItem: FC<IFileDrawerItemProps> = ({onSelection, ...props}) => {
	return <BlockProvider>
		{blockContext => <DrawerSelectItem<SourceInfer.Item<IFileSource>>
			sourceProviderProps={{
				name:          "File",
				useQuery:      useFileQuery,
				useCountQuery: useFileCountQuery,
			}}
			toClear={() => undefined}
			onSelection={onSelection}
			ofSelection={({value, selectionContext}) => {
				if (value) {
					blockContext.block();
					FilePromise({filter: {id: value as any}}).then(items => {
						selectionContext.defaults(items);
						blockContext.unblock(true);
						onSelection?.(selectionContext.selection());
					});
				}
			}}
			drawerSelectProps={{
				translation: {
					namespace: FileApiLink,
					text:      "select.title",
				}
			}}
			{...props}
		/>}
	</BlockProvider>;
};
