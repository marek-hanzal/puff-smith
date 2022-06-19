/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISelectionProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";
import {useQueryClient} from "react-query";

export const CommentApiLink = "/api/comment/query";
export const CommentCountApiLink = "/api/comment/query/count";

export type ICommentQueryParams = any;

export const useCommentQuery = createQueryHook<ISourceQuery<ICommentSource>, ISourceItem<ICommentSource>[], ICommentQueryParams>(CommentApiLink, "post");
export const useCommentCountQuery = createQueryHook<ISourceQuery<ICommentSource>, number, ICommentQueryParams>(CommentCountApiLink, "post");

export const useCommentSource = () => useSourceContext<ISourceItem<ICommentSource>>();

export interface ICommentSourceContext extends ISourceContext<ISourceItem<ICommentSource>> {
}

export interface ICommentSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICommentSource>>> {
}

export const CommentSourceConsumer: FC<ICommentSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICommentProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICommentSource>>> {
}

export const CommentProvider: FC<ICommentProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICommentSource>>
		name={"Comment"}
		useQuery={useCommentQuery}
		useCountQuery={useCommentCountQuery}
		{...props}
	/>;
};

export const toCommentLink = (queryParams?: ICommentQueryParams) => toLink(CommentApiLink, queryParams);
export const useCommentLink = () => toCommentLink;

export const useCommentPromise = createPromiseHook<ISourceQuery<ICommentSource>, ISourceItem<ICommentSource>, ICommentQueryParams>(CommentApiLink, "post");
export const CommentPromise = createPromise<ISourceQuery<ICommentSource>, ISourceItem<ICommentSource>, ICommentQueryParams>(CommentApiLink, "post");

export interface ICommentFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICommentSource>>>> {
}

export const CommentFilterProvider: FC<ICommentFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICommentSource>>> name={"Comment"} {...props}/>;

export const useCommentOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICommentSource>>>();
export const useCommentFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICommentSource>>>();

export interface ICommentProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICommentSource>>> {
}

export const CommentProviderFilter: FC<ICommentProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Comment"}
/>;

export interface ICommentOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICommentSource>>>> {
}

export const CommentOrderByProvider: FC<ICommentOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICommentSource>>> name={"Comment"} {...props}/>;

export const useCommentOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICommentSource>>>();
export const useCommentOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICommentSource>>>();

export interface ICommentProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICommentSource>>, IQueryOrderBy<ISourceQuery<ICommentSource>>, ICommentQueryParams>> {
}

export const CommentProviderControl: FC<ICommentProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICommentSource>>, IQueryOrderBy<ISourceQuery<ICommentSource>>> name={"Comment"} {...props}/>;

export interface ICommentListSourceProps extends Partial<IListProps<ISourceItem<ICommentSource>>> {
	providerProps?: Partial<ICommentProviderProps>;
}

export const CommentListSource: FC<ICommentListSourceProps> = ({providerProps, ...props}) => {
	return <CommentProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICommentSource>>
			{...props}
		/>
	</CommentProvider>;
};

export interface ICommentSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICommentSource>> {
	toOption: IToOptionMapper<ISourceItem<ICommentSource>>;
	providerProps?: Partial<ICommentProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CommentSourceSelect: FC<ICommentSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CommentProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICommentSource>> {...props}/>
				</CommentProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Comment.title"}
					size={props.size}
					tooltip={"common.selection.Comment.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CommentProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CommentProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICommentSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICommentSource>>> {
}

export const CommentSelectionProvider: FC<ICommentSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICommentSource>> {...props}/>;
};

export const useCommentQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CommentApiLink]);
};

export const useCommentCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CommentCountApiLink]);
};

export const useCommentOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICommentSource>>();
export const useCommentSelectionContext = () => useSelectionContext<ISourceItem<ICommentSource>>();
