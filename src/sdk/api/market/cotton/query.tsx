/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonMarketSource} from "@/puff-smith/service/cotton/market/interface";
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

export const CottonMarketApiLink = "/api/market/cotton/query";
export const CottonMarketCountApiLink = "/api/market/cotton/query/count";

export type ICottonMarketQueryParams = any;

export const useCottonMarketQuery = createQueryHook<ISourceQuery<ICottonMarketSource>, ISourceItem<ICottonMarketSource>[], ICottonMarketQueryParams>(CottonMarketApiLink, "post");
export const useCottonMarketCountQuery = createQueryHook<ISourceQuery<ICottonMarketSource>, number, ICottonMarketQueryParams>(CottonMarketCountApiLink, "post");

export const useCottonMarketSource = () => useSourceContext<ISourceItem<ICottonMarketSource>>();

export interface ICottonMarketSourceContext extends ISourceContext<ISourceItem<ICottonMarketSource>> {
}

export interface ICottonMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICottonMarketSource>>> {
}

export const CottonMarketSourceConsumer: FC<ICottonMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICottonMarketSource>>> {
}

export const CottonMarketProvider: FC<ICottonMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICottonMarketSource>>
		name={"CottonMarket"}
		useQuery={useCottonMarketQuery}
		useCountQuery={useCottonMarketCountQuery}
		{...props}
	/>;
};

export const toCottonMarketLink = (queryParams?: ICottonMarketQueryParams) => toLink(CottonMarketApiLink, queryParams);
export const useCottonMarketLink = () => toCottonMarketLink;

export const useCottonMarketPromise = createPromiseHook<ISourceQuery<ICottonMarketSource>, ISourceItem<ICottonMarketSource>, ICottonMarketQueryParams>(CottonMarketApiLink, "post");
export const CottonMarketPromise = createPromise<ISourceQuery<ICottonMarketSource>, ISourceItem<ICottonMarketSource>, ICottonMarketQueryParams>(CottonMarketApiLink, "post");

export interface ICottonMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICottonMarketSource>>>> {
}

export const CottonMarketFilterProvider: FC<ICottonMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICottonMarketSource>>> name={"CottonMarket"} {...props}/>;

export const useCottonMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICottonMarketSource>>>();
export const useCottonMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICottonMarketSource>>>();

export interface ICottonMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICottonMarketSource>>> {
}

export const CottonMarketProviderFilter: FC<ICottonMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CottonMarket"}
/>;

export interface ICottonMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICottonMarketSource>>>> {
}

export const CottonMarketOrderByProvider: FC<ICottonMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICottonMarketSource>>> name={"CottonMarket"} {...props}/>;

export const useCottonMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICottonMarketSource>>>();
export const useCottonMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICottonMarketSource>>>();

export interface ICottonMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICottonMarketSource>>, IQueryOrderBy<ISourceQuery<ICottonMarketSource>>, ICottonMarketQueryParams>> {
}

export const CottonMarketProviderControl: FC<ICottonMarketProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<ICottonMarketSource>>, IQueryOrderBy<ISourceQuery<ICottonMarketSource>>> name={"CottonMarket"} {...props}/>;

export interface ICottonMarketListSourceProps extends Partial<IListProps<ISourceItem<ICottonMarketSource>>> {
	providerProps?: Partial<ICottonMarketProviderProps>;
}

export const CottonMarketListSource: FC<ICottonMarketListSourceProps> = ({providerProps, ...props}) => {
	return <CottonMarketProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICottonMarketSource>>
			{...props}
		/>
	</CottonMarketProvider>;
}

export interface ICottonMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICottonMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<ICottonMarketSource>>;
	providerProps?: Partial<ICottonMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonMarketSourceSelect: FC<ICottonMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICottonMarketSource>> {...props}/>
				</CottonMarketProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CottonMarket.title"}
					size={props.size}
					tooltip={"common.selection.CottonMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CottonMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICottonMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICottonMarketSource>>> {
}

export const CottonMarketSelectionProvider: FC<ICottonMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICottonMarketSource>> {...props}/>;
}

export const useCottonMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonMarketApiLink]);
};

export const useCottonMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonMarketCountApiLink]);
};

export const useCottonMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICottonMarketSource>>();
export const useCottonMarketSelectionContext = () => useSelectionContext<ISourceItem<ICottonMarketSource>>();
