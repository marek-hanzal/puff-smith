/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITagSource} from "@/puff-smith/service/tag/interface";
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

export const TagApiLink = "/api/tag/query";
export const TagCountApiLink = "/api/tag/query/count";

export type ITagQueryParams = undefined;

export const useTagQuery = createQueryHook<ISourceQuery<ITagSource>, ISourceItem<ITagSource>[], ITagQueryParams>(TagApiLink, "post");
export const useTagCountQuery = createQueryHook<ISourceQuery<ITagSource>, number, ITagQueryParams>(TagCountApiLink, "post");

export const useTagSource = () => useSourceContext<ISourceItem<ITagSource>>();

export interface ITagSourceContext extends ISourceContext<ISourceItem<ITagSource>> {
}

export interface ITagSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ITagSource>>> {
}

export const TagSourceConsumer: FC<ITagSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITagProviderProps extends Partial<ISourceProviderProps<ISourceItem<ITagSource>>> {
}

export const TagProvider: FC<ITagProviderProps> = props => {
	return <SourceProvider<ISourceItem<ITagSource>>
		name={"Tag"}
		useQuery={useTagQuery}
		useCountQuery={useTagCountQuery}
		{...props}
	/>;
};

export const toTagLink = (queryParams?: ITagQueryParams) => toLink(TagApiLink, queryParams);
export const useTagLink = () => toTagLink;

export const useTagPromise = createPromiseHook<ISourceQuery<ITagSource>, ISourceItem<ITagSource>, ITagQueryParams>(TagApiLink, "post");
export const TagPromise = createPromise<ISourceQuery<ITagSource>, ISourceItem<ITagSource>, ITagQueryParams>(TagApiLink, "post");

export interface ITagFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ITagSource>>>> {
}

export const TagFilterProvider: FC<ITagFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ITagSource>>> name={"Tag"} {...props}/>;

export const useTagOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ITagSource>>>();
export const useTagFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ITagSource>>>();

export interface ITagProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ITagSource>>> {
}

export const TagProviderFilter: FC<ITagProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Tag"}
/>;

export interface ITagOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ITagSource>>>> {
}

export const TagOrderByProvider: FC<ITagOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ITagSource>>> name={"Tag"} {...props}/>;

export const useTagOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ITagSource>>>();
export const useTagOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ITagSource>>>();

export interface ITagProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ITagSource>>, IQueryOrderBy<ISourceQuery<ITagSource>>, ITagQueryParams>> {
}

export const TagProviderControl: FC<ITagProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ITagSource>>, IQueryOrderBy<ISourceQuery<ITagSource>>> name={"Tag"} {...props}/>;

export interface ITagListSourceProps extends Partial<IListProps<ISourceItem<ITagSource>>> {
	providerProps?: Partial<ITagProviderProps>;
}

export const TagListSource: FC<ITagListSourceProps> = ({providerProps, ...props}) => {
	return <TagProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ITagSource>>
			{...props}
		/>
	</TagProvider>;
}

export interface ITagSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ITagSource>> {
	toOption: IToOptionMapper<ISourceItem<ITagSource>>;
	providerProps?: Partial<ITagProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TagSourceSelect: FC<ITagSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TagProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ITagSource>> {...props}/>
				</TagProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Tag.title"}
					size={props.size}
					tooltip={"common.selection.Tag.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<TagProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TagProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITagSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ITagSource>>> {
}

export const TagSelectionProvider: FC<ITagSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ITagSource>> {...props}/>;
}

export const useTagQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TagApiLink]);
};

export const useTagCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TagCountApiLink]);
};

export const useTagOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ITagSource>>();
export const useTagSelectionContext = () => useSelectionContext<ISourceItem<ITagSource>>();
