/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventory, IAtomizerInventoryQuery} from "@/puff-smith/service/atomizer/inventory/interface";
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

export const AtomizerInventoryApiLink = "/api/atomizer/inventory/query";

export type IAtomizerInventoryQueryParams = undefined;

export const useAtomizerInventoryQuery = createQueryHook<IAtomizerInventoryQuery, IQueryResult<IAtomizerInventory>, IAtomizerInventoryQueryParams>(AtomizerInventoryApiLink, "post");

export const useAtomizerInventorySource = () => useSourceContext<IAtomizerInventory>();

export interface IAtomizerInventorySourceContext extends ISourceContext<IAtomizerInventory> {
}

export interface IAtomizerInventorySourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizerInventory>> {
}

export const AtomizerInventorySourceConsumer: FC<IAtomizerInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerInventorySourceProps extends Partial<ISourceProviderProps<IAtomizerInventory>> {
}

export const AtomizerInventorySource: FC<IAtomizerInventorySourceProps> = props => {
	return <SourceProvider<IAtomizerInventory>
		name={"AtomizerInventory"}
		useQuery={useAtomizerInventoryQuery}
		{...props}
	/>;
};

export const toAtomizerInventoryLink = (queryParams?: IAtomizerInventoryQueryParams) => toLink(AtomizerInventoryApiLink, queryParams);
export const useAtomizerInventoryLink = () => toAtomizerInventoryLink;

export const useAtomizerInventoryPromise = createPromiseHook<IAtomizerInventoryQuery, IAtomizerInventory, IAtomizerInventoryQueryParams>(AtomizerInventoryApiLink, "post");
export const AtomizerInventoryPromise = createPromise<IAtomizerInventoryQuery, IAtomizerInventory, IAtomizerInventoryQueryParams>(AtomizerInventoryApiLink, "post");

export interface IAtomizerInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerInventoryQuery>>> {
}

export const AtomizerInventoryFilterProvider: FC<IAtomizerInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerInventoryQuery>> name={"AtomizerInventory"} {...props}/>;

export const useAtomizerInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerInventoryQuery>>();
export const useAtomizerInventoryFilterContext = () => useFilterContext<IQueryFilter<IAtomizerInventoryQuery>>();

export interface IAtomizerInventorySourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerInventoryQuery>> {
}

export const AtomizerInventorySourceFilter: FC<IAtomizerInventorySourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizerInventory"}
/>;

export interface IAtomizerInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerInventoryQuery>>> {
}

export const AtomizerInventoryOrderByProvider: FC<IAtomizerInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerInventoryQuery>> name={"AtomizerInventory"} {...props}/>;

export const useAtomizerInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerInventoryQuery>>();
export const useAtomizerInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerInventoryQuery>>();

export interface IAtomizerInventoryListSourceProps extends Partial<IListProps<IAtomizerInventory>> {
	sourceProps?: Partial<IAtomizerInventorySourceProps>;
}

export interface IAtomizerInventorySourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerInventoryQuery>, IQueryOrderBy<IAtomizerInventoryQuery>, IAtomizerInventoryQueryParams>> {
}

export const AtomizerInventorySourceControlProvider: FC<IAtomizerInventorySourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IAtomizerInventoryQuery>, IQueryOrderBy<IAtomizerInventoryQuery>> name={"AtomizerInventory"} {...props}/>;

export const AtomizerInventoryListSource: FC<IAtomizerInventoryListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizerInventorySource
		{...sourceProps}
	>
		<List<IAtomizerInventory>
			{...props}
		/>
	</AtomizerInventorySource>;
};

export interface IAtomizerInventorySourceSelectProps extends IQuerySourceSelectProps<IAtomizerInventory> {
	toOption: IToOptionMapper<IAtomizerInventory>;
	sourceProps?: IAtomizerInventorySourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerInventorySourceSelect: FC<IAtomizerInventorySourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerInventorySource {...sourceProps}>
					<QuerySourceSelect<IAtomizerInventory> {...props}/>
				</AtomizerInventorySource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AtomizerInventory.title"}
					size={props.size}
					tooltip={"common.selection.AtomizerInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AtomizerInventorySourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerInventorySourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerInventorySelectionProviderProps extends Partial<ISelectionProviderProps<IAtomizerInventory>> {
}

export const AtomizerInventorySelectionProvider: FC<IAtomizerInventorySelectionProviderProps> = props => {
	return <SelectionProvider<IAtomizerInventory> {...props}/>;
};

export const useAtomizerInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerInventoryApiLink]);
};

export const useAtomizerInventoryOptionalSelectionContext = () => useOptionalSelectionContext<IAtomizerInventory>();
export const useAtomizerInventorySelectionContext = () => useSelectionContext<IAtomizerInventory>();
