/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobQuery} from "@/puff-smith/service/job/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IJob, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const JobApiLink = "/api/job/query";

export type IJobQueryParams = undefined;

export const useJobQuery = createQueryHook<IJobQuery, IQueryResult<IJob>, IJobQueryParams>(JobApiLink, "post");

export const useJobSource = () => useSourceContext<IJob>();

export interface IJobSourceContext extends ISourceContext<IJob> {
}

export interface IJobSourceConsumerProps extends ConsumerProps<ISourceContext<IJob>> {
}

export const JobSourceConsumer: FC<IJobSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IJobSourceProps extends Partial<ISourceProviderProps<IJob>> {
}

export const JobSource: FC<IJobSourceProps> = props => {
	return <SourceProvider<IJob>
		name={"Job"}
		useQuery={useJobQuery}
		{...props}
	/>;
};

export const toJobLink = (queryParams?: IJobQueryParams) => toLink(JobApiLink, queryParams);
export const useJobLink = () => toJobLink;

export const useJobPromise = createPromiseHook<IJobQuery, IJob, IJobQueryParams>(JobApiLink, "post");
export const JobPromise = createPromise<IJobQuery, IJob, IJobQueryParams>(JobApiLink, "post");

export interface IJobFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IJobQuery>>> {
}

export const JobFilterProvider: FC<IJobFilterProviderProps> = props => <FilterProvider<IQueryFilter<IJobQuery>> name={"Job"} {...props}/>;

export const useJobOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IJobQuery>>();
export const useJobFilterContext = () => useFilterContext<IQueryFilter<IJobQuery>>();

export interface IJobSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IJobQuery>> {
}

export const JobSourceFilter: FC<IJobSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Job"}
/>;

export interface IJobOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IJobQuery>>> {
}

export const JobOrderByProvider: FC<IJobOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IJobQuery>> name={"Job"} {...props}/>;

export const useJobOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IJobQuery>>();
export const useJobOrderByContext = () => useOrderByContext<IQueryOrderBy<IJobQuery>>();

export interface IJobListSourceProps extends Partial<IListProps<IJob>> {
	sourceProps?: Partial<IJobSourceProps>;
}

export interface IJobSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IJobQuery>, IQueryOrderBy<IJobQuery>, IJobQueryParams>> {
}

export const JobSourceControlProvider: FC<IJobSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IJobQuery>, IQueryOrderBy<IJobQuery>> name={"Job"} {...props}/>;

export const JobListSource: FC<IJobListSourceProps> = ({sourceProps, ...props}) => {
	return <JobSource
		{...sourceProps}
	>
		<List<IJob>
			{...props}
		/>
	</JobSource>;
}

export interface IJobSourceSelectProps extends IQuerySourceSelectProps<IJob> {
	toOption: IToOptionMapper<IJob>;
	sourceProps?: IJobSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const JobSourceSelect: FC<IJobSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<JobSource {...sourceProps}>
					<QuerySourceSelect<IJob> {...props}/>
				</JobSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Job.title"}
					size={props.size}
					tooltip={"common.selection.Job.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<JobSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</JobSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IJobSelectionProviderProps extends Partial<ISelectionProviderProps<IJob>> {
}

export const JobSelectionProvider: FC<IJobSelectionProviderProps> = props => {
	return <SelectionProvider<IJob> {...props}/>;
}

export const useJobQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([JobApiLink]);
};

export const useJobOptionalSelectionContext = () => useOptionalSelectionContext<IJob>();
export const useJobSelectionContext = () => useSelectionContext<IJob>();
