/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventory, IAromaInventoryQuery} from "@/puff-smith/service/aroma/inventory/interface";
import {SelectOutlined} from "@ant-design/icons";
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

export const AromaInventoryApiLink = "/api/aroma/inventory/query";

export type IAromaInventoryQueryParams = undefined;

export const useAromaInventoryQuery = createQueryHook<IAromaInventoryQuery, IQueryResult<IAromaInventory>, IAromaInventoryQueryParams>(AromaInventoryApiLink, "post");

export const useAromaInventorySource = () => useSourceContext<IAromaInventory>();

export interface IAromaInventorySourceContext extends ISourceContext<IAromaInventory> {
}

export interface IAromaInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IAromaInventory>> {
}

export const AromaInventorySourceConsumer: FC<IAromaInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaInventorySourceProps extends Partial<ISourceProviderProps<IAromaInventory>> {
}

export const AromaInventorySource: FC<IAromaInventorySourceProps> = props => {
	return <SourceProvider<IAromaInventory>
		name={"AromaInventory"}
		useQuery={useAromaInventoryQuery}
		{...props}
	/>;
};

export const toAromaInventoryLink = (queryParams?: IAromaInventoryQueryParams) => toLink(AromaInventoryApiLink, queryParams);
export const useAromaInventoryLink = () => toAromaInventoryLink;

export const useAromaInventoryPromise = createPromiseHook<IAromaInventoryQuery, IAromaInventory, IAromaInventoryQueryParams>(AromaInventoryApiLink, "post");
export const AromaInventoryPromise = createPromise<IAromaInventoryQuery, IAromaInventory, IAromaInventoryQueryParams>(AromaInventoryApiLink, "post");

export interface IAromaInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaInventoryQuery>>> {
}

export const AromaInventoryFilterProvider: FC<IAromaInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaInventoryQuery>> name={"AromaInventory"} {...props}/>;

export const useAromaInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaInventoryQuery>>();
export const useAromaInventoryFilterContext = () => useFilterContext<IQueryFilter<IAromaInventoryQuery>>();

export interface IAromaInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaInventoryQuery>> {
}

export const AromaInventorySourceFilter: FC<IAromaInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromaInventory"}
/>;

export interface IAromaInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaInventoryQuery>>> {
}

export const AromaInventoryOrderByProvider: FC<IAromaInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaInventoryQuery>> name={"AromaInventory"} {...props}/>;

export const useAromaInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaInventoryQuery>>();
export const useAromaInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaInventoryQuery>>();

export interface IAromaInventoryListSourceProps extends Partial<IListProps<IAromaInventory>> {
	sourceProps?: Partial<IAromaInventorySourceProps>;
}

export interface IAromaInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaInventoryQuery>, IQueryOrderBy<IAromaInventoryQuery>, IAromaInventoryQueryParams>> {
}

export const AromaInventorySourceControlProvider: FC<IAromaInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaInventoryQuery>, IQueryOrderBy<IAromaInventoryQuery>> name={"AromaInventory"} {...props}/>;

export const AromaInventoryListSource: FC<IAromaInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <AromaInventorySource
		{...sourceProps}
	>
		<List<IAromaInventory>
			{...props}
		/>
	</AromaInventorySource>;
}

export interface IAromaInventorySourceSelectProps extends IQuerySourceSelectProps<IAromaInventory> {
	toOption: IToOptionMapper<IAromaInventory>;
	sourceProps?: IAromaInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaInventorySourceSelect: FC<IAromaInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaInventorySource {...sourceProps}>
					<QuerySourceSelect<IAromaInventory> {...props}/>
				</AromaInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AromaInventory.title"}
					size={props.size}
					tooltip={"common.selection.AromaInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AromaInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IAromaInventory>> {
}

export const AromaInventorySelectionProvider: FC<IAromaInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IAromaInventory> {...props}/>;
}

export const useAromaInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaInventoryApiLink]);
};

export const useAromaInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IAromaInventory>();
export const useAromaInventorySelectionContext = () => useSelectionContext<IAromaInventory>();
