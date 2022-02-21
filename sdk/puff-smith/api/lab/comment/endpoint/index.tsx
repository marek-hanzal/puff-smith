import {ConsumerProps, createContext, FC, ReactElement, ReactNode} from "react";
import {
	createGetQuery,
	createPatchMutation,
	createPostMutation,
	createPostQuery,
	EntityContext,
	EntityProvider,
	FilterContextProvider,
	Form,
	IEntityContext,
	IEntityProviderProps,
	IFilterContextProviderProps,
	IFormProps,
	IPageProps,
	IQueryOptions,
	IQueryProps,
	IQueryResult,
	IQuerySourceSelectProps,
	isCallable,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	Page,
	Query,
	QuerySourceSelect,
	SourceContext,
	SourceContextProvider,
	Table,
	useContext,
	useFilterContext,
	useOptionalContext,
	useOptionalFilterContext,
	useParams,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";
import {BreadcrumbProps} from "antd";
import Breadcrumb from "antd/lib/breadcrumb";

export type ICommentQueryParams = {
	commentId: string;
}


export const useCommentQuery = createGetQuery<ICommentQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto>("PuffSmith.Lab.Comment.Comment");
export const useCommentQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Comment.Comment"])
}

export type ICommentsQueryParams = void;


export const useCommentsQuery = createPostQuery<ICommentsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/comment/dto/index").CommentDto>>("PuffSmith.Lab.Comment.Comments");
export const useCommentsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Comment.Comments"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/comment/dto/create/index").CreateDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>("PuffSmith.Lab.Comment.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/comment/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>("PuffSmith.Lab.Comment.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/comment/dto/patch/index").PatchDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>("PuffSmith.Lab.Comment.Patch");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/comment/dto/create/index").CreateDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/comment/dto/create/index").CreateDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/comment/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/comment/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/comment/dto/patch/index").PatchDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/comment/dto/patch/index").PatchDto, import("@/sdk/puff-smith/comment/dto/index").CommentDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const CommentContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/comment/dto/index").CommentDto>);

export const useCommentContext = (): IEntityContext<import("@/sdk/puff-smith/comment/dto/index").CommentDto> => useContext(CommentContext, "CommentContext");

export const useOptionalCommentContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/comment/dto/index").CommentDto>>(CommentContext as any);

export interface ICommentProvider extends IEntityProviderProps<import("@/sdk/puff-smith/comment/dto/index").CommentDto> {
}

export const CommentProvider: FC<ICommentProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <CommentContext.Provider value={entityContext}>
				{children}
			</CommentContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchCommentProps extends Partial<IQueryProps<ICommentQueryParams, void, import("@/sdk/puff-smith/comment/dto/index").CommentDto>> {
	query: ICommentQueryParams;
}

export const FetchComment: FC<IFetchCommentProps> = ({query, ...props}) => <Query<ICommentQueryParams, void, import("@/sdk/puff-smith/comment/dto/index").CommentDto>
	useQuery={useCommentQuery}
	query={query}
	request={undefined}
	context={useOptionalCommentContext()}
	{...props}
/>;

export type ICommentPageExtra = ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/comment/dto/index").CommentDto>) => ReactElement);
export type ICommentPageBreadcrumb = BreadcrumbProps | ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/comment/dto/index").CommentDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);

export interface ICommentPageProps extends Omit<IPageProps, "breadcrumbProps" | "breadcrumbMobileProps" | "breadcrumbBrowserProps" | "extra" | "extraBrowser" | "extraMobile"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/comment/dto/index").CommentDto) => ReactNode);
	breadcrumbProps?: ICommentPageBreadcrumb;
	breadcrumbMobileProps?: ICommentPageBreadcrumb;
	breadcrumbBrowserProps?: ICommentPageBreadcrumb;
	extra?: ICommentPageExtra;
	extraMobile?: ICommentPageExtra;
	extraBrowser?: ICommentPageExtra;
}

export const CommentPage: FC<ICommentPageProps> = ({children, breadcrumbProps, breadcrumbMobileProps, breadcrumbBrowserProps, extraMobile, extraBrowser, extra, ...props}) => {
	const {commentId} = useParams();
	return <CommentProvider>
		<CommentContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				breadcrumbMobileProps={breadcrumbMobileProps ? isCallable(breadcrumbMobileProps) ? (breadcrumbMobileProps as any)(entityContext) : breadcrumbMobileProps : undefined}
				breadcrumbBrowserProps={breadcrumbBrowserProps ? isCallable(breadcrumbBrowserProps) ? (breadcrumbBrowserProps as any)(entityContext) : breadcrumbBrowserProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				extraBrowser={extraBrowser ? (isCallable(extraBrowser) ? (extraBrowser as any)(entityContext) : extraBrowser) : undefined}
				extraMobile={extraMobile ? (isCallable(extraMobile) ? (extraMobile as any)(entityContext) : extraMobile) : undefined}
				{...props}
			>
				<FetchComment
					query={{commentId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchComment>
			</Page>}
		</CommentContext.Consumer>
	</CommentProvider>;
};

export const useCommentsSource = () => useSourceContext<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>()

export interface ICommentsSourceContext extends ISourceContext<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto> {
}

export interface ICommentsSourceProps extends Partial<ISourceContextProviderProps<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>> {
}

export const CommentsSource: FC<ICommentsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>
		useQuery={useCommentsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ICommentsSourceConsumerProps extends ConsumerProps<ISourceContext<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>> {
}

export const CommentsSourceConsumer: FC<ICommentsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface ICommentsBaseTableProps extends ITableProps<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto> {
}

export const CommentsBaseTable: FC<ICommentsBaseTableProps> = props => {
	return <Table<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>
		{...props}
	/>
}

export interface ICommentsSourceTableProps extends ICommentsBaseTableProps {
	source?: ICommentsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto;
	defaultQuery?: ICommentsQueryParams;
	filter?: import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto;
	orderBy?: import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto;
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
		<QuerySourceSelect<ICommentsQueryParams, import("@/sdk/puff-smith/comment/dto/index").CommentDto, import("@/sdk/puff-smith/comment/dto/index").CommentOrderByDto, import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto> {...props}/>
	</CommentsSource>;
};

export interface ICommentsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>> {
}

export const CommentsFilterContext: FC<ICommentsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto> {...props}/>
}

export const useCommentsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>()
export const useCommentsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/comment/dto/index").CommentFilterDto>()
