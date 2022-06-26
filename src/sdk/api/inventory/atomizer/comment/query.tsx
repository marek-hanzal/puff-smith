/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/interface";
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

export const AtomizerInventoryCommentApiLink = "/api/inventory/atomizer/comment/query";
export const AtomizerInventoryCommentCountApiLink = "/api/inventory/atomizer/comment/query/count";

export type IAtomizerInventoryCommentQueryParams = any;

export const useAtomizerInventoryCommentQuery = createQueryHook<ISourceQuery<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>[], IAtomizerInventoryCommentQueryParams>(AtomizerInventoryCommentApiLink, "post");
export const useAtomizerInventoryCommentCountQuery = createQueryHook<ISourceQuery<IAtomizerInventoryCommentSource>, number, IAtomizerInventoryCommentQueryParams>(AtomizerInventoryCommentCountApiLink, "post");

export const useAtomizerInventoryCommentSource = () => useSourceContext<ISourceItem<IAtomizerInventoryCommentSource>>();

export interface IAtomizerInventoryCommentSourceContext extends ISourceContext<ISourceItem<IAtomizerInventoryCommentSource>> {
}

export interface IAtomizerInventoryCommentSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAtomizerInventoryCommentSource>>> {
}

export const AtomizerInventoryCommentSourceConsumer: FC<IAtomizerInventoryCommentSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerInventoryCommentProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAtomizerInventoryCommentSource>>> {
}

export const AtomizerInventoryCommentProvider: FC<IAtomizerInventoryCommentProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAtomizerInventoryCommentSource>>
		name={"AtomizerInventoryComment"}
		useQuery={useAtomizerInventoryCommentQuery}
		useCountQuery={useAtomizerInventoryCommentCountQuery}
		{...props}
	/>;
};

export const toAtomizerInventoryCommentLink = (queryParams?: IAtomizerInventoryCommentQueryParams) => toLink(AtomizerInventoryCommentApiLink, queryParams);
export const useAtomizerInventoryCommentLink = () => toAtomizerInventoryCommentLink;

export const useAtomizerInventoryCommentPromise = createPromiseHook<ISourceQuery<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>, IAtomizerInventoryCommentQueryParams>(AtomizerInventoryCommentApiLink, "post");
export const AtomizerInventoryCommentPromise = createPromise<ISourceQuery<IAtomizerInventoryCommentSource>, ISourceItem<IAtomizerInventoryCommentSource>, IAtomizerInventoryCommentQueryParams>(AtomizerInventoryCommentApiLink, "post");

export interface IAtomizerInventoryCommentFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAtomizerInventoryCommentSource>>>> {
}

export const AtomizerInventoryCommentFilterProvider: FC<IAtomizerInventoryCommentFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAtomizerInventoryCommentSource>>> name={"AtomizerInventoryComment"} {...props}/>;

export const useAtomizerInventoryCommentOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAtomizerInventoryCommentSource>>>();
export const useAtomizerInventoryCommentFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAtomizerInventoryCommentSource>>>();

export interface IAtomizerInventoryCommentProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAtomizerInventoryCommentSource>>> {
}

export const AtomizerInventoryCommentProviderFilter: FC<IAtomizerInventoryCommentProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizerInventoryComment"}
/>;

export interface IAtomizerInventoryCommentOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAtomizerInventoryCommentSource>>>> {
}

export const AtomizerInventoryCommentOrderByProvider: FC<IAtomizerInventoryCommentOrderByProviderProps> = props =>
	<OrderByProvider<IQueryOrderBy<ISourceQuery<IAtomizerInventoryCommentSource>>> name={"AtomizerInventoryComment"} {...props}/>;

export const useAtomizerInventoryCommentOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerInventoryCommentSource>>>();
export const useAtomizerInventoryCommentOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerInventoryCommentSource>>>();

export interface IAtomizerInventoryCommentProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAtomizerInventoryCommentSource>>, IQueryOrderBy<ISourceQuery<IAtomizerInventoryCommentSource>>, IAtomizerInventoryCommentQueryParams>> {
}

export const AtomizerInventoryCommentProviderControl: FC<IAtomizerInventoryCommentProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAtomizerInventoryCommentSource>>, IQueryOrderBy<ISourceQuery<IAtomizerInventoryCommentSource>>> name={"AtomizerInventoryComment"} {...props}/>;

export interface IAtomizerInventoryCommentListSourceProps extends Partial<IListProps<ISourceItem<IAtomizerInventoryCommentSource>>> {
	providerProps?: Partial<IAtomizerInventoryCommentProviderProps>;
}

export const AtomizerInventoryCommentListSource: FC<IAtomizerInventoryCommentListSourceProps> = ({providerProps, ...props}) => {
	return <AtomizerInventoryCommentProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAtomizerInventoryCommentSource>>
			{...props}
		/>
	</AtomizerInventoryCommentProvider>;
}

export interface IAtomizerInventoryCommentSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAtomizerInventoryCommentSource>> {
	toOption: IToOptionMapper<ISourceItem<IAtomizerInventoryCommentSource>>;
	providerProps?: Partial<IAtomizerInventoryCommentProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerInventoryCommentSourceSelect: FC<IAtomizerInventoryCommentSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerInventoryCommentProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAtomizerInventoryCommentSource>> {...props}/>
				</AtomizerInventoryCommentProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AtomizerInventoryComment.title"}
					size={props.size}
					tooltip={"common.selection.AtomizerInventoryComment.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AtomizerInventoryCommentProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerInventoryCommentProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerInventoryCommentSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAtomizerInventoryCommentSource>>> {
}

export const AtomizerInventoryCommentSelectionProvider: FC<IAtomizerInventoryCommentSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAtomizerInventoryCommentSource>> {...props}/>;
}

export const useAtomizerInventoryCommentCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerInventoryCommentCountApiLink]);
};

export const useAtomizerInventoryCommentQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AtomizerInventoryCommentApiLink]),
		withCount && queryClient.invalidateQueries([AtomizerInventoryCommentCountApiLink]),
	]);
};

export const useAtomizerInventoryCommentOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAtomizerInventoryCommentSource>>();
export const useAtomizerInventoryCommentSelectionContext = () => useSelectionContext<ISourceItem<IAtomizerInventoryCommentSource>>();
