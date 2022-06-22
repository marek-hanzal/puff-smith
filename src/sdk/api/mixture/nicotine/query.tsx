/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureNicotineSource} from "@/puff-smith/service/mixture/nicotine/interface";
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

export const NicotineApiLink = "/api/mixture/nicotine/query";
export const NicotineCountApiLink = "/api/mixture/nicotine/query/count";

export type INicotineQueryParams = any;

export const useNicotineQuery = createQueryHook<ISourceQuery<IMixtureNicotineSource>, ISourceItem<IMixtureNicotineSource>[], INicotineQueryParams>(NicotineApiLink, "post");
export const useNicotineCountQuery = createQueryHook<ISourceQuery<IMixtureNicotineSource>, number, INicotineQueryParams>(NicotineCountApiLink, "post");

export const useNicotineSource = () => useSourceContext<ISourceItem<IMixtureNicotineSource>>();

export interface INicotineSourceContext extends ISourceContext<ISourceItem<IMixtureNicotineSource>> {
}

export interface INicotineSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureNicotineSource>>> {
}

export const NicotineSourceConsumer: FC<INicotineSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface INicotineProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureNicotineSource>>> {
}

export const NicotineProvider: FC<INicotineProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureNicotineSource>>
		name={"Nicotine"}
		useQuery={useNicotineQuery}
		useCountQuery={useNicotineCountQuery}
		{...props}
	/>;
};

export const toNicotineLink = (queryParams?: INicotineQueryParams) => toLink(NicotineApiLink, queryParams);
export const useNicotineLink = () => toNicotineLink;

export const useNicotinePromise = createPromiseHook<ISourceQuery<IMixtureNicotineSource>, ISourceItem<IMixtureNicotineSource>, INicotineQueryParams>(NicotineApiLink, "post");
export const NicotinePromise = createPromise<ISourceQuery<IMixtureNicotineSource>, ISourceItem<IMixtureNicotineSource>, INicotineQueryParams>(NicotineApiLink, "post");

export interface INicotineFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureNicotineSource>>>> {
}

export const NicotineFilterProvider: FC<INicotineFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureNicotineSource>>> name={"Nicotine"} {...props}/>;

export const useNicotineOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureNicotineSource>>>();
export const useNicotineFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureNicotineSource>>>();

export interface INicotineProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureNicotineSource>>> {
}

export const NicotineProviderFilter: FC<INicotineProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Nicotine"}
/>;

export interface INicotineOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureNicotineSource>>>> {
}

export const NicotineOrderByProvider: FC<INicotineOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureNicotineSource>>> name={"Nicotine"} {...props}/>;

export const useNicotineOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureNicotineSource>>>();
export const useNicotineOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureNicotineSource>>>();

export interface INicotineProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureNicotineSource>>, IQueryOrderBy<ISourceQuery<IMixtureNicotineSource>>, INicotineQueryParams>> {
}

export const NicotineProviderControl: FC<INicotineProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureNicotineSource>>, IQueryOrderBy<ISourceQuery<IMixtureNicotineSource>>> name={"Nicotine"} {...props}/>;

export interface INicotineListSourceProps extends Partial<IListProps<ISourceItem<IMixtureNicotineSource>>> {
	providerProps?: Partial<INicotineProviderProps>;
}

export const NicotineListSource: FC<INicotineListSourceProps> = ({providerProps, ...props}) => {
	return <NicotineProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IMixtureNicotineSource>>
			{...props}
		/>
	</NicotineProvider>;
}

export interface INicotineSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureNicotineSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureNicotineSource>>;
	providerProps?: Partial<INicotineProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const NicotineSourceSelect: FC<INicotineSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<NicotineProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureNicotineSource>> {...props}/>
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

export interface INicotineSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureNicotineSource>>> {
}

export const NicotineSelectionProvider: FC<INicotineSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureNicotineSource>> {...props}/>;
};

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

export const useNicotineOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureNicotineSource>>();
export const useNicotineSelectionContext = () => useSelectionContext<ISourceItem<IMixtureNicotineSource>>();
