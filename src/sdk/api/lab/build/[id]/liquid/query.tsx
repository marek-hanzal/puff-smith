/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildLiquidSource} from "@/puff-smith/service/build/liquid/interface";
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

export const BuildLiquidApiLink = "/api/lab/build/[id]/liquid/query";
export const BuildLiquidCountApiLink = "/api/lab/build/[id]/liquid/query/count";

export type IBuildLiquidQueryParams = any;

export const useBuildLiquidQuery = createQueryHook<ISourceQuery<IBuildLiquidSource>, ISourceItem<IBuildLiquidSource>[], IBuildLiquidQueryParams>(BuildLiquidApiLink, "post");
export const useBuildLiquidCountQuery = createQueryHook<ISourceQuery<IBuildLiquidSource>, number, IBuildLiquidQueryParams>(BuildLiquidCountApiLink, "post");

export const useBuildLiquidSource = () => useSourceContext<ISourceItem<IBuildLiquidSource>>()

export interface IBuildLiquidSourceContext extends ISourceContext<ISourceItem<IBuildLiquidSource>> {
}

export interface IBuildLiquidSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBuildLiquidSource>>> {
}

export const BuildLiquidSourceConsumer: FC<IBuildLiquidSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBuildLiquidProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBuildLiquidSource>>> {
}

export const BuildLiquidProvider: FC<IBuildLiquidProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBuildLiquidSource>>
		name={"BuildLiquid"}
		useQuery={useBuildLiquidQuery}
		useCountQuery={useBuildLiquidCountQuery}
		{...props}
	/>;
};

export const toBuildLiquidLink = (queryParams?: IBuildLiquidQueryParams) => toLink(BuildLiquidApiLink, queryParams);
export const useBuildLiquidLink = () => toBuildLiquidLink;

export const useBuildLiquidPromise = createPromiseHook<ISourceQuery<IBuildLiquidSource>, ISourceItem<IBuildLiquidSource>, IBuildLiquidQueryParams>(BuildLiquidApiLink, "post");
export const BuildLiquidPromise = createPromise<ISourceQuery<IBuildLiquidSource>, ISourceItem<IBuildLiquidSource>, IBuildLiquidQueryParams>(BuildLiquidApiLink, "post");

export interface IBuildLiquidFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBuildLiquidSource>>>> {
}

export const BuildLiquidFilterProvider: FC<IBuildLiquidFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBuildLiquidSource>>> name={"BuildLiquid"} {...props}/>;

export const useBuildLiquidOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBuildLiquidSource>>>()
export const useBuildLiquidFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBuildLiquidSource>>>()

export interface IBuildLiquidProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBuildLiquidSource>>> {
}

export const BuildLiquidProviderFilter: FC<IBuildLiquidProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.BuildLiquid'}
/>;

export interface IBuildLiquidOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBuildLiquidSource>>>> {
}

export const BuildLiquidOrderByProvider: FC<IBuildLiquidOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBuildLiquidSource>>> name={"BuildLiquid"} {...props}/>;

export const useBuildLiquidOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBuildLiquidSource>>>()
export const useBuildLiquidOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBuildLiquidSource>>>()

export interface IBuildLiquidProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBuildLiquidSource>>, IQueryOrderBy<ISourceQuery<IBuildLiquidSource>>, IBuildLiquidQueryParams>> {
}

export const BuildLiquidProviderControl: FC<IBuildLiquidProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IBuildLiquidSource>>, IQueryOrderBy<ISourceQuery<IBuildLiquidSource>>> name={"BuildLiquid"} {...props}/>;

export interface IBuildLiquidListSourceProps extends Partial<IListProps<ISourceItem<IBuildLiquidSource>>> {
	providerProps?: Partial<IBuildLiquidProviderProps>;
}

export const BuildLiquidListSource: FC<IBuildLiquidListSourceProps> = ({providerProps, ...props}) => {
	return <BuildLiquidProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IBuildLiquidSource>>
			{...props}
		/>
	</BuildLiquidProvider>;
}

export interface IBuildLiquidInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IBuildLiquidSource>>> {
	providerProps?: Partial<IBuildLiquidProviderProps>;
}

export const BuildLiquidInfiniteListSource: FC<IBuildLiquidInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <BuildLiquidProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IBuildLiquidSource>>
			{...props}
		/>
	</BuildLiquidProvider>;
}

export interface IBuildLiquidSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBuildLiquidSource>> {
	toOption: IToOptionMapper<ISourceItem<IBuildLiquidSource>>;
	providerProps?: Partial<IBuildLiquidProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BuildLiquidSourceSelect: FC<IBuildLiquidSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BuildLiquidProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBuildLiquidSource>> {...props}/>
				</BuildLiquidProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BuildLiquid.title"}
					size={props.size}
					tooltip={"common.selection.BuildLiquid.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<BuildLiquidProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BuildLiquidProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBuildLiquidSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBuildLiquidSource>>> {
}

export const BuildLiquidSelectionProvider: FC<IBuildLiquidSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBuildLiquidSource>> {...props}/>
}

export const useBuildLiquidCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BuildLiquidCountApiLink]);
};

export const useBuildLiquidQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([BuildLiquidApiLink]),
		withCount && queryClient.invalidateQueries([BuildLiquidCountApiLink]),
	]);
};

export const useBuildLiquidOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBuildLiquidSource>>();
export const useBuildLiquidSelectionContext = () => useSelectionContext<ISourceItem<IBuildLiquidSource>>();
