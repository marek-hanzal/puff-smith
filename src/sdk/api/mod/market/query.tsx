/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModMarket, IModMarketQuery} from "@/puff-smith/service/mod/market/interface";
import {SelectOutlined} from "@ant-design/icons";
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

export const ModMarketApiLink = "/api/mod/market/query";

export type IModMarketQueryParams = undefined;

export const useModMarketQuery = createQueryHook<IModMarketQuery, IQueryResult<IModMarket>, IModMarketQueryParams>(ModMarketApiLink, "post");

export const useModMarketSource = () => useSourceContext<IModMarket>();

export interface IModMarketSourceContext extends ISourceContext<IModMarket> {
}

export interface IModMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IModMarket>> {
}

export const ModMarketSourceConsumer: FC<IModMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModMarketSourceProps extends Partial<ISourceProviderProps<IModMarket>> {
}

export const ModMarketSource: FC<IModMarketSourceProps> = props => {
	return <SourceProvider<IModMarket>
		name={"ModMarket"}
		useQuery={useModMarketQuery}
		{...props}
	/>;
};

export const toModMarketLink = (queryParams?: IModMarketQueryParams) => toLink(ModMarketApiLink, queryParams);
export const useModMarketLink = () => toModMarketLink;

export const useModMarketPromise = createPromiseHook<IModMarketQuery, IModMarket, IModMarketQueryParams>(ModMarketApiLink, "post");
export const ModMarketPromise = createPromise<IModMarketQuery, IModMarket, IModMarketQueryParams>(ModMarketApiLink, "post");

export interface IModMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModMarketQuery>>> {
}

export const ModMarketFilterProvider: FC<IModMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModMarketQuery>> name={"ModMarket"} {...props}/>;

export const useModMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModMarketQuery>>();
export const useModMarketFilterContext = () => useFilterContext<IQueryFilter<IModMarketQuery>>();

export interface IModMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModMarketQuery>> {
}

export const ModMarketSourceFilter: FC<IModMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.ModMarket"}
/>;

export interface IModMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IModMarketQuery>>> {
}

export const ModMarketOrderByProvider: FC<IModMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IModMarketQuery>> name={"ModMarket"} {...props}/>;

export const useModMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IModMarketQuery>>();
export const useModMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IModMarketQuery>>();

export interface IModMarketListSourceProps extends Partial<IListProps<IModMarket>> {
	sourceProps?: Partial<IModMarketSourceProps>;
}

export interface IModMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModMarketQuery>, IQueryOrderBy<IModMarketQuery>, IModMarketQueryParams>> {
}

export const ModMarketSourceControlProvider: FC<IModMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModMarketQuery>, IQueryOrderBy<IModMarketQuery>> name={"ModMarket"} {...props}/>;

export const ModMarketListSource: FC<IModMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <ModMarketSource
		{...sourceProps}
	>
		<List<IModMarket>
			{...props}
		/>
	</ModMarketSource>;
}

export interface IModMarketSourceSelectProps extends IQuerySourceSelectProps<IModMarket> {
	toOption: IToOptionMapper<IModMarket>;
	sourceProps?: IModMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModMarketSourceSelect: FC<IModMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModMarketSource {...sourceProps}>
					<QuerySourceSelect<IModMarket> {...props}/>
				</ModMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.ModMarket.title"}
					size={props.size}
					tooltip={"common.selection.ModMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<ModMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IModMarket>> {
}

export const ModMarketSelectionProvider: FC<IModMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IModMarket> {...props}/>;
}

export const useModMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModMarketApiLink]);
};

export const useModMarketOptionalSelectionContext = () => useOptionalSelectionContext<IModMarket>();
export const useModMarketSelectionContext = () => useSelectionContext<IModMarket>();
