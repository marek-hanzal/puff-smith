/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ReadOutlined} from "@ant-design/icons";
import {IBaseSelectOption, IQuery, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export type IStatusListQueryParams = undefined;

export const useStatusListQuery = createQueryHook<IQuery, IQueryResult<IBaseSelectOption>, IStatusListQueryParams>(StatusListApiLink, "post");

export const useStatusListSource = () => useSourceContext<IBaseSelectOption>();

export interface IStatusListSourceContext extends ISourceContext<IBaseSelectOption> {
}

export interface IStatusListSourceConsumerProps extends ConsumerProps<ISourceContext<IBaseSelectOption>> {
}

export const StatusListSourceConsumer: FC<IStatusListSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IStatusListSourceProps extends Partial<ISourceProviderProps<IBaseSelectOption>> {
}

export const StatusListSource: FC<IStatusListSourceProps> = props => {
	return <SourceProvider<IBaseSelectOption>
		name={"StatusList"}
		useQuery={useStatusListQuery}
		{...props}
	/>;
}

export const toStatusListLink = (queryParams?: IStatusListQueryParams) => toLink(StatusListApiLink, queryParams);
export const useStatusListLink = () => toStatusListLink;

export const useStatusListPromise = createPromiseHook<IQuery, IBaseSelectOption, IStatusListQueryParams>(StatusListApiLink, "post");
export const StatusListPromise = createPromise<IQuery, IBaseSelectOption, IStatusListQueryParams>(StatusListApiLink, "post");

export interface IStatusListFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IQuery>>> {
}

export const StatusListFilterProvider: FC<IStatusListFilterProviderProps> = props => <FilterProvider<IQueryFilter<IQuery>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IQuery>>();
export const useStatusListFilterContext = () => useFilterContext<IQueryFilter<IQuery>>();

export interface IStatusListSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IQuery>> {
}

export const StatusListSourceFilter: FC<IStatusListSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.StatusList"}
/>;

export interface IStatusListOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IQuery>>> {
}

export const StatusListOrderByProvider: FC<IStatusListOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IQuery>> name={"StatusList"} {...props}/>;

export const useStatusListOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IQuery>>();
export const useStatusListOrderByContext = () => useOrderByContext<IQueryOrderBy<IQuery>>();

export interface IStatusListListSourceProps extends Partial<IListProps<IBaseSelectOption>> {
	sourceProps?: Partial<IStatusListSourceProps>;
}

export interface IStatusListSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>, IStatusListQueryParams>> {
}

export const StatusListSourceControlProvider: FC<IStatusListSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>> name={"StatusList"} {...props}/>;

export const StatusListListSource: FC<IStatusListListSourceProps> = ({sourceProps, ...props}) => {
	return <StatusListSource
		{...sourceProps}
	>
		<List<IBaseSelectOption>
			{...props}
		/>
	</StatusListSource>
}

export interface IStatusListSourceSelectProps extends IQuerySourceSelectProps<IBaseSelectOption> {
	toOption: IToOptionMapper<IBaseSelectOption>;
	sourceProps?: IStatusListSourceProps;
	selectionList?: () => ReactNode;
}

export const StatusListSourceSelect: FC<IStatusListSourceSelectProps> = ({sourceProps, selectionList, ...props}) => {
	return <Input.Group>
		<Row gutter={8}>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					type={"text"}
					icon={<ReadOutlined/>}
					title={"common.selection.StatusList.title"}
					tooltip={"common.selection.StatusList.title.tooltip"}
					width={800}
				>
					<StatusListSourceControlProvider>
						<SelectionProvider type={"single"}>
							{selectionList()}
						</SelectionProvider>
					</StatusListSourceControlProvider>
				</DrawerButton>}
			</Col>
			<Col flex={"auto"}>
				<StatusListSource {...sourceProps}>
					<QuerySourceSelect<IBaseSelectOption> {...props}/>
				</StatusListSource>
			</Col>
		</Row>
	</Input.Group>;
};

export const useStatusListQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([StatusListApiLink]);
}

export const useStatusListOptionalSelectionContext = () => useOptionalSelectionContext<IBaseSelectOption>();
export const useStatusListSelectionContext = () => useSelectionContext<IBaseSelectOption>();
