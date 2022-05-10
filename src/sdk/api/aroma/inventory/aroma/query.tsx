/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma/interface";
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

export const InventoryAromaApiLink = "/api/aroma/inventory/aroma/query";

export type IInventoryAromaQueryParams = undefined;

export const useInventoryAromaQuery = createQueryHook<IAromaQuery, IQueryResult<IAroma>, IInventoryAromaQueryParams>(InventoryAromaApiLink, "post");

export const useInventoryAromaSource = () => useSourceContext<IAroma>();

export interface IInventoryAromaSourceContext extends ISourceContext<IAroma> {
}

export interface IInventoryAromaSourceConsumerProps extends ConsumerProps<ISourceContext<IAroma>> {
}

export const InventoryAromaSourceConsumer: FC<IInventoryAromaSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IInventoryAromaSourceProps extends Partial<ISourceProviderProps<IAroma>> {
}

export const InventoryAromaSource: FC<IInventoryAromaSourceProps> = props => {
	return <SourceProvider<IAroma>
		name={"InventoryAroma"}
		useQuery={useInventoryAromaQuery}
		{...props}
	/>;
};

export const toInventoryAromaLink = (queryParams?: IInventoryAromaQueryParams) => toLink(InventoryAromaApiLink, queryParams);
export const useInventoryAromaLink = () => toInventoryAromaLink;

export const useInventoryAromaPromise = createPromiseHook<IAromaQuery, IAroma, IInventoryAromaQueryParams>(InventoryAromaApiLink, "post");
export const InventoryAromaPromise = createPromise<IAromaQuery, IAroma, IInventoryAromaQueryParams>(InventoryAromaApiLink, "post");

export interface IInventoryAromaFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaQuery>>> {
}

export const InventoryAromaFilterProvider: FC<IInventoryAromaFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaQuery>> name={"InventoryAroma"} {...props}/>;

export const useInventoryAromaOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaQuery>>();
export const useInventoryAromaFilterContext = () => useFilterContext<IQueryFilter<IAromaQuery>>();

export interface IInventoryAromaSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaQuery>> {
}

export const InventoryAromaSourceFilter: FC<IInventoryAromaSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.InventoryAroma"}
/>;

export interface IInventoryAromaOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaQuery>>> {
}

export const InventoryAromaOrderByProvider: FC<IInventoryAromaOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaQuery>> name={"InventoryAroma"} {...props}/>;

export const useInventoryAromaOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaQuery>>();
export const useInventoryAromaOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaQuery>>();

export interface IInventoryAromaListSourceProps extends Partial<IListProps<IAroma>> {
	sourceProps?: Partial<IInventoryAromaSourceProps>;
}

export interface IInventoryAromaSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>, IInventoryAromaQueryParams>> {
}

export const InventoryAromaSourceControlProvider: FC<IInventoryAromaSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>> name={"InventoryAroma"} {...props}/>;

export const InventoryAromaListSource: FC<IInventoryAromaListSourceProps> = ({sourceProps, ...props}) => {
	return <InventoryAromaSource
		{...sourceProps}
	>
		<List<IAroma>
			{...props}
		/>
	</InventoryAromaSource>;
};

export interface IInventoryAromaSourceSelectProps extends IQuerySourceSelectProps<IAroma> {
	toOption: IToOptionMapper<IAroma>;
	sourceProps?: IInventoryAromaSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const InventoryAromaSourceSelect: FC<IInventoryAromaSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<InventoryAromaSource {...sourceProps}>
					<QuerySourceSelect<IAroma> {...props}/>
				</InventoryAromaSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.InventoryAroma.title"}
					size={props.size}
					tooltip={"common.selection.InventoryAroma.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<InventoryAromaSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</InventoryAromaSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IInventoryAromaSelectionProviderProps extends Partial<ISelectionProviderProps<IAroma>> {
}

export const InventoryAromaSelectionProvider: FC<IInventoryAromaSelectionProviderProps> = props => {
	return <SelectionProvider<IAroma> {...props}/>;
};

export const useInventoryAromaQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([InventoryAromaApiLink]);
};

export const useInventoryAromaOptionalSelectionContext = () => useOptionalSelectionContext<IAroma>();
export const useInventoryAromaSelectionContext = () => useSelectionContext<IAroma>();
