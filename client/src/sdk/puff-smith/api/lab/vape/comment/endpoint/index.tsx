import {FC} from "react";
import {
	createPostMutation,
	createPostQuery,
	Form,
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

export type ICommentsQueryParams = void;


export const useCommentsQuery = createPostQuery<ICommentsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/comment/dto/index").CommentDto>>("PuffSmith.Lab.Vape.Comment.Comments");
export const useCommentsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vape.Comment.Comments"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/comment/index").CreateDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>("PuffSmith.Lab.Vape.Comment.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/comment/index").CreateDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/comment/index").CreateDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useCommentsSource = () => useSourceContext<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto>()

export interface ICommentsSourceContext extends ISourceContext<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto> {
}

export interface ICommentsSourceProps extends Partial<ISourceContextProviderProps<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto>> {
}

export const CommentsSource: FC<ICommentsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto>
		useQuery={useCommentsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ICommentsBaseTableProps extends ITableProps<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto> {
}

export const CommentsBaseTable: FC<ICommentsBaseTableProps> = props => {
	return <Table<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto>
		{...props}
	/>
}

export interface ICommentsSourceTableProps extends ICommentsBaseTableProps {
	source?: ICommentsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto;
	defaultQuery?: ICommentsQueryParams;
	filter?: import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto;
	orderBy?: import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto;
	query?: ICommentsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/comment/dto/index").CommentDto>>;
}

export const CommentsSourceTable: FC<ICommentsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <CommentsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<CommentsBaseTable {...props}/>
	</CommentsSource>
}

export interface ICommentsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/comment/dto/index").CommentDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/comment/dto/index").CommentDto>;
	source?: ICommentsSourceProps;
}

export const CommentsSourceSelect: FC<ICommentsSourceSelectProps> = ({source, ...props}) => {
	return <CommentsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentOrderByDto, import("@/sdk/puff-smith/vape/dto/comment/index").CommentFilterDto> {...props}/>
	</CommentsSource>;
};
