/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
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

export const AromaInventoryApiLink = "/api/inventory/aroma/query";
export const AromaInventoryCountApiLink = "/api/inventory/aroma/query/count";

export type IAromaInventoryQueryParams = undefined;

export const useAromaInventoryQuery = createQueryHook<ISourceQuery<IAromaInventorySource>, ISourceItem<IAromaInventorySource>[], IAromaInventoryQueryParams>(AromaInventoryApiLink, "post");
export const useAromaInventoryCountQuery = createQueryHook<ISourceQuery<IAromaInventorySource>, number, IAromaInventoryQueryParams>(AromaInventoryCountApiLink, "post");

export const useAromaInventorySource = () => useSourceContext<ISourceItem<IAromaInventorySource>>();

export interface IAromaInventorySourceContext extends ISourceContext<ISourceItem<IAromaInventorySource>> {
}

export interface IAromaInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaInventorySource>>> {
}

export const AromaInventorySourceConsumer: FC<IAromaInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaInventorySource>>> {
}

export const AromaInventoryProvider: FC<IAromaInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaInventorySource>>
		name={"AromaInventory"}
		useQuery={useAromaInventoryQuery}
		useCountQuery={useAromaInventoryCountQuery}
		{...props}
	/>;
};

export const toAromaInventoryLink = (queryParams?: IAromaInventoryQueryParams) => toLink(AromaInventoryApiLink, queryParams);
export const useAromaInventoryLink = () => toAromaInventoryLink;

export const useAromaInventoryPromise = createPromiseHook<ISourceQuery<IAromaInventorySource>, ISourceItem<IAromaInventorySource>, IAromaInventoryQueryParams>(AromaInventoryApiLink, "post");
export const AromaInventoryPromise = createPromise<ISourceQuery<IAromaInventorySource>, ISourceItem<IAromaInventorySource>, IAromaInventoryQueryParams>(AromaInventoryApiLink, "post");

export interface IAromaInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaInventorySource>>>> {
}

export const AromaInventoryFilterProvider: FC<IAromaInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaInventorySource>>> name={"AromaInventory"} {...props}/>;

export const useAromaInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaInventorySource>>>();
export const useAromaInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaInventorySource>>>();

export interface IAromaInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaInventorySource>>> {
}

export const AromaInventoryProviderFilter: FC<IAromaInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AromaInventory"}
/>;

export interface IAromaInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaInventorySource>>>> {
}

export const AromaInventoryOrderByProvider: FC<IAromaInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaInventorySource>>> name={"AromaInventory"} {...props}/>;

export const useAromaInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaInventorySource>>>();
export const useAromaInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaInventorySource>>>();

export interface IAromaInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaInventorySource>>, IQueryOrderBy<ISourceQuery<IAromaInventorySource>>, IAromaInventoryQueryParams>> {
}

export const AromaInventoryProviderControl: FC<IAromaInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAromaInventorySource>>, IQueryOrderBy<ISourceQuery<IAromaInventorySource>>> name={"AromaInventory"} {...props}/>;

export interface IAromaInventoryListSourceProps extends Partial<IListProps<ISourceItem<IAromaInventorySource>>> {
	providerProps?: Partial<IAromaInventoryProviderProps>;
}

export const AromaInventoryListSource: FC<IAromaInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <AromaInventoryProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAromaInventorySource>>
			{...props}
		/>
	</AromaInventoryProvider>;
};

export interface IAromaInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaInventorySource>>;
	providerProps?: Partial<IAromaInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaInventorySourceSelect: FC<IAromaInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaInventorySource>> {...props}/>
				</AromaInventoryProvider>
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
					<AromaInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaInventorySource>>> {
}

export const AromaInventorySelectionProvider: FC<IAromaInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaInventorySource>> {...props}/>;
};

export const useAromaInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaInventoryApiLink]);
};

export const useAromaInventoryCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaInventoryCountApiLink]);
};

export const useAromaInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaInventorySource>>();
export const useAromaInventorySelectionContext = () => useSelectionContext<ISourceItem<IAromaInventorySource>>();
