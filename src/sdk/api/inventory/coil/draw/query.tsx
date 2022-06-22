/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICoilDrawSource} from "@/puff-smith/service/coil/inventory/draw/interface";
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

export const DrawApiLink = "/api/inventory/coil/draw/query";
export const DrawCountApiLink = "/api/inventory/coil/draw/query/count";

export type IDrawQueryParams = any;

export const useDrawQuery = createQueryHook<ISourceQuery<ICoilDrawSource>, ISourceItem<ICoilDrawSource>[], IDrawQueryParams>(DrawApiLink, "post");
export const useDrawCountQuery = createQueryHook<ISourceQuery<ICoilDrawSource>, number, IDrawQueryParams>(DrawCountApiLink, "post");

export const useDrawSource = () => useSourceContext<ISourceItem<ICoilDrawSource>>();

export interface IDrawSourceContext extends ISourceContext<ISourceItem<ICoilDrawSource>> {
}

export interface IDrawSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICoilDrawSource>>> {
}

export const DrawSourceConsumer: FC<IDrawSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IDrawProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICoilDrawSource>>> {
}

export const DrawProvider: FC<IDrawProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICoilDrawSource>>
		name={"Draw"}
		useQuery={useDrawQuery}
		useCountQuery={useDrawCountQuery}
		{...props}
	/>;
};

export const toDrawLink = (queryParams?: IDrawQueryParams) => toLink(DrawApiLink, queryParams);
export const useDrawLink = () => toDrawLink;

export const useDrawPromise = createPromiseHook<ISourceQuery<ICoilDrawSource>, ISourceItem<ICoilDrawSource>, IDrawQueryParams>(DrawApiLink, "post");
export const DrawPromise = createPromise<ISourceQuery<ICoilDrawSource>, ISourceItem<ICoilDrawSource>, IDrawQueryParams>(DrawApiLink, "post");

export interface IDrawFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICoilDrawSource>>>> {
}

export const DrawFilterProvider: FC<IDrawFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICoilDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICoilDrawSource>>>();
export const useDrawFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICoilDrawSource>>>();

export interface IDrawProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICoilDrawSource>>> {
}

export const DrawProviderFilter: FC<IDrawProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Draw"}
/>;

export interface IDrawOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICoilDrawSource>>>> {
}

export const DrawOrderByProvider: FC<IDrawOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICoilDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICoilDrawSource>>>();
export const useDrawOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICoilDrawSource>>>();

export interface IDrawProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICoilDrawSource>>, IQueryOrderBy<ISourceQuery<ICoilDrawSource>>, IDrawQueryParams>> {
}

export const DrawProviderControl: FC<IDrawProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICoilDrawSource>>, IQueryOrderBy<ISourceQuery<ICoilDrawSource>>> name={"Draw"} {...props}/>;

export interface IDrawListSourceProps extends Partial<IListProps<ISourceItem<ICoilDrawSource>>> {
	providerProps?: Partial<IDrawProviderProps>;
}

export const DrawListSource: FC<IDrawListSourceProps> = ({providerProps, ...props}) => {
	return <DrawProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICoilDrawSource>>
			{...props}
		/>
	</DrawProvider>;
}

export interface IDrawSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICoilDrawSource>> {
	toOption: IToOptionMapper<ISourceItem<ICoilDrawSource>>;
	providerProps?: Partial<IDrawProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const DrawSourceSelect: FC<IDrawSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<DrawProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICoilDrawSource>> {...props}/>
				</DrawProvider>
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
					<DrawProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</DrawProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IDrawSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICoilDrawSource>>> {
}

export const DrawSelectionProvider: FC<IDrawSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICoilDrawSource>> {...props}/>;
}

export const useDrawCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DrawCountApiLink]);
};

export const useDrawQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([DrawApiLink]),
		withCount && queryClient.invalidateQueries([DrawCountApiLink]),
	]);
};

export const useDrawOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICoilDrawSource>>();
export const useDrawSelectionContext = () => useSelectionContext<ISourceItem<ICoilDrawSource>>();
