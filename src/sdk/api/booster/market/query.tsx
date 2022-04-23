/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterMarket, IBoosterMarketQuery} from "@/puff-smith/service/booster/market";
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

export const BoostersMarketApiLink = "/api/booster/market/query";

export type IBoostersMarketQueryParams = undefined;

export const useBoostersMarketQuery = createQueryHook<IBoosterMarketQuery, IQueryResult<IBoosterMarket>, IBoostersMarketQueryParams>(BoostersMarketApiLink, "post");

export const useBoostersMarketSource = () => useSourceContext<IBoosterMarket>();

export interface IBoostersMarketSourceContext extends ISourceContext<IBoosterMarket> {
}

export interface IBoostersMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IBoosterMarket>> {
}

export const BoostersMarketSourceConsumer: FC<IBoostersMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoostersMarketSourceProps extends Partial<ISourceProviderProps<IBoosterMarket>> {
}

export const BoostersMarketSource: FC<IBoostersMarketSourceProps> = props => {
	return <SourceProvider<IBoosterMarket>
		name={"BoostersMarket"}
		useQuery={useBoostersMarketQuery}
		{...props}
	/>;
};

export const toBoostersMarketLink = (queryParams?: IBoostersMarketQueryParams) => toLink(BoostersMarketApiLink, queryParams);
export const useBoostersMarketLink = () => toBoostersMarketLink;

export const useBoostersMarketPromise = createPromiseHook<IBoosterMarketQuery, IBoosterMarket, IBoostersMarketQueryParams>(BoostersMarketApiLink, "post");
export const BoostersMarketPromise = createPromise<IBoosterMarketQuery, IBoosterMarket, IBoostersMarketQueryParams>(BoostersMarketApiLink, "post");

export interface IBoostersMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterMarketQuery>>> {
}

export const BoostersMarketFilterProvider: FC<IBoostersMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterMarketQuery>> name={"BoostersMarket"} {...props}/>;

export const useBoostersMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterMarketQuery>>();
export const useBoostersMarketFilterContext = () => useFilterContext<IQueryFilter<IBoosterMarketQuery>>();

export interface IBoostersMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterMarketQuery>> {
}

export const BoostersMarketSourceFilter: FC<IBoostersMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BoostersMarket"}
/>;

export interface IBoostersMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterMarketQuery>>> {
}

export const BoostersMarketOrderByProvider: FC<IBoostersMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterMarketQuery>> name={"BoostersMarket"} {...props}/>;

export const useBoostersMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterMarketQuery>>();
export const useBoostersMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterMarketQuery>>();

export interface IBoostersMarketListSourceProps extends Partial<IListProps<IBoosterMarket>> {
	sourceProps?: Partial<IBoostersMarketSourceProps>;
}

export interface IBoostersMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterMarketQuery>, IQueryOrderBy<IBoosterMarketQuery>, IBoostersMarketQueryParams>> {
}

export const BoostersMarketSourceControlProvider: FC<IBoostersMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterMarketQuery>, IQueryOrderBy<IBoosterMarketQuery>> name={"BoostersMarket"} {...props}/>;

export const BoostersMarketListSource: FC<IBoostersMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <BoostersMarketSource
		{...sourceProps}
	>
		<List<IBoosterMarket>
			{...props}
		/>
	</BoostersMarketSource>;
}

export interface IBoostersMarketSourceSelectProps extends IQuerySourceSelectProps<IBoosterMarket> {
	toOption: IToOptionMapper<IBoosterMarket>;
	sourceProps?: IBoostersMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoostersMarketSourceSelect: FC<IBoostersMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoostersMarketSource {...sourceProps}>
					<QuerySourceSelect<IBoosterMarket> {...props}/>
				</BoostersMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.BoostersMarket.title"}
					tooltip={"common.selection.BoostersMarket.title.tooltip"}
					width={800}
				>
					<BoostersMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoostersMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useBoostersMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoostersMarketApiLink]);
};

export const useBoostersMarketOptionalSelectionContext = () => useOptionalSelectionContext<IBoosterMarket>();
export const useBoostersMarketSelectionContext = () => useSelectionContext<IBoosterMarket>();
