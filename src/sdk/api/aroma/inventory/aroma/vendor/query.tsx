/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaVendorSource} from "@/puff-smith/service/aroma/vendor/interface";
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

export const VendorApiLink = "/api/aroma/inventory/aroma/vendor/query";
export const VendorCountApiLink = "/api/aroma/inventory/aroma/vendor/query/count";

export type IVendorQueryParams = undefined;

export const useVendorQuery = createQueryHook<ISourceQuery<IAromaVendorSource>, ISourceItem<IAromaVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");
export const useVendorCountQuery = createQueryHook<ISourceQuery<IAromaVendorSource>, number, IVendorQueryParams>(VendorCountApiLink, "post");

export const useVendorSource = () => useSourceContext<ISourceItem<IAromaVendorSource>>();

export interface IVendorSourceContext extends ISourceContext<ISourceItem<IAromaVendorSource>> {
}

export interface IVendorSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaVendorSource>>> {
}

export const VendorSourceConsumer: FC<IVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVendorProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaVendorSource>>> {
}

export const VendorProvider: FC<IVendorProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaVendorSource>>
		name={"Vendor"}
		useQuery={useVendorQuery}
		useCountQuery={useVendorCountQuery}
		{...props}
	/>;
};

export const toVendorLink = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<ISourceQuery<IAromaVendorSource>, ISourceItem<IAromaVendorSource>, IVendorQueryParams>(VendorApiLink, "post");
export const VendorPromise = createPromise<ISourceQuery<IAromaVendorSource>, ISourceItem<IAromaVendorSource>, IVendorQueryParams>(VendorApiLink, "post");

export interface IVendorFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaVendorSource>>>> {
}

export const VendorFilterProvider: FC<IVendorFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaVendorSource>>>();
export const useVendorFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaVendorSource>>>();

export interface IVendorProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaVendorSource>>> {
}

export const VendorProviderFilter: FC<IVendorProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Vendor"}
/>;

export interface IVendorOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>>> {
}

export const VendorOrderByProvider: FC<IVendorOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>>();
export const useVendorOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>>();

export interface IVendorProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaVendorSource>>, IQueryOrderBy<ISourceQuery<IAromaVendorSource>>, IVendorQueryParams>> {
}

export const VendorProviderControl: FC<IVendorProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAromaVendorSource>>, IQueryOrderBy<ISourceQuery<IAromaVendorSource>>> name={"Vendor"} {...props}/>;

export interface IVendorListSourceProps extends Partial<IListProps<ISourceItem<IAromaVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorListSource: FC<IVendorListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAromaVendorSource>>
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaVendorSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaVendorSource>>;
	providerProps?: Partial<IVendorProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VendorProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaVendorSource>> {...props}/>
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

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaVendorSource>>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaVendorSource>> {...props}/>;
}

export const useVendorQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorApiLink]);
};

export const useVendorCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorCountApiLink]);
};

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaVendorSource>>();
export const useVendorSelectionContext = () => useSelectionContext<ISourceItem<IAromaVendorSource>>();
