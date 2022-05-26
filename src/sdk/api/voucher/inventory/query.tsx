/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucherInventorySource} from "@/puff-smith/service/voucher/inventory/interface";
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

export const VoucherInventoryApiLink = "/api/voucher/inventory/query";
export const VoucherInventoryCountApiLink = "/api/voucher/inventory/query/count";

export type IVoucherInventoryQueryParams = undefined;

export const useVoucherInventoryQuery = createQueryHook<ISourceQuery<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>[], IVoucherInventoryQueryParams>(VoucherInventoryApiLink, "post");
export const useVoucherInventoryCountQuery = createQueryHook<ISourceQuery<IVoucherInventorySource>, number, IVoucherInventoryQueryParams>(VoucherInventoryCountApiLink, "post");

export const useVoucherInventorySource = () => useSourceContext<ISourceItem<IVoucherInventorySource>>();

export interface IVoucherInventorySourceContext extends ISourceContext<ISourceItem<IVoucherInventorySource>> {
}

export interface IVoucherInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IVoucherInventorySource>>> {
}

export const VoucherInventorySourceConsumer: FC<IVoucherInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVoucherInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IVoucherInventorySource>>> {
}

export const VoucherInventoryProvider: FC<IVoucherInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IVoucherInventorySource>>
		name={"VoucherInventory"}
		useQuery={useVoucherInventoryQuery}
		useCountQuery={useVoucherInventoryCountQuery}
		{...props}
	/>;
};

export const toVoucherInventoryLink = (queryParams?: IVoucherInventoryQueryParams) => toLink(VoucherInventoryApiLink, queryParams);
export const useVoucherInventoryLink = () => toVoucherInventoryLink;

export const useVoucherInventoryPromise = createPromiseHook<ISourceQuery<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>, IVoucherInventoryQueryParams>(VoucherInventoryApiLink, "post");
export const VoucherInventoryPromise = createPromise<ISourceQuery<IVoucherInventorySource>, ISourceItem<IVoucherInventorySource>, IVoucherInventoryQueryParams>(VoucherInventoryApiLink, "post");

export interface IVoucherInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IVoucherInventorySource>>>> {
}

export const VoucherInventoryFilterProvider: FC<IVoucherInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IVoucherInventorySource>>> name={"VoucherInventory"} {...props}/>;

export const useVoucherInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IVoucherInventorySource>>>();
export const useVoucherInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IVoucherInventorySource>>>();

export interface IVoucherInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IVoucherInventorySource>>> {
}

export const VoucherInventoryProviderFilter: FC<IVoucherInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.VoucherInventory"}
/>;

export interface IVoucherInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IVoucherInventorySource>>>> {
}

export const VoucherInventoryOrderByProvider: FC<IVoucherInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IVoucherInventorySource>>> name={"VoucherInventory"} {...props}/>;

export const useVoucherInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IVoucherInventorySource>>>();
export const useVoucherInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IVoucherInventorySource>>>();

export interface IVoucherInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IVoucherInventorySource>>, IQueryOrderBy<ISourceQuery<IVoucherInventorySource>>, IVoucherInventoryQueryParams>> {
}

export const VoucherInventoryProviderControl: FC<IVoucherInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IVoucherInventorySource>>, IQueryOrderBy<ISourceQuery<IVoucherInventorySource>>> name={"VoucherInventory"} {...props}/>;

export interface IVoucherInventoryListSourceProps extends Partial<IListProps<ISourceItem<IVoucherInventorySource>>> {
	providerProps?: Partial<IVoucherInventoryProviderProps>;
}

export const VoucherInventoryListSource: FC<IVoucherInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <VoucherInventoryProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IVoucherInventorySource>>
			{...props}
		/>
	</VoucherInventoryProvider>;
}

export interface IVoucherInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IVoucherInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IVoucherInventorySource>>;
	providerProps?: Partial<IVoucherInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VoucherInventorySourceSelect: FC<IVoucherInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VoucherInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IVoucherInventorySource>> {...props}/>
				</VoucherInventoryProvider>
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
					<VoucherInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VoucherInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVoucherInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IVoucherInventorySource>>> {
}

export const VoucherInventorySelectionProvider: FC<IVoucherInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IVoucherInventorySource>> {...props}/>;
}

export const useVoucherInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VoucherInventoryApiLink]);
};

export const useVoucherInventoryCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VoucherInventoryCountApiLink]);
};

export const useVoucherInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IVoucherInventorySource>>();
export const useVoucherInventorySelectionContext = () => useSelectionContext<ISourceItem<IVoucherInventorySource>>();
