/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureInventory, IMixtureInventoryQuery} from "@/puff-smith/service/mixture/inventory/interface";
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

export const MixtureApiLink = "/api/mixture/inventory/mixture/query";

export type IMixtureQueryParams = undefined;

export const useMixtureQuery = createQueryHook<IMixtureInventoryQuery, IQueryResult<IMixtureInventory>, IMixtureQueryParams>(MixtureApiLink, "post");

export const useMixtureSource = () => useSourceContext<IMixtureInventory>();

export interface IMixtureSourceContext extends ISourceContext<IMixtureInventory> {
}

export interface IMixtureSourceConsumerProps extends ConsumerProps<ISourceContext<IMixtureInventory>> {
}

export const MixtureSourceConsumer: FC<IMixtureSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureSourceProps extends Partial<ISourceProviderProps<IMixtureInventory>> {
}

export const MixtureSource: FC<IMixtureSourceProps> = props => {
	return <SourceProvider<IMixtureInventory>
		name={"Mixture"}
		useQuery={useMixtureQuery}
		{...props}
	/>;
};

export const toMixtureLink = (queryParams?: IMixtureQueryParams) => toLink(MixtureApiLink, queryParams);
export const useMixtureLink = () => toMixtureLink;

export const useMixturePromise = createPromiseHook<IMixtureInventoryQuery, IMixtureInventory, IMixtureQueryParams>(MixtureApiLink, "post");
export const MixturePromise = createPromise<IMixtureInventoryQuery, IMixtureInventory, IMixtureQueryParams>(MixtureApiLink, "post");

export interface IMixtureFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IMixtureInventoryQuery>>> {
}

export const MixtureFilterProvider: FC<IMixtureFilterProviderProps> = props => <FilterProvider<IQueryFilter<IMixtureInventoryQuery>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IMixtureInventoryQuery>>();
export const useMixtureFilterContext = () => useFilterContext<IQueryFilter<IMixtureInventoryQuery>>();

export interface IMixtureSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IMixtureInventoryQuery>> {
}

export const MixtureSourceFilter: FC<IMixtureSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mixture"}
/>;

export interface IMixtureOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IMixtureInventoryQuery>>> {
}

export const MixtureOrderByProvider: FC<IMixtureOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IMixtureInventoryQuery>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IMixtureInventoryQuery>>();
export const useMixtureOrderByContext = () => useOrderByContext<IQueryOrderBy<IMixtureInventoryQuery>>();

export interface IMixtureListSourceProps extends Partial<IListProps<IMixtureInventory>> {
	sourceProps?: Partial<IMixtureSourceProps>;
}

export interface IMixtureSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IMixtureInventoryQuery>, IQueryOrderBy<IMixtureInventoryQuery>, IMixtureQueryParams>> {
}

export const MixtureSourceControlProvider: FC<IMixtureSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IMixtureInventoryQuery>, IQueryOrderBy<IMixtureInventoryQuery>> name={"Mixture"} {...props}/>;

export const MixtureListSource: FC<IMixtureListSourceProps> = ({sourceProps, ...props}) => {
	return <MixtureSource
		{...sourceProps}
	>
		<List<IMixtureInventory>
			{...props}
		/>
	</MixtureSource>;
}

export interface IMixtureSourceSelectProps extends IQuerySourceSelectProps<IMixtureInventory> {
	toOption: IToOptionMapper<IMixtureInventory>;
	sourceProps?: IMixtureSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureSourceSelect: FC<IMixtureSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureSource {...sourceProps}>
					<QuerySourceSelect<IMixtureInventory> {...props}/>
				</MixtureSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Mixture.title"}
					size={props.size}
					tooltip={"common.selection.Mixture.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<MixtureSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixtureSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixtureSelectionProviderProps extends Partial<ISelectionProviderProps<IMixtureInventory>> {
}

export const MixtureSelectionProvider: FC<IMixtureSelectionProviderProps> = props => {
	return <SelectionProvider<IMixtureInventory> {...props}/>;
}

export const useMixtureQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureApiLink]);
};

export const useMixtureOptionalSelectionContext = () => useOptionalSelectionContext<IMixtureInventory>();
export const useMixtureSelectionContext = () => useSelectionContext<IMixtureInventory>();
