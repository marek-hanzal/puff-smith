/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureInventorySource} from "@/puff-smith/service/mixture/inventory/interface";
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

export const MixtureInventoryApiLink = "/api/inventory/mixture/query";
export const MixtureInventoryCountApiLink = "/api/inventory/mixture/query/count";

export type IMixtureInventoryQueryParams = undefined;

export const useMixtureInventoryQuery = createQueryHook<ISourceQuery<IMixtureInventorySource>, ISourceItem<IMixtureInventorySource>[], IMixtureInventoryQueryParams>(MixtureInventoryApiLink, "post");
export const useMixtureInventoryCountQuery = createQueryHook<ISourceQuery<IMixtureInventorySource>, number, IMixtureInventoryQueryParams>(MixtureInventoryCountApiLink, "post");

export const useMixtureInventorySource = () => useSourceContext<ISourceItem<IMixtureInventorySource>>();

export interface IMixtureInventorySourceContext extends ISourceContext<ISourceItem<IMixtureInventorySource>> {
}

export interface IMixtureInventorySourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureInventorySource>>> {
}

export const MixtureInventorySourceConsumer: FC<IMixtureInventorySourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureInventoryProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureInventorySource>>> {
}

export const MixtureInventoryProvider: FC<IMixtureInventoryProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureInventorySource>>
		name={"MixtureInventory"}
		useQuery={useMixtureInventoryQuery}
		useCountQuery={useMixtureInventoryCountQuery}
		{...props}
	/>;
};

export const toMixtureInventoryLink = (queryParams?: IMixtureInventoryQueryParams) => toLink(MixtureInventoryApiLink, queryParams);
export const useMixtureInventoryLink = () => toMixtureInventoryLink;

export const useMixtureInventoryPromise = createPromiseHook<ISourceQuery<IMixtureInventorySource>, ISourceItem<IMixtureInventorySource>, IMixtureInventoryQueryParams>(MixtureInventoryApiLink, "post");
export const MixtureInventoryPromise = createPromise<ISourceQuery<IMixtureInventorySource>, ISourceItem<IMixtureInventorySource>, IMixtureInventoryQueryParams>(MixtureInventoryApiLink, "post");

export interface IMixtureInventoryFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureInventorySource>>>> {
}

export const MixtureInventoryFilterProvider: FC<IMixtureInventoryFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureInventorySource>>> name={"MixtureInventory"} {...props}/>;

export const useMixtureInventoryOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureInventorySource>>>();
export const useMixtureInventoryFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureInventorySource>>>();

export interface IMixtureInventoryProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureInventorySource>>> {
}

export const MixtureInventoryProviderFilter: FC<IMixtureInventoryProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.MixtureInventory"}
/>;

export interface IMixtureInventoryOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>>> {
}

export const MixtureInventoryOrderByProvider: FC<IMixtureInventoryOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>> name={"MixtureInventory"} {...props}/>;

export const useMixtureInventoryOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>>();
export const useMixtureInventoryOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>>();

export interface IMixtureInventoryProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureInventorySource>>, IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>, IMixtureInventoryQueryParams>> {
}

export const MixtureInventoryProviderControl: FC<IMixtureInventoryProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureInventorySource>>, IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>> name={"MixtureInventory"} {...props}/>;

export interface IMixtureInventoryListSourceProps extends Partial<IListProps<ISourceItem<IMixtureInventorySource>>> {
	providerProps?: Partial<IMixtureInventoryProviderProps>;
}

export const MixtureInventoryListSource: FC<IMixtureInventoryListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureInventoryProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IMixtureInventorySource>>
			{...props}
		/>
	</MixtureInventoryProvider>;
}

export interface IMixtureInventorySourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureInventorySource>>;
	providerProps?: Partial<IMixtureInventoryProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureInventorySourceSelect: FC<IMixtureInventorySourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureInventoryProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureInventorySource>> {...props}/>
				</MixtureInventoryProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.MixtureInventory.title"}
					size={props.size}
					tooltip={"common.selection.MixtureInventory.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<MixtureInventoryProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixtureInventoryProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixtureInventorySelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureInventorySource>>> {
}

export const MixtureInventorySelectionProvider: FC<IMixtureInventorySelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureInventorySource>> {...props}/>;
}

export const useMixtureInventoryQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureInventoryApiLink]);
};

export const useMixtureInventoryCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureInventoryCountApiLink]);
};

export const useMixtureInventoryOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureInventorySource>>();
export const useMixtureInventorySelectionContext = () => useSelectionContext<ISourceItem<IMixtureInventorySource>>();
