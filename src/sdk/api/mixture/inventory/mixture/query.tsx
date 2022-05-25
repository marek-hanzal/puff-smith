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

export const MixtureApiLink = "/api/mixture/inventory/mixture/query";

export type IMixtureQueryParams = undefined;

export const useMixtureQuery = createQueryHook<ISourceQuery<IMixtureInventorySource>, ISourceItem<IMixtureInventorySource>[], IMixtureQueryParams>(MixtureApiLink, "post");

export const useMixtureSource = () => useSourceContext<ISourceItem<IMixtureInventorySource>>();

export interface IMixtureSourceContext extends ISourceContext<ISourceItem<IMixtureInventorySource>> {
}

export interface IMixtureSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureInventorySource>>> {
}

export const MixtureSourceConsumer: FC<IMixtureSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureInventorySource>>> {
}

export const MixtureProvider: FC<IMixtureProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureInventorySource>>
		name={"Mixture"}
		useQuery={useMixtureQuery}
		{...props}
	/>;
};

export const toMixtureLink = (queryParams?: IMixtureQueryParams) => toLink(MixtureApiLink, queryParams);
export const useMixtureLink = () => toMixtureLink;

export const useMixturePromise = createPromiseHook<ISourceQuery<IMixtureInventorySource>, ISourceItem<IMixtureInventorySource>, IMixtureQueryParams>(MixtureApiLink, "post");
export const MixturePromise = createPromise<ISourceQuery<IMixtureInventorySource>, ISourceItem<IMixtureInventorySource>, IMixtureQueryParams>(MixtureApiLink, "post");

export interface IMixtureFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureInventorySource>>>> {
}

export const MixtureFilterProvider: FC<IMixtureFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureInventorySource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureInventorySource>>>();
export const useMixtureFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureInventorySource>>>();

export interface IMixtureProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureInventorySource>>> {
}

export const MixtureProviderFilter: FC<IMixtureProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mixture"}
/>;

export interface IMixtureOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>>> {
}

export const MixtureOrderByProvider: FC<IMixtureOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>>();
export const useMixtureOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>>();

export interface IMixtureProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureInventorySource>>, IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>, IMixtureQueryParams>> {
}

export const MixtureProviderControl: FC<IMixtureProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureInventorySource>>, IQueryOrderBy<ISourceQuery<IMixtureInventorySource>>> name={"Mixture"} {...props}/>;

export interface IMixtureListSourceProps extends Partial<IListProps<ISourceItem<IMixtureInventorySource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureListSource: FC<IMixtureListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		{...providerProps}
	>
		<List<ISourceItem<IMixtureInventorySource>>
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureInventorySource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureInventorySource>>;
	providerProps?: Partial<IMixtureProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureSourceSelect: FC<IMixtureSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureInventorySource>> {...props}/>
				</MixtureProvider>
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
					<MixtureProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixtureProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixtureSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureInventorySource>>> {
}

export const MixtureSelectionProvider: FC<IMixtureSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureInventorySource>> {...props}/>;
}

export const useMixtureQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureApiLink]);
};

export const useMixtureOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureInventorySource>>();
export const useMixtureSelectionContext = () => useSelectionContext<ISourceItem<IMixtureInventorySource>>();
