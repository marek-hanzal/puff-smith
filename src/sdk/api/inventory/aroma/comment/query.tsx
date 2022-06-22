/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/interface";
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

export const AromaInventoryCommentApiLink = "/api/inventory/aroma/comment/query";
export const AromaInventoryCommentCountApiLink = "/api/inventory/aroma/comment/query/count";

export type IAromaInventoryCommentQueryParams = any;

export const useAromaInventoryCommentQuery = createQueryHook<ISourceQuery<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>[], IAromaInventoryCommentQueryParams>(AromaInventoryCommentApiLink, "post");
export const useAromaInventoryCommentCountQuery = createQueryHook<ISourceQuery<IAromaInventoryCommentSource>, number, IAromaInventoryCommentQueryParams>(AromaInventoryCommentCountApiLink, "post");

export const useAromaInventoryCommentSource = () => useSourceContext<ISourceItem<IAromaInventoryCommentSource>>();

export interface IAromaInventoryCommentSourceContext extends ISourceContext<ISourceItem<IAromaInventoryCommentSource>> {
}

export interface IAromaInventoryCommentSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaInventoryCommentSource>>> {
}

export const AromaInventoryCommentSourceConsumer: FC<IAromaInventoryCommentSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaInventoryCommentProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaInventoryCommentSource>>> {
}

export const AromaInventoryCommentProvider: FC<IAromaInventoryCommentProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaInventoryCommentSource>>
		name={"AromaInventoryComment"}
		useQuery={useAromaInventoryCommentQuery}
		useCountQuery={useAromaInventoryCommentCountQuery}
		{...props}
	/>;
};

export const toAromaInventoryCommentLink = (queryParams?: IAromaInventoryCommentQueryParams) => toLink(AromaInventoryCommentApiLink, queryParams);
export const useAromaInventoryCommentLink = () => toAromaInventoryCommentLink;

export const useAromaInventoryCommentPromise = createPromiseHook<ISourceQuery<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>, IAromaInventoryCommentQueryParams>(AromaInventoryCommentApiLink, "post");
export const AromaInventoryCommentPromise = createPromise<ISourceQuery<IAromaInventoryCommentSource>, ISourceItem<IAromaInventoryCommentSource>, IAromaInventoryCommentQueryParams>(AromaInventoryCommentApiLink, "post");

export interface IAromaInventoryCommentFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaInventoryCommentSource>>>> {
}

export const AromaInventoryCommentFilterProvider: FC<IAromaInventoryCommentFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaInventoryCommentSource>>> name={"AromaInventoryComment"} {...props}/>;

export const useAromaInventoryCommentOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaInventoryCommentSource>>>();
export const useAromaInventoryCommentFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaInventoryCommentSource>>>();

export interface IAromaInventoryCommentProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaInventoryCommentSource>>> {
}

export const AromaInventoryCommentProviderFilter: FC<IAromaInventoryCommentProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromaInventoryComment"}
/>;

export interface IAromaInventoryCommentOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaInventoryCommentSource>>>> {
}

export const AromaInventoryCommentOrderByProvider: FC<IAromaInventoryCommentOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaInventoryCommentSource>>> name={"AromaInventoryComment"} {...props}/>;

export const useAromaInventoryCommentOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaInventoryCommentSource>>>();
export const useAromaInventoryCommentOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaInventoryCommentSource>>>();

export interface IAromaInventoryCommentProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaInventoryCommentSource>>, IQueryOrderBy<ISourceQuery<IAromaInventoryCommentSource>>, IAromaInventoryCommentQueryParams>> {
}

export const AromaInventoryCommentProviderControl: FC<IAromaInventoryCommentProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAromaInventoryCommentSource>>, IQueryOrderBy<ISourceQuery<IAromaInventoryCommentSource>>> name={"AromaInventoryComment"} {...props}/>;

export interface IAromaInventoryCommentListSourceProps extends Partial<IListProps<ISourceItem<IAromaInventoryCommentSource>>> {
	providerProps?: Partial<IAromaInventoryCommentProviderProps>;
}

export const AromaInventoryCommentListSource: FC<IAromaInventoryCommentListSourceProps> = ({providerProps, ...props}) => {
	return <AromaInventoryCommentProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAromaInventoryCommentSource>>
			{...props}
		/>
	</AromaInventoryCommentProvider>;
}

export interface IAromaInventoryCommentSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaInventoryCommentSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaInventoryCommentSource>>;
	providerProps?: Partial<IAromaInventoryCommentProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaInventoryCommentSourceSelect: FC<IAromaInventoryCommentSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaInventoryCommentProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaInventoryCommentSource>> {...props}/>
				</AromaInventoryCommentProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AromaInventoryComment.title"}
					size={props.size}
					tooltip={"common.selection.AromaInventoryComment.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AromaInventoryCommentProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaInventoryCommentProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaInventoryCommentSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaInventoryCommentSource>>> {
}

export const AromaInventoryCommentSelectionProvider: FC<IAromaInventoryCommentSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaInventoryCommentSource>> {...props}/>;
};

export const useAromaInventoryCommentCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaInventoryCommentCountApiLink]);
};

export const useAromaInventoryCommentQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AromaInventoryCommentApiLink]),
		withCount && queryClient.invalidateQueries([AromaInventoryCommentCountApiLink]),
	]);
};

export const useAromaInventoryCommentOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaInventoryCommentSource>>();
export const useAromaInventoryCommentSelectionContext = () => useSelectionContext<ISourceItem<IAromaInventoryCommentSource>>();
