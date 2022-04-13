/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFileQuery} from "@/puff-smith/service/file";
import {IFile, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromise,
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
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext,
	useSourceContext
} from "@leight-core/client";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";

export const FilesApiLink = "/api/file/query";

export type IFilesQueryParams = undefined;

export const useFilesQuery = createQueryHook<IFileQuery, IQueryResult<IFile>, IFilesQueryParams>(FilesApiLink, "post");

export const useFilesSource = () => useSourceContext<IFile>();

export interface IFilesSourceContext extends ISourceContext<IFile> {
}

export interface IFilesSourceConsumerProps extends ConsumerProps<ISourceContext<IFile>> {
}

export const FilesSourceConsumer: FC<IFilesSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IFilesSourceProps extends Partial<ISourceProviderProps<IFile>> {
}

export const FilesSource: FC<IFilesSourceProps> = props => {
	return <SourceProvider<IFile>
		name={"Files"}
		useQuery={useFilesQuery}
		{...props}
	/>;
};

export const toFilesLink = (queryParams?: IFilesQueryParams) => toLink(FilesApiLink, queryParams);
export const useFilesLink = () => toFilesLink;

export const useFilesPromise = createPromiseHook<IFileQuery, IFile, IFilesQueryParams>(FilesApiLink, "post");
export const FilesPromise = createPromise<IFileQuery, IFile, IFilesQueryParams>(FilesApiLink, "post");

export interface IFilesFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IFileQuery>>> {
}

export const FilesFilterProvider: FC<IFilesFilterProviderProps> = props => <FilterProvider<IQueryFilter<IFileQuery>> name={"Files"} {...props}/>;

export const useFilesOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IFileQuery>>();
export const useFilesFilterContext = () => useFilterContext<IQueryFilter<IFileQuery>>();

export interface IFilesSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IFileQuery>> {
}

export const FilesSourceFilter: FC<IFilesSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Files"}
/>;

export interface IFilesOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IFileQuery>>> {
}

export const FilesOrderByProvider: FC<IFilesOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IFileQuery>> name={"Files"} {...props}/>;

export const useFilesOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IFileQuery>>();
export const useFilesOrderByContext = () => useOrderByContext<IQueryOrderBy<IFileQuery>>();

export interface IFilesListSourceProps extends Partial<IListProps<IFile>> {
	sourceProps?: Partial<IFilesSourceProps>;
}

export interface IFilesSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IFileQuery>, IQueryOrderBy<IFileQuery>, IFilesQueryParams>> {
}

export const FilesSourceControlProvider: FC<IFilesSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IFileQuery>, IQueryOrderBy<IFileQuery>> name={"Files"} {...props}/>;

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
