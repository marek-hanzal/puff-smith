/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildSource} from "@/puff-smith/service/build/interface";
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

export const BuildApiLink = "/api/lab/build/query";
export const BuildCountApiLink = "/api/lab/build/query/count";

export type IBuildQueryParams = any;

export const useBuildQuery = createQueryHook<ISourceQuery<IBuildSource>, ISourceItem<IBuildSource>[], IBuildQueryParams>(BuildApiLink, "post");
export const useBuildCountQuery = createQueryHook<ISourceQuery<IBuildSource>, number, IBuildQueryParams>(BuildCountApiLink, "post");

export const useBuildSource = () => useSourceContext<ISourceItem<IBuildSource>>();

export interface IBuildSourceContext extends ISourceContext<ISourceItem<IBuildSource>> {
}

export interface IBuildSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBuildSource>>> {
}

export const BuildSourceConsumer: FC<IBuildSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBuildProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBuildSource>>> {
}

export const BuildProvider: FC<IBuildProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBuildSource>>
		name={"Build"}
		useQuery={useBuildQuery}
		useCountQuery={useBuildCountQuery}
		{...props}
	/>;
};

export const toBuildLink = (queryParams?: IBuildQueryParams) => toLink(BuildApiLink, queryParams);
export const useBuildLink = () => toBuildLink;

export const useBuildPromise = createPromiseHook<ISourceQuery<IBuildSource>, ISourceItem<IBuildSource>, IBuildQueryParams>(BuildApiLink, "post");
export const BuildPromise = createPromise<ISourceQuery<IBuildSource>, ISourceItem<IBuildSource>, IBuildQueryParams>(BuildApiLink, "post");

export interface IBuildFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBuildSource>>>> {
}

export const BuildFilterProvider: FC<IBuildFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBuildSource>>> name={"Build"} {...props}/>;

export const useBuildOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBuildSource>>>();
export const useBuildFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBuildSource>>>();

export interface IBuildProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBuildSource>>> {
}

export const BuildProviderFilter: FC<IBuildProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Build"}
/>;

export interface IBuildOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBuildSource>>>> {
}

export const BuildOrderByProvider: FC<IBuildOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBuildSource>>> name={"Build"} {...props}/>;

export const useBuildOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBuildSource>>>();
export const useBuildOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBuildSource>>>();

export interface IBuildProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBuildSource>>, IQueryOrderBy<ISourceQuery<IBuildSource>>, IBuildQueryParams>> {
}

export const BuildProviderControl: FC<IBuildProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IBuildSource>>, IQueryOrderBy<ISourceQuery<IBuildSource>>> name={"Build"} {...props}/>;

export interface IBuildListSourceProps extends Partial<IListProps<ISourceItem<IBuildSource>>> {
	providerProps?: Partial<IBuildProviderProps>;
}

export const BuildListSource: FC<IBuildListSourceProps> = ({providerProps, ...props}) => {
	return <BuildProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IBuildSource>>
			{...props}
		/>
	</BuildProvider>;
}

export interface IBuildSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBuildSource>> {
	toOption: IToOptionMapper<ISourceItem<IBuildSource>>;
	providerProps?: Partial<IBuildProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BuildSourceSelect: FC<IBuildSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BuildProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBuildSource>> {...props}/>
				</BuildProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Build.title"}
					size={props.size}
					tooltip={"common.selection.Build.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BuildProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BuildProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBuildSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBuildSource>>> {
}

export const BuildSelectionProvider: FC<IBuildSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBuildSource>> {...props}/>;
}

export const useBuildCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BuildCountApiLink]);
};

export const useBuildQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([BuildApiLink]),
		withCount && queryClient.invalidateQueries([BuildCountApiLink]),
	]);
};

export const useBuildOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBuildSource>>();
export const useBuildSelectionContext = () => useSelectionContext<ISourceItem<IBuildSource>>();
