/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/interface";
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

export const BuildLiquidTasteRatingApiLink = "/api/lab/build/liquid/taste/query";
export const BuildLiquidTasteRatingCountApiLink = "/api/lab/build/liquid/taste/query/count";

export type IBuildLiquidTasteRatingQueryParams = any;

export const useBuildLiquidTasteRatingQuery = createQueryHook<ISourceQuery<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>[], IBuildLiquidTasteRatingQueryParams>(BuildLiquidTasteRatingApiLink, "post");
export const useBuildLiquidTasteRatingCountQuery = createQueryHook<ISourceQuery<IBuildLiquidTasteRatingSource>, number, IBuildLiquidTasteRatingQueryParams>(BuildLiquidTasteRatingCountApiLink, "post");

export const useBuildLiquidTasteRatingSource = () => useSourceContext<ISourceItem<IBuildLiquidTasteRatingSource>>()

export interface IBuildLiquidTasteRatingSourceContext extends ISourceContext<ISourceItem<IBuildLiquidTasteRatingSource>> {
}

export interface IBuildLiquidTasteRatingSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBuildLiquidTasteRatingSource>>> {
}

export const BuildLiquidTasteRatingSourceConsumer: FC<IBuildLiquidTasteRatingSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBuildLiquidTasteRatingProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBuildLiquidTasteRatingSource>>> {
}

export const BuildLiquidTasteRatingProvider: FC<IBuildLiquidTasteRatingProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBuildLiquidTasteRatingSource>>
		name={"BuildLiquidTasteRating"}
		useQuery={useBuildLiquidTasteRatingQuery}
		useCountQuery={useBuildLiquidTasteRatingCountQuery}
		{...props}
	/>;
};

export const toBuildLiquidTasteRatingLink = (queryParams?: IBuildLiquidTasteRatingQueryParams) => toLink(BuildLiquidTasteRatingApiLink, queryParams);
export const useBuildLiquidTasteRatingLink = () => toBuildLiquidTasteRatingLink;

export const useBuildLiquidTasteRatingPromise = createPromiseHook<ISourceQuery<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>, IBuildLiquidTasteRatingQueryParams>(BuildLiquidTasteRatingApiLink, "post");
export const BuildLiquidTasteRatingPromise = createPromise<ISourceQuery<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>, IBuildLiquidTasteRatingQueryParams>(BuildLiquidTasteRatingApiLink, "post");

export interface IBuildLiquidTasteRatingFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBuildLiquidTasteRatingSource>>>> {
}

export const BuildLiquidTasteRatingFilterProvider: FC<IBuildLiquidTasteRatingFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBuildLiquidTasteRatingSource>>> name={"BuildLiquidTasteRating"} {...props}/>;

export const useBuildLiquidTasteRatingOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBuildLiquidTasteRatingSource>>>()
export const useBuildLiquidTasteRatingFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBuildLiquidTasteRatingSource>>>()

export interface IBuildLiquidTasteRatingProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBuildLiquidTasteRatingSource>>> {
}

export const BuildLiquidTasteRatingProviderFilter: FC<IBuildLiquidTasteRatingProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.BuildLiquidTasteRating'}
/>;

export interface IBuildLiquidTasteRatingOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBuildLiquidTasteRatingSource>>>> {
}

export const BuildLiquidTasteRatingOrderByProvider: FC<IBuildLiquidTasteRatingOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBuildLiquidTasteRatingSource>>> name={"BuildLiquidTasteRating"} {...props}/>;

export const useBuildLiquidTasteRatingOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBuildLiquidTasteRatingSource>>>()
export const useBuildLiquidTasteRatingOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBuildLiquidTasteRatingSource>>>()

export interface IBuildLiquidTasteRatingProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBuildLiquidTasteRatingSource>>, IQueryOrderBy<ISourceQuery<IBuildLiquidTasteRatingSource>>, IBuildLiquidTasteRatingQueryParams>> {
}

export const BuildLiquidTasteRatingProviderControl: FC<IBuildLiquidTasteRatingProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IBuildLiquidTasteRatingSource>>, IQueryOrderBy<ISourceQuery<IBuildLiquidTasteRatingSource>>> name={"BuildLiquidTasteRating"} {...props}/>;

export interface IBuildLiquidTasteRatingListSourceProps extends Partial<IListProps<ISourceItem<IBuildLiquidTasteRatingSource>>> {
	providerProps?: Partial<IBuildLiquidTasteRatingProviderProps>;
}

export const BuildLiquidTasteRatingListSource: FC<IBuildLiquidTasteRatingListSourceProps> = ({providerProps, ...props}) => {
	return <BuildLiquidTasteRatingProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IBuildLiquidTasteRatingSource>>
			{...props}
		/>
	</BuildLiquidTasteRatingProvider>;
}

export interface IBuildLiquidTasteRatingInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IBuildLiquidTasteRatingSource>>> {
	providerProps?: Partial<IBuildLiquidTasteRatingProviderProps>;
}

export const BuildLiquidTasteRatingInfiniteListSource: FC<IBuildLiquidTasteRatingInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <BuildLiquidTasteRatingProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IBuildLiquidTasteRatingSource>>
			{...props}
		/>
	</BuildLiquidTasteRatingProvider>;
}

export interface IBuildLiquidTasteRatingSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBuildLiquidTasteRatingSource>> {
	toOption: IToOptionMapper<ISourceItem<IBuildLiquidTasteRatingSource>>;
	providerProps?: Partial<IBuildLiquidTasteRatingProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BuildLiquidTasteRatingSourceSelect: FC<IBuildLiquidTasteRatingSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BuildLiquidTasteRatingProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBuildLiquidTasteRatingSource>> {...props}/>
				</BuildLiquidTasteRatingProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BuildLiquidTasteRating.title"}
					size={props.size}
					tooltip={"common.selection.BuildLiquidTasteRating.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<BuildLiquidTasteRatingProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BuildLiquidTasteRatingProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBuildLiquidTasteRatingSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBuildLiquidTasteRatingSource>>> {
}

export const BuildLiquidTasteRatingSelectionProvider: FC<IBuildLiquidTasteRatingSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBuildLiquidTasteRatingSource>> {...props}/>
}

export const useBuildLiquidTasteRatingCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BuildLiquidTasteRatingCountApiLink]);
};

export const useBuildLiquidTasteRatingQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([BuildLiquidTasteRatingApiLink]),
		withCount && queryClient.invalidateQueries([BuildLiquidTasteRatingCountApiLink]),
	]);
};

export const useBuildLiquidTasteRatingOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBuildLiquidTasteRatingSource>>();
export const useBuildLiquidTasteRatingSelectionContext = () => useSelectionContext<ISourceItem<IBuildLiquidTasteRatingSource>>();
