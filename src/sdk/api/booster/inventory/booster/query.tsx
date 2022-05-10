/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster/interface";
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

export const InventoryBoosterApiLink = "/api/booster/inventory/booster/query";

export type IInventoryBoosterQueryParams = undefined;

export const useInventoryBoosterQuery = createQueryHook<IBoosterQuery, IQueryResult<IBooster>, IInventoryBoosterQueryParams>(InventoryBoosterApiLink, "post");

export const useInventoryBoosterSource = () => useSourceContext<IBooster>();

export interface IInventoryBoosterSourceContext extends ISourceContext<IBooster> {
}

export interface IInventoryBoosterSourceConsumerProps extends ConsumerProps<ISourceContext<IBooster>> {
}

export const InventoryBoosterSourceConsumer: FC<IInventoryBoosterSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IInventoryBoosterSourceProps extends Partial<ISourceProviderProps<IBooster>> {
}

export const InventoryBoosterSource: FC<IInventoryBoosterSourceProps> = props => {
	return <SourceProvider<IBooster>
		name={"InventoryBooster"}
		useQuery={useInventoryBoosterQuery}
		{...props}
	/>;
};

export const toInventoryBoosterLink = (queryParams?: IInventoryBoosterQueryParams) => toLink(InventoryBoosterApiLink, queryParams);
export const useInventoryBoosterLink = () => toInventoryBoosterLink;

export const useInventoryBoosterPromise = createPromiseHook<IBoosterQuery, IBooster, IInventoryBoosterQueryParams>(InventoryBoosterApiLink, "post");
export const InventoryBoosterPromise = createPromise<IBoosterQuery, IBooster, IInventoryBoosterQueryParams>(InventoryBoosterApiLink, "post");

export interface IInventoryBoosterFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterQuery>>> {
}

export const InventoryBoosterFilterProvider: FC<IInventoryBoosterFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterQuery>> name={"InventoryBooster"} {...props}/>;

export const useInventoryBoosterOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterQuery>>();
export const useInventoryBoosterFilterContext = () => useFilterContext<IQueryFilter<IBoosterQuery>>();

export interface IInventoryBoosterSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterQuery>> {
}

export const InventoryBoosterSourceFilter: FC<IInventoryBoosterSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.InventoryBooster"}
/>;

export interface IInventoryBoosterOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterQuery>>> {
}

export const InventoryBoosterOrderByProvider: FC<IInventoryBoosterOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterQuery>> name={"InventoryBooster"} {...props}/>;

export const useInventoryBoosterOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterQuery>>();
export const useInventoryBoosterOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterQuery>>();

export interface IInventoryBoosterListSourceProps extends Partial<IListProps<IBooster>> {
	sourceProps?: Partial<IInventoryBoosterSourceProps>;
}

export interface IInventoryBoosterSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>, IInventoryBoosterQueryParams>> {
}

export const InventoryBoosterSourceControlProvider: FC<IInventoryBoosterSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>> name={"InventoryBooster"} {...props}/>;

export const InventoryBoosterListSource: FC<IInventoryBoosterListSourceProps> = ({sourceProps, ...props}) => {
	return <InventoryBoosterSource
		{...sourceProps}
	>
		<List<IBooster>
			{...props}
		/>
	</InventoryBoosterSource>;
};

export interface IInventoryBoosterSourceSelectProps extends IQuerySourceSelectProps<IBooster> {
	toOption: IToOptionMapper<IBooster>;
	sourceProps?: IInventoryBoosterSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const InventoryBoosterSourceSelect: FC<IInventoryBoosterSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<InventoryBoosterSource {...sourceProps}>
					<QuerySourceSelect<IBooster> {...props}/>
				</InventoryBoosterSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.InventoryBooster.title"}
					size={props.size}
					tooltip={"common.selection.InventoryBooster.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<InventoryBoosterSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</InventoryBoosterSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IInventoryBoosterSelectionProviderProps extends Partial<ISelectionProviderProps<IBooster>> {
}

export const InventoryBoosterSelectionProvider: FC<IInventoryBoosterSelectionProviderProps> = props => {
	return <SelectionProvider<IBooster> {...props}/>;
};

export const useInventoryBoosterQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([InventoryBoosterApiLink]);
};

export const useInventoryBoosterOptionalSelectionContext = () => useOptionalSelectionContext<IBooster>();
export const useInventoryBoosterSelectionContext = () => useSelectionContext<IBooster>();
