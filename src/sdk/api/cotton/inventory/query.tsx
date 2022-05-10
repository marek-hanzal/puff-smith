/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventory, ICottonInventoryQuery} from "@/puff-smith/service/cotton/inventory/interface";
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

export const CottonInventoryApiLink = "/api/cotton/inventory/query";

export type ICottonInventoryQueryParams = undefined;

export const useCottonInventoryQuery = createQueryHook<ICottonInventoryQuery, IQueryResult<ICottonInventory>, ICottonInventoryQueryParams>(CottonInventoryApiLink, "post");

export const useCottonInventorySource = () => useSourceContext<ICottonInventory>();

export interface ICottonInventorySourceContext extends ISourceContext<ICottonInventory> {
}

export interface ICottonInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ICottonInventory>> {
}

export const CottonInventorySourceConsumer: FC<ICottonInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonInventorySourceProps extends Partial<ISourceProviderProps<ICottonInventory>> {
}

export const CottonInventorySource: FC<ICottonInventorySourceProps> = props => {
	return <SourceProvider<ICottonInventory>
		name={"CottonInventory"}
		useQuery={useCottonInventoryQuery}
		{...props}
	/>;
};

export const toCottonInventoryLink = (queryParams?: ICottonInventoryQueryParams) => toLink(CottonInventoryApiLink, queryParams);
export const useCottonInventoryLink = () => toCottonInventoryLink;

export const useCottonInventoryPromise = createPromiseHook<ICottonInventoryQuery, ICottonInventory, ICottonInventoryQueryParams>(CottonInventoryApiLink, "post");
export const CottonInventoryPromise = createPromise<ICottonInventoryQuery, ICottonInventory, ICottonInventoryQueryParams>(CottonInventoryApiLink, "post");

export interface ICottonInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonInventoryQuery>>> {
}

export const CottonInventoryFilterProvider: FC<ICottonInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonInventoryQuery>> name={"CottonInventory"} {...props}/>;

export const useCottonInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonInventoryQuery>>();
export const useCottonInventoryFilterContext = () => useFilterContext<IQueryFilter<ICottonInventoryQuery>>();

export interface ICottonInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonInventoryQuery>> {
}

export const CottonInventorySourceFilter: FC<ICottonInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CottonInventory"}
/>;

export interface ICottonInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICottonInventoryQuery>>> {
}

export const CottonInventoryOrderByProvider: FC<ICottonInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICottonInventoryQuery>> name={"CottonInventory"} {...props}/>;

export const useCottonInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICottonInventoryQuery>>();
export const useCottonInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ICottonInventoryQuery>>();

export interface ICottonInventoryListSourceProps extends Partial<IListProps<ICottonInventory>> {
	sourceProps?: Partial<ICottonInventorySourceProps>;
}

export interface ICottonInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonInventoryQuery>, IQueryOrderBy<ICottonInventoryQuery>, ICottonInventoryQueryParams>> {
}

export const CottonInventorySourceControlProvider: FC<ICottonInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<ICottonInventoryQuery>, IQueryOrderBy<ICottonInventoryQuery>> name={"CottonInventory"} {...props}/>;

export const CottonInventoryListSource: FC<ICottonInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonInventorySource
		{...sourceProps}
	>
		<List<ICottonInventory>
			{...props}
		/>
	</CottonInventorySource>;
};

export interface ICottonInventorySourceSelectProps extends IQuerySourceSelectProps<ICottonInventory> {
	toOption: IToOptionMapper<ICottonInventory>;
	sourceProps?: ICottonInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonInventorySourceSelect: FC<ICottonInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonInventorySource {...sourceProps}>
					<QuerySourceSelect<ICottonInventory> {...props}/>
				</CottonInventorySource>
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
					<CottonInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICottonInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ICottonInventory>> {
}

export const CottonInventorySelectionProvider: FC<ICottonInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ICottonInventory> {...props}/>;
};

export const useCottonInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonInventoryApiLink]);
};

export const useCottonInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ICottonInventory>();
export const useCottonInventorySelectionContext = () => useSelectionContext<ICottonInventory>();
