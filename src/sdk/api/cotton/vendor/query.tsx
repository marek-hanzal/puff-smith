/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonVendorSource} from "@/puff-smith/service/cotton/vendor/interface";
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

export const VendorApiLink = "/api/cotton/vendor/query";
export const VendorCountApiLink = "/api/cotton/vendor/query/count";

export type IVendorQueryParams = any;

export const useVendorQuery = createQueryHook<ISourceQuery<ICottonVendorSource>, ISourceItem<ICottonVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");
export const useVendorCountQuery = createQueryHook<ISourceQuery<ICottonVendorSource>, number, IVendorQueryParams>(VendorCountApiLink, "post");

export const useVendorSource = () => useSourceContext<ISourceItem<ICottonVendorSource>>();

export interface IVendorSourceContext extends ISourceContext<ISourceItem<ICottonVendorSource>> {
}

export interface IVendorSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICottonVendorSource>>> {
}

export const VendorSourceConsumer: FC<IVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVendorProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICottonVendorSource>>> {
}

export const VendorProvider: FC<IVendorProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICottonVendorSource>>
		name={"Vendor"}
		useQuery={useVendorQuery}
		useCountQuery={useVendorCountQuery}
		{...props}
	/>;
};

export const toVendorLink = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<ISourceQuery<ICottonVendorSource>, ISourceItem<ICottonVendorSource>, IVendorQueryParams>(VendorApiLink, "post");
export const VendorPromise = createPromise<ISourceQuery<ICottonVendorSource>, ISourceItem<ICottonVendorSource>, IVendorQueryParams>(VendorApiLink, "post");

export interface IVendorFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICottonVendorSource>>>> {
}

export const VendorFilterProvider: FC<IVendorFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICottonVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICottonVendorSource>>>();
export const useVendorFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICottonVendorSource>>>();

export interface IVendorProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICottonVendorSource>>> {
}

export const VendorProviderFilter: FC<IVendorProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Vendor"}
/>;

export interface IVendorOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICottonVendorSource>>>> {
}

export const VendorOrderByProvider: FC<IVendorOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICottonVendorSource>>> name={"Vendor"} {...props}/>;

export const useVendorOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICottonVendorSource>>>();
export const useVendorOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICottonVendorSource>>>();

export interface IVendorProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICottonVendorSource>>, IQueryOrderBy<ISourceQuery<ICottonVendorSource>>, IVendorQueryParams>> {
}

export const VendorProviderControl: FC<IVendorProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICottonVendorSource>>, IQueryOrderBy<ISourceQuery<ICottonVendorSource>>> name={"Vendor"} {...props}/>;

export interface IVendorListSourceProps extends Partial<IListProps<ISourceItem<ICottonVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorListSource: FC<IVendorListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICottonVendorSource>>
			{...props}
		/>
	</VendorProvider>;
}

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICottonVendorSource>> {
	toOption: IToOptionMapper<ISourceItem<ICottonVendorSource>>;
	providerProps?: Partial<IVendorProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VendorProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICottonVendorSource>> {...props}/>
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

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICottonVendorSource>>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICottonVendorSource>> {...props}/>;
}

export const useVendorQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorApiLink]);
};

export const useVendorCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorCountApiLink]);
};

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICottonVendorSource>>();
export const useVendorSelectionContext = () => useSelectionContext<ISourceItem<ICottonVendorSource>>();
