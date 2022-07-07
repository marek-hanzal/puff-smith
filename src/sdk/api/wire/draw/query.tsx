/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireDrawSource} from "@/puff-smith/service/wire/draw/interface";
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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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

export const DrawApiLink = "/api/wire/draw/query";
export const DrawCountApiLink = "/api/wire/draw/query/count";

export type IDrawQueryParams = any;

export const useDrawQuery = createQueryHook<ISourceQuery<IWireDrawSource>, ISourceItem<IWireDrawSource>[], IDrawQueryParams>(DrawApiLink, "post");
export const useDrawCountQuery = createQueryHook<ISourceQuery<IWireDrawSource>, number, IDrawQueryParams>(DrawCountApiLink, "post");

export const useDrawSource = () => useSourceContext<ISourceItem<IWireDrawSource>>();

export interface IDrawSourceContext extends ISourceContext<ISourceItem<IWireDrawSource>> {
}

export interface IDrawSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IWireDrawSource>>> {
}

export const DrawSourceConsumer: FC<IDrawSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IDrawProviderProps extends Partial<ISourceProviderProps<ISourceItem<IWireDrawSource>>> {
}

export const DrawProvider: FC<IDrawProviderProps> = props => {
	return <SourceProvider<ISourceItem<IWireDrawSource>>
		name={"Draw"}
		useQuery={useDrawQuery}
		useCountQuery={useDrawCountQuery}
		{...props}
	/>;
};

export const toDrawLink = (queryParams?: IDrawQueryParams) => toLink(DrawApiLink, queryParams);
export const useDrawLink = () => toDrawLink;

export const useDrawPromise = createPromiseHook<ISourceQuery<IWireDrawSource>, ISourceItem<IWireDrawSource>, IDrawQueryParams>(DrawApiLink, "post");
export const DrawPromise = createPromise<ISourceQuery<IWireDrawSource>, ISourceItem<IWireDrawSource>, IDrawQueryParams>(DrawApiLink, "post");

export interface IDrawFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IWireDrawSource>>>> {
}

export const DrawFilterProvider: FC<IDrawFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IWireDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IWireDrawSource>>>();
export const useDrawFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IWireDrawSource>>>();

export interface IDrawProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IWireDrawSource>>> {
}

export const DrawProviderFilter: FC<IDrawProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Draw"}
/>;

export interface IDrawOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IWireDrawSource>>>> {
}

export const DrawOrderByProvider: FC<IDrawOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IWireDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IWireDrawSource>>>();
export const useDrawOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IWireDrawSource>>>();

export interface IDrawProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IWireDrawSource>>, IQueryOrderBy<ISourceQuery<IWireDrawSource>>, IDrawQueryParams>> {
}

export const DrawProviderControl: FC<IDrawProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IWireDrawSource>>, IQueryOrderBy<ISourceQuery<IWireDrawSource>>> name={"Draw"} {...props}/>;

export interface IDrawListSourceProps extends Partial<IListProps<ISourceItem<IWireDrawSource>>> {
	providerProps?: Partial<IDrawProviderProps>;
}

export const DrawListSource: FC<IDrawListSourceProps> = ({providerProps, ...props}) => {
	return <DrawProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IWireDrawSource>>
			{...props}
		/>
	</DrawProvider>;
}

export interface IDrawInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IWireDrawSource>>> {
	providerProps?: Partial<IDrawProviderProps>;
}

export const DrawInfiniteListSource: FC<IDrawInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <DrawProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IWireDrawSource>>
			{...props}
		/>
	</DrawProvider>;
};

export interface IDrawSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IWireDrawSource>> {
	toOption: IToOptionMapper<ISourceItem<IWireDrawSource>>;
	providerProps?: Partial<IDrawProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const DrawSourceSelect: FC<IDrawSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<DrawProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IWireDrawSource>> {...props}/>
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

export interface IDrawSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IWireDrawSource>>> {
}

export const DrawSelectionProvider: FC<IDrawSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IWireDrawSource>> {...props}/>;
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

export const useDrawOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IWireDrawSource>>();
export const useDrawSelectionContext = () => useSelectionContext<ISourceItem<IWireDrawSource>>();
