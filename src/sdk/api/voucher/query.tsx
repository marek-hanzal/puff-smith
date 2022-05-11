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

export const VoucherApiLink = "/api/voucher/query";

export type IVoucherQueryParams = undefined;

export const useVoucherQuery = createQueryHook<IVoucherQuery, IQueryResult<IVoucher>, IVoucherQueryParams>(VoucherApiLink, "post");

export const useVoucherSource = () => useSourceContext<IVoucher>();

export interface IVoucherSourceContext extends ISourceContext<IVoucher> {
}

export interface IVoucherSourceConsumerProps extends ConsumerProps<ISourceContext<IVoucher>> {
}

export const VoucherSourceConsumer: FC<IVoucherSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVoucherSourceProps extends Partial<ISourceProviderProps<IVoucher>> {
}

export const VoucherSource: FC<IVoucherSourceProps> = props => {
	return <SourceProvider<IVoucher>
		name={"Voucher"}
		useQuery={useVoucherQuery}
		{...props}
	/>;
};

export const toVoucherLink = (queryParams?: IVoucherQueryParams) => toLink(VoucherApiLink, queryParams);
export const useVoucherLink = () => toVoucherLink;

export const useVoucherPromise = createPromiseHook<IVoucherQuery, IVoucher, IVoucherQueryParams>(VoucherApiLink, "post");
export const VoucherPromise = createPromise<IVoucherQuery, IVoucher, IVoucherQueryParams>(VoucherApiLink, "post");

export interface IVoucherFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IVoucherQuery>>> {
}

export const VoucherFilterProvider: FC<IVoucherFilterProviderProps> = props => <FilterProvider<IQueryFilter<IVoucherQuery>> name={"Voucher"} {...props}/>;

export const useVoucherOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IVoucherQuery>>();
export const useVoucherFilterContext = () => useFilterContext<IQueryFilter<IVoucherQuery>>();

export interface IVoucherSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IVoucherQuery>> {
}

export const VoucherSourceFilter: FC<IVoucherSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Voucher"}
/>;

export interface IVoucherOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IVoucherQuery>>> {
}

export const VoucherOrderByProvider: FC<IVoucherOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IVoucherQuery>> name={"Voucher"} {...props}/>;

export const useVoucherOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IVoucherQuery>>();
export const useVoucherOrderByContext = () => useOrderByContext<IQueryOrderBy<IVoucherQuery>>();

export interface IVoucherListSourceProps extends Partial<IListProps<IVoucher>> {
	sourceProps?: Partial<IVoucherSourceProps>;
}

export interface IVoucherSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IVoucherQuery>, IQueryOrderBy<IVoucherQuery>, IVoucherQueryParams>> {
}

export const VoucherSourceControlProvider: FC<IVoucherSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IVoucherQuery>, IQueryOrderBy<IVoucherQuery>> name={"Voucher"} {...props}/>;

export const VoucherListSource: FC<IVoucherListSourceProps> = ({sourceProps, ...props}) => {
	return <VoucherSource
		{...sourceProps}
	>
		<List<IVoucher>
			{...props}
		/>
	</VoucherSource>;
}

export interface IVoucherSourceSelectProps extends IQuerySourceSelectProps<IVoucher> {
	toOption: IToOptionMapper<IVoucher>;
	sourceProps?: IVoucherSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VoucherSourceSelect: FC<IVoucherSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VoucherSource {...sourceProps}>
					<QuerySourceSelect<IVoucher> {...props}/>
				</VoucherSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Voucher.title"}
					size={props.size}
					tooltip={"common.selection.Voucher.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<VoucherSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VoucherSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVoucherSelectionProviderProps extends Partial<ISelectionProviderProps<IVoucher>> {
}

export const VoucherSelectionProvider: FC<IVoucherSelectionProviderProps> = props => {
	return <SelectionProvider<IVoucher> {...props}/>;
}

export const useVoucherQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VoucherApiLink]);
};

export const useVoucherOptionalSelectionContext = () => useOptionalSelectionContext<IVoucher>();
export const useVoucherSelectionContext = () => useSelectionContext<IVoucher>();
