/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerMarket, IAtomizerMarketQuery} from "@/puff-smith/service/atomizer/market/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export type IAtomizerMarketQueryParams = undefined;

export const useAtomizerMarketQuery = createQueryHook<IAtomizerMarketQuery, IAtomizerMarket[], IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");

export const useAtomizerMarketSource = () => useSourceContext<IAtomizerMarket>();

export interface IAtomizerMarketSourceContext extends ISourceContext<IAtomizerMarket> {
}

export interface IAtomizerMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizerMarket>> {
}

export const AtomizerMarketSourceConsumer: FC<IAtomizerMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerMarketSourceProps extends Partial<ISourceProviderProps<IAtomizerMarket>> {
}

export const AtomizerMarketSource: FC<IAtomizerMarketSourceProps> = props => {
	return <SourceProvider<IAtomizerMarket>
		name={"AtomizerMarket"}
		useQuery={useAtomizerMarketQuery}
		{...props}
	/>;
};

export const toAtomizerMarketLink = (queryParams?: IAtomizerMarketQueryParams) => toLink(AtomizerMarketApiLink, queryParams);
export const useAtomizerMarketLink = () => toAtomizerMarketLink;

export const useAtomizerMarketPromise = createPromiseHook<IAtomizerMarketQuery, IAtomizerMarket, IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");
export const AtomizerMarketPromise = createPromise<IAtomizerMarketQuery, IAtomizerMarket, IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");

export interface IAtomizerMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerMarketQuery>>> {
}

export const AtomizerMarketFilterProvider: FC<IAtomizerMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerMarketQuery>> name={"AtomizerMarket"} {...props}/>;

export const useAtomizerMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerMarketQuery>>();
export const useAtomizerMarketFilterContext = () => useFilterContext<IQueryFilter<IAtomizerMarketQuery>>();

export interface IAtomizerMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerMarketQuery>> {
}

export const AtomizerMarketSourceFilter: FC<IAtomizerMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizerMarket"}
/>;

export interface IAtomizerMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerMarketQuery>>> {
}

export const AtomizerMarketOrderByProvider: FC<IAtomizerMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerMarketQuery>> name={"AtomizerMarket"} {...props}/>;

export const useAtomizerMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerMarketQuery>>();
export const useAtomizerMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerMarketQuery>>();

export interface IAtomizerMarketListSourceProps extends Partial<IListProps<IAtomizerMarket>> {
	sourceProps?: Partial<IAtomizerMarketSourceProps>;
}

export interface IAtomizerMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerMarketQuery>, IQueryOrderBy<IAtomizerMarketQuery>, IAtomizerMarketQueryParams>> {
}

export const AtomizerMarketSourceControlProvider: FC<IAtomizerMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerMarketQuery>, IQueryOrderBy<IAtomizerMarketQuery>> name={"AtomizerMarket"} {...props}/>;

export const AtomizerMarketListSource: FC<IAtomizerMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizerMarketSource
		{...sourceProps}
	>
		<List<IAtomizerMarket>
			{...props}
		/>
	</AtomizerMarketSource>;
}

export interface IAtomizerMarketSourceSelectProps extends IQuerySourceSelectProps<IAtomizerMarket> {
	toOption: IToOptionMapper<IAtomizerMarket>;
	sourceProps?: IAtomizerMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerMarketSourceSelect: FC<IAtomizerMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerMarketSource {...sourceProps}>
					<QuerySourceSelect<IAtomizerMarket> {...props}/>
				</AtomizerMarketSource>
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
					<AtomizerMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IAtomizerMarket>> {
}

export const AtomizerMarketSelectionProvider: FC<IAtomizerMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IAtomizerMarket> {...props}/>;
}

export const useAtomizerMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerMarketApiLink]);
};

export const useAtomizerMarketOptionalSelectionContext = () => useOptionalSelectionContext<IAtomizerMarket>();
export const useAtomizerMarketSelectionContext = () => useSelectionContext<IAtomizerMarket>();
