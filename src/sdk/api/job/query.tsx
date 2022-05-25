/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobSource} from "@/puff-smith/service/job/interface";
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

export const JobApiLink = "/api/job/query";

export type IJobQueryParams = undefined;

export const useJobQuery = createQueryHook<ISourceQuery<IJobSource>, ISourceItem<IJobSource>[], IJobQueryParams>(JobApiLink, "post");

export const useJobSource = () => useSourceContext<ISourceItem<IJobSource>>();

export interface IJobSourceContext extends ISourceContext<ISourceItem<IJobSource>> {
}

export interface IJobSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IJobSource>>> {
}

export const JobSourceConsumer: FC<IJobSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IJobProviderProps extends Partial<ISourceProviderProps<ISourceItem<IJobSource>>> {
}

export const JobProvider: FC<IJobProviderProps> = props => {
	return <SourceProvider<ISourceItem<IJobSource>>
		name={"Job"}
		useQuery={useJobQuery}
		{...props}
	/>;
};

export const toJobLink = (queryParams?: IJobQueryParams) => toLink(JobApiLink, queryParams);
export const useJobLink = () => toJobLink;

export const useJobPromise = createPromiseHook<ISourceQuery<IJobSource>, ISourceItem<IJobSource>, IJobQueryParams>(JobApiLink, "post");
export const JobPromise = createPromise<ISourceQuery<IJobSource>, ISourceItem<IJobSource>, IJobQueryParams>(JobApiLink, "post");

export interface IJobFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IJobSource>>>> {
}

export const JobFilterProvider: FC<IJobFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IJobSource>>> name={"Job"} {...props}/>;

export const useJobOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IJobSource>>>();
export const useJobFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IJobSource>>>();

export interface IJobProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IJobSource>>> {
}

export const JobProviderFilter: FC<IJobProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Job"}
/>;

export interface IJobOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IJobSource>>>> {
}

export const JobOrderByProvider: FC<IJobOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IJobSource>>> name={"Job"} {...props}/>;

export const useJobOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IJobSource>>>();
export const useJobOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IJobSource>>>();

export interface IJobProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IJobSource>>, IQueryOrderBy<ISourceQuery<IJobSource>>, IJobQueryParams>> {
}

export const JobProviderControl: FC<IJobProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IJobSource>>, IQueryOrderBy<ISourceQuery<IJobSource>>> name={"Job"} {...props}/>;

export interface IJobListSourceProps extends Partial<IListProps<ISourceItem<IJobSource>>> {
	providerProps?: Partial<IJobProviderProps>;
}

export const JobListSource: FC<IJobListSourceProps> = ({providerProps, ...props}) => {
	return <JobProvider
		{...providerProps}
	>
		<List<ISourceItem<IJobSource>>
			{...props}
		/>
	</JobProvider>;
}

export interface IJobSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IJobSource>> {
	toOption: IToOptionMapper<ISourceItem<IJobSource>>;
	providerProps?: Partial<IJobProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const JobSourceSelect: FC<IJobSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<JobProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IJobSource>> {...props}/>
				</JobProvider>
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
					<JobProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</JobProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IJobSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IJobSource>>> {
}

export const JobSelectionProvider: FC<IJobSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IJobSource>> {...props}/>;
}

export const useJobQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([JobApiLink]);
};

export const useJobOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IJobSource>>();
export const useJobSelectionContext = () => useSelectionContext<ISourceItem<IJobSource>>();
