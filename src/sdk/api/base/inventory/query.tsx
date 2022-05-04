/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base/inventory/interface";
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

export const BasesInventoryApiLink = "/api/base/inventory/query";

export type IBasesInventoryQueryParams = undefined;

export const useBasesInventoryQuery = createQueryHook<IBaseInventoryQuery, IQueryResult<IBaseInventory>, IBasesInventoryQueryParams>(BasesInventoryApiLink, "post");

export const useBasesInventorySource = () => useSourceContext<IBaseInventory>()

export interface IBasesInventorySourceContext extends ISourceContext<IBaseInventory> {
}

export interface IBasesInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IBaseInventory>> {
}

export const BasesInventorySourceConsumer: FC<IBasesInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBasesInventorySourceProps extends Partial<ISourceProviderProps<IBaseInventory>> {
}

export const BasesInventorySource: FC<IBasesInventorySourceProps> = props => {
	return <SourceProvider<IBaseInventory>
		name={"BasesInventory"}
		useQuery={useBasesInventoryQuery}
		{...props}
	/>;
};

export const toBasesInventoryLink = (queryParams?: IBasesInventoryQueryParams) => toLink(BasesInventoryApiLink, queryParams);
export const useBasesInventoryLink = () => toBasesInventoryLink;

export const useBasesInventoryPromise = createPromiseHook<IBaseInventoryQuery, IBaseInventory, IBasesInventoryQueryParams>(BasesInventoryApiLink, "post");
export const BasesInventoryPromise = createPromise<IBaseInventoryQuery, IBaseInventory, IBasesInventoryQueryParams>(BasesInventoryApiLink, "post");

export interface IBasesInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBaseInventoryQuery>>> {
}

export const BasesInventoryFilterProvider: FC<IBasesInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBaseInventoryQuery>> name={"BasesInventory"} {...props}/>;

export const useBasesInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBaseInventoryQuery>>()
export const useBasesInventoryFilterContext = () => useFilterContext<IQueryFilter<IBaseInventoryQuery>>()

export interface IBasesInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBaseInventoryQuery>> {
}

export const BasesInventorySourceFilter: FC<IBasesInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.BasesInventory'}
/>;

export interface IBasesInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBaseInventoryQuery>>> {
}

export const BasesInventoryOrderByProvider: FC<IBasesInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBaseInventoryQuery>> name={"BasesInventory"} {...props}/>;

export const useBasesInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBaseInventoryQuery>>()
export const useBasesInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IBaseInventoryQuery>>()

export interface IBasesInventoryListSourceProps extends Partial<IListProps<IBaseInventory>> {
	sourceProps?: Partial<IBasesInventorySourceProps>;
}

export interface IBasesInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBaseInventoryQuery>, IQueryOrderBy<IBaseInventoryQuery>, IBasesInventoryQueryParams>> {
}

export const BasesInventorySourceControlProvider: FC<IBasesInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBaseInventoryQuery>, IQueryOrderBy<IBaseInventoryQuery>> name={"BasesInventory"} {...props}/>;

export const BasesInventoryListSource: FC<IBasesInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <BasesInventorySource
		{...sourceProps}
	>
		<List<IBaseInventory>
			{...props}
		/>
	</BasesInventorySource>;
}

export interface IBasesInventorySourceSelectProps extends IQuerySourceSelectProps<IBaseInventory> {
	toOption: IToOptionMapper<IBaseInventory>;
	sourceProps?: IBasesInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BasesInventorySourceSelect: FC<IBasesInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BasesInventorySource {...sourceProps}>
					<QuerySourceSelect<IBaseInventory> {...props}/>
				</BasesInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BasesInventory.title"}
					size={props.size}
					tooltip={"common.selection.BasesInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BasesInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BasesInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBasesInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IBaseInventory>> {
}

export const BasesInventorySelectionProvider: FC<IBasesInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IBaseInventory> {...props}/>;
};

export const useBasesInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BasesInventoryApiLink]);
};

export const useBasesInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IBaseInventory>();
export const useBasesInventorySelectionContext = () => useSelectionContext<IBaseInventory>();
