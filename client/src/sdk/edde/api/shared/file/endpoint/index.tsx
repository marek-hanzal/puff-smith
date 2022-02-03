import {FC} from "react";
import {
	createGetQuery,
	createPostMutation,
	createPostQuery,
	FilterContextProvider,
	Form,
	IFilterContextProviderProps,
	IFormProps,
	IQueryOptions,
	IQueryResult,
	IQuerySourceSelectProps,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	QuerySourceSelect,
	SourceContextProvider,
	Table,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type ICommitQueryParams = void;


export const useCommitMutation = createPostMutation<ICommitQueryParams, import("@/sdk/edde/file/dto/index").CommitDto, import("@/sdk/edde/file/dto/index").FileDto>("Edde.Shared.File.Commit");

export type IDownloadQueryParams = {
	fileId: string;
}


export const useDownloadQuery = createGetQuery<IDownloadQueryParams, void>("Edde.Shared.File.Download");
export const useDownloadQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.File.Download"])
}

export type IFilesQueryParams = void;


export const useFilesQuery = createPostQuery<IFilesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/file/dto/index").FileDto>>("Edde.Shared.File.Files");
export const useFilesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.File.Files"])
}

export type IGcQueryParams = void;


export const useGcMutation = createPostMutation<IGcQueryParams, void, import("@/sdk/edde/file/dto/index").GcResultDto>("Edde.Shared.File.Gc");

export type IRefreshQueryParams = void;


export const useRefreshMutation = createPostMutation<IRefreshQueryParams, import("@/sdk/edde/api/shared/file/dto/index").StaleDto, import("@/sdk/edde/file/dto/index").FileDto>("Edde.Shared.File.Refresh");

export type IStaleQueryParams = void;


export const useStaleMutation = createPostMutation<IStaleQueryParams, import("@/sdk/edde/api/shared/file/dto/index").StaleDto, import("@/sdk/edde/file/dto/index").FileDto>("Edde.Shared.File.Stale");

export type IUploadQueryParams = {
	uuid: string;
}


export const useUploadMutation = createPostMutation<IUploadQueryParams, void, any[]>("Edde.Shared.File.Upload");

export interface ICommitDefaultFormProps extends Partial<IFormProps<ICommitQueryParams, import("@/sdk/edde/file/dto/index").CommitDto, import("@/sdk/edde/file/dto/index").FileDto>> {
}

export const CommitDefaultForm: FC<ICommitDefaultFormProps> = props => {
	return <Form<ICommitQueryParams, import("@/sdk/edde/file/dto/index").CommitDto, import("@/sdk/edde/file/dto/index").FileDto>
		useMutation={useCommitMutation}
		{...props}
	/>
}

export interface IRefreshDefaultFormProps extends Partial<IFormProps<IRefreshQueryParams, import("@/sdk/edde/api/shared/file/dto/index").StaleDto, import("@/sdk/edde/file/dto/index").FileDto>> {
}

export const RefreshDefaultForm: FC<IRefreshDefaultFormProps> = props => {
	return <Form<IRefreshQueryParams, import("@/sdk/edde/api/shared/file/dto/index").StaleDto, import("@/sdk/edde/file/dto/index").FileDto>
		useMutation={useRefreshMutation}
		{...props}
	/>
}

export interface IStaleDefaultFormProps extends Partial<IFormProps<IStaleQueryParams, import("@/sdk/edde/api/shared/file/dto/index").StaleDto, import("@/sdk/edde/file/dto/index").FileDto>> {
}

export const StaleDefaultForm: FC<IStaleDefaultFormProps> = props => {
	return <Form<IStaleQueryParams, import("@/sdk/edde/api/shared/file/dto/index").StaleDto, import("@/sdk/edde/file/dto/index").FileDto>
		useMutation={useStaleMutation}
		{...props}
	/>
}

export const useFilesSource = () => useSourceContext<IFilesQueryParams, import("@/sdk/edde/file/dto/index").FileDto, import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto>()

export interface IFilesSourceContext extends ISourceContext<IFilesQueryParams, import("@/sdk/edde/file/dto/index").FileDto, import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto> {
}

export interface IFilesSourceProps extends Partial<ISourceContextProviderProps<IFilesQueryParams, import("@/sdk/edde/file/dto/index").FileDto, import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto>> {
}

export const FilesSource: FC<IFilesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IFilesQueryParams, import("@/sdk/edde/file/dto/index").FileDto, import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto>
		useQuery={useFilesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IFilesBaseTableProps extends ITableProps<IFilesQueryParams, import("@/sdk/edde/file/dto/index").FileDto, import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto> {
}

export const FilesBaseTable: FC<IFilesBaseTableProps> = props => {
	return <Table<IFilesQueryParams, import("@/sdk/edde/file/dto/index").FileDto, import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto>
		{...props}
	/>
}

export interface IFilesSourceTableProps extends IFilesBaseTableProps {
	source?: IFilesSourceProps;
	defaultFilter?: import("@/sdk/edde/file/dto/index").FileFilterDto;
	defaultOrderBy?: import("@/sdk/edde/file/dto/index").FileOrderByDto;
	defaultQuery?: IFilesQueryParams;
	filter?: import("@/sdk/edde/file/dto/index").FileFilterDto;
	orderBy?: import("@/sdk/edde/file/dto/index").FileOrderByDto;
	query?: IFilesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/file/dto/index").FileDto>>;
}

export const FilesSourceTable: FC<IFilesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <FilesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<FilesBaseTable {...props}/>
	</FilesSource>
}

export interface IFilesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/file/dto/index").FileDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/file/dto/index").FileDto>;
	source?: IFilesSourceProps;
}

export const FilesSourceSelect: FC<IFilesSourceSelectProps> = ({source, ...props}) => {
	return <FilesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IFilesQueryParams, import("@/sdk/edde/file/dto/index").FileDto, import("@/sdk/edde/file/dto/index").FileOrderByDto, import("@/sdk/edde/file/dto/index").FileFilterDto> {...props}/>
	</FilesSource>;
};

export interface IFilesFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/file/dto/index").FileFilterDto>> {
}

export const FilesFilterContext: FC<IFilesFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/file/dto/index").FileFilterDto> {...props}/>
}
