import {IFile, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {IFileFilter, IFileOrderBy, IFileQuery} from "@/puff-smith/service/file";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
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

export const FilesApiLink = "/api/file/query";

export type IFilesQueryParams = undefined;

export const useFilesQuery = createQueryHook<IFileQuery, IQueryResult<IFile>, IFilesQueryParams>(FilesApiLink, "post");

export const useFilesSource = () => useSourceContext<IFile>()

export interface IFilesSourceContext extends ISourceContext<IFile> {
}

export interface IFilesSourceConsumerProps extends ConsumerProps<ISourceContext<IFile>> {
}

export const FilesSourceConsumer: FC<IFilesSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IFilesSourceProps extends Partial<ISourceProviderProps<IFile>> {
}

export const FilesSource: FC<IFilesSourceProps> = props => {
	return <SourceProvider<IFile>
		useQuery={useFilesQuery}
		{...props}
	/>;
}

export const useFilesLink = (): ((queryParams?: IFilesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(FilesApiLink, queryParams);
}

export const useFilesPromise = createPromiseHook<IFileQuery, IFile, IFilesQueryParams>(FilesApiLink, "post");

export interface IFilesFilterProviderProps extends Partial<IFilterProviderProps<IFileFilter>> {
}

export const FilesFilterProvider: FC<IFilesFilterProviderProps> = props => <FilterProvider<IFileFilter> {...props}/>;

export const useFilesOptionalFilterContext = () => useOptionalFilterContext<IFileFilter>()
export const useFilesFilterContext = () => useFilterContext<IFileFilter>()

export interface IFilesSourceFilterProps extends IFilterWithoutTranslationProps<IFileFilter> {
}

export const FilesSourceFilter: FC<IFilesSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Files'}
/>;

export interface IFilesOrderByProviderProps extends Partial<IOrderByProviderProps<IFileFilter>> {
}

export const FilesOrderByProvider: FC<IFilesOrderByProviderProps> = props => <OrderByProvider<IFileFilter> {...props}/>;

export const useFilesOptionalOrderByContext = () => useOptionalOrderByContext<IFileFilter>()
export const useFilesOrderByContext = () => useOrderByContext<IFileFilter>()

export interface IFilesListSourceProps extends Partial<IListProps<IFile>> {
	sourceProps?: Partial<IFilesSourceProps>;
}

export interface IFilesSourceControlProviderProps extends Partial<ISourceControlProviderProps<IFileFilter, IFileOrderBy, IFilesQueryParams>> {
}

export const FilesSourceControlProvider: FC<IFilesSourceControlProviderProps> = props => <SourceControlProvider<IFileFilter, IFileOrderBy> {...props}/>;

export const FilesListSource: FC<IFilesListSourceProps> = ({sourceProps, ...props}) => {
	return <FilesSource
		{...sourceProps}
	>
		<List<IFile>
			{...props}
		/>
	</FilesSource>
}

export interface IFilesSourceSelectProps extends IQuerySourceSelectProps<IFile> {
	toOption: IToOptionMapper<IFile>;
	sourceProps?: IFilesSourceProps;
}

export const FilesSourceSelect: FC<IFilesSourceSelectProps> = ({sourceProps, ...props}) => {
	return <FilesSource {...sourceProps}>
		<QuerySourceSelect<IFile> {...props}/>
	</FilesSource>;
};

export const useFilesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([FilesApiLink]);
}
