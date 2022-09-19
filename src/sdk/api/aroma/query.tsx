/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IDrawerContext, IQueryFilter, IQueryOrderBy, ISelectionContext, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	BubbleButton,
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	DrawerContext,
	Filter,
	FilterProvider,
	IDrawerButtonProps,
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
	ITableProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionContext,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	Table,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalFormItemContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {CheckOutline} from "antd-mobile-icons";
import {ConsumerProps, FC, ReactNode} from "react";

export const AromaApiLink = "/api/aroma/query";
export const AromaCountApiLink = "/api/aroma/query/count";

export type IAromaQueryParams = any;

export const useAromaQuery = createQueryHook<ISourceQuery<IAromaSource>, ISourceItem<IAromaSource>[], IAromaQueryParams>(AromaApiLink, "post");
export const useAromaCountQuery = createQueryHook<ISourceQuery<IAromaSource>, number, IAromaQueryParams>(AromaCountApiLink, "post");

export const useAromaSource = () => useSourceContext<ISourceItem<IAromaSource>>();

export interface IAromaSourceContext extends ISourceContext<ISourceItem<IAromaSource>> {
}

export interface IAromaSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaSource>>> {
}

export const AromaSourceConsumer: FC<IAromaSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaSource>>> {
}

export const AromaProvider: FC<IAromaProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaSource>>
		name={"Aroma"}
		useQuery={useAromaQuery}
		useCountQuery={useAromaCountQuery}
		{...props}
	/>;
};

export const toAromaLink = (queryParams?: IAromaQueryParams) => toLink(AromaApiLink, queryParams);
export const useAromaLink = () => toAromaLink;

export const useAromaPromise = createPromiseHook<ISourceQuery<IAromaSource>, ISourceItem<IAromaSource>, IAromaQueryParams>(AromaApiLink, "post");
export const AromaPromise = createPromise<ISourceQuery<IAromaSource>, ISourceItem<IAromaSource>, IAromaQueryParams>(AromaApiLink, "post");

export interface IAromaFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaSource>>>> {
}

export const AromaFilterProvider: FC<IAromaFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaSource>>>();
export const useAromaFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaSource>>>();

export interface IAromaProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaSource>>> {
}

export const AromaProviderFilter: FC<IAromaProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Aroma"}
/>;

export interface IAromaOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaSource>>>> {
}

export const AromaOrderByProvider: FC<IAromaOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaSource>>>();
export const useAromaOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaSource>>>();

export interface IAromaProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaSource>>, IQueryOrderBy<ISourceQuery<IAromaSource>>, IAromaQueryParams>> {
}

export const AromaProviderControl: FC<IAromaProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAromaSource>>, IQueryOrderBy<ISourceQuery<IAromaSource>>> name={"Aroma"} {...props}/>;

export interface IAromaTableSourceProps extends Partial<ITableProps<ISourceItem<IAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaTableSource: FC<IAromaTableSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IAromaSource>>
			translation={AromaApiLink}
			{...props}
		/>
	</AromaProvider>;
}

export interface IAromaListSourceProps extends Partial<IListProps<ISourceItem<IAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaListSource: FC<IAromaListSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IAromaSource>>
			{...props}
		/>
	</AromaProvider>;
}

export interface IAromaInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaInfiniteListSource: FC<IAromaInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IAromaSource>>
			{...props}
		/>
	</AromaProvider>;
}

export interface IAromaSourceSelection {
	selectionContext: ISelectionContext<ISourceItem<IAromaSource>>;
	drawerContext: IDrawerContext;
}

export interface IAromaSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaSource>>;
	providerProps?: Partial<IAromaProviderProps>;
	selectionList?: (context: IAromaSourceSelection) => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
	selectionProvider?: IAromaProviderControlProps;
	selectionDrawer?: IDrawerButtonProps;
}

export const AromaSourceSelect: FC<IAromaSourceSelectProps> = ({providerProps, selectionList, selectionProps, selectionProvider, selectionDrawer, ...props}) => {
	const formItem = useOptionalFormItemContext();
	return selectionList ? <SelectionProvider<ISourceItem<IAromaSource>>
		type={"single"}
		onSelection={({selected}) => {
			formItem?.setValue(selected);
			formItem?.setErrors([]);
		}}
		{...selectionProps}
	>
		<SelectionContext.Consumer>
			{selectionContext => <>
				<Input.Group>
					<Row>
						<Col flex={"auto"}>
							<AromaProvider {...providerProps}>
								<QuerySourceSelect<ISourceItem<IAromaSource>>
									onSelect={({entity}) => selectionContext.item(entity)}
									onDeselect={({entity}) => selectionContext.deItem(entity)}
									onClear={() => selectionContext.clear()}
									{...props}
								/>
							</AromaProvider>
						</Col>
						<Col push={0}>
							<DrawerButton
								icon={<SelectOutlined/>}
								title={"common.selection.Aroma.title"}
								size={props.size}
								tooltip={"common.selection.Aroma.title.tooltip"}
								width={800}
								type={"text"}
								{...selectionDrawer}
							>
								<DrawerContext.Consumer>
									{drawerContext => <AromaProviderControl
										defaultSize={10}
										{...selectionProvider}
									>
										<BubbleButton
											icon={<CheckOutline fontSize={32}/>}
											onClick={() => {
												selectionContext.handleSelection();
												drawerContext.close();
											}}
										/>
										{selectionList({
											selectionContext,
											drawerContext,
										})}
									</AromaProviderControl>}
								</DrawerContext.Consumer>
							</DrawerButton>
						</Col>
					</Row>
				</Input.Group>
			</>}
		</SelectionContext.Consumer>
	</SelectionProvider> : <AromaProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<IAromaSource>> {...props}/>
	</AromaProvider>;
};

export interface IAromaSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaSource>>> {
}

export const AromaSelectionProvider: FC<IAromaSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaSource>> {...props}/>;
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

export const useAromaOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaSource>>();
export const useAromaSelectionContext = () => useSelectionContext<ISourceItem<IAromaSource>>();
