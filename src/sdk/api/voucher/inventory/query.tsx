/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucherInventory, IVoucherInventoryQuery} from "@/puff-smith/service/voucher/inventory/interface";
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

export const VouchersInventoryApiLink = "/api/voucher/inventory/query";

export type IVouchersInventoryQueryParams = undefined;

export const useVouchersInventoryQuery = createQueryHook<IVoucherInventoryQuery, IQueryResult<IVoucherInventory>, IVouchersInventoryQueryParams>(VouchersInventoryApiLink, "post");

export const useVouchersInventorySource = () => useSourceContext<IVoucherInventory>();

export interface IVouchersInventorySourceContext extends ISourceContext<IVoucherInventory> {
}

export interface IVouchersInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IVoucherInventory>> {
}

export const VouchersInventorySourceConsumer: FC<IVouchersInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVouchersInventorySourceProps extends Partial<ISourceProviderProps<IVoucherInventory>> {
}

export const VouchersInventorySource: FC<IVouchersInventorySourceProps> = props => {
	return <SourceProvider<IVoucherInventory>
		name={"VouchersInventory"}
		useQuery={useVouchersInventoryQuery}
		{...props}
	/>;
};

export const toVouchersInventoryLink = (queryParams?: IVouchersInventoryQueryParams) => toLink(VouchersInventoryApiLink, queryParams);
export const useVouchersInventoryLink = () => toVouchersInventoryLink;

export const useVouchersInventoryPromise = createPromiseHook<IVoucherInventoryQuery, IVoucherInventory, IVouchersInventoryQueryParams>(VouchersInventoryApiLink, "post");
export const VouchersInventoryPromise = createPromise<IVoucherInventoryQuery, IVoucherInventory, IVouchersInventoryQueryParams>(VouchersInventoryApiLink, "post");

export interface IVouchersInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IVoucherInventoryQuery>>> {
}

export const VouchersInventoryFilterProvider: FC<IVouchersInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IVoucherInventoryQuery>> name={"VouchersInventory"} {...props}/>;

export const useVouchersInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IVoucherInventoryQuery>>();
export const useVouchersInventoryFilterContext = () => useFilterContext<IQueryFilter<IVoucherInventoryQuery>>();

export interface IVouchersInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IVoucherInventoryQuery>> {
}

export const VouchersInventorySourceFilter: FC<IVouchersInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.VouchersInventory"}
/>;

export interface IVouchersInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IVoucherInventoryQuery>>> {
}

export const VouchersInventoryOrderByProvider: FC<IVouchersInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IVoucherInventoryQuery>> name={"VouchersInventory"} {...props}/>;

export const useVouchersInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IVoucherInventoryQuery>>();
export const useVouchersInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IVoucherInventoryQuery>>();

export interface IVouchersInventoryListSourceProps extends Partial<IListProps<IVoucherInventory>> {
	sourceProps?: Partial<IVouchersInventorySourceProps>;
}

export interface IVouchersInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IVoucherInventoryQuery>, IQueryOrderBy<IVoucherInventoryQuery>, IVouchersInventoryQueryParams>> {
}

export const VouchersInventorySourceControlProvider: FC<IVouchersInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IVoucherInventoryQuery>, IQueryOrderBy<IVoucherInventoryQuery>> name={"VouchersInventory"} {...props}/>;

export const VouchersInventoryListSource: FC<IVouchersInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <VouchersInventorySource
		{...sourceProps}
	>
		<List<IVoucherInventory>
			{...props}
		/>
	</VouchersInventorySource>;
}

export interface IVouchersInventorySourceSelectProps extends IQuerySourceSelectProps<IVoucherInventory> {
	toOption: IToOptionMapper<IVoucherInventory>;
	sourceProps?: IVouchersInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VouchersInventorySourceSelect: FC<IVouchersInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VouchersInventorySource {...sourceProps}>
					<QuerySourceSelect<IVoucherInventory> {...props}/>
				</VouchersInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.VouchersInventory.title"}
					tooltip={"common.selection.VouchersInventory.title.tooltip"}
					width={800}
				>
					<VouchersInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VouchersInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useVouchersInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VouchersInventoryApiLink]);
};

export const useVouchersInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IVoucherInventory>();
export const useVouchersInventorySelectionContext = () => useSelectionContext<IVoucherInventory>();
