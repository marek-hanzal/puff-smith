/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IDrawerContext, IQueryFilter, IQueryOrderBy, ISelectionContext, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	BubbleButton,
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	DrawerContext,
	Filter,
	FilterProvider,
	IDrawerButtonProps,
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
	ITableProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionContext,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	Table,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalFormItemContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {CheckOutline} from "antd-mobile-icons";
import {ConsumerProps, FC, ReactNode, useRef} from "react";

export const VendorApiLink = "/api/vendor/query";
export const VendorCountApiLink = "/api/vendor/query/count";

export type IVendorQueryParams = any;

export const useVendorQuery = createQueryHook<ISourceQuery<IVendorSource>, ISourceItem<IVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");
export const useVendorCountQuery = createQueryHook<ISourceQuery<IVendorSource>, number, IVendorQueryParams>(VendorCountApiLink, "post");

export const useVendorSource = () => useSourceContext<ISourceItem<IVendorSource>>();

export interface IVendorSourceContext extends ISourceContext<ISourceItem<IVendorSource>> {
}

export interface IVendorSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IVendorSource>>> {
}

export const VendorSourceConsumer: FC<IVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVendorProviderProps extends Partial<ISourceProviderProps<ISourceItem<IVendorSource>>> {
}

export const VendorProvider: FC<IVendorProviderProps> = props => {
	return <SourceProvider<ISourceItem<IVendorSource>>
		name={"Vendor"}
		useQuery={useVendorQuery}
		useCountQuery={useVendorCountQuery}
		{...props}
	/>;
};

export const toVendorLink = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<ISourceQuery<IVendorSource>, ISourceItem<IVendorSource>, IVendorQueryParams>(VendorApiLink, "post");
export const VendorPromise = createPromise<ISourceQuery<IVendorSource>, ISourceItem<IVendorSource>, IVendorQueryParams>(VendorApiLink, "post");

export interface IVendorFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IVendorSource>>>> {
}

export const VendorFilterProvider: FC<IVendorFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IVendorSource>>>();
export const useVendorFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IVendorSource>>>();

export interface IVendorProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IVendorSource>>> {
}

export const VendorProviderFilter: FC<IVendorProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Vendor"}
/>;

export interface IVendorOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IVendorSource>>>> {
}

export const VendorOrderByProvider: FC<IVendorOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IVendorSource>>>();
export const useVendorOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IVendorSource>>>();

export interface IVendorProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IVendorSource>>, IQueryOrderBy<ISourceQuery<IVendorSource>>, IVendorQueryParams>> {
}

export const VendorProviderControl: FC<IVendorProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IVendorSource>>, IQueryOrderBy<ISourceQuery<IVendorSource>>> name={"Vendor"} {...props}/>;

export interface IVendorTableSourceProps extends Partial<ITableProps<ISourceItem<IVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorTableSource: FC<IVendorTableSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IVendorSource>>
			translation={VendorApiLink}
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorListSourceProps extends Partial<IListProps<ISourceItem<IVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorListSource: FC<IVendorListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IVendorSource>>
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorInfiniteListSource: FC<IVendorInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IVendorSource>>
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorSourceSelection {
	selectionContext: ISelectionContext<ISourceItem<IVendorSource>>;
	drawerContext: IDrawerContext;
}

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IVendorSource>> {
	toOption: IToOptionMapper<ISourceItem<IVendorSource>>;
	providerProps?: Partial<IVendorProviderProps>;
	selectionList?: (context: IVendorSourceSelection) => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
	selectionProvider?: IVendorProviderControlProps;
	selectionDrawer?: IDrawerButtonProps;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({providerProps, selectionList, selectionProps, selectionProvider, selectionDrawer, ...props}) => {
	const formItem = useOptionalFormItemContext();
	const selection = useRef<Record<string, ISourceItem<IVendorSource>>>({});
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VendorProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IVendorSource>>
						onSelect={({entity}) => {
							selection.current[entity.id] = entity;
						}}
						onDeselect={({entity}) => {
							delete selection.current[entity.id];
						}}
						onClear={() => {
							selection.current = {};
						}}
						{...props}
					/>
				</VendorProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Vendor.title"}
					size={props.size}
					tooltip={"common.selection.Vendor.title.tooltip"}
					width={800}
					type={"text"}
					{...selectionDrawer}
				>
					<DrawerContext.Consumer>
						{drawerContext => <VendorProviderControl
							defaultSize={10}
							{...selectionProvider}
						>
							<SelectionProvider<ISourceItem<IVendorSource>>
								type={"single"}
								applySelection={selection.current}
								onSelection={({selected, items}) => {
									formItem?.setValue(selected);
									selection.current = items;
									drawerContext.close();
								}}
								{...selectionProps}
							>
								<SelectionContext.Consumer>
									{selectionContext => <>
										<BubbleButton
											icon={<CheckOutline fontSize={32}/>}
											onClick={() => selectionContext.handleSelection()}
										/>
										{selectionList({
											selectionContext,
											drawerContext,
										})}
									</>}
								</SelectionContext.Consumer>
							</SelectionProvider>
						</VendorProviderControl>}
					</DrawerContext.Consumer>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IVendorSource>>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IVendorSource>> {...props}/>;
}

export const useVendorCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorCountApiLink]);
};

export const useVendorQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([VendorApiLink]),
		withCount && queryClient.invalidateQueries([VendorCountApiLink]),
	]);
};

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IVendorSource>>();
export const useVendorSelectionContext = () => useSelectionContext<ISourceItem<IVendorSource>>();
