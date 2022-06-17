/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterMarketSource} from "@/puff-smith/service/booster/market/interface";
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

export const BoosterMarketApiLink = "/api/market/booster/query";
export const BoosterMarketCountApiLink = "/api/market/booster/query/count";

export type IBoosterMarketQueryParams = any;

export const useBoosterMarketQuery = createQueryHook<ISourceQuery<IBoosterMarketSource>, ISourceItem<IBoosterMarketSource>[], IBoosterMarketQueryParams>(BoosterMarketApiLink, "post");
export const useBoosterMarketCountQuery = createQueryHook<ISourceQuery<IBoosterMarketSource>, number, IBoosterMarketQueryParams>(BoosterMarketCountApiLink, "post");

export const useBoosterMarketSource = () => useSourceContext<ISourceItem<IBoosterMarketSource>>();

export interface IBoosterMarketSourceContext extends ISourceContext<ISourceItem<IBoosterMarketSource>> {
}

export interface IBoosterMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBoosterMarketSource>>> {
}

export const BoosterMarketSourceConsumer: FC<IBoosterMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBoosterMarketSource>>> {
}

export const BoosterMarketProvider: FC<IBoosterMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBoosterMarketSource>>
		name={"BoosterMarket"}
		useQuery={useBoosterMarketQuery}
		useCountQuery={useBoosterMarketCountQuery}
		{...props}
	/>;
};

export const toBoosterMarketLink = (queryParams?: IBoosterMarketQueryParams) => toLink(BoosterMarketApiLink, queryParams);
export const useBoosterMarketLink = () => toBoosterMarketLink;

export const useBoosterMarketPromise = createPromiseHook<ISourceQuery<IBoosterMarketSource>, ISourceItem<IBoosterMarketSource>, IBoosterMarketQueryParams>(BoosterMarketApiLink, "post");
export const BoosterMarketPromise = createPromise<ISourceQuery<IBoosterMarketSource>, ISourceItem<IBoosterMarketSource>, IBoosterMarketQueryParams>(BoosterMarketApiLink, "post");

export interface IBoosterMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBoosterMarketSource>>>> {
}

export const BoosterMarketFilterProvider: FC<IBoosterMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBoosterMarketSource>>> name={"BoosterMarket"} {...props}/>;

export const useBoosterMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBoosterMarketSource>>>();
export const useBoosterMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBoosterMarketSource>>>();

export interface IBoosterMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBoosterMarketSource>>> {
}

export const BoosterMarketProviderFilter: FC<IBoosterMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BoosterMarket"}
/>;

export interface IBoosterMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBoosterMarketSource>>>> {
}

export const BoosterMarketOrderByProvider: FC<IBoosterMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBoosterMarketSource>>> name={"BoosterMarket"} {...props}/>;

export const useBoosterMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterMarketSource>>>();
export const useBoosterMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterMarketSource>>>();

export interface IBoosterMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBoosterMarketSource>>, IQueryOrderBy<ISourceQuery<IBoosterMarketSource>>, IBoosterMarketQueryParams>> {
}

export const BoosterMarketProviderControl: FC<IBoosterMarketProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IBoosterMarketSource>>, IQueryOrderBy<ISourceQuery<IBoosterMarketSource>>> name={"BoosterMarket"} {...props}/>;

export interface IBoosterMarketListSourceProps extends Partial<IListProps<ISourceItem<IBoosterMarketSource>>> {
	providerProps?: Partial<IBoosterMarketProviderProps>;
}

export const BoosterMarketListSource: FC<IBoosterMarketListSourceProps> = ({providerProps, ...props}) => {
	return <BoosterMarketProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IBoosterMarketSource>>
			{...props}
		/>
	</BoosterMarketProvider>;
}

export interface IBoosterMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBoosterMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IBoosterMarketSource>>;
	providerProps?: Partial<IBoosterMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterMarketSourceSelect: FC<IBoosterMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBoosterMarketSource>> {...props}/>
				</BoosterMarketProvider>
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
					<BoosterMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoosterMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBoosterMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBoosterMarketSource>>> {
}

export const BoosterMarketSelectionProvider: FC<IBoosterMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBoosterMarketSource>> {...props}/>;
}

export const useBoosterMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterMarketApiLink]);
};

export const useBoosterMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterMarketCountApiLink]);
};

export const useBoosterMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBoosterMarketSource>>();
export const useBoosterMarketSelectionContext = () => useSelectionContext<ISourceItem<IBoosterMarketSource>>();
