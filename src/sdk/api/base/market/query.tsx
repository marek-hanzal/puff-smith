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

export const BasesMarketApiLink = "/api/base/market/query";

export type IBasesMarketQueryParams = undefined;

export const useBasesMarketQuery = createQueryHook<IBaseMarketQuery, IQueryResult<IBaseMarket>, IBasesMarketQueryParams>(BasesMarketApiLink, "post");

export const useBasesMarketSource = () => useSourceContext<IBaseMarket>()

export interface IBasesMarketSourceContext extends ISourceContext<IBaseMarket> {
}

export interface IBasesMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IBaseMarket>> {
}

export const BasesMarketSourceConsumer: FC<IBasesMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBasesMarketSourceProps extends Partial<ISourceProviderProps<IBaseMarket>> {
}

export const BasesMarketSource: FC<IBasesMarketSourceProps> = props => {
	return <SourceProvider<IBaseMarket>
		name={"BasesMarket"}
		useQuery={useBasesMarketQuery}
		{...props}
	/>;
};

export const toBasesMarketLink = (queryParams?: IBasesMarketQueryParams) => toLink(BasesMarketApiLink, queryParams);
export const useBasesMarketLink = () => toBasesMarketLink;

export const useBasesMarketPromise = createPromiseHook<IBaseMarketQuery, IBaseMarket, IBasesMarketQueryParams>(BasesMarketApiLink, "post");
export const BasesMarketPromise = createPromise<IBaseMarketQuery, IBaseMarket, IBasesMarketQueryParams>(BasesMarketApiLink, "post");

export interface IBasesMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBaseMarketQuery>>> {
}

export const BasesMarketFilterProvider: FC<IBasesMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBaseMarketQuery>> name={"BasesMarket"} {...props}/>;

export const useBasesMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBaseMarketQuery>>()
export const useBasesMarketFilterContext = () => useFilterContext<IQueryFilter<IBaseMarketQuery>>()

export interface IBasesMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBaseMarketQuery>> {
}

export const BasesMarketSourceFilter: FC<IBasesMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.BasesMarket'}
/>;

export interface IBasesMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBaseMarketQuery>>> {
}

export const BasesMarketOrderByProvider: FC<IBasesMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBaseMarketQuery>> name={"BasesMarket"} {...props}/>;

export const useBasesMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBaseMarketQuery>>()
export const useBasesMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IBaseMarketQuery>>()

export interface IBasesMarketListSourceProps extends Partial<IListProps<IBaseMarket>> {
	sourceProps?: Partial<IBasesMarketSourceProps>;
}

export interface IBasesMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBaseMarketQuery>, IQueryOrderBy<IBaseMarketQuery>, IBasesMarketQueryParams>> {
}

export const BasesMarketSourceControlProvider: FC<IBasesMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBaseMarketQuery>, IQueryOrderBy<IBaseMarketQuery>> name={"BasesMarket"} {...props}/>;

export const BasesMarketListSource: FC<IBasesMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <BasesMarketSource
		{...sourceProps}
	>
		<List<IBaseMarket>
			{...props}
		/>
	</BasesMarketSource>;
}

export interface IBasesMarketSourceSelectProps extends IQuerySourceSelectProps<IBaseMarket> {
	toOption: IToOptionMapper<IBaseMarket>;
	sourceProps?: IBasesMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BasesMarketSourceSelect: FC<IBasesMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BasesMarketSource {...sourceProps}>
					<QuerySourceSelect<IBaseMarket> {...props}/>
				</BasesMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BasesMarket.title"}
					size={props.size}
					tooltip={"common.selection.BasesMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BasesMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BasesMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBasesMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IBaseMarket>> {
}

export const BasesMarketSelectionProvider: FC<IBasesMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IBaseMarket> {...props}/>;
};

export const useBasesMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BasesMarketApiLink]);
};

export const useBasesMarketOptionalSelectionContext = () => useOptionalSelectionContext<IBaseMarket>();
export const useBasesMarketSelectionContext = () => useSelectionContext<IBaseMarket>();
