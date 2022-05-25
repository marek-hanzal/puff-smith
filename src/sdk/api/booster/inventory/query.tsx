/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
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

export const BoosterInventoryApiLink = "/api/booster/inventory/query";

export type IBoosterInventoryQueryParams = undefined;

export const useBoosterInventoryQuery = createQueryHook<ISourceQuery<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>[], IBoosterInventoryQueryParams>(BoosterInventoryApiLink, "post");

export const useBoosterInventorySource = () => useSourceContext<ISourceItem<IBoosterInventorySource>>();

export interface IBoosterInventorySourceContext extends ISourceContext<ISourceItem<IBoosterInventorySource>> {
}

export interface IBoosterInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBoosterInventorySource>>> {
}

export const BoosterInventorySourceConsumer: FC<IBoosterInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBoosterInventorySource>>> {
}

export const BoosterInventoryProvider: FC<IBoosterInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBoosterInventorySource>>
		name={"BoosterInventory"}
		useQuery={useBoosterInventoryQuery}
		{...props}
	/>;
};

export const toBoosterInventoryLink = (queryParams?: IBoosterInventoryQueryParams) => toLink(BoosterInventoryApiLink, queryParams);
export const useBoosterInventoryLink = () => toBoosterInventoryLink;

export const useBoosterInventoryPromise = createPromiseHook<ISourceQuery<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>, IBoosterInventoryQueryParams>(BoosterInventoryApiLink, "post");
export const BoosterInventoryPromise = createPromise<ISourceQuery<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>, IBoosterInventoryQueryParams>(BoosterInventoryApiLink, "post");

export interface IBoosterInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBoosterInventorySource>>>> {
}

export const BoosterInventoryFilterProvider: FC<IBoosterInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBoosterInventorySource>>> name={"BoosterInventory"} {...props}/>;

export const useBoosterInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBoosterInventorySource>>>();
export const useBoosterInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBoosterInventorySource>>>();

export interface IBoosterInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBoosterInventorySource>>> {
}

export const BoosterInventoryProviderFilter: FC<IBoosterInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BoosterInventory"}
/>;

export interface IBoosterInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBoosterInventorySource>>>> {
}

export const BoosterInventoryOrderByProvider: FC<IBoosterInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBoosterInventorySource>>> name={"BoosterInventory"} {...props}/>;

export const useBoosterInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterInventorySource>>>();
export const useBoosterInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterInventorySource>>>();

export interface IBoosterInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBoosterInventorySource>>, IQueryOrderBy<ISourceQuery<IBoosterInventorySource>>, IBoosterInventoryQueryParams>> {
}

export const BoosterInventoryProviderControl: FC<IBoosterInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IBoosterInventorySource>>, IQueryOrderBy<ISourceQuery<IBoosterInventorySource>>> name={"BoosterInventory"} {...props}/>;

export interface IBoosterInventoryListSourceProps extends Partial<IListProps<ISourceItem<IBoosterInventorySource>>> {
	providerProps?: Partial<IBoosterInventoryProviderProps>;
}

export const BoosterInventoryListSource: FC<IBoosterInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <BoosterInventoryProvider
		{...providerProps}
	>
		<List<ISourceItem<IBoosterInventorySource>>
			{...props}
		/>
	</BoosterInventoryProvider>;
}

export interface IBoosterInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBoosterInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IBoosterInventorySource>>;
	providerProps?: Partial<IBoosterInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterInventorySourceSelect: FC<IBoosterInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBoosterInventorySource>> {...props}/>
				</BoosterInventoryProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BoosterInventory.title"}
					size={props.size}
					tooltip={"common.selection.BoosterInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BoosterInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoosterInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBoosterInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBoosterInventorySource>>> {
}

export const BoosterInventorySelectionProvider: FC<IBoosterInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBoosterInventorySource>> {...props}/>;
}

export const useBoosterInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterInventoryApiLink]);
};

export const useBoosterInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBoosterInventorySource>>();
export const useBoosterInventorySelectionContext = () => useSelectionContext<ISourceItem<IBoosterInventorySource>>();
