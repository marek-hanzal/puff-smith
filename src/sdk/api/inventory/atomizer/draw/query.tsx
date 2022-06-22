/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerDrawSource} from "@/puff-smith/service/atomizer/inventory/draw/interface";
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

export const DrawApiLink = "/api/inventory/atomizer/draw/query";
export const DrawCountApiLink = "/api/inventory/atomizer/draw/query/count";

export type IDrawQueryParams = any;

export const useDrawQuery = createQueryHook<ISourceQuery<IAtomizerDrawSource>, ISourceItem<IAtomizerDrawSource>[], IDrawQueryParams>(DrawApiLink, "post");
export const useDrawCountQuery = createQueryHook<ISourceQuery<IAtomizerDrawSource>, number, IDrawQueryParams>(DrawCountApiLink, "post");

export const useDrawSource = () => useSourceContext<ISourceItem<IAtomizerDrawSource>>();

export interface IDrawSourceContext extends ISourceContext<ISourceItem<IAtomizerDrawSource>> {
}

export interface IDrawSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAtomizerDrawSource>>> {
}

export const DrawSourceConsumer: FC<IDrawSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IDrawProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAtomizerDrawSource>>> {
}

export const DrawProvider: FC<IDrawProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAtomizerDrawSource>>
		name={"Draw"}
		useQuery={useDrawQuery}
		useCountQuery={useDrawCountQuery}
		{...props}
	/>;
};

export const toDrawLink = (queryParams?: IDrawQueryParams) => toLink(DrawApiLink, queryParams);
export const useDrawLink = () => toDrawLink;

export const useDrawPromise = createPromiseHook<ISourceQuery<IAtomizerDrawSource>, ISourceItem<IAtomizerDrawSource>, IDrawQueryParams>(DrawApiLink, "post");
export const DrawPromise = createPromise<ISourceQuery<IAtomizerDrawSource>, ISourceItem<IAtomizerDrawSource>, IDrawQueryParams>(DrawApiLink, "post");

export interface IDrawFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAtomizerDrawSource>>>> {
}

export const DrawFilterProvider: FC<IDrawFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAtomizerDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAtomizerDrawSource>>>();
export const useDrawFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAtomizerDrawSource>>>();

export interface IDrawProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAtomizerDrawSource>>> {
}

export const DrawProviderFilter: FC<IDrawProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Draw"}
/>;

export interface IDrawOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAtomizerDrawSource>>>> {
}

export const DrawOrderByProvider: FC<IDrawOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAtomizerDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerDrawSource>>>();
export const useDrawOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerDrawSource>>>();

export interface IDrawProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAtomizerDrawSource>>, IQueryOrderBy<ISourceQuery<IAtomizerDrawSource>>, IDrawQueryParams>> {
}

export const DrawProviderControl: FC<IDrawProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAtomizerDrawSource>>, IQueryOrderBy<ISourceQuery<IAtomizerDrawSource>>> name={"Draw"} {...props}/>;

export interface IDrawListSourceProps extends Partial<IListProps<ISourceItem<IAtomizerDrawSource>>> {
	providerProps?: Partial<IDrawProviderProps>;
}

export const DrawListSource: FC<IDrawListSourceProps> = ({providerProps, ...props}) => {
	return <DrawProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAtomizerDrawSource>>
			{...props}
		/>
	</DrawProvider>;
}

export interface IDrawSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAtomizerDrawSource>> {
	toOption: IToOptionMapper<ISourceItem<IAtomizerDrawSource>>;
	providerProps?: Partial<IDrawProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const DrawSourceSelect: FC<IDrawSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<DrawProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAtomizerDrawSource>> {...props}/>
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

export interface IDrawSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAtomizerDrawSource>>> {
}

export const DrawSelectionProvider: FC<IDrawSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAtomizerDrawSource>> {...props}/>;
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

export const useDrawOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAtomizerDrawSource>>();
export const useDrawSelectionContext = () => useSelectionContext<ISourceItem<IAtomizerDrawSource>>();
