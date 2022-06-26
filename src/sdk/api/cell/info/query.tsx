/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInfoSource} from "@/puff-smith/service/cell/info/interface";
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

export const CellInfoApiLink = "/api/cell/info/query";
export const CellInfoCountApiLink = "/api/cell/info/query/count";

export type ICellInfoQueryParams = any;

export const useCellInfoQuery = createQueryHook<ISourceQuery<ICellInfoSource>, ISourceItem<ICellInfoSource>[], ICellInfoQueryParams>(CellInfoApiLink, "post");
export const useCellInfoCountQuery = createQueryHook<ISourceQuery<ICellInfoSource>, number, ICellInfoQueryParams>(CellInfoCountApiLink, "post");

export const useCellInfoSource = () => useSourceContext<ISourceItem<ICellInfoSource>>();

export interface ICellInfoSourceContext extends ISourceContext<ISourceItem<ICellInfoSource>> {
}

export interface ICellInfoSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICellInfoSource>>> {
}

export const CellInfoSourceConsumer: FC<ICellInfoSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICellInfoProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICellInfoSource>>> {
}

export const CellInfoProvider: FC<ICellInfoProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICellInfoSource>>
		name={"CellInfo"}
		useQuery={useCellInfoQuery}
		useCountQuery={useCellInfoCountQuery}
		{...props}
	/>;
};

export const toCellInfoLink = (queryParams?: ICellInfoQueryParams) => toLink(CellInfoApiLink, queryParams);
export const useCellInfoLink = () => toCellInfoLink;

export const useCellInfoPromise = createPromiseHook<ISourceQuery<ICellInfoSource>, ISourceItem<ICellInfoSource>, ICellInfoQueryParams>(CellInfoApiLink, "post");
export const CellInfoPromise = createPromise<ISourceQuery<ICellInfoSource>, ISourceItem<ICellInfoSource>, ICellInfoQueryParams>(CellInfoApiLink, "post");

export interface ICellInfoFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICellInfoSource>>>> {
}

export const CellInfoFilterProvider: FC<ICellInfoFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICellInfoSource>>> name={"CellInfo"} {...props}/>;

export const useCellInfoOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICellInfoSource>>>();
export const useCellInfoFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICellInfoSource>>>();

export interface ICellInfoProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICellInfoSource>>> {
}

export const CellInfoProviderFilter: FC<ICellInfoProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.CellInfo"}
/>;

export interface ICellInfoOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICellInfoSource>>>> {
}

export const CellInfoOrderByProvider: FC<ICellInfoOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICellInfoSource>>> name={"CellInfo"} {...props}/>;

export const useCellInfoOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICellInfoSource>>>();
export const useCellInfoOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICellInfoSource>>>();

export interface ICellInfoProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICellInfoSource>>, IQueryOrderBy<ISourceQuery<ICellInfoSource>>, ICellInfoQueryParams>> {
}

export const CellInfoProviderControl: FC<ICellInfoProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICellInfoSource>>, IQueryOrderBy<ISourceQuery<ICellInfoSource>>> name={"CellInfo"} {...props}/>;

export interface ICellInfoListSourceProps extends Partial<IListProps<ISourceItem<ICellInfoSource>>> {
	providerProps?: Partial<ICellInfoProviderProps>;
}

export const CellInfoListSource: FC<ICellInfoListSourceProps> = ({providerProps, ...props}) => {
	return <CellInfoProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICellInfoSource>>
			{...props}
		/>
	</CellInfoProvider>;
}

export interface ICellInfoSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICellInfoSource>> {
	toOption: IToOptionMapper<ISourceItem<ICellInfoSource>>;
	providerProps?: Partial<ICellInfoProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CellInfoSourceSelect: FC<ICellInfoSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CellInfoProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICellInfoSource>> {...props}/>
				</CellInfoProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.CellInfo.title"}
					size={props.size}
					tooltip={"common.selection.CellInfo.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CellInfoProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CellInfoProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICellInfoSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICellInfoSource>>> {
}

export const CellInfoSelectionProvider: FC<ICellInfoSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICellInfoSource>> {...props}/>;
}

export const useCellInfoCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellInfoCountApiLink]);
};

export const useCellInfoQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([CellInfoApiLink]),
		withCount && queryClient.invalidateQueries([CellInfoCountApiLink]),
	]);
};

export const useCellInfoOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICellInfoSource>>();
export const useCellInfoSelectionContext = () => useSelectionContext<ISourceItem<ICellInfoSource>>();
