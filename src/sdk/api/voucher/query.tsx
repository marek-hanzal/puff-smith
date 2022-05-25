/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVoucherSource} from "@/puff-smith/service/voucher/interface";
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

export const VoucherApiLink = "/api/voucher/query";

export type IVoucherQueryParams = undefined;

export const useVoucherQuery = createQueryHook<ISourceQuery<IVoucherSource>, ISourceItem<IVoucherSource>[], IVoucherQueryParams>(VoucherApiLink, "post");

export const useVoucherSource = () => useSourceContext<ISourceItem<IVoucherSource>>();

export interface IVoucherSourceContext extends ISourceContext<ISourceItem<IVoucherSource>> {
}

export interface IVoucherSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IVoucherSource>>> {
}

export const VoucherSourceConsumer: FC<IVoucherSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVoucherProviderProps extends Partial<ISourceProviderProps<ISourceItem<IVoucherSource>>> {
}

export const VoucherProvider: FC<IVoucherProviderProps> = props => {
	return <SourceProvider<ISourceItem<IVoucherSource>>
		name={"Voucher"}
		useQuery={useVoucherQuery}
		{...props}
	/>;
};

export const toVoucherLink = (queryParams?: IVoucherQueryParams) => toLink(VoucherApiLink, queryParams);
export const useVoucherLink = () => toVoucherLink;

export const useVoucherPromise = createPromiseHook<ISourceQuery<IVoucherSource>, ISourceItem<IVoucherSource>, IVoucherQueryParams>(VoucherApiLink, "post");
export const VoucherPromise = createPromise<ISourceQuery<IVoucherSource>, ISourceItem<IVoucherSource>, IVoucherQueryParams>(VoucherApiLink, "post");

export interface IVoucherFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IVoucherSource>>>> {
}

export const VoucherFilterProvider: FC<IVoucherFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IVoucherSource>>> name={"Voucher"} {...props}/>;

export const useVoucherOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IVoucherSource>>>();
export const useVoucherFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IVoucherSource>>>();

export interface IVoucherProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IVoucherSource>>> {
}

export const VoucherProviderFilter: FC<IVoucherProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Voucher"}
/>;

export interface IVoucherOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IVoucherSource>>>> {
}

export const VoucherOrderByProvider: FC<IVoucherOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IVoucherSource>>> name={"Voucher"} {...props}/>;

export const useVoucherOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IVoucherSource>>>();
export const useVoucherOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IVoucherSource>>>();

export interface IVoucherProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IVoucherSource>>, IQueryOrderBy<ISourceQuery<IVoucherSource>>, IVoucherQueryParams>> {
}

export const VoucherProviderControl: FC<IVoucherProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IVoucherSource>>, IQueryOrderBy<ISourceQuery<IVoucherSource>>> name={"Voucher"} {...props}/>;

export interface IVoucherListSourceProps extends Partial<IListProps<ISourceItem<IVoucherSource>>> {
	providerProps?: Partial<IVoucherProviderProps>;
}

export const VoucherListSource: FC<IVoucherListSourceProps> = ({providerProps, ...props}) => {
	return <VoucherProvider
		{...providerProps}
	>
		<List<ISourceItem<IVoucherSource>>
			{...props}
		/>
	</VoucherProvider>;
}

export interface IVoucherSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IVoucherSource>> {
	toOption: IToOptionMapper<ISourceItem<IVoucherSource>>;
	providerProps?: Partial<IVoucherProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VoucherSourceSelect: FC<IVoucherSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VoucherProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IVoucherSource>> {...props}/>
				</VoucherProvider>
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
					<VoucherProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VoucherProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVoucherSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IVoucherSource>>> {
}

export const VoucherSelectionProvider: FC<IVoucherSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IVoucherSource>> {...props}/>;
}

export const useVoucherQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VoucherApiLink]);
};

export const useVoucherOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IVoucherSource>>();
export const useVoucherSelectionContext = () => useSelectionContext<ISourceItem<IVoucherSource>>();
