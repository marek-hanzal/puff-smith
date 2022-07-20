/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
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

export const LiquidApiLink = "/api/lab/liquid/query";
export const LiquidCountApiLink = "/api/lab/liquid/query/count";

export type ILiquidQueryParams = any;

export const useLiquidQuery = createQueryHook<ISourceQuery<ILiquidSource>, ISourceItem<ILiquidSource>[], ILiquidQueryParams>(LiquidApiLink, "post");
export const useLiquidCountQuery = createQueryHook<ISourceQuery<ILiquidSource>, number, ILiquidQueryParams>(LiquidCountApiLink, "post");

export const useLiquidSource = () => useSourceContext<ISourceItem<ILiquidSource>>()

export interface ILiquidSourceContext extends ISourceContext<ISourceItem<ILiquidSource>> {
}

export interface ILiquidSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ILiquidSource>>> {
}

export const LiquidSourceConsumer: FC<ILiquidSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ILiquidProviderProps extends Partial<ISourceProviderProps<ISourceItem<ILiquidSource>>> {
}

export const LiquidProvider: FC<ILiquidProviderProps> = props => {
	return <SourceProvider<ISourceItem<ILiquidSource>>
		name={"Liquid"}
		useQuery={useLiquidQuery}
		useCountQuery={useLiquidCountQuery}
		{...props}
	/>;
};

export const toLiquidLink = (queryParams?: ILiquidQueryParams) => toLink(LiquidApiLink, queryParams);
export const useLiquidLink = () => toLiquidLink;

export const useLiquidPromise = createPromiseHook<ISourceQuery<ILiquidSource>, ISourceItem<ILiquidSource>, ILiquidQueryParams>(LiquidApiLink, "post");
export const LiquidPromise = createPromise<ISourceQuery<ILiquidSource>, ISourceItem<ILiquidSource>, ILiquidQueryParams>(LiquidApiLink, "post");

export interface ILiquidFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ILiquidSource>>>> {
}

export const LiquidFilterProvider: FC<ILiquidFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ILiquidSource>>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ILiquidSource>>>()
export const useLiquidFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ILiquidSource>>>()

export interface ILiquidProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ILiquidSource>>> {
}

export const LiquidProviderFilter: FC<ILiquidProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Liquid'}
/>;

export interface ILiquidOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ILiquidSource>>>> {
}

export const LiquidOrderByProvider: FC<ILiquidOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ILiquidSource>>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidSource>>>()
export const useLiquidOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidSource>>>()

export interface ILiquidProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ILiquidSource>>, IQueryOrderBy<ISourceQuery<ILiquidSource>>, ILiquidQueryParams>> {
}

export const LiquidProviderControl: FC<ILiquidProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ILiquidSource>>, IQueryOrderBy<ISourceQuery<ILiquidSource>>> name={"Liquid"} {...props}/>;

export interface ILiquidListSourceProps extends Partial<IListProps<ISourceItem<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidListSource: FC<ILiquidListSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ILiquidSource>>
			{...props}
		/>
	</LiquidProvider>;
}

export interface ILiquidInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ILiquidSource>>> {
	providerProps?: Partial<ILiquidProviderProps>;
}

export const LiquidInfiniteListSource: FC<ILiquidInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <LiquidProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ILiquidSource>>
			{...props}
		/>
	</LiquidProvider>;
}

export interface ILiquidSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ILiquidSource>> {
	toOption: IToOptionMapper<ISourceItem<ILiquidSource>>;
	providerProps?: Partial<ILiquidProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const LiquidSourceSelect: FC<ILiquidSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<LiquidProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ILiquidSource>> {...props}/>
				</LiquidProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Liquid.title"}
					size={props.size}
					tooltip={"common.selection.Liquid.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<LiquidProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</LiquidProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ILiquidSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ILiquidSource>>> {
}

export const LiquidSelectionProvider: FC<ILiquidSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ILiquidSource>> {...props}/>
}

export const useLiquidCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([LiquidCountApiLink]);
};

export const useLiquidQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([LiquidApiLink]),
		withCount && queryClient.invalidateQueries([LiquidCountApiLink]),
	]);
};

export const useLiquidOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ILiquidSource>>();
export const useLiquidSelectionContext = () => useSelectionContext<ISourceItem<ILiquidSource>>();
