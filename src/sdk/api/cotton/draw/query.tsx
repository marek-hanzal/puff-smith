/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonDrawSource} from "@/puff-smith/service/cotton/draw/interface";
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

export const DrawApiLink = "/api/cotton/draw/query";
export const DrawCountApiLink = "/api/cotton/draw/query/count";

export type IDrawQueryParams = any;

export const useDrawQuery = createQueryHook<ISourceQuery<ICottonDrawSource>, ISourceItem<ICottonDrawSource>[], IDrawQueryParams>(DrawApiLink, "post");
export const useDrawCountQuery = createQueryHook<ISourceQuery<ICottonDrawSource>, number, IDrawQueryParams>(DrawCountApiLink, "post");

export const useDrawSource = () => useSourceContext<ISourceItem<ICottonDrawSource>>();

export interface IDrawSourceContext extends ISourceContext<ISourceItem<ICottonDrawSource>> {
}

export interface IDrawSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICottonDrawSource>>> {
}

export const DrawSourceConsumer: FC<IDrawSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IDrawProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICottonDrawSource>>> {
}

export const DrawProvider: FC<IDrawProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICottonDrawSource>>
		name={"Draw"}
		useQuery={useDrawQuery}
		useCountQuery={useDrawCountQuery}
		{...props}
	/>;
};

export const toDrawLink = (queryParams?: IDrawQueryParams) => toLink(DrawApiLink, queryParams);
export const useDrawLink = () => toDrawLink;

export const useDrawPromise = createPromiseHook<ISourceQuery<ICottonDrawSource>, ISourceItem<ICottonDrawSource>, IDrawQueryParams>(DrawApiLink, "post");
export const DrawPromise = createPromise<ISourceQuery<ICottonDrawSource>, ISourceItem<ICottonDrawSource>, IDrawQueryParams>(DrawApiLink, "post");

export interface IDrawFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICottonDrawSource>>>> {
}

export const DrawFilterProvider: FC<IDrawFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICottonDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICottonDrawSource>>>();
export const useDrawFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICottonDrawSource>>>();

export interface IDrawProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICottonDrawSource>>> {
}

export const DrawProviderFilter: FC<IDrawProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Draw"}
/>;

export interface IDrawOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICottonDrawSource>>>> {
}

export const DrawOrderByProvider: FC<IDrawOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICottonDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICottonDrawSource>>>();
export const useDrawOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICottonDrawSource>>>();

export interface IDrawProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICottonDrawSource>>, IQueryOrderBy<ISourceQuery<ICottonDrawSource>>, IDrawQueryParams>> {
}

export const DrawProviderControl: FC<IDrawProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICottonDrawSource>>, IQueryOrderBy<ISourceQuery<ICottonDrawSource>>> name={"Draw"} {...props}/>;

export interface IDrawListSourceProps extends Partial<IListProps<ISourceItem<ICottonDrawSource>>> {
	providerProps?: Partial<IDrawProviderProps>;
}

export const DrawListSource: FC<IDrawListSourceProps> = ({providerProps, ...props}) => {
	return <DrawProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICottonDrawSource>>
			{...props}
		/>
	</DrawProvider>;
}

export interface IDrawSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICottonDrawSource>> {
	toOption: IToOptionMapper<ISourceItem<ICottonDrawSource>>;
	providerProps?: Partial<IDrawProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const DrawSourceSelect: FC<IDrawSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<DrawProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICottonDrawSource>> {...props}/>
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

export interface IDrawSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICottonDrawSource>>> {
}

export const DrawSelectionProvider: FC<IDrawSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICottonDrawSource>> {...props}/>;
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

export const useDrawOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICottonDrawSource>>();
export const useDrawSelectionContext = () => useSelectionContext<ISourceItem<ICottonDrawSource>>();
