/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerVendorSource} from "@/puff-smith/service/atomizer/vendor/interface";
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

export const VendorApiLink = "/api/inventory/atomizer/vendor/query";
export const VendorCountApiLink = "/api/inventory/atomizer/vendor/query/count";

export type IVendorQueryParams = any;

export const useVendorQuery = createQueryHook<ISourceQuery<IAtomizerVendorSource>, ISourceItem<IAtomizerVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");
export const useVendorCountQuery = createQueryHook<ISourceQuery<IAtomizerVendorSource>, number, IVendorQueryParams>(VendorCountApiLink, "post");

export const useVendorSource = () => useSourceContext<ISourceItem<IAtomizerVendorSource>>();

export interface IVendorSourceContext extends ISourceContext<ISourceItem<IAtomizerVendorSource>> {
}

export interface IVendorSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAtomizerVendorSource>>> {
}

export const VendorSourceConsumer: FC<IVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVendorProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAtomizerVendorSource>>> {
}

export const VendorProvider: FC<IVendorProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAtomizerVendorSource>>
		name={"Vendor"}
		useQuery={useVendorQuery}
		useCountQuery={useVendorCountQuery}
		{...props}
	/>;
};

export const toVendorLink = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<ISourceQuery<IAtomizerVendorSource>, ISourceItem<IAtomizerVendorSource>, IVendorQueryParams>(VendorApiLink, "post");
export const VendorPromise = createPromise<ISourceQuery<IAtomizerVendorSource>, ISourceItem<IAtomizerVendorSource>, IVendorQueryParams>(VendorApiLink, "post");

export interface IVendorFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAtomizerVendorSource>>>> {
}

export const VendorFilterProvider: FC<IVendorFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAtomizerVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAtomizerVendorSource>>>();
export const useVendorFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAtomizerVendorSource>>>();

export interface IVendorProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAtomizerVendorSource>>> {
}

export const VendorProviderFilter: FC<IVendorProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Vendor"}
/>;

export interface IVendorOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAtomizerVendorSource>>>> {
}

export const VendorOrderByProvider: FC<IVendorOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAtomizerVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerVendorSource>>>();
export const useVendorOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerVendorSource>>>();

export interface IVendorProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAtomizerVendorSource>>, IQueryOrderBy<ISourceQuery<IAtomizerVendorSource>>, IVendorQueryParams>> {
}

export const VendorProviderControl: FC<IVendorProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAtomizerVendorSource>>, IQueryOrderBy<ISourceQuery<IAtomizerVendorSource>>> name={"Vendor"} {...props}/>;

export interface IVendorListSourceProps extends Partial<IListProps<ISourceItem<IAtomizerVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorListSource: FC<IVendorListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IAtomizerVendorSource>>
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAtomizerVendorSource>> {
	toOption: IToOptionMapper<ISourceItem<IAtomizerVendorSource>>;
	providerProps?: Partial<IVendorProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VendorProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAtomizerVendorSource>> {...props}/>
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

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAtomizerVendorSource>>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAtomizerVendorSource>> {...props}/>;
}

export const useVendorQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorApiLink]);
};

export const useVendorCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorCountApiLink]);
};

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAtomizerVendorSource>>();
export const useVendorSelectionContext = () => useSelectionContext<ISourceItem<IAtomizerVendorSource>>();
