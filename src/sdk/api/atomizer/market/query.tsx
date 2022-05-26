/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerMarketSource} from "@/puff-smith/service/atomizer/market/interface";
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

export const AtomizerMarketApiLink = "/api/atomizer/market/query";
export const AtomizerMarketCountApiLink = "/api/atomizer/market/query/count";

export type IAtomizerMarketQueryParams = undefined;

export const useAtomizerMarketQuery = createQueryHook<ISourceQuery<IAtomizerMarketSource>, ISourceItem<IAtomizerMarketSource>[], IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");
export const useAtomizerMarketCountQuery = createQueryHook<ISourceQuery<IAtomizerMarketSource>, number, IAtomizerMarketQueryParams>(AtomizerMarketCountApiLink, "post");

export const useAtomizerMarketSource = () => useSourceContext<ISourceItem<IAtomizerMarketSource>>();

export interface IAtomizerMarketSourceContext extends ISourceContext<ISourceItem<IAtomizerMarketSource>> {
}

export interface IAtomizerMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAtomizerMarketSource>>> {
}

export const AtomizerMarketSourceConsumer: FC<IAtomizerMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAtomizerMarketSource>>> {
}

export const AtomizerMarketProvider: FC<IAtomizerMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAtomizerMarketSource>>
		name={"AtomizerMarket"}
		useQuery={useAtomizerMarketQuery}
		useCountQuery={useAtomizerMarketCountQuery}
		{...props}
	/>;
};

export const toAtomizerMarketLink = (queryParams?: IAtomizerMarketQueryParams) => toLink(AtomizerMarketApiLink, queryParams);
export const useAtomizerMarketLink = () => toAtomizerMarketLink;

export const useAtomizerMarketPromise = createPromiseHook<ISourceQuery<IAtomizerMarketSource>, ISourceItem<IAtomizerMarketSource>, IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");
export const AtomizerMarketPromise = createPromise<ISourceQuery<IAtomizerMarketSource>, ISourceItem<IAtomizerMarketSource>, IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");

export interface IAtomizerMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAtomizerMarketSource>>>> {
}

export const AtomizerMarketFilterProvider: FC<IAtomizerMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAtomizerMarketSource>>> name={"AtomizerMarket"} {...props}/>;

export const useAtomizerMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAtomizerMarketSource>>>();
export const useAtomizerMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAtomizerMarketSource>>>();

export interface IAtomizerMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAtomizerMarketSource>>> {
}

export const AtomizerMarketProviderFilter: FC<IAtomizerMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizerMarket"}
/>;

export interface IAtomizerMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAtomizerMarketSource>>>> {
}

export const AtomizerMarketOrderByProvider: FC<IAtomizerMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAtomizerMarketSource>>> name={"AtomizerMarket"} {...props}/>;

export const useAtomizerMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerMarketSource>>>();
export const useAtomizerMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerMarketSource>>>();

export interface IAtomizerMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAtomizerMarketSource>>, IQueryOrderBy<ISourceQuery<IAtomizerMarketSource>>, IAtomizerMarketQueryParams>> {
}

export const AtomizerMarketProviderControl: FC<IAtomizerMarketProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAtomizerMarketSource>>, IQueryOrderBy<ISourceQuery<IAtomizerMarketSource>>> name={"AtomizerMarket"} {...props}/>;

export interface IAtomizerMarketListSourceProps extends Partial<IListProps<ISourceItem<IAtomizerMarketSource>>> {
	providerProps?: Partial<IAtomizerMarketProviderProps>;
}

export const AtomizerMarketListSource: FC<IAtomizerMarketListSourceProps> = ({providerProps, ...props}) => {
	return <AtomizerMarketProvider
		{...providerProps}
	>
		<List<ISourceItem<IAtomizerMarketSource>>
			{...props}
		/>
	</AtomizerMarketProvider>;
}

export interface IAtomizerMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAtomizerMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IAtomizerMarketSource>>;
	providerProps?: Partial<IAtomizerMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerMarketSourceSelect: FC<IAtomizerMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAtomizerMarketSource>> {...props}/>
				</AtomizerMarketProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AtomizerMarket.title"}
					size={props.size}
					tooltip={"common.selection.AtomizerMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AtomizerMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAtomizerMarketSource>>> {
}

export const AtomizerMarketSelectionProvider: FC<IAtomizerMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAtomizerMarketSource>> {...props}/>;
};

export const useAtomizerMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerMarketApiLink]);
};

export const useAtomizerMarketCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerMarketCountApiLink]);
};

export const useAtomizerMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAtomizerMarketSource>>();
export const useAtomizerMarketSelectionContext = () => useSelectionContext<ISourceItem<IAtomizerMarketSource>>();
