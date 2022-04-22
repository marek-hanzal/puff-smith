/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModMarket, IModMarketQuery} from "@/puff-smith/service/mod/market";
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

export const ModsMarketApiLink = "/api/mod/market/query";

export type IModsMarketQueryParams = undefined;

export const useModsMarketQuery = createQueryHook<IModMarketQuery, IQueryResult<IModMarket>, IModsMarketQueryParams>(ModsMarketApiLink, "post");

export const useModsMarketSource = () => useSourceContext<IModMarket>();

export interface IModsMarketSourceContext extends ISourceContext<IModMarket> {
}

export interface IModsMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IModMarket>> {
}

export const ModsMarketSourceConsumer: FC<IModsMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModsMarketSourceProps extends Partial<ISourceProviderProps<IModMarket>> {
}

export const ModsMarketSource: FC<IModsMarketSourceProps> = props => {
	return <SourceProvider<IModMarket>
		name={"ModsMarket"}
		useQuery={useModsMarketQuery}
		{...props}
	/>;
};

export const toModsMarketLink = (queryParams?: IModsMarketQueryParams) => toLink(ModsMarketApiLink, queryParams);
export const useModsMarketLink = () => toModsMarketLink;

export const useModsMarketPromise = createPromiseHook<IModMarketQuery, IModMarket, IModsMarketQueryParams>(ModsMarketApiLink, "post");
export const ModsMarketPromise = createPromise<IModMarketQuery, IModMarket, IModsMarketQueryParams>(ModsMarketApiLink, "post");

export interface IModsMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModMarketQuery>>> {
}

export const ModsMarketFilterProvider: FC<IModsMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModMarketQuery>> name={"ModsMarket"} {...props}/>;

export const useModsMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModMarketQuery>>();
export const useModsMarketFilterContext = () => useFilterContext<IQueryFilter<IModMarketQuery>>();

export interface IModsMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModMarketQuery>> {
}

export const ModsMarketSourceFilter: FC<IModsMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.ModsMarket"}
/>;

export interface IModsMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IModMarketQuery>>> {
}

export const ModsMarketOrderByProvider: FC<IModsMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IModMarketQuery>> name={"ModsMarket"} {...props}/>;

export const useModsMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IModMarketQuery>>();
export const useModsMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IModMarketQuery>>();

export interface IModsMarketListSourceProps extends Partial<IListProps<IModMarket>> {
	sourceProps?: Partial<IModsMarketSourceProps>;
}

export interface IModsMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModMarketQuery>, IQueryOrderBy<IModMarketQuery>, IModsMarketQueryParams>> {
}

export const ModsMarketSourceControlProvider: FC<IModsMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModMarketQuery>, IQueryOrderBy<IModMarketQuery>> name={"ModsMarket"} {...props}/>;

export const ModsMarketListSource: FC<IModsMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <ModsMarketSource
		{...sourceProps}
	>
		<List<IModMarket>
			{...props}
		/>
	</ModsMarketSource>;
};

export interface IModsMarketSourceSelectProps extends IQuerySourceSelectProps<IModMarket> {
	toOption: IToOptionMapper<IModMarket>;
	sourceProps?: IModsMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModsMarketSourceSelect: FC<IModsMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModsMarketSource {...sourceProps}>
					<QuerySourceSelect<IModMarket> {...props}/>
				</ModsMarketSource>
			</Col>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.ModsMarket.title"}
					tooltip={"common.selection.ModsMarket.title.tooltip"}
					width={800}
				>
					<ModsMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModsMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useModsMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModsMarketApiLink]);
};

export const useModsMarketOptionalSelectionContext = () => useOptionalSelectionContext<IModMarket>();
export const useModsMarketSelectionContext = () => useSelectionContext<IModMarket>();
