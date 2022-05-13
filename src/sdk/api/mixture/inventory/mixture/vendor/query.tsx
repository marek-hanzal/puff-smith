/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendor, IVendorQuery} from "@/puff-smith/service/vendor/interface";
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

export const VendorApiLink = "/api/mixture/inventory/mixture/vendor/query";

export type IVendorQueryParams = undefined;

export const useVendorQuery = createQueryHook<IVendorQuery, IQueryResult<IVendor>, IVendorQueryParams>(VendorApiLink, "post");

export const useVendorSource = () => useSourceContext<IVendor>();

export interface IVendorSourceContext extends ISourceContext<IVendor> {
}

export interface IVendorSourceConsumerProps extends ConsumerProps<ISourceContext<IVendor>> {
}

export const VendorSourceConsumer: FC<IVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IVendorSourceProps extends Partial<ISourceProviderProps<IVendor>> {
}

export const VendorSource: FC<IVendorSourceProps> = props => {
	return <SourceProvider<IVendor>
		name={"Vendor"}
		useQuery={useVendorQuery}
		{...props}
	/>;
};

export const toVendorLink = (queryParams?: IVendorQueryParams) => toLink(VendorApiLink, queryParams);
export const useVendorLink = () => toVendorLink;

export const useVendorPromise = createPromiseHook<IVendorQuery, IVendor, IVendorQueryParams>(VendorApiLink, "post");
export const VendorPromise = createPromise<IVendorQuery, IVendor, IVendorQueryParams>(VendorApiLink, "post");

export interface IVendorFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IVendorQuery>>> {
}

export const VendorFilterProvider: FC<IVendorFilterProviderProps> = props => <FilterProvider<IQueryFilter<IVendorQuery>> name={"Vendor"} {...props}/>;

export const useVendorOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IVendorQuery>>();
export const useVendorFilterContext = () => useFilterContext<IQueryFilter<IVendorQuery>>();

export interface IVendorSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IVendorQuery>> {
}

export const VendorSourceFilter: FC<IVendorSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Vendor"}
/>;

export interface IVendorOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IVendorQuery>>> {
}

export const VendorOrderByProvider: FC<IVendorOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IVendorQuery>> name={"Vendor"} {...props}/>;

export const useVendorOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IVendorQuery>>();
export const useVendorOrderByContext = () => useOrderByContext<IQueryOrderBy<IVendorQuery>>();

export interface IVendorListSourceProps extends Partial<IListProps<IVendor>> {
	sourceProps?: Partial<IVendorSourceProps>;
}

export interface IVendorSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IVendorQuery>, IQueryOrderBy<IVendorQuery>, IVendorQueryParams>> {
}

export const VendorSourceControlProvider: FC<IVendorSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IVendorQuery>, IQueryOrderBy<IVendorQuery>> name={"Vendor"} {...props}/>;

export const VendorListSource: FC<IVendorListSourceProps> = ({sourceProps, ...props}) => {
	return <VendorSource
		{...sourceProps}
	>
		<List<IVendor>
			{...props}
		/>
	</VendorSource>;
}

export interface IVendorSourceSelectProps extends IQuerySourceSelectProps<IVendor> {
	toOption: IToOptionMapper<IVendor>;
	sourceProps?: IVendorSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const VendorSourceSelect: FC<IVendorSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<VendorSource {...sourceProps}>
					<QuerySourceSelect<IVendor> {...props}/>
				</VendorSource>
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
					<VendorSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</VendorSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IVendorSelectionProviderProps extends Partial<ISelectionProviderProps<IVendor>> {
}

export const VendorSelectionProvider: FC<IVendorSelectionProviderProps> = props => {
	return <SelectionProvider<IVendor> {...props}/>;
}

export const useVendorQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VendorApiLink]);
};

export const useVendorOptionalSelectionContext = () => useOptionalSelectionContext<IVendor>();
export const useVendorSelectionContext = () => useSelectionContext<IVendor>();
