/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerCommentSource} from "@/puff-smith/service/atomizer/comment/interface";
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

export const AtomizerCommentApiLink = "/api/atomizer/comment/query";
export const AtomizerCommentCountApiLink = "/api/atomizer/comment/query/count";

export type IAtomizerCommentQueryParams = any;

export const useAtomizerCommentQuery = createQueryHook<ISourceQuery<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>[], IAtomizerCommentQueryParams>(AtomizerCommentApiLink, "post");
export const useAtomizerCommentCountQuery = createQueryHook<ISourceQuery<IAtomizerCommentSource>, number, IAtomizerCommentQueryParams>(AtomizerCommentCountApiLink, "post");

export const useAtomizerCommentSource = () => useSourceContext<ISourceItem<IAtomizerCommentSource>>();

export interface IAtomizerCommentSourceContext extends ISourceContext<ISourceItem<IAtomizerCommentSource>> {
}

export interface IAtomizerCommentSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAtomizerCommentSource>>> {
}

export const AtomizerCommentSourceConsumer: FC<IAtomizerCommentSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerCommentProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAtomizerCommentSource>>> {
}

export const AtomizerCommentProvider: FC<IAtomizerCommentProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAtomizerCommentSource>>
		name={"AtomizerComment"}
		useQuery={useAtomizerCommentQuery}
		useCountQuery={useAtomizerCommentCountQuery}
		{...props}
	/>;
};

export const toAtomizerCommentLink = (queryParams?: IAtomizerCommentQueryParams) => toLink(AtomizerCommentApiLink, queryParams);
export const useAtomizerCommentLink = () => toAtomizerCommentLink;

export const useAtomizerCommentPromise = createPromiseHook<ISourceQuery<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>, IAtomizerCommentQueryParams>(AtomizerCommentApiLink, "post");
export const AtomizerCommentPromise = createPromise<ISourceQuery<IAtomizerCommentSource>, ISourceItem<IAtomizerCommentSource>, IAtomizerCommentQueryParams>(AtomizerCommentApiLink, "post");

export interface IAtomizerCommentFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAtomizerCommentSource>>>> {
}

export const AtomizerCommentFilterProvider: FC<IAtomizerCommentFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAtomizerCommentSource>>> name={"AtomizerComment"} {...props}/>;

export const useAtomizerCommentOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAtomizerCommentSource>>>();
export const useAtomizerCommentFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAtomizerCommentSource>>>();

export interface IAtomizerCommentProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAtomizerCommentSource>>> {
}

export const AtomizerCommentProviderFilter: FC<IAtomizerCommentProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizerComment"}
/>;

export interface IAtomizerCommentOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAtomizerCommentSource>>>> {
}

export const AtomizerCommentOrderByProvider: FC<IAtomizerCommentOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAtomizerCommentSource>>> name={"AtomizerComment"} {...props}/>;

export const useAtomizerCommentOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerCommentSource>>>();
export const useAtomizerCommentOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerCommentSource>>>();

export interface IAtomizerCommentProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAtomizerCommentSource>>, IQueryOrderBy<ISourceQuery<IAtomizerCommentSource>>, IAtomizerCommentQueryParams>> {
}

export const AtomizerCommentProviderControl: FC<IAtomizerCommentProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAtomizerCommentSource>>, IQueryOrderBy<ISourceQuery<IAtomizerCommentSource>>> name={"AtomizerComment"} {...props}/>;

export interface IAtomizerCommentListSourceProps extends Partial<IListProps<ISourceItem<IAtomizerCommentSource>>> {
	providerProps?: Partial<IAtomizerCommentProviderProps>;
}

export const AtomizerCommentListSource: FC<IAtomizerCommentListSourceProps> = ({providerProps, ...props}) => {
	return <AtomizerCommentProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAtomizerCommentSource>>
			{...props}
		/>
	</AtomizerCommentProvider>;
};

export interface IAtomizerCommentSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAtomizerCommentSource>> {
	toOption: IToOptionMapper<ISourceItem<IAtomizerCommentSource>>;
	providerProps?: Partial<IAtomizerCommentProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerCommentSourceSelect: FC<IAtomizerCommentSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerCommentProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAtomizerCommentSource>> {...props}/>
				</AtomizerCommentProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AtomizerComment.title"}
					size={props.size}
					tooltip={"common.selection.AtomizerComment.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AtomizerCommentProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerCommentProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerCommentSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAtomizerCommentSource>>> {
}

export const AtomizerCommentSelectionProvider: FC<IAtomizerCommentSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAtomizerCommentSource>> {...props}/>;
};

export const useAtomizerCommentCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerCommentCountApiLink]);
};

export const useAtomizerCommentQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AtomizerCommentApiLink]),
		withCount && queryClient.invalidateQueries([AtomizerCommentCountApiLink]),
	]);
};

export const useAtomizerCommentOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAtomizerCommentSource>>();
export const useAtomizerCommentSelectionContext = () => useSelectionContext<ISourceItem<IAtomizerCommentSource>>();
