/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseMarketSource} from "@/puff-smith/service/base/market/interface";
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

export const BaseMarketApiLink = "/api/market/base/query";
export const BaseMarketCountApiLink = "/api/market/base/query/count";

export type IBaseMarketQueryParams = any;

export const useBaseMarketQuery = createQueryHook<ISourceQuery<IBaseMarketSource>, ISourceItem<IBaseMarketSource>[], IBaseMarketQueryParams>(BaseMarketApiLink, "post");
export const useBaseMarketCountQuery = createQueryHook<ISourceQuery<IBaseMarketSource>, number, IBaseMarketQueryParams>(BaseMarketCountApiLink, "post");

export const useBaseMarketSource = () => useSourceContext<ISourceItem<IBaseMarketSource>>();

export interface IBaseMarketSourceContext extends ISourceContext<ISourceItem<IBaseMarketSource>> {
}

export interface IBaseMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBaseMarketSource>>> {
}

export const BaseMarketSourceConsumer: FC<IBaseMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBaseMarketSource>>> {
}

export const BaseMarketProvider: FC<IBaseMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBaseMarketSource>>
		name={"BaseMarket"}
		useQuery={useBaseMarketQuery}
		useCountQuery={useBaseMarketCountQuery}
		{...props}
	/>;
};

export const toBaseMarketLink = (queryParams?: IBaseMarketQueryParams) => toLink(BaseMarketApiLink, queryParams);
export const useBaseMarketLink = () => toBaseMarketLink;

export const useBaseMarketPromise = createPromiseHook<ISourceQuery<IBaseMarketSource>, ISourceItem<IBaseMarketSource>, IBaseMarketQueryParams>(BaseMarketApiLink, "post");
export const BaseMarketPromise = createPromise<ISourceQuery<IBaseMarketSource>, ISourceItem<IBaseMarketSource>, IBaseMarketQueryParams>(BaseMarketApiLink, "post");

export interface IBaseMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBaseMarketSource>>>> {
}

export const BaseMarketFilterProvider: FC<IBaseMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBaseMarketSource>>> name={"BaseMarket"} {...props}/>;

export const useBaseMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBaseMarketSource>>>();
export const useBaseMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBaseMarketSource>>>();

export interface IBaseMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBaseMarketSource>>> {
}

export const BaseMarketProviderFilter: FC<IBaseMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.BaseMarket"}
/>;

export interface IBaseMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBaseMarketSource>>>> {
}

export const BaseMarketOrderByProvider: FC<IBaseMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBaseMarketSource>>> name={"BaseMarket"} {...props}/>;

export const useBaseMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBaseMarketSource>>>();
export const useBaseMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBaseMarketSource>>>();

export interface IBaseMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBaseMarketSource>>, IQueryOrderBy<ISourceQuery<IBaseMarketSource>>, IBaseMarketQueryParams>> {
}

export const BaseMarketProviderControl: FC<IBaseMarketProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IBaseMarketSource>>, IQueryOrderBy<ISourceQuery<IBaseMarketSource>>> name={"BaseMarket"} {...props}/>;

export interface IBaseMarketListSourceProps extends Partial<IListProps<ISourceItem<IBaseMarketSource>>> {
	providerProps?: Partial<IBaseMarketProviderProps>;
}

export const BaseMarketListSource: FC<IBaseMarketListSourceProps> = ({providerProps, ...props}) => {
	return <BaseMarketProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IBaseMarketSource>>
			{...props}
		/>
	</BaseMarketProvider>;
}

export interface IBaseMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBaseMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IBaseMarketSource>>;
	providerProps?: Partial<IBaseMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseMarketSourceSelect: FC<IBaseMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBaseMarketSource>> {...props}/>
				</BaseMarketProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.BaseMarket.title"}
					size={props.size}
					tooltip={"common.selection.BaseMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BaseMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BaseMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBaseMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBaseMarketSource>>> {
}

export const BaseMarketSelectionProvider: FC<IBaseMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBaseMarketSource>> {...props}/>;
};

export const useBaseMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseMarketCountApiLink]);
};

export const useBaseMarketQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([BaseMarketApiLink]),
		withCount && queryClient.invalidateQueries([BaseMarketCountApiLink]),
	]);
};

export const useBaseMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBaseMarketSource>>();
export const useBaseMarketSelectionContext = () => useSelectionContext<ISourceItem<IBaseMarketSource>>();
