/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
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

export const MixtureApiLink = "/api/mixture/query";
export const MixtureCountApiLink = "/api/mixture/query/count";

export type IMixtureQueryParams = any;

export const useMixtureQuery = createQueryHook<ISourceQuery<IMixtureSource>, ISourceItem<IMixtureSource>[], IMixtureQueryParams>(MixtureApiLink, "post");
export const useMixtureCountQuery = createQueryHook<ISourceQuery<IMixtureSource>, number, IMixtureQueryParams>(MixtureCountApiLink, "post");

export const useMixtureSource = () => useSourceContext<ISourceItem<IMixtureSource>>();

export interface IMixtureSourceContext extends ISourceContext<ISourceItem<IMixtureSource>> {
}

export interface IMixtureSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureSource>>> {
}

export const MixtureSourceConsumer: FC<IMixtureSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureSource>>> {
}

export const MixtureProvider: FC<IMixtureProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureSource>>
		name={"Mixture"}
		useQuery={useMixtureQuery}
		useCountQuery={useMixtureCountQuery}
		{...props}
	/>;
};

export const toMixtureLink = (queryParams?: IMixtureQueryParams) => toLink(MixtureApiLink, queryParams);
export const useMixtureLink = () => toMixtureLink;

export const useMixturePromise = createPromiseHook<ISourceQuery<IMixtureSource>, ISourceItem<IMixtureSource>, IMixtureQueryParams>(MixtureApiLink, "post");
export const MixturePromise = createPromise<ISourceQuery<IMixtureSource>, ISourceItem<IMixtureSource>, IMixtureQueryParams>(MixtureApiLink, "post");

export interface IMixtureFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureSource>>>> {
}

export const MixtureFilterProvider: FC<IMixtureFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureSource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureSource>>>();
export const useMixtureFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureSource>>>();

export interface IMixtureProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureSource>>> {
}

export const MixtureProviderFilter: FC<IMixtureProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mixture"}
/>;

export interface IMixtureOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureSource>>>> {
}

export const MixtureOrderByProvider: FC<IMixtureOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureSource>>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureSource>>>();
export const useMixtureOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureSource>>>();

export interface IMixtureProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureSource>>, IQueryOrderBy<ISourceQuery<IMixtureSource>>, IMixtureQueryParams>> {
}

export const MixtureProviderControl: FC<IMixtureProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureSource>>, IQueryOrderBy<ISourceQuery<IMixtureSource>>> name={"Mixture"} {...props}/>;

export interface IMixtureListSourceProps extends Partial<IListProps<ISourceItem<IMixtureSource>>> {
	providerProps?: Partial<IMixtureProviderProps>;
}

export const MixtureListSource: FC<IMixtureListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IMixtureSource>>
			{...props}
		/>
	</MixtureProvider>;
}

export interface IMixtureSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureSource>>;
	providerProps?: Partial<IMixtureProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureSourceSelect: FC<IMixtureSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureSource>> {...props}/>
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

export interface IMixtureSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureSource>>> {
}

export const MixtureSelectionProvider: FC<IMixtureSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureSource>> {...props}/>;
}

export const useMixtureCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureCountApiLink]);
};

export const useMixtureQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([MixtureApiLink]),
		withCount && queryClient.invalidateQueries([MixtureCountApiLink]),
	]);
};

export const useMixtureOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureSource>>();
export const useMixtureSelectionContext = () => useSelectionContext<ISourceItem<IMixtureSource>>();
