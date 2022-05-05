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

export const ModsInventoryApiLink = "/api/mod/inventory/query";

export type IModsInventoryQueryParams = undefined;

export const useModsInventoryQuery = createQueryHook<IModInventoryQuery, IQueryResult<IModInventory>, IModsInventoryQueryParams>(ModsInventoryApiLink, "post");

export const useModsInventorySource = () => useSourceContext<IModInventory>()

export interface IModsInventorySourceContext extends ISourceContext<IModInventory> {
}

export interface IModsInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IModInventory>> {
}

export const ModsInventorySourceConsumer: FC<IModsInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModsInventorySourceProps extends Partial<ISourceProviderProps<IModInventory>> {
}

export const ModsInventorySource: FC<IModsInventorySourceProps> = props => {
	return <SourceProvider<IModInventory>
		name={"ModsInventory"}
		useQuery={useModsInventoryQuery}
		{...props}
	/>;
};

export const toModsInventoryLink = (queryParams?: IModsInventoryQueryParams) => toLink(ModsInventoryApiLink, queryParams);
export const useModsInventoryLink = () => toModsInventoryLink;

export const useModsInventoryPromise = createPromiseHook<IModInventoryQuery, IModInventory, IModsInventoryQueryParams>(ModsInventoryApiLink, "post");
export const ModsInventoryPromise = createPromise<IModInventoryQuery, IModInventory, IModsInventoryQueryParams>(ModsInventoryApiLink, "post");

export interface IModsInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModInventoryQuery>>> {
}

export const ModsInventoryFilterProvider: FC<IModsInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModInventoryQuery>> name={"ModsInventory"} {...props}/>;

export const useModsInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModInventoryQuery>>()
export const useModsInventoryFilterContext = () => useFilterContext<IQueryFilter<IModInventoryQuery>>()

export interface IModsInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModInventoryQuery>> {
}

export const ModsInventorySourceFilter: FC<IModsInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.ModsInventory'}
/>;

export interface IModsInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IModInventoryQuery>>> {
}

export const ModsInventoryOrderByProvider: FC<IModsInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IModInventoryQuery>> name={"ModsInventory"} {...props}/>;

export const useModsInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IModInventoryQuery>>()
export const useModsInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IModInventoryQuery>>()

export interface IModsInventoryListSourceProps extends Partial<IListProps<IModInventory>> {
	sourceProps?: Partial<IModsInventorySourceProps>;
}

export interface IModsInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModInventoryQuery>, IQueryOrderBy<IModInventoryQuery>, IModsInventoryQueryParams>> {
}

export const ModsInventorySourceControlProvider: FC<IModsInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModInventoryQuery>, IQueryOrderBy<IModInventoryQuery>> name={"ModsInventory"} {...props}/>;

export const ModsInventoryListSource: FC<IModsInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <ModsInventorySource
		{...sourceProps}
	>
		<List<IModInventory>
			{...props}
		/>
	</ModsInventorySource>;
}

export interface IModsInventorySourceSelectProps extends IQuerySourceSelectProps<IModInventory> {
	toOption: IToOptionMapper<IModInventory>;
	sourceProps?: IModsInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModsInventorySourceSelect: FC<IModsInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModsInventorySource {...sourceProps}>
					<QuerySourceSelect<IModInventory> {...props}/>
				</ModsInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.ModsInventory.title"}
					size={props.size}
					tooltip={"common.selection.ModsInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<ModsInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModsInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModsInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IModInventory>> {
}

export const ModsInventorySelectionProvider: FC<IModsInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IModInventory> {...props}/>;
}

export const useModsInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModsInventoryApiLink]);
};

export const useModsInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IModInventory>();
export const useModsInventorySelectionContext = () => useSelectionContext<IModInventory>();
