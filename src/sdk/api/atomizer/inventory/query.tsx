/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer/inventory/interface";
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

export const AtomizersInventoryApiLink = "/api/atomizer/inventory/query";

export type IAtomizersInventoryQueryParams = undefined;

export const useAtomizersInventoryQuery = createQueryHook<IAtomizerInventoryQuery, IQueryResult<IAtomizerInventory>, IAtomizersInventoryQueryParams>(AtomizersInventoryApiLink, "post");

export const useAtomizersInventorySource = () => useSourceContext<IAtomizerInventory>()

export interface IAtomizersInventorySourceContext extends ISourceContext<IAtomizerInventory> {
}

export interface IAtomizersInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizerInventory>> {
}

export const AtomizersInventorySourceConsumer: FC<IAtomizersInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizersInventorySourceProps extends Partial<ISourceProviderProps<IAtomizerInventory>> {
}

export const AtomizersInventorySource: FC<IAtomizersInventorySourceProps> = props => {
	return <SourceProvider<IAtomizerInventory>
		name={"AtomizersInventory"}
		useQuery={useAtomizersInventoryQuery}
		{...props}
	/>;
};

export const toAtomizersInventoryLink = (queryParams?: IAtomizersInventoryQueryParams) => toLink(AtomizersInventoryApiLink, queryParams);
export const useAtomizersInventoryLink = () => toAtomizersInventoryLink;

export const useAtomizersInventoryPromise = createPromiseHook<IAtomizerInventoryQuery, IAtomizerInventory, IAtomizersInventoryQueryParams>(AtomizersInventoryApiLink, "post");
export const AtomizersInventoryPromise = createPromise<IAtomizerInventoryQuery, IAtomizerInventory, IAtomizersInventoryQueryParams>(AtomizersInventoryApiLink, "post");

export interface IAtomizersInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerInventoryQuery>>> {
}

export const AtomizersInventoryFilterProvider: FC<IAtomizersInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerInventoryQuery>> name={"AtomizersInventory"} {...props}/>;

export const useAtomizersInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerInventoryQuery>>()
export const useAtomizersInventoryFilterContext = () => useFilterContext<IQueryFilter<IAtomizerInventoryQuery>>()

export interface IAtomizersInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerInventoryQuery>> {
}

export const AtomizersInventorySourceFilter: FC<IAtomizersInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.AtomizersInventory'}
/>;

export interface IAtomizersInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerInventoryQuery>>> {
}

export const AtomizersInventoryOrderByProvider: FC<IAtomizersInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerInventoryQuery>> name={"AtomizersInventory"} {...props}/>;

export const useAtomizersInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerInventoryQuery>>()
export const useAtomizersInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerInventoryQuery>>()

export interface IAtomizersInventoryListSourceProps extends Partial<IListProps<IAtomizerInventory>> {
	sourceProps?: Partial<IAtomizersInventorySourceProps>;
}

export interface IAtomizersInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerInventoryQuery>, IQueryOrderBy<IAtomizerInventoryQuery>, IAtomizersInventoryQueryParams>> {
}

export const AtomizersInventorySourceControlProvider: FC<IAtomizersInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerInventoryQuery>, IQueryOrderBy<IAtomizerInventoryQuery>> name={"AtomizersInventory"} {...props}/>;

export const AtomizersInventoryListSource: FC<IAtomizersInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizersInventorySource
		{...sourceProps}
	>
		<List<IAtomizerInventory>
			{...props}
		/>
	</AtomizersInventorySource>;
}

export interface IAtomizersInventorySourceSelectProps extends IQuerySourceSelectProps<IAtomizerInventory> {
	toOption: IToOptionMapper<IAtomizerInventory>;
	sourceProps?: IAtomizersInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizersInventorySourceSelect: FC<IAtomizersInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizersInventorySource {...sourceProps}>
					<QuerySourceSelect<IAtomizerInventory> {...props}/>
				</AtomizersInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.AtomizersInventory.title"}
					size={props.size}
					tooltip={"common.selection.AtomizersInventory.title.tooltip"}
					width={800}
				>
					<AtomizersInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizersInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useAtomizersInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizersInventoryApiLink]);
};

export const useAtomizersInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IAtomizerInventory>();
export const useAtomizersInventorySelectionContext = () => useSelectionContext<IAtomizerInventory>();
