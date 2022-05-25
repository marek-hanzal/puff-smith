/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
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

export const BaseInventoryApiLink = "/api/base/inventory/query";

export type IBaseInventoryQueryParams = undefined;

export const useBaseInventoryQuery = createQueryHook<ISourceQuery<IBaseInventorySource>, ISourceItem<IBaseInventorySource>[], IBaseInventoryQueryParams>(BaseInventoryApiLink, "post");

export const useBaseInventorySource = () => useSourceContext<ISourceItem<IBaseInventorySource>>();

export interface IBaseInventorySourceContext extends ISourceContext<ISourceItem<IBaseInventorySource>> {
}

export interface IBaseInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBaseInventorySource>>> {
}

export const BaseInventorySourceConsumer: FC<IBaseInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBaseInventorySource>>> {
}

export const BaseInventoryProvider: FC<IBaseInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBaseInventorySource>>
		name={"BaseInventory"}
		useQuery={useBaseInventoryQuery}
		{...props}
	/>;
};

export const toBaseInventoryLink = (queryParams?: IBaseInventoryQueryParams) => toLink(BaseInventoryApiLink, queryParams);
export const useBaseInventoryLink = () => toBaseInventoryLink;

export const useBaseInventoryPromise = createPromiseHook<ISourceQuery<IBaseInventorySource>, ISourceItem<IBaseInventorySource>, IBaseInventoryQueryParams>(BaseInventoryApiLink, "post");
export const BaseInventoryPromise = createPromise<ISourceQuery<IBaseInventorySource>, ISourceItem<IBaseInventorySource>, IBaseInventoryQueryParams>(BaseInventoryApiLink, "post");

export interface IBaseInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBaseInventorySource>>>> {
}

export const BaseInventoryFilterProvider: FC<IBaseInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBaseInventorySource>>> name={"BaseInventory"} {...props}/>;

export const useBaseInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBaseInventorySource>>>();
export const useBaseInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBaseInventorySource>>>();

export interface IBaseInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBaseInventorySource>>> {
}

export const BaseInventoryProviderFilter: FC<IBaseInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BaseInventory"}
/>;

export interface IBaseInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBaseInventorySource>>>> {
}

export const BaseInventoryOrderByProvider: FC<IBaseInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBaseInventorySource>>> name={"BaseInventory"} {...props}/>;

export const useBaseInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBaseInventorySource>>>();
export const useBaseInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBaseInventorySource>>>();

export interface IBaseInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBaseInventorySource>>, IQueryOrderBy<ISourceQuery<IBaseInventorySource>>, IBaseInventoryQueryParams>> {
}

export const BaseInventoryProviderControl: FC<IBaseInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IBaseInventorySource>>, IQueryOrderBy<ISourceQuery<IBaseInventorySource>>> name={"BaseInventory"} {...props}/>;

export interface IBaseInventoryListSourceProps extends Partial<IListProps<ISourceItem<IBaseInventorySource>>> {
	providerProps?: Partial<IBaseInventoryProviderProps>;
}

export const BaseInventoryListSource: FC<IBaseInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <BaseInventoryProvider
		{...providerProps}
	>
		<List<ISourceItem<IBaseInventorySource>>
			{...props}
		/>
	</BaseInventoryProvider>;
};

export interface IBaseInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBaseInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IBaseInventorySource>>;
	providerProps?: Partial<IBaseInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseInventorySourceSelect: FC<IBaseInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBaseInventorySource>> {...props}/>
				</BaseInventoryProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BaseInventory.title"}
					size={props.size}
					tooltip={"common.selection.BaseInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BaseInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BaseInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBaseInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBaseInventorySource>>> {
}

export const BaseInventorySelectionProvider: FC<IBaseInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBaseInventorySource>> {...props}/>;
};

export const useBaseInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseInventoryApiLink]);
};

export const useBaseInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBaseInventorySource>>();
export const useBaseInventorySelectionContext = () => useSelectionContext<ISourceItem<IBaseInventorySource>>();
