import {
	ConsumerProps,
	FC
} from "react";
import {
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
	SourceContext,
	SourceContextProvider,
	Table,
	createPostMutation,
	createPostQuery,
	useFilterContext,
	useOptionalFilterContext,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type ITagsQueryParams = void;


export const useTagsQuery = createPostQuery<ITagsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/tag/dto/index").TagDto>>("Edde.Shared.Tag.Tags");
export const useTagsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Tag.Tags"])
}

export const useTagsSource = () => useSourceContext<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto>()

export interface ITagsSourceContext extends ISourceContext<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto> {
}

export interface ITagsSourceProps extends Partial<ISourceContextProviderProps<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto>> {
}

export const TagsSource: FC<ITagsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto>
		useQuery={useTagsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ITagsSourceConsumerProps extends ConsumerProps<ISourceContext<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto>> {
}

export const TagsSourceConsumer: FC<ITagsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ITagsBaseTableProps extends ITableProps<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto> {
}

export const TagsBaseTable: FC<ITagsBaseTableProps> = props => {
	return <Table<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto>
		{...props}
	/>
}

export interface ITagsSourceTableProps extends ITagsBaseTableProps {
	source?: ITagsSourceProps;
	defaultFilter?: import("@/sdk/edde/tag/dto/index").TagFilterDto;
	defaultOrderBy?: import("@/sdk/edde/tag/dto/index").TagOrderByDto;
	defaultQuery?: ITagsQueryParams;
	filter?: import("@/sdk/edde/tag/dto/index").TagFilterDto;
	orderBy?: import("@/sdk/edde/tag/dto/index").TagOrderByDto;
	query?: ITagsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/tag/dto/index").TagDto>>;
}

export const TagsSourceTable: FC<ITagsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <TagsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<TagsBaseTable {...props}/>
	</TagsSource>
}

export interface ITagsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/tag/dto/index").TagDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/tag/dto/index").TagDto>;
	source?: ITagsSourceProps;
}

export const TagsSourceSelect: FC<ITagsSourceSelectProps> = ({source, ...props}) => {
	return <TagsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ITagsQueryParams, import("@/sdk/edde/tag/dto/index").TagDto, import("@/sdk/edde/tag/dto/index").TagOrderByDto, import("@/sdk/edde/tag/dto/index").TagFilterDto> {...props}/>
	</TagsSource>;
};

export interface ITagsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/tag/dto/index").TagFilterDto>> {
}

export const TagsFilterContext: FC<ITagsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/tag/dto/index").TagFilterDto> {...props}/>
}

export const useTagsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/edde/tag/dto/index").TagFilterDto>()
export const useTagsFilterContext = () => useFilterContext<import("@/sdk/edde/tag/dto/index").TagFilterDto>()