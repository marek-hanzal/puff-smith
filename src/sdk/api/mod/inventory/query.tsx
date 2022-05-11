/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventory, IModInventoryQuery} from "@/puff-smith/service/mod/inventory/interface";
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

export const ModInventoryApiLink = "/api/mod/inventory/query";

export type IModInventoryQueryParams = undefined;

export const useModInventoryQuery = createQueryHook<IModInventoryQuery, IQueryResult<IModInventory>, IModInventoryQueryParams>(ModInventoryApiLink, "post");

export const useModInventorySource = () => useSourceContext<IModInventory>();

export interface IModInventorySourceContext extends ISourceContext<IModInventory> {
}

export interface IModInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IModInventory>> {
}

export const ModInventorySourceConsumer: FC<IModInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModInventorySourceProps extends Partial<ISourceProviderProps<IModInventory>> {
}

export const ModInventorySource: FC<IModInventorySourceProps> = props => {
	return <SourceProvider<IModInventory>
		name={"ModInventory"}
		useQuery={useModInventoryQuery}
		{...props}
	/>;
};

export const toModInventoryLink = (queryParams?: IModInventoryQueryParams) => toLink(ModInventoryApiLink, queryParams);
export const useModInventoryLink = () => toModInventoryLink;

export const useModInventoryPromise = createPromiseHook<IModInventoryQuery, IModInventory, IModInventoryQueryParams>(ModInventoryApiLink, "post");
export const ModInventoryPromise = createPromise<IModInventoryQuery, IModInventory, IModInventoryQueryParams>(ModInventoryApiLink, "post");

export interface IModInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModInventoryQuery>>> {
}

export const ModInventoryFilterProvider: FC<IModInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModInventoryQuery>> name={"ModInventory"} {...props}/>;

export const useModInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModInventoryQuery>>();
export const useModInventoryFilterContext = () => useFilterContext<IQueryFilter<IModInventoryQuery>>();

export interface IModInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModInventoryQuery>> {
}

export const ModInventorySourceFilter: FC<IModInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.ModInventory"}
/>;

export interface IModInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IModInventoryQuery>>> {
}

export const ModInventoryOrderByProvider: FC<IModInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IModInventoryQuery>> name={"ModInventory"} {...props}/>;

export const useModInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IModInventoryQuery>>();
export const useModInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IModInventoryQuery>>();

export interface IModInventoryListSourceProps extends Partial<IListProps<IModInventory>> {
	sourceProps?: Partial<IModInventorySourceProps>;
}

export interface IModInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModInventoryQuery>, IQueryOrderBy<IModInventoryQuery>, IModInventoryQueryParams>> {
}

export const ModInventorySourceControlProvider: FC<IModInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModInventoryQuery>, IQueryOrderBy<IModInventoryQuery>> name={"ModInventory"} {...props}/>;

export const ModInventoryListSource: FC<IModInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <ModInventorySource
		{...sourceProps}
	>
		<List<IModInventory>
			{...props}
		/>
	</ModInventorySource>;
}

export interface IModInventorySourceSelectProps extends IQuerySourceSelectProps<IModInventory> {
	toOption: IToOptionMapper<IModInventory>;
	sourceProps?: IModInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModInventorySourceSelect: FC<IModInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModInventorySource {...sourceProps}>
					<QuerySourceSelect<IModInventory> {...props}/>
				</ModInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.ModInventory.title"}
					size={props.size}
					tooltip={"common.selection.ModInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<ModInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IModInventory>> {
}

export const ModInventorySelectionProvider: FC<IModInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IModInventory> {...props}/>;
}

export const useModInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModInventoryApiLink]);
};

export const useModInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IModInventory>();
export const useModInventorySelectionContext = () => useSelectionContext<IModInventory>();
