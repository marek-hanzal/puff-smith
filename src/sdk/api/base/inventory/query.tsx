/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventory, IBaseInventoryQuery} from "@/puff-smith/service/base/inventory/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const BaseInventoryApiLink = "/api/base/inventory/query";

export type IBaseInventoryQueryParams = undefined;

export const useBaseInventoryQuery = createQueryHook<IBaseInventoryQuery, IBaseInventory[], IBaseInventoryQueryParams>(BaseInventoryApiLink, "post");

export const useBaseInventorySource = () => useSourceContext<IBaseInventory>();

export interface IBaseInventorySourceContext extends ISourceContext<IBaseInventory> {
}

export interface IBaseInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IBaseInventory>> {
}

export const BaseInventorySourceConsumer: FC<IBaseInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseInventorySourceProps extends Partial<ISourceProviderProps<IBaseInventory>> {
}

export const BaseInventorySource: FC<IBaseInventorySourceProps> = props => {
	return <SourceProvider<IBaseInventory>
		name={"BaseInventory"}
		useQuery={useBaseInventoryQuery}
		{...props}
	/>;
};

export const toBaseInventoryLink = (queryParams?: IBaseInventoryQueryParams) => toLink(BaseInventoryApiLink, queryParams);
export const useBaseInventoryLink = () => toBaseInventoryLink;

export const useBaseInventoryPromise = createPromiseHook<IBaseInventoryQuery, IBaseInventory, IBaseInventoryQueryParams>(BaseInventoryApiLink, "post");
export const BaseInventoryPromise = createPromise<IBaseInventoryQuery, IBaseInventory, IBaseInventoryQueryParams>(BaseInventoryApiLink, "post");

export interface IBaseInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBaseInventoryQuery>>> {
}

export const BaseInventoryFilterProvider: FC<IBaseInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBaseInventoryQuery>> name={"BaseInventory"} {...props}/>;

export const useBaseInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBaseInventoryQuery>>();
export const useBaseInventoryFilterContext = () => useFilterContext<IQueryFilter<IBaseInventoryQuery>>();

export interface IBaseInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBaseInventoryQuery>> {
}

export const BaseInventorySourceFilter: FC<IBaseInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BaseInventory"}
/>;

export interface IBaseInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBaseInventoryQuery>>> {
}

export const BaseInventoryOrderByProvider: FC<IBaseInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBaseInventoryQuery>> name={"BaseInventory"} {...props}/>;

export const useBaseInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBaseInventoryQuery>>();
export const useBaseInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IBaseInventoryQuery>>();

export interface IBaseInventoryListSourceProps extends Partial<IListProps<IBaseInventory>> {
	sourceProps?: Partial<IBaseInventorySourceProps>;
}

export interface IBaseInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBaseInventoryQuery>, IQueryOrderBy<IBaseInventoryQuery>, IBaseInventoryQueryParams>> {
}

export const BaseInventorySourceControlProvider: FC<IBaseInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBaseInventoryQuery>, IQueryOrderBy<IBaseInventoryQuery>> name={"BaseInventory"} {...props}/>;

export const BaseInventoryListSource: FC<IBaseInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <BaseInventorySource
		{...sourceProps}
	>
		<List<IBaseInventory>
			{...props}
		/>
	</BaseInventorySource>;
}

export interface IBaseInventorySourceSelectProps extends IQuerySourceSelectProps<IBaseInventory> {
	toOption: IToOptionMapper<IBaseInventory>;
	sourceProps?: IBaseInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseInventorySourceSelect: FC<IBaseInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseInventorySource {...sourceProps}>
					<QuerySourceSelect<IBaseInventory> {...props}/>
				</BaseInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BaseInventory.title"}
					size={props.size}
					tooltip={"common.selection.BaseInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BaseInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BaseInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBaseInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IBaseInventory>> {
}

export const BaseInventorySelectionProvider: FC<IBaseInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IBaseInventory> {...props}/>;
}

export const useBaseInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseInventoryApiLink]);
};

export const useBaseInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IBaseInventory>();
export const useBaseInventorySelectionContext = () => useSelectionContext<IBaseInventory>();
