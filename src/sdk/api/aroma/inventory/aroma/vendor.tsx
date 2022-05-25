/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendorSource} from "@/puff-smith/service/vendor/interface";
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

export const VendorApiLink = "/api/aroma/inventory/aroma/vendor";

export type IVendorQueryParams = undefined;

export const useVendorQuery = createQueryHook<ISourceQuery<IVendorSource>, ISourceItem<IVendorSource>[], IVendorQueryParams>(VendorApiLink, "post");

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

export interface IVendorListSourceProps extends Partial<IListProps<ISourceItem<IVendorSource>>> {
	providerProps?: Partial<IVendorProviderProps>;
}

export const VendorListSource: FC<IVendorListSourceProps> = ({providerProps, ...props}) => {
	return <VendorProvider
		{...providerProps}
	>
		<List<ISourceItem<IVendorSource>>
			{...props}
		/>
	</VendorProvider>;
};

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IVendorSource>> {
	toOption: IToOptionMapper<ISourceItem<IVendorSource>>;
	providerProps?: Partial<IVendorProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VendorProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IVendorSource>> {...props}/>
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

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IVendorSource>>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IVendorSource>> {...props}/>;
};

export const useVendorQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorApiLink]);
};

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IVendorSource>>();
export const useVendorSelectionContext = () => useSelectionContext<ISourceItem<IVendorSource>>();
