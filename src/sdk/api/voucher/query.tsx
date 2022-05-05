/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucher, IVoucherQuery} from "@/puff-smith/service/voucher/interface";
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

export const VouchersApiLink = "/api/voucher/query";

export type IVouchersQueryParams = undefined;

export const useVouchersQuery = createQueryHook<IVoucherQuery, IQueryResult<IVoucher>, IVouchersQueryParams>(VouchersApiLink, "post");

export const useVouchersSource = () => useSourceContext<IVoucher>()

export interface IVouchersSourceContext extends ISourceContext<IVoucher> {
}

export interface IVouchersSourceConsumerProps extends ConsumerProps<ISourceContext<IVoucher>> {
}

export const VouchersSourceConsumer: FC<IVouchersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVouchersSourceProps extends Partial<ISourceProviderProps<IVoucher>> {
}

export const VouchersSource: FC<IVouchersSourceProps> = props => {
	return <SourceProvider<IVoucher>
		name={"Vouchers"}
		useQuery={useVouchersQuery}
		{...props}
	/>;
};

export const toVouchersLink = (queryParams?: IVouchersQueryParams) => toLink(VouchersApiLink, queryParams);
export const useVouchersLink = () => toVouchersLink;

export const useVouchersPromise = createPromiseHook<IVoucherQuery, IVoucher, IVouchersQueryParams>(VouchersApiLink, "post");
export const VouchersPromise = createPromise<IVoucherQuery, IVoucher, IVouchersQueryParams>(VouchersApiLink, "post");

export interface IVouchersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IVoucherQuery>>> {
}

export const VouchersFilterProvider: FC<IVouchersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IVoucherQuery>> name={"Vouchers"} {...props}/>;

export const useVouchersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IVoucherQuery>>()
export const useVouchersFilterContext = () => useFilterContext<IQueryFilter<IVoucherQuery>>()

export interface IVouchersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IVoucherQuery>> {
}

export const VouchersSourceFilter: FC<IVouchersSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Vouchers'}
/>;

export interface IVouchersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IVoucherQuery>>> {
}

export const VouchersOrderByProvider: FC<IVouchersOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IVoucherQuery>> name={"Vouchers"} {...props}/>;

export const useVouchersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IVoucherQuery>>()
export const useVouchersOrderByContext = () => useOrderByContext<IQueryOrderBy<IVoucherQuery>>()

export interface IVouchersListSourceProps extends Partial<IListProps<IVoucher>> {
	sourceProps?: Partial<IVouchersSourceProps>;
}

export interface IVouchersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IVoucherQuery>, IQueryOrderBy<IVoucherQuery>, IVouchersQueryParams>> {
}

export const VouchersSourceControlProvider: FC<IVouchersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IVoucherQuery>, IQueryOrderBy<IVoucherQuery>> name={"Vouchers"} {...props}/>;

export const VouchersListSource: FC<IVouchersListSourceProps> = ({sourceProps, ...props}) => {
	return <VouchersSource
		{...sourceProps}
	>
		<List<IVoucher>
			{...props}
		/>
	</VouchersSource>;
}

export interface IVouchersSourceSelectProps extends IQuerySourceSelectProps<IVoucher> {
	toOption: IToOptionMapper<IVoucher>;
	sourceProps?: IVouchersSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VouchersSourceSelect: FC<IVouchersSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VouchersSource {...sourceProps}>
					<QuerySourceSelect<IVoucher> {...props}/>
				</VouchersSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Vouchers.title"}
					size={props.size}
					tooltip={"common.selection.Vouchers.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<VouchersSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VouchersSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVouchersSelectionProviderProps extends Partial<ISelectionProviderProps<IVoucher>> {
}

export const VouchersSelectionProvider: FC<IVouchersSelectionProviderProps> = props => {
	return <SelectionProvider<IVoucher> {...props}/>;
}

export const useVouchersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VouchersApiLink]);
};

export const useVouchersOptionalSelectionContext = () => useOptionalSelectionContext<IVoucher>();
export const useVouchersSelectionContext = () => useSelectionContext<IVoucher>();
