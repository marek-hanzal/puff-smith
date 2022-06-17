/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
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

export const useStatusListOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IJobStatusSource>>>();
export const useStatusListFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IJobStatusSource>>>();

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

export interface IStatusListListSourceProps extends Partial<IListProps<ISourceItem<IJobStatusSource>>> {
	providerProps?: Partial<IStatusListProviderProps>;
}

export const StatusListListSource: FC<IStatusListListSourceProps> = ({providerProps, ...props}) => {
	return <StatusListProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IJobStatusSource>>
			{...props}
		/>
	</StatusListProvider>;
}

export interface IStatusListSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IJobStatusSource>> {
	toOption: IToOptionMapper<ISourceItem<IJobStatusSource>>;
	providerProps?: Partial<IStatusListProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const StatusListSourceSelect: FC<IStatusListSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
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
				>
					<StatusListProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</StatusListProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IStatusListSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IJobStatusSource>>> {
}

export const StatusListSelectionProvider: FC<IStatusListSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IJobStatusSource>> {...props}/>;
}

export const useStatusListQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([StatusListApiLink]);
};

export const useStatusListCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([StatusListCountApiLink]);
};

export const useStatusListOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IJobStatusSource>>();
export const useStatusListSelectionContext = () => useSelectionContext<ISourceItem<IJobStatusSource>>();
