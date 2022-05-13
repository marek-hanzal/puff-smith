/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const TasteApiLink = "/api/mixture/inventory/mixture/aroma/taste/query";

export type ITasteQueryParams = undefined;

export const useTasteQuery = createQueryHook<IAromaQuery, IQueryResult<ITag>, ITasteQueryParams>(TasteApiLink, "post");

export const useTasteSource = () => useSourceContext<ITag>();

export interface ITasteSourceContext extends ISourceContext<ITag> {
}

export interface ITasteSourceConsumerProps extends ConsumerProps<ISourceContext<ITag>> {
}

export const TasteSourceConsumer: FC<ITasteSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITasteSourceProps extends Partial<ISourceProviderProps<ITag>> {
}

export const TasteSource: FC<ITasteSourceProps> = props => {
	return <SourceProvider<ITag>
		name={"Taste"}
		useQuery={useTasteQuery}
		{...props}
	/>;
};

export const toTasteLink = (queryParams?: ITasteQueryParams) => toLink(TasteApiLink, queryParams);
export const useTasteLink = () => toTasteLink;

export const useTastePromise = createPromiseHook<IAromaQuery, ITag, ITasteQueryParams>(TasteApiLink, "post");
export const TastePromise = createPromise<IAromaQuery, ITag, ITasteQueryParams>(TasteApiLink, "post");

export interface ITasteFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaQuery>>> {
}

export const TasteFilterProvider: FC<ITasteFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaQuery>> name={"Taste"} {...props}/>;

export const useTasteOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaQuery>>();
export const useTasteFilterContext = () => useFilterContext<IQueryFilter<IAromaQuery>>();

export interface ITasteSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaQuery>> {
}

export const TasteSourceFilter: FC<ITasteSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Taste"}
/>;

export interface ITasteOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaQuery>>> {
}

export const TasteOrderByProvider: FC<ITasteOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaQuery>> name={"Taste"} {...props}/>;

export const useTasteOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaQuery>>();
export const useTasteOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaQuery>>();

export interface ITasteListSourceProps extends Partial<IListProps<ITag>> {
	sourceProps?: Partial<ITasteSourceProps>;
}

export interface ITasteSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>, ITasteQueryParams>> {
}

export const TasteSourceControlProvider: FC<ITasteSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>> name={"Taste"} {...props}/>;

export const TasteListSource: FC<ITasteListSourceProps> = ({sourceProps, ...props}) => {
	return <TasteSource
		{...sourceProps}
	>
		<List<ITag>
			{...props}
		/>
	</TasteSource>;
};

export interface ITasteSourceSelectProps extends IQuerySourceSelectProps<ITag> {
	toOption: IToOptionMapper<ITag>;
	sourceProps?: ITasteSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TasteSourceSelect: FC<ITasteSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TasteSource {...sourceProps}>
					<QuerySourceSelect<ITag> {...props}/>
				</TasteSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Taste.title"}
					size={props.size}
					tooltip={"common.selection.Taste.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<TasteSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TasteSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITasteSelectionProviderProps extends Partial<ISelectionProviderProps<ITag>> {
}

export const TasteSelectionProvider: FC<ITasteSelectionProviderProps> = props => {
	return <SelectionProvider<ITag> {...props}/>;
};

export const useTasteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TasteApiLink]);
};

export const useTasteOptionalSelectionContext = () => useOptionalSelectionContext<ITag>();
export const useTasteSelectionContext = () => useSelectionContext<ITag>();
