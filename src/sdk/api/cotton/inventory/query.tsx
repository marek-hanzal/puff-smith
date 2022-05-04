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

export const CottonsInventoryApiLink = "/api/cotton/inventory/query";

export type ICottonsInventoryQueryParams = undefined;

export const useCottonsInventoryQuery = createQueryHook<ICottonInventoryQuery, IQueryResult<ICottonInventory>, ICottonsInventoryQueryParams>(CottonsInventoryApiLink, "post");

export const useCottonsInventorySource = () => useSourceContext<ICottonInventory>()

export interface ICottonsInventorySourceContext extends ISourceContext<ICottonInventory> {
}

export interface ICottonsInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ICottonInventory>> {
}

export const CottonsInventorySourceConsumer: FC<ICottonsInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonsInventorySourceProps extends Partial<ISourceProviderProps<ICottonInventory>> {
}

export const CottonsInventorySource: FC<ICottonsInventorySourceProps> = props => {
	return <SourceProvider<ICottonInventory>
		name={"CottonsInventory"}
		useQuery={useCottonsInventoryQuery}
		{...props}
	/>;
};

export const toCottonsInventoryLink = (queryParams?: ICottonsInventoryQueryParams) => toLink(CottonsInventoryApiLink, queryParams);
export const useCottonsInventoryLink = () => toCottonsInventoryLink;

export const useCottonsInventoryPromise = createPromiseHook<ICottonInventoryQuery, ICottonInventory, ICottonsInventoryQueryParams>(CottonsInventoryApiLink, "post");
export const CottonsInventoryPromise = createPromise<ICottonInventoryQuery, ICottonInventory, ICottonsInventoryQueryParams>(CottonsInventoryApiLink, "post");

export interface ICottonsInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonInventoryQuery>>> {
}

export const CottonsInventoryFilterProvider: FC<ICottonsInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonInventoryQuery>> name={"CottonsInventory"} {...props}/>;

export const useCottonsInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonInventoryQuery>>()
export const useCottonsInventoryFilterContext = () => useFilterContext<IQueryFilter<ICottonInventoryQuery>>()

export interface ICottonsInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonInventoryQuery>> {
}

export const CottonsInventorySourceFilter: FC<ICottonsInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.CottonsInventory'}
/>;

export interface ICottonsInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICottonInventoryQuery>>> {
}

export const CottonsInventoryOrderByProvider: FC<ICottonsInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICottonInventoryQuery>> name={"CottonsInventory"} {...props}/>;

export const useCottonsInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICottonInventoryQuery>>()
export const useCottonsInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ICottonInventoryQuery>>()

export interface ICottonsInventoryListSourceProps extends Partial<IListProps<ICottonInventory>> {
	sourceProps?: Partial<ICottonsInventorySourceProps>;
}

export interface ICottonsInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonInventoryQuery>, IQueryOrderBy<ICottonInventoryQuery>, ICottonsInventoryQueryParams>> {
}

export const CottonsInventorySourceControlProvider: FC<ICottonsInventorySourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICottonInventoryQuery>, IQueryOrderBy<ICottonInventoryQuery>> name={"CottonsInventory"} {...props}/>;

export const CottonsInventoryListSource: FC<ICottonsInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonsInventorySource
		{...sourceProps}
	>
		<List<ICottonInventory>
			{...props}
		/>
	</CottonsInventorySource>;
}

export interface ICottonsInventorySourceSelectProps extends IQuerySourceSelectProps<ICottonInventory> {
	toOption: IToOptionMapper<ICottonInventory>;
	sourceProps?: ICottonsInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonsInventorySourceSelect: FC<ICottonsInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonsInventorySource {...sourceProps}>
					<QuerySourceSelect<ICottonInventory> {...props}/>
				</CottonsInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CottonsInventory.title"}
					size={props.size}
					tooltip={"common.selection.CottonsInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CottonsInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonsInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICottonsInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ICottonInventory>> {
}

export const CottonsInventorySelectionProvider: FC<ICottonsInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ICottonInventory> {...props}/>;
};

export const useCottonsInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonsInventoryApiLink]);
};

export const useCottonsInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ICottonInventory>();
export const useCottonsInventorySelectionContext = () => useSelectionContext<ICottonInventory>();
