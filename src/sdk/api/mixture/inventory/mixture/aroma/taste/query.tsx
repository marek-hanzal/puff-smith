/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaTasteSource} from "@/puff-smith/service/aroma/taste/interface";
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

export const TasteApiLink = "/api/mixture/inventory/mixture/aroma/taste/query";
export const TasteCountApiLink = "/api/mixture/inventory/mixture/aroma/taste/query/count";

export type ITasteQueryParams = undefined;

export const useTasteQuery = createQueryHook<ISourceQuery<IAromaTasteSource>, ISourceItem<IAromaTasteSource>[], ITasteQueryParams>(TasteApiLink, "post");
export const useTasteCountQuery = createQueryHook<ISourceQuery<IAromaTasteSource>, number, ITasteQueryParams>(TasteCountApiLink, "post");

export const useTasteSource = () => useSourceContext<ISourceItem<IAromaTasteSource>>();

export interface ITasteSourceContext extends ISourceContext<ISourceItem<IAromaTasteSource>> {
}

export interface ITasteSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaTasteSource>>> {
}

export const TasteSourceConsumer: FC<ITasteSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITasteProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaTasteSource>>> {
}

export const TasteProvider: FC<ITasteProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaTasteSource>>
		name={"Taste"}
		useQuery={useTasteQuery}
		useCountQuery={useTasteCountQuery}
		{...props}
	/>;
};

export const toTasteLink = (queryParams?: ITasteQueryParams) => toLink(TasteApiLink, queryParams);
export const useTasteLink = () => toTasteLink;

export const useTastePromise = createPromiseHook<ISourceQuery<IAromaTasteSource>, ISourceItem<IAromaTasteSource>, ITasteQueryParams>(TasteApiLink, "post");
export const TastePromise = createPromise<ISourceQuery<IAromaTasteSource>, ISourceItem<IAromaTasteSource>, ITasteQueryParams>(TasteApiLink, "post");

export interface ITasteFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaTasteSource>>>> {
}

export const TasteFilterProvider: FC<ITasteFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaTasteSource>>> name={"Taste"} {...props}/>;

export const useTasteOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaTasteSource>>>();
export const useTasteFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaTasteSource>>>();

export interface ITasteProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaTasteSource>>> {
}

export const TasteProviderFilter: FC<ITasteProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Taste"}
/>;

export interface ITasteOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>>> {
}

export const TasteOrderByProvider: FC<ITasteOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>> name={"Taste"} {...props}/>;

export const useTasteOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>>();
export const useTasteOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>>();

export interface ITasteProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaTasteSource>>, IQueryOrderBy<ISourceQuery<IAromaTasteSource>>, ITasteQueryParams>> {
}

export const TasteProviderControl: FC<ITasteProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAromaTasteSource>>, IQueryOrderBy<ISourceQuery<IAromaTasteSource>>> name={"Taste"} {...props}/>;

export interface ITasteListSourceProps extends Partial<IListProps<ISourceItem<IAromaTasteSource>>> {
	providerProps?: Partial<ITasteProviderProps>;
}

export const TasteListSource: FC<ITasteListSourceProps> = ({providerProps, ...props}) => {
	return <TasteProvider
		{...providerProps}
	>
		<List<ISourceItem<IAromaTasteSource>>
			{...props}
		/>
	</TasteProvider>;
}

export interface ITasteSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaTasteSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaTasteSource>>;
	providerProps?: Partial<ITasteProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TasteSourceSelect: FC<ITasteSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TasteProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaTasteSource>> {...props}/>
				</TasteProvider>
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
					<TasteProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TasteProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITasteSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaTasteSource>>> {
}

export const TasteSelectionProvider: FC<ITasteSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaTasteSource>> {...props}/>;
};

export const useTasteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TasteApiLink]);
};

export const useTasteCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TasteCountApiLink]);
};

export const useTasteOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaTasteSource>>();
export const useTasteSelectionContext = () => useSelectionContext<ISourceItem<IAromaTasteSource>>();
