/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellTypeSource} from "@/puff-smith/service/cell/type/interface";
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

export const CellTypeApiLink = "/api/cell/type/query";
export const CellTypeCountApiLink = "/api/cell/type/query/count";

export type ICellTypeQueryParams = any;

export const useCellTypeQuery = createQueryHook<ISourceQuery<ICellTypeSource>, ISourceItem<ICellTypeSource>[], ICellTypeQueryParams>(CellTypeApiLink, "post");
export const useCellTypeCountQuery = createQueryHook<ISourceQuery<ICellTypeSource>, number, ICellTypeQueryParams>(CellTypeCountApiLink, "post");

export const useCellTypeSource = () => useSourceContext<ISourceItem<ICellTypeSource>>();

export interface ICellTypeSourceContext extends ISourceContext<ISourceItem<ICellTypeSource>> {
}

export interface ICellTypeSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICellTypeSource>>> {
}

export const CellTypeSourceConsumer: FC<ICellTypeSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellTypeProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICellTypeSource>>> {
}

export const CellTypeProvider: FC<ICellTypeProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICellTypeSource>>
		name={"CellType"}
		useQuery={useCellTypeQuery}
		useCountQuery={useCellTypeCountQuery}
		{...props}
	/>;
};

export const toCellTypeLink = (queryParams?: ICellTypeQueryParams) => toLink(CellTypeApiLink, queryParams);
export const useCellTypeLink = () => toCellTypeLink;

export const useCellTypePromise = createPromiseHook<ISourceQuery<ICellTypeSource>, ISourceItem<ICellTypeSource>, ICellTypeQueryParams>(CellTypeApiLink, "post");
export const CellTypePromise = createPromise<ISourceQuery<ICellTypeSource>, ISourceItem<ICellTypeSource>, ICellTypeQueryParams>(CellTypeApiLink, "post");

export interface ICellTypeFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICellTypeSource>>>> {
}

export const CellTypeFilterProvider: FC<ICellTypeFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICellTypeSource>>> name={"CellType"} {...props}/>;

export const useCellTypeOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICellTypeSource>>>();
export const useCellTypeFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICellTypeSource>>>();

export interface ICellTypeProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICellTypeSource>>> {
}

export const CellTypeProviderFilter: FC<ICellTypeProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellType"}
/>;

export interface ICellTypeOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICellTypeSource>>>> {
}

export const CellTypeOrderByProvider: FC<ICellTypeOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICellTypeSource>>> name={"CellType"} {...props}/>;

export const useCellTypeOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICellTypeSource>>>();
export const useCellTypeOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICellTypeSource>>>();

export interface ICellTypeProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICellTypeSource>>, IQueryOrderBy<ISourceQuery<ICellTypeSource>>, ICellTypeQueryParams>> {
}

export const CellTypeProviderControl: FC<ICellTypeProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICellTypeSource>>, IQueryOrderBy<ISourceQuery<ICellTypeSource>>> name={"CellType"} {...props}/>;

export interface ICellTypeListSourceProps extends Partial<IListProps<ISourceItem<ICellTypeSource>>> {
	providerProps?: Partial<ICellTypeProviderProps>;
}

export const CellTypeListSource: FC<ICellTypeListSourceProps> = ({providerProps, ...props}) => {
	return <CellTypeProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICellTypeSource>>
			{...props}
		/>
	</CellTypeProvider>;
}

export interface ICellTypeSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICellTypeSource>> {
	toOption: IToOptionMapper<ISourceItem<ICellTypeSource>>;
	providerProps?: Partial<ICellTypeProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellTypeSourceSelect: FC<ICellTypeSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellTypeProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICellTypeSource>> {...props}/>
				</CellTypeProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CellType.title"}
					size={props.size}
					tooltip={"common.selection.CellType.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CellTypeProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellTypeProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellTypeSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICellTypeSource>>> {
}

export const CellTypeSelectionProvider: FC<ICellTypeSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICellTypeSource>> {...props}/>;
};

export const useCellTypeCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellTypeCountApiLink]);
};

export const useCellTypeQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([CellTypeApiLink]),
		withCount && queryClient.invalidateQueries([CellTypeCountApiLink]),
	]);
};

export const useCellTypeOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICellTypeSource>>();
export const useCellTypeSelectionContext = () => useSelectionContext<ISourceItem<ICellTypeSource>>();
