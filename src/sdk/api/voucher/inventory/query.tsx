/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucherInventory, IVoucherInventoryQuery} from "@/puff-smith/service/voucher/inventory/interface";
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

export const VoucherInventoryApiLink = "/api/voucher/inventory/query";

export type IVoucherInventoryQueryParams = undefined;

export const useVoucherInventoryQuery = createQueryHook<IVoucherInventoryQuery, IQueryResult<IVoucherInventory>, IVoucherInventoryQueryParams>(VoucherInventoryApiLink, "post");

export const useVoucherInventorySource = () => useSourceContext<IVoucherInventory>();

export interface IVoucherInventorySourceContext extends ISourceContext<IVoucherInventory> {
}

export interface IVoucherInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IVoucherInventory>> {
}

export const VoucherInventorySourceConsumer: FC<IVoucherInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVoucherInventorySourceProps extends Partial<ISourceProviderProps<IVoucherInventory>> {
}

export const VoucherInventorySource: FC<IVoucherInventorySourceProps> = props => {
	return <SourceProvider<IVoucherInventory>
		name={"VoucherInventory"}
		useQuery={useVoucherInventoryQuery}
		{...props}
	/>;
};

export const toVoucherInventoryLink = (queryParams?: IVoucherInventoryQueryParams) => toLink(VoucherInventoryApiLink, queryParams);
export const useVoucherInventoryLink = () => toVoucherInventoryLink;

export const useVoucherInventoryPromise = createPromiseHook<IVoucherInventoryQuery, IVoucherInventory, IVoucherInventoryQueryParams>(VoucherInventoryApiLink, "post");
export const VoucherInventoryPromise = createPromise<IVoucherInventoryQuery, IVoucherInventory, IVoucherInventoryQueryParams>(VoucherInventoryApiLink, "post");

export interface IVoucherInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IVoucherInventoryQuery>>> {
}

export const VoucherInventoryFilterProvider: FC<IVoucherInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IVoucherInventoryQuery>> name={"VoucherInventory"} {...props}/>;

export const useVoucherInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IVoucherInventoryQuery>>();
export const useVoucherInventoryFilterContext = () => useFilterContext<IQueryFilter<IVoucherInventoryQuery>>();

export interface IVoucherInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IVoucherInventoryQuery>> {
}

export const VoucherInventorySourceFilter: FC<IVoucherInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.VoucherInventory"}
/>;

export interface IVoucherInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IVoucherInventoryQuery>>> {
}

export const VoucherInventoryOrderByProvider: FC<IVoucherInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IVoucherInventoryQuery>> name={"VoucherInventory"} {...props}/>;

export const useVoucherInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IVoucherInventoryQuery>>();
export const useVoucherInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IVoucherInventoryQuery>>();

export interface IVoucherInventoryListSourceProps extends Partial<IListProps<IVoucherInventory>> {
	sourceProps?: Partial<IVoucherInventorySourceProps>;
}

export interface IVoucherInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IVoucherInventoryQuery>, IQueryOrderBy<IVoucherInventoryQuery>, IVoucherInventoryQueryParams>> {
}

export const VoucherInventorySourceControlProvider: FC<IVoucherInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IVoucherInventoryQuery>, IQueryOrderBy<IVoucherInventoryQuery>> name={"VoucherInventory"} {...props}/>;

export const VoucherInventoryListSource: FC<IVoucherInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <VoucherInventorySource
		{...sourceProps}
	>
		<List<IVoucherInventory>
			{...props}
		/>
	</VoucherInventorySource>;
}

export interface IVoucherInventorySourceSelectProps extends IQuerySourceSelectProps<IVoucherInventory> {
	toOption: IToOptionMapper<IVoucherInventory>;
	sourceProps?: IVoucherInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VoucherInventorySourceSelect: FC<IVoucherInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VoucherInventorySource {...sourceProps}>
					<QuerySourceSelect<IVoucherInventory> {...props}/>
				</VoucherInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.VoucherInventory.title"}
					size={props.size}
					tooltip={"common.selection.VoucherInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<VoucherInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VoucherInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVoucherInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IVoucherInventory>> {
}

export const VoucherInventorySelectionProvider: FC<IVoucherInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IVoucherInventory> {...props}/>;
}

export const useVoucherInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VoucherInventoryApiLink]);
};

export const useVoucherInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IVoucherInventory>();
export const useVoucherInventorySelectionContext = () => useSelectionContext<IVoucherInventory>();
