/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICoilVendorSource} from "@/puff-smith/service/coil/vendor/interface";
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

export const VendorApiLink = "/api/inventory/coil/vendor/query";
export const VendorCountApiLink = "/api/inventory/coil/vendor/query/count";

export type IVendorQueryParams = any;

export const useVendorQuery = createQueryHook<ISourceQuery<ICoilVendorSource>, ISourceItem<ICoilVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");
export const useVendorCountQuery = createQueryHook<ISourceQuery<ICoilVendorSource>, number, IVendorQueryParams>(VendorCountApiLink, "post");

export const useVendorSource = () => useSourceContext<ISourceItem<ICoilVendorSource>>();

export interface IVendorSourceContext extends ISourceContext<ISourceItem<ICoilVendorSource>> {
}

export interface IVendorSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICoilVendorSource>>> {
}

export const VendorSourceConsumer: FC<IVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVendorProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICoilVendorSource>>> {
}

export const VendorProvider: FC<IVendorProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICoilVendorSource>>
		name={"Vendor"}
		useQuery={useVendorQuery}
		useCountQuery={useVendorCountQuery}
		{...props}
	/>;
};

export const toVendorLink = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<ISourceQuery<ICoilVendorSource>, ISourceItem<ICoilVendorSource>, IVendorQueryParams>(VendorApiLink, "post");
export const VendorPromise = createPromise<ISourceQuery<ICoilVendorSource>, ISourceItem<ICoilVendorSource>, IVendorQueryParams>(VendorApiLink, "post");

export interface IVendorFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICoilVendorSource>>>> {
}

export const VendorFilterProvider: FC<IVendorFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICoilVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICoilVendorSource>>>();
export const useVendorFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICoilVendorSource>>>();

export interface IVendorProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICoilVendorSource>>> {
}

export const VendorProviderFilter: FC<IVendorProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Vendor"}
/>;

export interface IVendorOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICoilVendorSource>>>> {
}

export const VendorOrderByProvider: FC<IVendorOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICoilVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICoilVendorSource>>>();
export const useVendorOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICoilVendorSource>>>();

export interface IVendorProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICoilVendorSource>>, IQueryOrderBy<ISourceQuery<ICoilVendorSource>>, IVendorQueryParams>> {
}

export const VendorProviderControl: FC<IVendorProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICoilVendorSource>>, IQueryOrderBy<ISourceQuery<ICoilVendorSource>>> name={"Vendor"} {...props}/>;

export interface IVendorListSourceProps extends Partial<IListProps<ISourceItem<ICoilVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorListSource: FC<IVendorListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICoilVendorSource>>
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICoilVendorSource>> {
	toOption: IToOptionMapper<ISourceItem<ICoilVendorSource>>;
	providerProps?: Partial<IVendorProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VendorProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICoilVendorSource>> {...props}/>
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
					ghost
				>
					<VendorProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VendorProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICoilVendorSource>>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICoilVendorSource>> {...props}/>;
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

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICoilVendorSource>>();
export const useVendorSelectionContext = () => useSelectionContext<ISourceItem<ICoilVendorSource>>();
