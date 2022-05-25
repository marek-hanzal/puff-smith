/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
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

export const CottonInventoryApiLink = "/api/cotton/inventory/query";

export type ICottonInventoryQueryParams = undefined;

export const useCottonInventoryQuery = createQueryHook<ISourceQuery<ICottonInventorySource>, ISourceItem<ICottonInventorySource>[], ICottonInventoryQueryParams>(CottonInventoryApiLink, "post");

export const useCottonInventorySource = () => useSourceContext<ISourceItem<ICottonInventorySource>>();

export interface ICottonInventorySourceContext extends ISourceContext<ISourceItem<ICottonInventorySource>> {
}

export interface ICottonInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICottonInventorySource>>> {
}

export const CottonInventorySourceConsumer: FC<ICottonInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICottonInventorySource>>> {
}

export const CottonInventoryProvider: FC<ICottonInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICottonInventorySource>>
		name={"CottonInventory"}
		useQuery={useCottonInventoryQuery}
		{...props}
	/>;
};

export const toCottonInventoryLink = (queryParams?: ICottonInventoryQueryParams) => toLink(CottonInventoryApiLink, queryParams);
export const useCottonInventoryLink = () => toCottonInventoryLink;

export const useCottonInventoryPromise = createPromiseHook<ISourceQuery<ICottonInventorySource>, ISourceItem<ICottonInventorySource>, ICottonInventoryQueryParams>(CottonInventoryApiLink, "post");
export const CottonInventoryPromise = createPromise<ISourceQuery<ICottonInventorySource>, ISourceItem<ICottonInventorySource>, ICottonInventoryQueryParams>(CottonInventoryApiLink, "post");

export interface ICottonInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICottonInventorySource>>>> {
}

export const CottonInventoryFilterProvider: FC<ICottonInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICottonInventorySource>>> name={"CottonInventory"} {...props}/>;

export const useCottonInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICottonInventorySource>>>();
export const useCottonInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICottonInventorySource>>>();

export interface ICottonInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICottonInventorySource>>> {
}

export const CottonInventoryProviderFilter: FC<ICottonInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CottonInventory"}
/>;

export interface ICottonInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICottonInventorySource>>>> {
}

export const CottonInventoryOrderByProvider: FC<ICottonInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICottonInventorySource>>> name={"CottonInventory"} {...props}/>;

export const useCottonInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICottonInventorySource>>>();
export const useCottonInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICottonInventorySource>>>();

export interface ICottonInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICottonInventorySource>>, IQueryOrderBy<ISourceQuery<ICottonInventorySource>>, ICottonInventoryQueryParams>> {
}

export const CottonInventoryProviderControl: FC<ICottonInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<ICottonInventorySource>>, IQueryOrderBy<ISourceQuery<ICottonInventorySource>>> name={"CottonInventory"} {...props}/>;

export interface ICottonInventoryListSourceProps extends Partial<IListProps<ISourceItem<ICottonInventorySource>>> {
	providerProps?: Partial<ICottonInventoryProviderProps>;
}

export const CottonInventoryListSource: FC<ICottonInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <CottonInventoryProvider
		{...providerProps}
	>
		<List<ISourceItem<ICottonInventorySource>>
			{...props}
		/>
	</CottonInventoryProvider>;
};

export interface ICottonInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICottonInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<ICottonInventorySource>>;
	providerProps?: Partial<ICottonInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonInventorySourceSelect: FC<ICottonInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICottonInventorySource>> {...props}/>
				</CottonInventoryProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CottonInventory.title"}
					size={props.size}
					tooltip={"common.selection.CottonInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CottonInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICottonInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICottonInventorySource>>> {
}

export const CottonInventorySelectionProvider: FC<ICottonInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICottonInventorySource>> {...props}/>;
};

export const useCottonInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonInventoryApiLink]);
};

export const useCottonInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICottonInventorySource>>();
export const useCottonInventorySelectionContext = () => useSelectionContext<ISourceItem<ICottonInventorySource>>();
