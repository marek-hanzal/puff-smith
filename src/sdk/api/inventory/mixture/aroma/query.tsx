/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/interface";
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
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";
import {useQueryClient} from "react-query";

export const MixtureAromaApiLink = "/api/inventory/mixture/aroma/query";
export const MixtureAromaCountApiLink = "/api/inventory/mixture/aroma/query/count";

export type IMixtureAromaQueryParams = any;

export const useMixtureAromaQuery = createQueryHook<ISourceQuery<IMixtureAromaSource>, ISourceItem<IMixtureAromaSource>[], IMixtureAromaQueryParams>(MixtureAromaApiLink, "post");
export const useMixtureAromaCountQuery = createQueryHook<ISourceQuery<IMixtureAromaSource>, number, IMixtureAromaQueryParams>(MixtureAromaCountApiLink, "post");

export const useMixtureAromaSource = () => useSourceContext<ISourceItem<IMixtureAromaSource>>();

export interface IMixtureAromaSourceContext extends ISourceContext<ISourceItem<IMixtureAromaSource>> {
}

export interface IMixtureAromaSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureAromaSource>>> {
}

export const MixtureAromaSourceConsumer: FC<IMixtureAromaSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureAromaProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureAromaSource>>> {
}

export const MixtureAromaProvider: FC<IMixtureAromaProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureAromaSource>>
		name={"MixtureAroma"}
		useQuery={useMixtureAromaQuery}
		useCountQuery={useMixtureAromaCountQuery}
		{...props}
	/>;
};

export const toMixtureAromaLink = (queryParams?: IMixtureAromaQueryParams) => toLink(MixtureAromaApiLink, queryParams);
export const useMixtureAromaLink = () => toMixtureAromaLink;

export const useMixtureAromaPromise = createPromiseHook<ISourceQuery<IMixtureAromaSource>, ISourceItem<IMixtureAromaSource>, IMixtureAromaQueryParams>(MixtureAromaApiLink, "post");
export const MixtureAromaPromise = createPromise<ISourceQuery<IMixtureAromaSource>, ISourceItem<IMixtureAromaSource>, IMixtureAromaQueryParams>(MixtureAromaApiLink, "post");

export interface IMixtureAromaFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureAromaSource>>>> {
}

export const MixtureAromaFilterProvider: FC<IMixtureAromaFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureAromaSource>>> name={"MixtureAroma"} {...props}/>;

export const useMixtureAromaOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureAromaSource>>>();
export const useMixtureAromaFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureAromaSource>>>();

export interface IMixtureAromaProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureAromaSource>>> {
}

export const MixtureAromaProviderFilter: FC<IMixtureAromaProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.MixtureAroma"}
/>;

export interface IMixtureAromaOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureAromaSource>>>> {
}

export const MixtureAromaOrderByProvider: FC<IMixtureAromaOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureAromaSource>>> name={"MixtureAroma"} {...props}/>;

export const useMixtureAromaOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureAromaSource>>>();
export const useMixtureAromaOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureAromaSource>>>();

export interface IMixtureAromaProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureAromaSource>>, IQueryOrderBy<ISourceQuery<IMixtureAromaSource>>, IMixtureAromaQueryParams>> {
}

export const MixtureAromaProviderControl: FC<IMixtureAromaProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureAromaSource>>, IQueryOrderBy<ISourceQuery<IMixtureAromaSource>>> name={"MixtureAroma"} {...props}/>;

export interface IMixtureAromaListSourceProps extends Partial<IListProps<ISourceItem<IMixtureAromaSource>>> {
	providerProps?: Partial<IMixtureAromaProviderProps>;
}

export const MixtureAromaListSource: FC<IMixtureAromaListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureAromaProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IMixtureAromaSource>>
			{...props}
		/>
	</MixtureAromaProvider>;
}

export interface IMixtureAromaInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IMixtureAromaSource>>> {
	providerProps?: Partial<IMixtureAromaProviderProps>;
}

export const MixtureAromaInfiniteListSource: FC<IMixtureAromaInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureAromaProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IMixtureAromaSource>>
			{...props}
		/>
	</MixtureAromaProvider>;
};

export interface IMixtureAromaSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureAromaSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureAromaSource>>;
	providerProps?: Partial<IMixtureAromaProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureAromaSourceSelect: FC<IMixtureAromaSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureAromaProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureAromaSource>> {...props}/>
				</MixtureAromaProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.MixtureAroma.title"}
					size={props.size}
					tooltip={"common.selection.MixtureAroma.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<MixtureAromaProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixtureAromaProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixtureAromaSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureAromaSource>>> {
}

export const MixtureAromaSelectionProvider: FC<IMixtureAromaSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureAromaSource>> {...props}/>;
}

export const useMixtureAromaCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureAromaCountApiLink]);
};

export const useMixtureAromaQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([MixtureAromaApiLink]),
		withCount && queryClient.invalidateQueries([MixtureAromaCountApiLink]),
	]);
};

export const useMixtureAromaOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureAromaSource>>();
export const useMixtureAromaSelectionContext = () => useSelectionContext<ISourceItem<IMixtureAromaSource>>();
