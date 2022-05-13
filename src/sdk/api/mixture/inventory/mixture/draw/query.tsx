/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITag} from "@/puff-smith/service/tag/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQuery, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const DrawApiLink = "/api/mixture/inventory/mixture/draw/query";

export type IDrawQueryParams = undefined;

export const useDrawQuery = createQueryHook<IQuery, IQueryResult<ITag>, IDrawQueryParams>(DrawApiLink, "post");

export const useDrawSource = () => useSourceContext<ITag>();

export interface IDrawSourceContext extends ISourceContext<ITag> {
}

export interface IDrawSourceConsumerProps extends ConsumerProps<ISourceContext<ITag>> {
}

export const DrawSourceConsumer: FC<IDrawSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IDrawSourceProps extends Partial<ISourceProviderProps<ITag>> {
}

export const DrawSource: FC<IDrawSourceProps> = props => {
	return <SourceProvider<ITag>
		name={"Draw"}
		useQuery={useDrawQuery}
		{...props}
	/>;
};

export const toDrawLink = (queryParams?: IDrawQueryParams) => toLink(DrawApiLink, queryParams);
export const useDrawLink = () => toDrawLink;

export const useDrawPromise = createPromiseHook<IQuery, ITag, IDrawQueryParams>(DrawApiLink, "post");
export const DrawPromise = createPromise<IQuery, ITag, IDrawQueryParams>(DrawApiLink, "post");

export interface IDrawFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IQuery>>> {
}

export const DrawFilterProvider: FC<IDrawFilterProviderProps> = props => <FilterProvider<IQueryFilter<IQuery>> name={"Draw"} {...props}/>;

export const useDrawOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IQuery>>();
export const useDrawFilterContext = () => useFilterContext<IQueryFilter<IQuery>>();

export interface IDrawSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IQuery>> {
}

export const DrawSourceFilter: FC<IDrawSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Draw"}
/>;

export interface IDrawOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IQuery>>> {
}

export const DrawOrderByProvider: FC<IDrawOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IQuery>> name={"Draw"} {...props}/>;

export const useDrawOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IQuery>>();
export const useDrawOrderByContext = () => useOrderByContext<IQueryOrderBy<IQuery>>();

export interface IDrawListSourceProps extends Partial<IListProps<ITag>> {
	sourceProps?: Partial<IDrawSourceProps>;
}

export interface IDrawSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>, IDrawQueryParams>> {
}

export const DrawSourceControlProvider: FC<IDrawSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>> name={"Draw"} {...props}/>;

export const DrawListSource: FC<IDrawListSourceProps> = ({sourceProps, ...props}) => {
	return <DrawSource
		{...sourceProps}
	>
		<List<ITag>
			{...props}
		/>
	</DrawSource>;
}

export interface IDrawSourceSelectProps extends IQuerySourceSelectProps<ITag> {
	toOption: IToOptionMapper<ITag>;
	sourceProps?: IDrawSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const DrawSourceSelect: FC<IDrawSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<DrawSource {...sourceProps}>
					<QuerySourceSelect<ITag> {...props}/>
				</DrawSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Draw.title"}
					size={props.size}
					tooltip={"common.selection.Draw.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<DrawSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</DrawSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IDrawSelectionProviderProps extends Partial<ISelectionProviderProps<ITag>> {
}

export const DrawSelectionProvider: FC<IDrawSelectionProviderProps> = props => {
	return <SelectionProvider<ITag> {...props}/>;
}

export const useDrawQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DrawApiLink]);
};

export const useDrawOptionalSelectionContext = () => useOptionalSelectionContext<ITag>();
export const useDrawSelectionContext = () => useSelectionContext<ITag>();