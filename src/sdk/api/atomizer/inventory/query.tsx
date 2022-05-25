/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
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

export const AtomizerInventoryApiLink = "/api/atomizer/inventory/query";

export type IAtomizerInventoryQueryParams = undefined;

export const useAtomizerInventoryQuery = createQueryHook<ISourceQuery<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>[], IAtomizerInventoryQueryParams>(AtomizerInventoryApiLink, "post");

export const useAtomizerInventorySource = () => useSourceContext<ISourceItem<IAtomizerInventorySource>>();

export interface IAtomizerInventorySourceContext extends ISourceContext<ISourceItem<IAtomizerInventorySource>> {
}

export interface IAtomizerInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAtomizerInventorySource>>> {
}

export const AtomizerInventorySourceConsumer: FC<IAtomizerInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAtomizerInventorySource>>> {
}

export const AtomizerInventoryProvider: FC<IAtomizerInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAtomizerInventorySource>>
		name={"AtomizerInventory"}
		useQuery={useAtomizerInventoryQuery}
		{...props}
	/>;
};

export const toAtomizerInventoryLink = (queryParams?: IAtomizerInventoryQueryParams) => toLink(AtomizerInventoryApiLink, queryParams);
export const useAtomizerInventoryLink = () => toAtomizerInventoryLink;

export const useAtomizerInventoryPromise = createPromiseHook<ISourceQuery<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>, IAtomizerInventoryQueryParams>(AtomizerInventoryApiLink, "post");
export const AtomizerInventoryPromise = createPromise<ISourceQuery<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>, IAtomizerInventoryQueryParams>(AtomizerInventoryApiLink, "post");

export interface IAtomizerInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAtomizerInventorySource>>>> {
}

export const AtomizerInventoryFilterProvider: FC<IAtomizerInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAtomizerInventorySource>>> name={"AtomizerInventory"} {...props}/>;

export const useAtomizerInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAtomizerInventorySource>>>();
export const useAtomizerInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAtomizerInventorySource>>>();

export interface IAtomizerInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAtomizerInventorySource>>> {
}

export const AtomizerInventoryProviderFilter: FC<IAtomizerInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizerInventory"}
/>;

export interface IAtomizerInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAtomizerInventorySource>>>> {
}

export const AtomizerInventoryOrderByProvider: FC<IAtomizerInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAtomizerInventorySource>>> name={"AtomizerInventory"} {...props}/>;

export const useAtomizerInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerInventorySource>>>();
export const useAtomizerInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerInventorySource>>>();

export interface IAtomizerInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAtomizerInventorySource>>, IQueryOrderBy<ISourceQuery<IAtomizerInventorySource>>, IAtomizerInventoryQueryParams>> {
}

export const AtomizerInventoryProviderControl: FC<IAtomizerInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAtomizerInventorySource>>, IQueryOrderBy<ISourceQuery<IAtomizerInventorySource>>> name={"AtomizerInventory"} {...props}/>;

export interface IAtomizerInventoryListSourceProps extends Partial<IListProps<ISourceItem<IAtomizerInventorySource>>> {
	providerProps?: Partial<IAtomizerInventoryProviderProps>;
}

export const AtomizerInventoryListSource: FC<IAtomizerInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <AtomizerInventoryProvider
		{...providerProps}
	>
		<List<ISourceItem<IAtomizerInventorySource>>
			{...props}
		/>
	</AtomizerInventoryProvider>;
};

export interface IAtomizerInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAtomizerInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IAtomizerInventorySource>>;
	providerProps?: Partial<IAtomizerInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerInventorySourceSelect: FC<IAtomizerInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAtomizerInventorySource>> {...props}/>
				</AtomizerInventoryProvider>
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
					<AtomizerInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAtomizerInventorySource>>> {
}

export const AtomizerInventorySelectionProvider: FC<IAtomizerInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAtomizerInventorySource>> {...props}/>;
};

export const useAtomizerInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerInventoryApiLink]);
};

export const useAtomizerInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAtomizerInventorySource>>();
export const useAtomizerInventorySelectionContext = () => useSelectionContext<ISourceItem<IAtomizerInventorySource>>();
