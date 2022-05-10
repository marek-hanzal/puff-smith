/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonMarket, ICottonMarketQuery} from "@/puff-smith/service/cotton/market/interface";
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

export const CottonMarketApiLink = "/api/cotton/market/query";

export type ICottonMarketQueryParams = undefined;

export const useCottonMarketQuery = createQueryHook<ICottonMarketQuery, IQueryResult<ICottonMarket>, ICottonMarketQueryParams>(CottonMarketApiLink, "post");

export const useCottonMarketSource = () => useSourceContext<ICottonMarket>();

export interface ICottonMarketSourceContext extends ISourceContext<ICottonMarket> {
}

export interface ICottonMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ICottonMarket>> {
}

export const CottonMarketSourceConsumer: FC<ICottonMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonMarketSourceProps extends Partial<ISourceProviderProps<ICottonMarket>> {
}

export const CottonMarketSource: FC<ICottonMarketSourceProps> = props => {
	return <SourceProvider<ICottonMarket>
		name={"CottonMarket"}
		useQuery={useCottonMarketQuery}
		{...props}
	/>;
};

export const toCottonMarketLink = (queryParams?: ICottonMarketQueryParams) => toLink(CottonMarketApiLink, queryParams);
export const useCottonMarketLink = () => toCottonMarketLink;

export const useCottonMarketPromise = createPromiseHook<ICottonMarketQuery, ICottonMarket, ICottonMarketQueryParams>(CottonMarketApiLink, "post");
export const CottonMarketPromise = createPromise<ICottonMarketQuery, ICottonMarket, ICottonMarketQueryParams>(CottonMarketApiLink, "post");

export interface ICottonMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonMarketQuery>>> {
}

export const CottonMarketFilterProvider: FC<ICottonMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonMarketQuery>> name={"CottonMarket"} {...props}/>;

export const useCottonMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonMarketQuery>>();
export const useCottonMarketFilterContext = () => useFilterContext<IQueryFilter<ICottonMarketQuery>>();

export interface ICottonMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonMarketQuery>> {
}

export const CottonMarketSourceFilter: FC<ICottonMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CottonMarket"}
/>;

export interface ICottonMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICottonMarketQuery>>> {
}

export const CottonMarketOrderByProvider: FC<ICottonMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICottonMarketQuery>> name={"CottonMarket"} {...props}/>;

export const useCottonMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICottonMarketQuery>>();
export const useCottonMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ICottonMarketQuery>>();

export interface ICottonMarketListSourceProps extends Partial<IListProps<ICottonMarket>> {
	sourceProps?: Partial<ICottonMarketSourceProps>;
}

export interface ICottonMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonMarketQuery>, IQueryOrderBy<ICottonMarketQuery>, ICottonMarketQueryParams>> {
}

export const CottonMarketSourceControlProvider: FC<ICottonMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICottonMarketQuery>, IQueryOrderBy<ICottonMarketQuery>> name={"CottonMarket"} {...props}/>;

export const CottonMarketListSource: FC<ICottonMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonMarketSource
		{...sourceProps}
	>
		<List<ICottonMarket>
			{...props}
		/>
	</CottonMarketSource>;
};

export interface ICottonMarketSourceSelectProps extends IQuerySourceSelectProps<ICottonMarket> {
	toOption: IToOptionMapper<ICottonMarket>;
	sourceProps?: ICottonMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonMarketSourceSelect: FC<ICottonMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonMarketSource {...sourceProps}>
					<QuerySourceSelect<ICottonMarket> {...props}/>
				</CottonMarketSource>
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
					<CottonMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICottonMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ICottonMarket>> {
}

export const CottonMarketSelectionProvider: FC<ICottonMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ICottonMarket> {...props}/>;
};

export const useCottonMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonMarketApiLink]);
};

export const useCottonMarketOptionalSelectionContext = () => useOptionalSelectionContext<ICottonMarket>();
export const useCottonMarketSelectionContext = () => useSelectionContext<ICottonMarket>();
