/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonMarket, ICottonMarketQuery} from "@/puff-smith/service/cotton/market";
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

export const CottonsMarketApiLink = "/api/cotton/market/query";

export type ICottonsMarketQueryParams = undefined;

export const useCottonsMarketQuery = createQueryHook<ICottonMarketQuery, IQueryResult<ICottonMarket>, ICottonsMarketQueryParams>(CottonsMarketApiLink, "post");

export const useCottonsMarketSource = () => useSourceContext<ICottonMarket>();

export interface ICottonsMarketSourceContext extends ISourceContext<ICottonMarket> {
}

export interface ICottonsMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ICottonMarket>> {
}

export const CottonsMarketSourceConsumer: FC<ICottonsMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonsMarketSourceProps extends Partial<ISourceProviderProps<ICottonMarket>> {
}

export const CottonsMarketSource: FC<ICottonsMarketSourceProps> = props => {
	return <SourceProvider<ICottonMarket>
		name={"CottonsMarket"}
		useQuery={useCottonsMarketQuery}
		{...props}
	/>;
};

export const toCottonsMarketLink = (queryParams?: ICottonsMarketQueryParams) => toLink(CottonsMarketApiLink, queryParams);
export const useCottonsMarketLink = () => toCottonsMarketLink;

export const useCottonsMarketPromise = createPromiseHook<ICottonMarketQuery, ICottonMarket, ICottonsMarketQueryParams>(CottonsMarketApiLink, "post");
export const CottonsMarketPromise = createPromise<ICottonMarketQuery, ICottonMarket, ICottonsMarketQueryParams>(CottonsMarketApiLink, "post");

export interface ICottonsMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonMarketQuery>>> {
}

export const CottonsMarketFilterProvider: FC<ICottonsMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonMarketQuery>> name={"CottonsMarket"} {...props}/>;

export const useCottonsMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonMarketQuery>>();
export const useCottonsMarketFilterContext = () => useFilterContext<IQueryFilter<ICottonMarketQuery>>();

export interface ICottonsMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonMarketQuery>> {
}

export const CottonsMarketSourceFilter: FC<ICottonsMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CottonsMarket"}
/>;

export interface ICottonsMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICottonMarketQuery>>> {
}

export const CottonsMarketOrderByProvider: FC<ICottonsMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICottonMarketQuery>> name={"CottonsMarket"} {...props}/>;

export const useCottonsMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICottonMarketQuery>>();
export const useCottonsMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ICottonMarketQuery>>();

export interface ICottonsMarketListSourceProps extends Partial<IListProps<ICottonMarket>> {
	sourceProps?: Partial<ICottonsMarketSourceProps>;
}

export interface ICottonsMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonMarketQuery>, IQueryOrderBy<ICottonMarketQuery>, ICottonsMarketQueryParams>> {
}

export const CottonsMarketSourceControlProvider: FC<ICottonsMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICottonMarketQuery>, IQueryOrderBy<ICottonMarketQuery>> name={"CottonsMarket"} {...props}/>;

export const CottonsMarketListSource: FC<ICottonsMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonsMarketSource
		{...sourceProps}
	>
		<List<ICottonMarket>
			{...props}
		/>
	</CottonsMarketSource>;
};

export interface ICottonsMarketSourceSelectProps extends IQuerySourceSelectProps<ICottonMarket> {
	toOption: IToOptionMapper<ICottonMarket>;
	sourceProps?: ICottonsMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonsMarketSourceSelect: FC<ICottonsMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonsMarketSource {...sourceProps}>
					<QuerySourceSelect<ICottonMarket> {...props}/>
				</CottonsMarketSource>
			</Col>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.CottonsMarket.title"}
					tooltip={"common.selection.CottonsMarket.title.tooltip"}
					width={800}
				>
					<CottonsMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonsMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useCottonsMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonsMarketApiLink]);
};

export const useCottonsMarketOptionalSelectionContext = () => useOptionalSelectionContext<ICottonMarket>();
export const useCottonsMarketSelectionContext = () => useSelectionContext<ICottonMarket>();
