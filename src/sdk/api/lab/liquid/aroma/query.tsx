/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidAromaSource} from "@/puff-smith/service/liquid/aroma/interface";
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

export const AromaApiLink = "/api/lab/liquid/aroma/query";
export const AromaCountApiLink = "/api/lab/liquid/aroma/query/count";

export type IAromaQueryParams = any;

export const useAromaQuery = createQueryHook<ISourceQuery<ILiquidAromaSource>, ISourceItem<ILiquidAromaSource>[], IAromaQueryParams>(AromaApiLink, "post");
export const useAromaCountQuery = createQueryHook<ISourceQuery<ILiquidAromaSource>, number, IAromaQueryParams>(AromaCountApiLink, "post");

export const useAromaSource = () => useSourceContext<ISourceItem<ILiquidAromaSource>>()

export interface IAromaSourceContext extends ISourceContext<ISourceItem<ILiquidAromaSource>> {
}

export interface IAromaSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ILiquidAromaSource>>> {
}

export const AromaSourceConsumer: FC<IAromaSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaProviderProps extends Partial<ISourceProviderProps<ISourceItem<ILiquidAromaSource>>> {
}

export const AromaProvider: FC<IAromaProviderProps> = props => {
	return <SourceProvider<ISourceItem<ILiquidAromaSource>>
		name={"Aroma"}
		useQuery={useAromaQuery}
		useCountQuery={useAromaCountQuery}
		{...props}
	/>;
};

export const toAromaLink = (queryParams?: IAromaQueryParams) => toLink(AromaApiLink, queryParams);
export const useAromaLink = () => toAromaLink;

export const useAromaPromise = createPromiseHook<ISourceQuery<ILiquidAromaSource>, ISourceItem<ILiquidAromaSource>, IAromaQueryParams>(AromaApiLink, "post");
export const AromaPromise = createPromise<ISourceQuery<ILiquidAromaSource>, ISourceItem<ILiquidAromaSource>, IAromaQueryParams>(AromaApiLink, "post");

export interface IAromaFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ILiquidAromaSource>>>> {
}

export const AromaFilterProvider: FC<IAromaFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ILiquidAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ILiquidAromaSource>>>()
export const useAromaFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ILiquidAromaSource>>>()

export interface IAromaProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ILiquidAromaSource>>> {
}

export const AromaProviderFilter: FC<IAromaProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Aroma'}
/>;

export interface IAromaOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ILiquidAromaSource>>>> {
}

export const AromaOrderByProvider: FC<IAromaOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ILiquidAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidAromaSource>>>()
export const useAromaOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidAromaSource>>>()

export interface IAromaProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ILiquidAromaSource>>, IQueryOrderBy<ISourceQuery<ILiquidAromaSource>>, IAromaQueryParams>> {
}

export const AromaProviderControl: FC<IAromaProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ILiquidAromaSource>>, IQueryOrderBy<ISourceQuery<ILiquidAromaSource>>> name={"Aroma"} {...props}/>;

export interface IAromaListSourceProps extends Partial<IListProps<ISourceItem<ILiquidAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaListSource: FC<IAromaListSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ILiquidAromaSource>>
			{...props}
		/>
	</AromaProvider>;
}

export interface IAromaInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ILiquidAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaInfiniteListSource: FC<IAromaInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ILiquidAromaSource>>
			{...props}
		/>
	</AromaProvider>;
}

export interface IAromaSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ILiquidAromaSource>> {
	toOption: IToOptionMapper<ISourceItem<ILiquidAromaSource>>;
	providerProps?: Partial<IAromaProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaSourceSelect: FC<IAromaSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ILiquidAromaSource>> {...props}/>
				</AromaProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Aroma.title"}
					size={props.size}
					tooltip={"common.selection.Aroma.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<AromaProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ILiquidAromaSource>>> {
}

export const AromaSelectionProvider: FC<IAromaSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ILiquidAromaSource>> {...props}/>
}

export const useAromaCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaCountApiLink]);
};

export const useAromaQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AromaApiLink]),
		withCount && queryClient.invalidateQueries([AromaCountApiLink]),
	]);
};

export const useAromaOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ILiquidAromaSource>>();
export const useAromaSelectionContext = () => useSelectionContext<ISourceItem<ILiquidAromaSource>>();
