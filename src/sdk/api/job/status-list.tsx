/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
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
import {ConsumerProps, FC, ReactNode, useRef} from "react";

export const StatusListApiLink = "/api/job/status-list";
export const StatusListCountApiLink = "/api/job/status-list/count";

export type IStatusListQueryParams = any;

export const useStatusListQuery = createQueryHook<ISourceQuery<IJobStatusSource>, ISourceItem<IJobStatusSource>[], IStatusListQueryParams>(StatusListApiLink, "post");
export const useStatusListCountQuery = createQueryHook<ISourceQuery<IJobStatusSource>, number, IStatusListQueryParams>(StatusListCountApiLink, "post");

export const useStatusListSource = () => useSourceContext<ISourceItem<IJobStatusSource>>();

export interface IStatusListSourceContext extends ISourceContext<ISourceItem<IJobStatusSource>> {
}

export interface IStatusListSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IJobStatusSource>>> {
}

export const StatusListSourceConsumer: FC<IStatusListSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IStatusListProviderProps extends Partial<ISourceProviderProps<ISourceItem<IJobStatusSource>>> {
}

export const StatusListProvider: FC<IStatusListProviderProps> = props => {
	return <SourceProvider<ISourceItem<IJobStatusSource>>
		name={"StatusList"}
		useQuery={useStatusListQuery}
		useCountQuery={useStatusListCountQuery}
		{...props}
	/>;
};

export const toStatusListLink = (queryParams?: IStatusListQueryParams) => toLink(StatusListApiLink, queryParams);
export const useStatusListLink = () => toStatusListLink;

export const useStatusListPromise = createPromiseHook<ISourceQuery<IJobStatusSource>, ISourceItem<IJobStatusSource>, IStatusListQueryParams>(StatusListApiLink, "post");
export const StatusListPromise = createPromise<ISourceQuery<IJobStatusSource>, ISourceItem<IJobStatusSource>, IStatusListQueryParams>(StatusListApiLink, "post");

export interface IStatusListFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IJobStatusSource>>>> {
}

export const StatusListFilterProvider: FC<IStatusListFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IJobStatusSource>>>()
export const useStatusListFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IJobStatusSource>>>()

export interface IStatusListProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IJobStatusSource>>> {
}

export const StatusListProviderFilter: FC<IStatusListProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.StatusList"}
/>;

export interface IStatusListOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IJobStatusSource>>>> {
}

export const StatusListOrderByProvider: FC<IStatusListOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IJobStatusSource>>>();
export const useStatusListOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IJobStatusSource>>>();

export interface IStatusListProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IJobStatusSource>>, IQueryOrderBy<ISourceQuery<IJobStatusSource>>, IStatusListQueryParams>> {
}

export const StatusListProviderControl: FC<IStatusListProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IJobStatusSource>>, IQueryOrderBy<ISourceQuery<IJobStatusSource>>> name={"StatusList"} {...props}/>;

export interface IStatusListTableSourceProps extends Partial<ITableProps<ISourceItem<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListTableSource: FC<IStatusListTableSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IJobStatusSource>>
			translation={StatusListApiLink}
			{...props}
		/>
	</StatusListProvider>;
}

export interface IStatusListListSourceProps extends Partial<IListProps<ISourceItem<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListListSource: FC<IStatusListListSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IJobStatusSource>>
			{...props}
		/>
	</StatusListProvider>;
}

export interface IStatusListInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListInfiniteListSource: FC<IStatusListInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IJobStatusSource>>
			{...props}
		/>
	</StatusListProvider>;
}

export interface IStatusListSourceSelection {
	selectionContext: ISelectionContext<ISourceItem<IJobStatusSource>>;
	drawerContext: IDrawerContext;
}

export interface IStatusListSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IJobStatusSource>> {
	toOption: IToOptionMapper<ISourceItem<IJobStatusSource>>;
	providerProps?: Partial<IStatusListProviderProps>;
	selectionList?: (context: IStatusListSourceSelection) => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
	selectionProvider?: IStatusListProviderControlProps;
	selectionDrawer?: IDrawerButtonProps;
}

export const StatusListSourceSelect: FC<IStatusListSourceSelectProps> = ({providerProps, selectionList, selectionProps, selectionProvider, selectionDrawer, ...props}) => {
	const formItem = useOptionalFormItemContext();
	const selection = useRef<Record<string, ISourceItem<IJobStatusSource>>>();
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<StatusListProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IJobStatusSource>> {...props}/>
				</StatusListProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.StatusList.title"}
					size={props.size}
					tooltip={"common.selection.StatusList.title.tooltip"}
					width={800}
					type={"text"}
					ghost
					{...selectionDrawer}
				>
					<DrawerContext.Consumer>
						{drawerContext => <StatusListProviderControl
							defaultSize={10}
							{...selectionProvider}
						>
							<SelectionProvider<ISourceItem<IJobStatusSource>>
								type={"single"}
								applySelection={selection.current}
								onSelection={({selected, items}) => {
									drawerContext.close();
									formItem?.setValue(selected);
									selection.current = items;
								}}
								{...selectionProps}
							>
								<SelectionContext.Consumer>
									{selectionContext => <>
										<BubbleButton
											icon={<CheckOutline fontSize={32}/>}
											onClick={() => selectionContext.handleSelection()}
										/>
										{selectionList({
											selectionContext,
											drawerContext,
										})}
									</>}
								</SelectionContext.Consumer>
							</SelectionProvider>
						</StatusListProviderControl>}
					</DrawerContext.Consumer>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IStatusListSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IJobStatusSource>>> {
}

export const StatusListSelectionProvider: FC<IStatusListSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IJobStatusSource>> {...props}/>
}

export const useStatusListCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([StatusListCountApiLink]);
};

export const useStatusListQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([StatusListApiLink]),
		withCount && queryClient.invalidateQueries([StatusListCountApiLink]),
	]);
};

export const useStatusListOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IJobStatusSource>>();
export const useStatusListSelectionContext = () => useSelectionContext<ISourceItem<IJobStatusSource>>();
