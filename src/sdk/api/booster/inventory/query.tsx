/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventory, IBoosterInventoryQuery} from "@/puff-smith/service/booster/inventory/interface";
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

export const BoostersInventoryApiLink = "/api/booster/inventory/query";

export type IBoostersInventoryQueryParams = undefined;

export const useBoostersInventoryQuery = createQueryHook<IBoosterInventoryQuery, IQueryResult<IBoosterInventory>, IBoostersInventoryQueryParams>(BoostersInventoryApiLink, "post");

export const useBoostersInventorySource = () => useSourceContext<IBoosterInventory>()

export interface IBoostersInventorySourceContext extends ISourceContext<IBoosterInventory> {
}

export interface IBoostersInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IBoosterInventory>> {
}

export const BoostersInventorySourceConsumer: FC<IBoostersInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoostersInventorySourceProps extends Partial<ISourceProviderProps<IBoosterInventory>> {
}

export const BoostersInventorySource: FC<IBoostersInventorySourceProps> = props => {
	return <SourceProvider<IBoosterInventory>
		name={"BoostersInventory"}
		useQuery={useBoostersInventoryQuery}
		{...props}
	/>;
};

export const toBoostersInventoryLink = (queryParams?: IBoostersInventoryQueryParams) => toLink(BoostersInventoryApiLink, queryParams);
export const useBoostersInventoryLink = () => toBoostersInventoryLink;

export const useBoostersInventoryPromise = createPromiseHook<IBoosterInventoryQuery, IBoosterInventory, IBoostersInventoryQueryParams>(BoostersInventoryApiLink, "post");
export const BoostersInventoryPromise = createPromise<IBoosterInventoryQuery, IBoosterInventory, IBoostersInventoryQueryParams>(BoostersInventoryApiLink, "post");

export interface IBoostersInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterInventoryQuery>>> {
}

export const BoostersInventoryFilterProvider: FC<IBoostersInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterInventoryQuery>> name={"BoostersInventory"} {...props}/>;

export const useBoostersInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterInventoryQuery>>()
export const useBoostersInventoryFilterContext = () => useFilterContext<IQueryFilter<IBoosterInventoryQuery>>()

export interface IBoostersInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterInventoryQuery>> {
}

export const BoostersInventorySourceFilter: FC<IBoostersInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.BoostersInventory'}
/>;

export interface IBoostersInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterInventoryQuery>>> {
}

export const BoostersInventoryOrderByProvider: FC<IBoostersInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterInventoryQuery>> name={"BoostersInventory"} {...props}/>;

export const useBoostersInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterInventoryQuery>>()
export const useBoostersInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterInventoryQuery>>()

export interface IBoostersInventoryListSourceProps extends Partial<IListProps<IBoosterInventory>> {
	sourceProps?: Partial<IBoostersInventorySourceProps>;
}

export interface IBoostersInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterInventoryQuery>, IQueryOrderBy<IBoosterInventoryQuery>, IBoostersInventoryQueryParams>> {
}

export const BoostersInventorySourceControlProvider: FC<IBoostersInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterInventoryQuery>, IQueryOrderBy<IBoosterInventoryQuery>> name={"BoostersInventory"} {...props}/>;

export const BoostersInventoryListSource: FC<IBoostersInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <BoostersInventorySource
		{...sourceProps}
	>
		<List<IBoosterInventory>
			{...props}
		/>
	</BoostersInventorySource>;
}

export interface IBoostersInventorySourceSelectProps extends IQuerySourceSelectProps<IBoosterInventory> {
	toOption: IToOptionMapper<IBoosterInventory>;
	sourceProps?: IBoostersInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoostersInventorySourceSelect: FC<IBoostersInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoostersInventorySource {...sourceProps}>
					<QuerySourceSelect<IBoosterInventory> {...props}/>
				</BoostersInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BoostersInventory.title"}
					size={props.size}
					tooltip={"common.selection.BoostersInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BoostersInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoostersInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBoostersInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IBoosterInventory>> {
}

export const BoostersInventorySelectionProvider: FC<IBoostersInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IBoosterInventory> {...props}/>;
};

export const useBoostersInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoostersInventoryApiLink]);
};

export const useBoostersInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IBoosterInventory>();
export const useBoostersInventorySelectionContext = () => useSelectionContext<IBoosterInventory>();
