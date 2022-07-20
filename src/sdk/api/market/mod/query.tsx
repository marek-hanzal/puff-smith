/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModMarketSource} from "@/puff-smith/service/mod/market/interface";
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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";

export const ModMarketApiLink = "/api/market/mod/query";
export const ModMarketCountApiLink = "/api/market/mod/query/count";

export type IModMarketQueryParams = any;

export const useModMarketQuery = createQueryHook<ISourceQuery<IModMarketSource>, ISourceItem<IModMarketSource>[], IModMarketQueryParams>(ModMarketApiLink, "post");
export const useModMarketCountQuery = createQueryHook<ISourceQuery<IModMarketSource>, number, IModMarketQueryParams>(ModMarketCountApiLink, "post");

export const useModMarketSource = () => useSourceContext<ISourceItem<IModMarketSource>>()

export interface IModMarketSourceContext extends ISourceContext<ISourceItem<IModMarketSource>> {
}

export interface IModMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IModMarketSource>>> {
}

export const ModMarketSourceConsumer: FC<IModMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IModMarketSource>>> {
}

export const ModMarketProvider: FC<IModMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IModMarketSource>>
		name={"ModMarket"}
		useQuery={useModMarketQuery}
		useCountQuery={useModMarketCountQuery}
		{...props}
	/>;
};

export const toModMarketLink = (queryParams?: IModMarketQueryParams) => toLink(ModMarketApiLink, queryParams);
export const useModMarketLink = () => toModMarketLink;

export const useModMarketPromise = createPromiseHook<ISourceQuery<IModMarketSource>, ISourceItem<IModMarketSource>, IModMarketQueryParams>(ModMarketApiLink, "post");
export const ModMarketPromise = createPromise<ISourceQuery<IModMarketSource>, ISourceItem<IModMarketSource>, IModMarketQueryParams>(ModMarketApiLink, "post");

export interface IModMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IModMarketSource>>>> {
}

export const ModMarketFilterProvider: FC<IModMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IModMarketSource>>> name={"ModMarket"} {...props}/>;

export const useModMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IModMarketSource>>>()
export const useModMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IModMarketSource>>>()

export interface IModMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IModMarketSource>>> {
}

export const ModMarketProviderFilter: FC<IModMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.ModMarket'}
/>;

export interface IModMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IModMarketSource>>>> {
}

export const ModMarketOrderByProvider: FC<IModMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IModMarketSource>>> name={"ModMarket"} {...props}/>;

export const useModMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IModMarketSource>>>()
export const useModMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IModMarketSource>>>()

export interface IModMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IModMarketSource>>, IQueryOrderBy<ISourceQuery<IModMarketSource>>, IModMarketQueryParams>> {
}

export const ModMarketProviderControl: FC<IModMarketProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IModMarketSource>>, IQueryOrderBy<ISourceQuery<IModMarketSource>>> name={"ModMarket"} {...props}/>;

export interface IModMarketListSourceProps extends Partial<IListProps<ISourceItem<IModMarketSource>>> {
	providerProps?: Partial<IModMarketProviderProps>;
}

export const ModMarketListSource: FC<IModMarketListSourceProps> = ({providerProps, ...props}) => {
	return <ModMarketProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IModMarketSource>>
			{...props}
		/>
	</ModMarketProvider>;
}

export interface IModMarketInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IModMarketSource>>> {
	providerProps?: Partial<IModMarketProviderProps>;
}

export const ModMarketInfiniteListSource: FC<IModMarketInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <ModMarketProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IModMarketSource>>
			{...props}
		/>
	</ModMarketProvider>;
}

export interface IModMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IModMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IModMarketSource>>;
	providerProps?: Partial<IModMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModMarketSourceSelect: FC<IModMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IModMarketSource>> {...props}/>
				</ModMarketProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.ModMarket.title"}
					size={props.size}
					tooltip={"common.selection.ModMarket.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<ModMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IModMarketSource>>> {
}

export const ModMarketSelectionProvider: FC<IModMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IModMarketSource>> {...props}/>
}

export const useModMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModMarketCountApiLink]);
};

export const useModMarketQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([ModMarketApiLink]),
		withCount && queryClient.invalidateQueries([ModMarketCountApiLink]),
	]);
};

export const useModMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IModMarketSource>>();
export const useModMarketSelectionContext = () => useSelectionContext<ISourceItem<IModMarketSource>>();
