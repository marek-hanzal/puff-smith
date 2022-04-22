/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerMarket, IAtomizerMarketQuery} from "@/puff-smith/service/atomizer/market";
import {ReadOutlined} from "@ant-design/icons";
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

export const AtomizersMarketApiLink = "/api/atomizer/market/query";

export type IAtomizersMarketQueryParams = undefined;

export const useAtomizersMarketQuery = createQueryHook<IAtomizerMarketQuery, IQueryResult<IAtomizerMarket>, IAtomizersMarketQueryParams>(AtomizersMarketApiLink, "post");

export const useAtomizersMarketSource = () => useSourceContext<IAtomizerMarket>();

export interface IAtomizersMarketSourceContext extends ISourceContext<IAtomizerMarket> {
}

export interface IAtomizersMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizerMarket>> {
}

export const AtomizersMarketSourceConsumer: FC<IAtomizersMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizersMarketSourceProps extends Partial<ISourceProviderProps<IAtomizerMarket>> {
}

export const AtomizersMarketSource: FC<IAtomizersMarketSourceProps> = props => {
	return <SourceProvider<IAtomizerMarket>
		name={"AtomizersMarket"}
		useQuery={useAtomizersMarketQuery}
		{...props}
	/>;
};

export const toAtomizersMarketLink = (queryParams?: IAtomizersMarketQueryParams) => toLink(AtomizersMarketApiLink, queryParams);
export const useAtomizersMarketLink = () => toAtomizersMarketLink;

export const useAtomizersMarketPromise = createPromiseHook<IAtomizerMarketQuery, IAtomizerMarket, IAtomizersMarketQueryParams>(AtomizersMarketApiLink, "post");
export const AtomizersMarketPromise = createPromise<IAtomizerMarketQuery, IAtomizerMarket, IAtomizersMarketQueryParams>(AtomizersMarketApiLink, "post");

export interface IAtomizersMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerMarketQuery>>> {
}

export const AtomizersMarketFilterProvider: FC<IAtomizersMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerMarketQuery>> name={"AtomizersMarket"} {...props}/>;

export const useAtomizersMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerMarketQuery>>();
export const useAtomizersMarketFilterContext = () => useFilterContext<IQueryFilter<IAtomizerMarketQuery>>();

export interface IAtomizersMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerMarketQuery>> {
}

export const AtomizersMarketSourceFilter: FC<IAtomizersMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizersMarket"}
/>;

export interface IAtomizersMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerMarketQuery>>> {
}

export const AtomizersMarketOrderByProvider: FC<IAtomizersMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerMarketQuery>> name={"AtomizersMarket"} {...props}/>;

export const useAtomizersMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerMarketQuery>>();
export const useAtomizersMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerMarketQuery>>();

export interface IAtomizersMarketListSourceProps extends Partial<IListProps<IAtomizerMarket>> {
	sourceProps?: Partial<IAtomizersMarketSourceProps>;
}

export interface IAtomizersMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerMarketQuery>, IQueryOrderBy<IAtomizerMarketQuery>, IAtomizersMarketQueryParams>> {
}

export const AtomizersMarketSourceControlProvider: FC<IAtomizersMarketSourceControlProviderProps> = props =>
	<SourceControlProvider<IQueryFilter<IAtomizerMarketQuery>, IQueryOrderBy<IAtomizerMarketQuery>> name={"AtomizersMarket"} {...props}/>;

export const AtomizersMarketListSource: FC<IAtomizersMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizersMarketSource
		{...sourceProps}
	>
		<List<IAtomizerMarket>
			{...props}
		/>
	</AtomizersMarketSource>;
}

export interface IAtomizersMarketSourceSelectProps extends IQuerySourceSelectProps<IAtomizerMarket> {
	toOption: IToOptionMapper<IAtomizerMarket>;
	sourceProps?: IAtomizersMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizersMarketSourceSelect: FC<IAtomizersMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizersMarketSource {...sourceProps}>
					<QuerySourceSelect<IAtomizerMarket> {...props}/>
				</AtomizersMarketSource>
			</Col>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.AtomizersMarket.title"}
					tooltip={"common.selection.AtomizersMarket.title.tooltip"}
					width={800}
				>
					<AtomizersMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizersMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useAtomizersMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizersMarketApiLink]);
};

export const useAtomizersMarketOptionalSelectionContext = () => useOptionalSelectionContext<IAtomizerMarket>();
export const useAtomizersMarketSelectionContext = () => useSelectionContext<IAtomizerMarket>();
