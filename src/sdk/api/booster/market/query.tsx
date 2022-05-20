/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterMarket, IBoosterMarketQuery} from "@/puff-smith/service/booster/market/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const BoosterMarketApiLink = "/api/booster/market/query";

export type IBoosterMarketQueryParams = undefined;

export const useBoosterMarketQuery = createQueryHook<IBoosterMarketQuery, IBoosterMarket[], IBoosterMarketQueryParams>(BoosterMarketApiLink, "post");

export const useBoosterMarketSource = () => useSourceContext<IBoosterMarket>();

export interface IBoosterMarketSourceContext extends ISourceContext<IBoosterMarket> {
}

export interface IBoosterMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IBoosterMarket>> {
}

export const BoosterMarketSourceConsumer: FC<IBoosterMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterMarketSourceProps extends Partial<ISourceProviderProps<IBoosterMarket>> {
}

export const BoosterMarketSource: FC<IBoosterMarketSourceProps> = props => {
	return <SourceProvider<IBoosterMarket>
		name={"BoosterMarket"}
		useQuery={useBoosterMarketQuery}
		{...props}
	/>;
};

export const toBoosterMarketLink = (queryParams?: IBoosterMarketQueryParams) => toLink(BoosterMarketApiLink, queryParams);
export const useBoosterMarketLink = () => toBoosterMarketLink;

export const useBoosterMarketPromise = createPromiseHook<IBoosterMarketQuery, IBoosterMarket, IBoosterMarketQueryParams>(BoosterMarketApiLink, "post");
export const BoosterMarketPromise = createPromise<IBoosterMarketQuery, IBoosterMarket, IBoosterMarketQueryParams>(BoosterMarketApiLink, "post");

export interface IBoosterMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterMarketQuery>>> {
}

export const BoosterMarketFilterProvider: FC<IBoosterMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterMarketQuery>> name={"BoosterMarket"} {...props}/>;

export const useBoosterMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterMarketQuery>>();
export const useBoosterMarketFilterContext = () => useFilterContext<IQueryFilter<IBoosterMarketQuery>>();

export interface IBoosterMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterMarketQuery>> {
}

export const BoosterMarketSourceFilter: FC<IBoosterMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BoosterMarket"}
/>;

export interface IBoosterMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterMarketQuery>>> {
}

export const BoosterMarketOrderByProvider: FC<IBoosterMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterMarketQuery>> name={"BoosterMarket"} {...props}/>;

export const useBoosterMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterMarketQuery>>();
export const useBoosterMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterMarketQuery>>();

export interface IBoosterMarketListSourceProps extends Partial<IListProps<IBoosterMarket>> {
	sourceProps?: Partial<IBoosterMarketSourceProps>;
}

export interface IBoosterMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterMarketQuery>, IQueryOrderBy<IBoosterMarketQuery>, IBoosterMarketQueryParams>> {
}

export const BoosterMarketSourceControlProvider: FC<IBoosterMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterMarketQuery>, IQueryOrderBy<IBoosterMarketQuery>> name={"BoosterMarket"} {...props}/>;

export const BoosterMarketListSource: FC<IBoosterMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <BoosterMarketSource
		{...sourceProps}
	>
		<List<IBoosterMarket>
			{...props}
		/>
	</BoosterMarketSource>;
}

export interface IBoosterMarketSourceSelectProps extends IQuerySourceSelectProps<IBoosterMarket> {
	toOption: IToOptionMapper<IBoosterMarket>;
	sourceProps?: IBoosterMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterMarketSourceSelect: FC<IBoosterMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterMarketSource {...sourceProps}>
					<QuerySourceSelect<IBoosterMarket> {...props}/>
				</BoosterMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BoosterMarket.title"}
					size={props.size}
					tooltip={"common.selection.BoosterMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BoosterMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoosterMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBoosterMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IBoosterMarket>> {
}

export const BoosterMarketSelectionProvider: FC<IBoosterMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IBoosterMarket> {...props}/>;
}

export const useBoosterMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterMarketApiLink]);
};

export const useBoosterMarketOptionalSelectionContext = () => useOptionalSelectionContext<IBoosterMarket>();
export const useBoosterMarketSelectionContext = () => useSelectionContext<IBoosterMarket>();
