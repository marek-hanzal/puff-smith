/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseMarket, IBaseMarketQuery} from "@/puff-smith/service/base/market/interface";
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

export const BaseMarketApiLink = "/api/base/market/query";

export type IBaseMarketQueryParams = undefined;

export const useBaseMarketQuery = createQueryHook<IBaseMarketQuery, IQueryResult<IBaseMarket>, IBaseMarketQueryParams>(BaseMarketApiLink, "post");

export const useBaseMarketSource = () => useSourceContext<IBaseMarket>();

export interface IBaseMarketSourceContext extends ISourceContext<IBaseMarket> {
}

export interface IBaseMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IBaseMarket>> {
}

export const BaseMarketSourceConsumer: FC<IBaseMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseMarketSourceProps extends Partial<ISourceProviderProps<IBaseMarket>> {
}

export const BaseMarketSource: FC<IBaseMarketSourceProps> = props => {
	return <SourceProvider<IBaseMarket>
		name={"BaseMarket"}
		useQuery={useBaseMarketQuery}
		{...props}
	/>;
};

export const toBaseMarketLink = (queryParams?: IBaseMarketQueryParams) => toLink(BaseMarketApiLink, queryParams);
export const useBaseMarketLink = () => toBaseMarketLink;

export const useBaseMarketPromise = createPromiseHook<IBaseMarketQuery, IBaseMarket, IBaseMarketQueryParams>(BaseMarketApiLink, "post");
export const BaseMarketPromise = createPromise<IBaseMarketQuery, IBaseMarket, IBaseMarketQueryParams>(BaseMarketApiLink, "post");

export interface IBaseMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBaseMarketQuery>>> {
}

export const BaseMarketFilterProvider: FC<IBaseMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBaseMarketQuery>> name={"BaseMarket"} {...props}/>;

export const useBaseMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBaseMarketQuery>>();
export const useBaseMarketFilterContext = () => useFilterContext<IQueryFilter<IBaseMarketQuery>>();

export interface IBaseMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBaseMarketQuery>> {
}

export const BaseMarketSourceFilter: FC<IBaseMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BaseMarket"}
/>;

export interface IBaseMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBaseMarketQuery>>> {
}

export const BaseMarketOrderByProvider: FC<IBaseMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBaseMarketQuery>> name={"BaseMarket"} {...props}/>;

export const useBaseMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBaseMarketQuery>>();
export const useBaseMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IBaseMarketQuery>>();

export interface IBaseMarketListSourceProps extends Partial<IListProps<IBaseMarket>> {
	sourceProps?: Partial<IBaseMarketSourceProps>;
}

export interface IBaseMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBaseMarketQuery>, IQueryOrderBy<IBaseMarketQuery>, IBaseMarketQueryParams>> {
}

export const BaseMarketSourceControlProvider: FC<IBaseMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBaseMarketQuery>, IQueryOrderBy<IBaseMarketQuery>> name={"BaseMarket"} {...props}/>;

export const BaseMarketListSource: FC<IBaseMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <BaseMarketSource
		{...sourceProps}
	>
		<List<IBaseMarket>
			{...props}
		/>
	</BaseMarketSource>;
}

export interface IBaseMarketSourceSelectProps extends IQuerySourceSelectProps<IBaseMarket> {
	toOption: IToOptionMapper<IBaseMarket>;
	sourceProps?: IBaseMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseMarketSourceSelect: FC<IBaseMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseMarketSource {...sourceProps}>
					<QuerySourceSelect<IBaseMarket> {...props}/>
				</BaseMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BaseMarket.title"}
					size={props.size}
					tooltip={"common.selection.BaseMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BaseMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BaseMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBaseMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IBaseMarket>> {
}

export const BaseMarketSelectionProvider: FC<IBaseMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IBaseMarket> {...props}/>;
}

export const useBaseMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseMarketApiLink]);
};

export const useBaseMarketOptionalSelectionContext = () => useOptionalSelectionContext<IBaseMarket>();
export const useBaseMarketSelectionContext = () => useSelectionContext<IBaseMarket>();
