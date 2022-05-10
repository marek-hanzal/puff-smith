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

export const BoosterInventoryApiLink = "/api/booster/inventory/query";

export type IBoosterInventoryQueryParams = undefined;

export const useBoosterInventoryQuery = createQueryHook<IBoosterInventoryQuery, IQueryResult<IBoosterInventory>, IBoosterInventoryQueryParams>(BoosterInventoryApiLink, "post");

export const useBoosterInventorySource = () => useSourceContext<IBoosterInventory>();

export interface IBoosterInventorySourceContext extends ISourceContext<IBoosterInventory> {
}

export interface IBoosterInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IBoosterInventory>> {
}

export const BoosterInventorySourceConsumer: FC<IBoosterInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterInventorySourceProps extends Partial<ISourceProviderProps<IBoosterInventory>> {
}

export const BoosterInventorySource: FC<IBoosterInventorySourceProps> = props => {
	return <SourceProvider<IBoosterInventory>
		name={"BoosterInventory"}
		useQuery={useBoosterInventoryQuery}
		{...props}
	/>;
};

export const toBoosterInventoryLink = (queryParams?: IBoosterInventoryQueryParams) => toLink(BoosterInventoryApiLink, queryParams);
export const useBoosterInventoryLink = () => toBoosterInventoryLink;

export const useBoosterInventoryPromise = createPromiseHook<IBoosterInventoryQuery, IBoosterInventory, IBoosterInventoryQueryParams>(BoosterInventoryApiLink, "post");
export const BoosterInventoryPromise = createPromise<IBoosterInventoryQuery, IBoosterInventory, IBoosterInventoryQueryParams>(BoosterInventoryApiLink, "post");

export interface IBoosterInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterInventoryQuery>>> {
}

export const BoosterInventoryFilterProvider: FC<IBoosterInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterInventoryQuery>> name={"BoosterInventory"} {...props}/>;

export const useBoosterInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterInventoryQuery>>();
export const useBoosterInventoryFilterContext = () => useFilterContext<IQueryFilter<IBoosterInventoryQuery>>();

export interface IBoosterInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterInventoryQuery>> {
}

export const BoosterInventorySourceFilter: FC<IBoosterInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BoosterInventory"}
/>;

export interface IBoosterInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterInventoryQuery>>> {
}

export const BoosterInventoryOrderByProvider: FC<IBoosterInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterInventoryQuery>> name={"BoosterInventory"} {...props}/>;

export const useBoosterInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterInventoryQuery>>();
export const useBoosterInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterInventoryQuery>>();

export interface IBoosterInventoryListSourceProps extends Partial<IListProps<IBoosterInventory>> {
	sourceProps?: Partial<IBoosterInventorySourceProps>;
}

export interface IBoosterInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterInventoryQuery>, IQueryOrderBy<IBoosterInventoryQuery>, IBoosterInventoryQueryParams>> {
}

export const BoosterInventorySourceControlProvider: FC<IBoosterInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IBoosterInventoryQuery>, IQueryOrderBy<IBoosterInventoryQuery>> name={"BoosterInventory"} {...props}/>;

export const BoosterInventoryListSource: FC<IBoosterInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <BoosterInventorySource
		{...sourceProps}
	>
		<List<IBoosterInventory>
			{...props}
		/>
	</BoosterInventorySource>;
};

export interface IBoosterInventorySourceSelectProps extends IQuerySourceSelectProps<IBoosterInventory> {
	toOption: IToOptionMapper<IBoosterInventory>;
	sourceProps?: IBoosterInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterInventorySourceSelect: FC<IBoosterInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterInventorySource {...sourceProps}>
					<QuerySourceSelect<IBoosterInventory> {...props}/>
				</BoosterInventorySource>
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
					<BoosterInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoosterInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBoosterInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IBoosterInventory>> {
}

export const BoosterInventorySelectionProvider: FC<IBoosterInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IBoosterInventory> {...props}/>;
};

export const useBoosterInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterInventoryApiLink]);
};

export const useBoosterInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IBoosterInventory>();
export const useBoosterInventorySelectionContext = () => useSelectionContext<IBoosterInventory>();
