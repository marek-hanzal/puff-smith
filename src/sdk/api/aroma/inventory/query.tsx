/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma";
import {ReadOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const AromasInventoryApiLink = "/api/aroma/inventory/query";

export type IAromasInventoryQueryParams = undefined;

export const useAromasInventoryQuery = createQueryHook<IAromaInventoryQuery, IQueryResult<IAromaInventory>, IAromasInventoryQueryParams>(AromasInventoryApiLink, "post");

export const useAromasInventorySource = () => useSourceContext<IAromaInventory>();

export interface IAromasInventorySourceContext extends ISourceContext<IAromaInventory> {
}

export interface IAromasInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IAromaInventory>> {
}

export const AromasInventorySourceConsumer: FC<IAromasInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromasInventorySourceProps extends Partial<ISourceProviderProps<IAromaInventory>> {
}

export const AromasInventorySource: FC<IAromasInventorySourceProps> = props => {
	return <SourceProvider<IAromaInventory>
		name={"AromasInventory"}
		useQuery={useAromasInventoryQuery}
		{...props}
	/>;
};

export const toAromasInventoryLink = (queryParams?: IAromasInventoryQueryParams) => toLink(AromasInventoryApiLink, queryParams);
export const useAromasInventoryLink = () => toAromasInventoryLink;

export const useAromasInventoryPromise = createPromiseHook<IAromaInventoryQuery, IAromaInventory, IAromasInventoryQueryParams>(AromasInventoryApiLink, "post");
export const AromasInventoryPromise = createPromise<IAromaInventoryQuery, IAromaInventory, IAromasInventoryQueryParams>(AromasInventoryApiLink, "post");

export interface IAromasInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaInventoryQuery>>> {
}

export const AromasInventoryFilterProvider: FC<IAromasInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaInventoryQuery>> name={"AromasInventory"} {...props}/>;

export const useAromasInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaInventoryQuery>>();
export const useAromasInventoryFilterContext = () => useFilterContext<IQueryFilter<IAromaInventoryQuery>>();

export interface IAromasInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaInventoryQuery>> {
}

export const AromasInventorySourceFilter: FC<IAromasInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromasInventory"}
/>;

export interface IAromasInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaInventoryQuery>>> {
}

export const AromasInventoryOrderByProvider: FC<IAromasInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaInventoryQuery>> name={"AromasInventory"} {...props}/>;

export const useAromasInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaInventoryQuery>>();
export const useAromasInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaInventoryQuery>>();

export interface IAromasInventoryListSourceProps extends Partial<IListProps<IAromaInventory>> {
	sourceProps?: Partial<IAromasInventorySourceProps>;
}

export interface IAromasInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaInventoryQuery>, IQueryOrderBy<IAromaInventoryQuery>, IAromasInventoryQueryParams>> {
}

export const AromasInventorySourceControlProvider: FC<IAromasInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IAromaInventoryQuery>, IQueryOrderBy<IAromaInventoryQuery>> name={"AromasInventory"} {...props}/>;

export const AromasInventoryListSource: FC<IAromasInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <AromasInventorySource
		{...sourceProps}
	>
		<List<IAromaInventory>
			{...props}
		/>
	</AromasInventorySource>;
}

export interface IAromasInventorySourceSelectProps extends IQuerySourceSelectProps<IAromaInventory> {
	toOption: IToOptionMapper<IAromaInventory>;
	sourceProps?: IAromasInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromasInventorySourceSelect: FC<IAromasInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromasInventorySource {...sourceProps}>
					<QuerySourceSelect<IAromaInventory> {...props}/>
				</AromasInventorySource>
			</Col>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.AromasInventory.title"}
					tooltip={"common.selection.AromasInventory.title.tooltip"}
					width={800}
				>
					<AromasInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromasInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useAromasInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromasInventoryApiLink]);
};

export const useAromasInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IAromaInventory>();
export const useAromasInventorySelectionContext = () => useSelectionContext<IAromaInventory>();
