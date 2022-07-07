/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaCommentSource} from "@/puff-smith/service/aroma/comment/interface";
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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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

export const AromaCommentApiLink = "/api/aroma/comment/query";
export const AromaCommentCountApiLink = "/api/aroma/comment/query/count";

export type IAromaCommentQueryParams = any;

export const useAromaCommentQuery = createQueryHook<ISourceQuery<IAromaCommentSource>, ISourceItem<IAromaCommentSource>[], IAromaCommentQueryParams>(AromaCommentApiLink, "post");
export const useAromaCommentCountQuery = createQueryHook<ISourceQuery<IAromaCommentSource>, number, IAromaCommentQueryParams>(AromaCommentCountApiLink, "post");

export const useAromaCommentSource = () => useSourceContext<ISourceItem<IAromaCommentSource>>();

export interface IAromaCommentSourceContext extends ISourceContext<ISourceItem<IAromaCommentSource>> {
}

export interface IAromaCommentSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaCommentSource>>> {
}

export const AromaCommentSourceConsumer: FC<IAromaCommentSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaCommentProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaCommentSource>>> {
}

export const AromaCommentProvider: FC<IAromaCommentProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaCommentSource>>
		name={"AromaComment"}
		useQuery={useAromaCommentQuery}
		useCountQuery={useAromaCommentCountQuery}
		{...props}
	/>;
};

export const toAromaCommentLink = (queryParams?: IAromaCommentQueryParams) => toLink(AromaCommentApiLink, queryParams);
export const useAromaCommentLink = () => toAromaCommentLink;

export const useAromaCommentPromise = createPromiseHook<ISourceQuery<IAromaCommentSource>, ISourceItem<IAromaCommentSource>, IAromaCommentQueryParams>(AromaCommentApiLink, "post");
export const AromaCommentPromise = createPromise<ISourceQuery<IAromaCommentSource>, ISourceItem<IAromaCommentSource>, IAromaCommentQueryParams>(AromaCommentApiLink, "post");

export interface IAromaCommentFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaCommentSource>>>> {
}

export const AromaCommentFilterProvider: FC<IAromaCommentFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaCommentSource>>> name={"AromaComment"} {...props}/>;

export const useAromaCommentOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaCommentSource>>>();
export const useAromaCommentFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaCommentSource>>>();

export interface IAromaCommentProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaCommentSource>>> {
}

export const AromaCommentProviderFilter: FC<IAromaCommentProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromaComment"}
/>;

export interface IAromaCommentOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaCommentSource>>>> {
}

export const AromaCommentOrderByProvider: FC<IAromaCommentOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaCommentSource>>> name={"AromaComment"} {...props}/>;

export const useAromaCommentOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaCommentSource>>>();
export const useAromaCommentOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaCommentSource>>>();

export interface IAromaCommentProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaCommentSource>>, IQueryOrderBy<ISourceQuery<IAromaCommentSource>>, IAromaCommentQueryParams>> {
}

export const AromaCommentProviderControl: FC<IAromaCommentProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAromaCommentSource>>, IQueryOrderBy<ISourceQuery<IAromaCommentSource>>> name={"AromaComment"} {...props}/>;

export interface IAromaCommentListSourceProps extends Partial<IListProps<ISourceItem<IAromaCommentSource>>> {
	providerProps?: Partial<IAromaCommentProviderProps>;
}

export const AromaCommentListSource: FC<IAromaCommentListSourceProps> = ({providerProps, ...props}) => {
	return <AromaCommentProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IAromaCommentSource>>
			{...props}
		/>
	</AromaCommentProvider>;
}

export interface IAromaCommentInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IAromaCommentSource>>> {
	providerProps?: Partial<IAromaCommentProviderProps>;
}

export const AromaCommentInfiniteListSource: FC<IAromaCommentInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <AromaCommentProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IAromaCommentSource>>
			{...props}
		/>
	</AromaCommentProvider>;
};

export interface IAromaCommentSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaCommentSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaCommentSource>>;
	providerProps?: Partial<IAromaCommentProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaCommentSourceSelect: FC<IAromaCommentSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaCommentProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaCommentSource>> {...props}/>
				</AromaCommentProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AromaComment.title"}
					size={props.size}
					tooltip={"common.selection.AromaComment.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AromaCommentProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaCommentProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaCommentSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaCommentSource>>> {
}

export const AromaCommentSelectionProvider: FC<IAromaCommentSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaCommentSource>> {...props}/>;
}

export const useAromaCommentCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaCommentCountApiLink]);
};

export const useAromaCommentQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AromaCommentApiLink]),
		withCount && queryClient.invalidateQueries([AromaCommentCountApiLink]),
	]);
};

export const useAromaCommentOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaCommentSource>>();
export const useAromaCommentSelectionContext = () => useSelectionContext<ISourceItem<IAromaCommentSource>>();
