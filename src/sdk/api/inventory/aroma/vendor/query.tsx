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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";

export const AromaVendorApiLink = "/api/inventory/aroma/vendor/query";
export const AromaVendorCountApiLink = "/api/inventory/aroma/vendor/query/count";

export type IAromaVendorQueryParams = any;

export const useAromaVendorQuery = createQueryHook<ISourceQuery<IAromaVendorSource>, ISourceItem<IAromaVendorSource>[], IAromaVendorQueryParams>(AromaVendorApiLink, "post");
export const useAromaVendorCountQuery = createQueryHook<ISourceQuery<IAromaVendorSource>, number, IAromaVendorQueryParams>(AromaVendorCountApiLink, "post");

export const useAromaVendorSource = () => useSourceContext<ISourceItem<IAromaVendorSource>>()

export interface IAromaVendorSourceContext extends ISourceContext<ISourceItem<IAromaVendorSource>> {
}

export interface IAromaVendorSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaVendorSource>>> {
}

export const AromaVendorSourceConsumer: FC<IAromaVendorSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaVendorProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaVendorSource>>> {
}

export const AromaVendorProvider: FC<IAromaVendorProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaVendorSource>>
		name={"AromaVendor"}
		useQuery={useAromaVendorQuery}
		useCountQuery={useAromaVendorCountQuery}
		{...props}
	/>;
};

export const toAromaVendorLink = (queryParams?: IAromaVendorQueryParams) => toLink(AromaVendorApiLink, queryParams);
export const useAromaVendorLink = () => toAromaVendorLink;

export const useAromaVendorPromise = createPromiseHook<ISourceQuery<IAromaVendorSource>, ISourceItem<IAromaVendorSource>, IAromaVendorQueryParams>(AromaVendorApiLink, "post");
export const AromaVendorPromise = createPromise<ISourceQuery<IAromaVendorSource>, ISourceItem<IAromaVendorSource>, IAromaVendorQueryParams>(AromaVendorApiLink, "post");

export interface IAromaVendorFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaVendorSource>>>> {
}

export const AromaVendorFilterProvider: FC<IAromaVendorFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaVendorSource>>> name={"AromaVendor"} {...props}/>;

export const useAromaVendorOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaVendorSource>>>()
export const useAromaVendorFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaVendorSource>>>()

export interface IAromaVendorProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaVendorSource>>> {
}

export const AromaVendorProviderFilter: FC<IAromaVendorProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.AromaVendor'}
/>;

export interface IAromaVendorOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>>> {
}

export const AromaVendorOrderByProvider: FC<IAromaVendorOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>> name={"AromaVendor"} {...props}/>;

export const useAromaVendorOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>>()
export const useAromaVendorOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaVendorSource>>>()

export interface IAromaVendorProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaVendorSource>>, IQueryOrderBy<ISourceQuery<IAromaVendorSource>>, IAromaVendorQueryParams>> {
}

export const AromaVendorProviderControl: FC<IAromaVendorProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAromaVendorSource>>, IQueryOrderBy<ISourceQuery<IAromaVendorSource>>> name={"AromaVendor"} {...props}/>;

export interface IAromaVendorListSourceProps extends Partial<IListProps<ISourceItem<IAromaVendorSource>>> {
	providerProps?: Partial<IAromaVendorProviderProps>;
}

export const AromaVendorListSource: FC<IAromaVendorListSourceProps> = ({providerProps, ...props}) => {
	return <AromaVendorProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IAromaVendorSource>>
			{...props}
		/>
	</AromaVendorProvider>;
}

export interface IAromaVendorInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IAromaVendorSource>>> {
	providerProps?: Partial<IAromaVendorProviderProps>;
}

export const AromaVendorInfiniteListSource: FC<IAromaVendorInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <AromaVendorProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IAromaVendorSource>>
			{...props}
		/>
	</AromaVendorProvider>;
}

export interface IAromaVendorSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaVendorSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaVendorSource>>;
	providerProps?: Partial<IAromaVendorProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaVendorSourceSelect: FC<IAromaVendorSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaVendorProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaVendorSource>> {...props}/>
				</AromaVendorProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AromaVendor.title"}
					size={props.size}
					tooltip={"common.selection.AromaVendor.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<AromaVendorProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaVendorProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaVendorSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaVendorSource>>> {
}

export const AromaVendorSelectionProvider: FC<IAromaVendorSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaVendorSource>> {...props}/>
}

export const useAromaVendorCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaVendorCountApiLink]);
};

export const useAromaVendorQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AromaVendorApiLink]),
		withCount && queryClient.invalidateQueries([AromaVendorCountApiLink]),
	]);
};

export const useAromaVendorOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaVendorSource>>();
export const useAromaVendorSelectionContext = () => useSelectionContext<ISourceItem<IAromaVendorSource>>();
