/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterNicotineSource} from "@/puff-smith/service/booster/nicotine/interface";
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

export const NicotineApiLink = "/api/inventory/booster/nicotine/query";
export const NicotineCountApiLink = "/api/inventory/booster/nicotine/query/count";

export type INicotineQueryParams = any;

export const useNicotineQuery = createQueryHook<ISourceQuery<IBoosterNicotineSource>, ISourceItem<IBoosterNicotineSource>[], INicotineQueryParams>(NicotineApiLink, "post");
export const useNicotineCountQuery = createQueryHook<ISourceQuery<IBoosterNicotineSource>, number, INicotineQueryParams>(NicotineCountApiLink, "post");

export const useNicotineSource = () => useSourceContext<ISourceItem<IBoosterNicotineSource>>();

export interface INicotineSourceContext extends ISourceContext<ISourceItem<IBoosterNicotineSource>> {
}

export interface INicotineSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBoosterNicotineSource>>> {
}

export const NicotineSourceConsumer: FC<INicotineSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface INicotineProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBoosterNicotineSource>>> {
}

export const NicotineProvider: FC<INicotineProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBoosterNicotineSource>>
		name={"Nicotine"}
		useQuery={useNicotineQuery}
		useCountQuery={useNicotineCountQuery}
		{...props}
	/>;
};

export const toNicotineLink = (queryParams?: INicotineQueryParams) => toLink(NicotineApiLink, queryParams);
export const useNicotineLink = () => toNicotineLink;

export const useNicotinePromise = createPromiseHook<ISourceQuery<IBoosterNicotineSource>, ISourceItem<IBoosterNicotineSource>, INicotineQueryParams>(NicotineApiLink, "post");
export const NicotinePromise = createPromise<ISourceQuery<IBoosterNicotineSource>, ISourceItem<IBoosterNicotineSource>, INicotineQueryParams>(NicotineApiLink, "post");

export interface INicotineFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBoosterNicotineSource>>>> {
}

export const NicotineFilterProvider: FC<INicotineFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBoosterNicotineSource>>> name={"Nicotine"} {...props}/>;

export const useNicotineOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBoosterNicotineSource>>>();
export const useNicotineFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBoosterNicotineSource>>>();

export interface INicotineProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBoosterNicotineSource>>> {
}

export const NicotineProviderFilter: FC<INicotineProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Nicotine"}
/>;

export interface INicotineOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBoosterNicotineSource>>>> {
}

export const NicotineOrderByProvider: FC<INicotineOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBoosterNicotineSource>>> name={"Nicotine"} {...props}/>;

export const useNicotineOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterNicotineSource>>>();
export const useNicotineOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterNicotineSource>>>();

export interface INicotineProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBoosterNicotineSource>>, IQueryOrderBy<ISourceQuery<IBoosterNicotineSource>>, INicotineQueryParams>> {
}

export const NicotineProviderControl: FC<INicotineProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IBoosterNicotineSource>>, IQueryOrderBy<ISourceQuery<IBoosterNicotineSource>>> name={"Nicotine"} {...props}/>;

export interface INicotineListSourceProps extends Partial<IListProps<ISourceItem<IBoosterNicotineSource>>> {
	providerProps?: Partial<INicotineProviderProps>;
}

export const NicotineListSource: FC<INicotineListSourceProps> = ({providerProps, ...props}) => {
	return <NicotineProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IBoosterNicotineSource>>
			{...props}
		/>
	</NicotineProvider>;
}

export interface INicotineInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IBoosterNicotineSource>>> {
	providerProps?: Partial<INicotineProviderProps>;
}

export const NicotineInfiniteListSource: FC<INicotineInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <NicotineProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IBoosterNicotineSource>>
			{...props}
		/>
	</NicotineProvider>;
};

export interface INicotineSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBoosterNicotineSource>> {
	toOption: IToOptionMapper<ISourceItem<IBoosterNicotineSource>>;
	providerProps?: Partial<INicotineProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const NicotineSourceSelect: FC<INicotineSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<NicotineProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBoosterNicotineSource>> {...props}/>
				</NicotineProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Nicotine.title"}
					size={props.size}
					tooltip={"common.selection.Nicotine.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<NicotineProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</NicotineProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface INicotineSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBoosterNicotineSource>>> {
}

export const NicotineSelectionProvider: FC<INicotineSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBoosterNicotineSource>> {...props}/>;
}

export const useNicotineCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([NicotineCountApiLink]);
};

export const useNicotineQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([NicotineApiLink]),
		withCount && queryClient.invalidateQueries([NicotineCountApiLink]),
	]);
};

export const useNicotineOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBoosterNicotineSource>>();
export const useNicotineSelectionContext = () => useSelectionContext<ISourceItem<IBoosterNicotineSource>>();
