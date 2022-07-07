/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureMarketSource} from "@/puff-smith/service/mixture/market/interface";
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

export const MixtureMarketApiLink = "/api/market/mixture/query";
export const MixtureMarketCountApiLink = "/api/market/mixture/query/count";

export type IMixtureMarketQueryParams = any;

export const useMixtureMarketQuery = createQueryHook<ISourceQuery<IMixtureMarketSource>, ISourceItem<IMixtureMarketSource>[], IMixtureMarketQueryParams>(MixtureMarketApiLink, "post");
export const useMixtureMarketCountQuery = createQueryHook<ISourceQuery<IMixtureMarketSource>, number, IMixtureMarketQueryParams>(MixtureMarketCountApiLink, "post");

export const useMixtureMarketSource = () => useSourceContext<ISourceItem<IMixtureMarketSource>>();

export interface IMixtureMarketSourceContext extends ISourceContext<ISourceItem<IMixtureMarketSource>> {
}

export interface IMixtureMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureMarketSource>>> {
}

export const MixtureMarketSourceConsumer: FC<IMixtureMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureMarketSource>>> {
}

export const MixtureMarketProvider: FC<IMixtureMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureMarketSource>>
		name={"MixtureMarket"}
		useQuery={useMixtureMarketQuery}
		useCountQuery={useMixtureMarketCountQuery}
		{...props}
	/>;
};

export const toMixtureMarketLink = (queryParams?: IMixtureMarketQueryParams) => toLink(MixtureMarketApiLink, queryParams);
export const useMixtureMarketLink = () => toMixtureMarketLink;

export const useMixtureMarketPromise = createPromiseHook<ISourceQuery<IMixtureMarketSource>, ISourceItem<IMixtureMarketSource>, IMixtureMarketQueryParams>(MixtureMarketApiLink, "post");
export const MixtureMarketPromise = createPromise<ISourceQuery<IMixtureMarketSource>, ISourceItem<IMixtureMarketSource>, IMixtureMarketQueryParams>(MixtureMarketApiLink, "post");

export interface IMixtureMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureMarketSource>>>> {
}

export const MixtureMarketFilterProvider: FC<IMixtureMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureMarketSource>>> name={"MixtureMarket"} {...props}/>;

export const useMixtureMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureMarketSource>>>();
export const useMixtureMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureMarketSource>>>();

export interface IMixtureMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureMarketSource>>> {
}

export const MixtureMarketProviderFilter: FC<IMixtureMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.MixtureMarket"}
/>;

export interface IMixtureMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureMarketSource>>>> {
}

export const MixtureMarketOrderByProvider: FC<IMixtureMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureMarketSource>>> name={"MixtureMarket"} {...props}/>;

export const useMixtureMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureMarketSource>>>();
export const useMixtureMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureMarketSource>>>();

export interface IMixtureMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureMarketSource>>, IQueryOrderBy<ISourceQuery<IMixtureMarketSource>>, IMixtureMarketQueryParams>> {
}

export const MixtureMarketProviderControl: FC<IMixtureMarketProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureMarketSource>>, IQueryOrderBy<ISourceQuery<IMixtureMarketSource>>> name={"MixtureMarket"} {...props}/>;

export interface IMixtureMarketListSourceProps extends Partial<IListProps<ISourceItem<IMixtureMarketSource>>> {
	providerProps?: Partial<IMixtureMarketProviderProps>;
}

export const MixtureMarketListSource: FC<IMixtureMarketListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureMarketProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IMixtureMarketSource>>
			{...props}
		/>
	</MixtureMarketProvider>;
}

export interface IMixtureMarketInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IMixtureMarketSource>>> {
	providerProps?: Partial<IMixtureMarketProviderProps>;
}

export const MixtureMarketInfiniteListSource: FC<IMixtureMarketInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <MixtureMarketProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IMixtureMarketSource>>
			{...props}
		/>
	</MixtureMarketProvider>;
};

export interface IMixtureMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureMarketSource>>;
	providerProps?: Partial<IMixtureMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureMarketSourceSelect: FC<IMixtureMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureMarketSource>> {...props}/>
				</MixtureMarketProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.MixtureMarket.title"}
					size={props.size}
					tooltip={"common.selection.MixtureMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<MixtureMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixtureMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixtureMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureMarketSource>>> {
}

export const MixtureMarketSelectionProvider: FC<IMixtureMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureMarketSource>> {...props}/>;
}

export const useMixtureMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureMarketCountApiLink]);
};

export const useMixtureMarketQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([MixtureMarketApiLink]),
		withCount && queryClient.invalidateQueries([MixtureMarketCountApiLink]),
	]);
};

export const useMixtureMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureMarketSource>>();
export const useMixtureMarketSelectionContext = () => useSelectionContext<ISourceItem<IMixtureMarketSource>>();
