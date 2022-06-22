/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildCommentSource} from "@/puff-smith/service/build/comment/interface";
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

export const BuildCommentApiLink = "/api/lab/build/comment/query";
export const BuildCommentCountApiLink = "/api/lab/build/comment/query/count";

export type IBuildCommentQueryParams = any;

export const useBuildCommentQuery = createQueryHook<ISourceQuery<IBuildCommentSource>, ISourceItem<IBuildCommentSource>[], IBuildCommentQueryParams>(BuildCommentApiLink, "post");
export const useBuildCommentCountQuery = createQueryHook<ISourceQuery<IBuildCommentSource>, number, IBuildCommentQueryParams>(BuildCommentCountApiLink, "post");

export const useBuildCommentSource = () => useSourceContext<ISourceItem<IBuildCommentSource>>();

export interface IBuildCommentSourceContext extends ISourceContext<ISourceItem<IBuildCommentSource>> {
}

export interface IBuildCommentSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBuildCommentSource>>> {
}

export const BuildCommentSourceConsumer: FC<IBuildCommentSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBuildCommentProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBuildCommentSource>>> {
}

export const BuildCommentProvider: FC<IBuildCommentProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBuildCommentSource>>
		name={"BuildComment"}
		useQuery={useBuildCommentQuery}
		useCountQuery={useBuildCommentCountQuery}
		{...props}
	/>;
};

export const toBuildCommentLink = (queryParams?: IBuildCommentQueryParams) => toLink(BuildCommentApiLink, queryParams);
export const useBuildCommentLink = () => toBuildCommentLink;

export const useBuildCommentPromise = createPromiseHook<ISourceQuery<IBuildCommentSource>, ISourceItem<IBuildCommentSource>, IBuildCommentQueryParams>(BuildCommentApiLink, "post");
export const BuildCommentPromise = createPromise<ISourceQuery<IBuildCommentSource>, ISourceItem<IBuildCommentSource>, IBuildCommentQueryParams>(BuildCommentApiLink, "post");

export interface IBuildCommentFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBuildCommentSource>>>> {
}

export const BuildCommentFilterProvider: FC<IBuildCommentFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBuildCommentSource>>> name={"BuildComment"} {...props}/>;

export const useBuildCommentOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBuildCommentSource>>>();
export const useBuildCommentFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBuildCommentSource>>>();

export interface IBuildCommentProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBuildCommentSource>>> {
}

export const BuildCommentProviderFilter: FC<IBuildCommentProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BuildComment"}
/>;

export interface IBuildCommentOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBuildCommentSource>>>> {
}

export const BuildCommentOrderByProvider: FC<IBuildCommentOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBuildCommentSource>>> name={"BuildComment"} {...props}/>;

export const useBuildCommentOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBuildCommentSource>>>();
export const useBuildCommentOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBuildCommentSource>>>();

export interface IBuildCommentProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBuildCommentSource>>, IQueryOrderBy<ISourceQuery<IBuildCommentSource>>, IBuildCommentQueryParams>> {
}

export const BuildCommentProviderControl: FC<IBuildCommentProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IBuildCommentSource>>, IQueryOrderBy<ISourceQuery<IBuildCommentSource>>> name={"BuildComment"} {...props}/>;

export interface IBuildCommentListSourceProps extends Partial<IListProps<ISourceItem<IBuildCommentSource>>> {
	providerProps?: Partial<IBuildCommentProviderProps>;
}

export const BuildCommentListSource: FC<IBuildCommentListSourceProps> = ({providerProps, ...props}) => {
	return <BuildCommentProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IBuildCommentSource>>
			{...props}
		/>
	</BuildCommentProvider>;
}

export interface IBuildCommentSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBuildCommentSource>> {
	toOption: IToOptionMapper<ISourceItem<IBuildCommentSource>>;
	providerProps?: Partial<IBuildCommentProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BuildCommentSourceSelect: FC<IBuildCommentSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BuildCommentProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBuildCommentSource>> {...props}/>
				</BuildCommentProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BuildComment.title"}
					size={props.size}
					tooltip={"common.selection.BuildComment.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BuildCommentProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BuildCommentProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBuildCommentSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBuildCommentSource>>> {
}

export const BuildCommentSelectionProvider: FC<IBuildCommentSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBuildCommentSource>> {...props}/>;
};

export const useBuildCommentCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BuildCommentCountApiLink]);
};

export const useBuildCommentQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([BuildCommentApiLink]),
		withCount && queryClient.invalidateQueries([BuildCommentCountApiLink]),
	]);
};

export const useBuildCommentOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBuildCommentSource>>();
export const useBuildCommentSelectionContext = () => useSelectionContext<ISourceItem<IBuildCommentSource>>();
