/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {QueryEndpoint} from "@leight-core/server";
import {ConsumerProps, FC, ReactNode} from "react";
import {Col, Input, Row} from "antd";
import {ReadOutlined} from "@ant-design/icons";
import {useQueryClient} from "react-query";
import {IQueryFilter, IQueryOrderBy, IQueryParams, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {DrawerButton, Filter, FilterProvider, Form, IFilterProviderProps, IFilterWithoutTranslationProps, IFormProps, IListProps, IOrderByProviderProps, IQuerySourceSelectProps, ISelectionProviderProps, ISourceControlProviderProps, ISourceProviderProps, List, MenuIcon, OrderByProvider, QuerySourceSelect, SelectionProvider, SourceContext, SourceControlProvider, SourceProvider, createPromise, createPromiseHook, createQueryHook, toLink, useFilterContext, useOptionalFilterContext, useOptionalOrderByContext, useOptionalSelectionContext, useOrderByContext, useSelectionContext, useSourceContext} from "@leight-core/client";

export const LiquidsApiLink = "/api/liquid/query";

export type ILiquidsQueryParams = undefined;

export const useLiquidsQuery = createQueryHook<ILiquidQuery, IQueryResult<ILiquid>, ILiquidsQueryParams>(LiquidsApiLink, "post");

export const useLiquidsSource = () => useSourceContext<ILiquid>()

export interface ILiquidsSourceContext extends ISourceContext<ILiquid> {
}

export interface ILiquidsSourceConsumerProps extends ConsumerProps<ISourceContext<ILiquid>> {
}

export const LiquidsSourceConsumer: FC<ILiquidsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ILiquidsSourceProps extends Partial<ISourceProviderProps<ILiquid>> {
}

export const LiquidsSource: FC<ILiquidsSourceProps> = props => {
	return <SourceProvider<ILiquid>
		name={"Liquids"}
		useQuery={useLiquidsQuery}
		{...props}
	/>;
};

export const toLiquidsLink = (queryParams?: ILiquidsQueryParams) => toLink(LiquidsApiLink, queryParams);
export const useLiquidsLink = () => toLiquidsLink;

export const useLiquidsPromise = createPromiseHook<ILiquidQuery, ILiquid, ILiquidsQueryParams>(LiquidsApiLink, "post");
export const LiquidsPromise = createPromise<ILiquidQuery, ILiquid, ILiquidsQueryParams>(LiquidsApiLink, "post");

export interface ILiquidsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ILiquidQuery>>> {
}

export const LiquidsFilterProvider: FC<ILiquidsFilterProviderProps> = props => <FilterProvider<IQueryFilter<ILiquidQuery>> name={"Liquids"} {...props}/>;

export const useLiquidsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ILiquidQuery>>()
export const useLiquidsFilterContext = () => useFilterContext<IQueryFilter<ILiquidQuery>>()

export interface ILiquidsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ILiquidQuery>> {
}

export const LiquidsSourceFilter: FC<ILiquidsSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Liquids'}
/>;

export interface ILiquidsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ILiquidQuery>>> {
}

export const LiquidsOrderByProvider: FC<ILiquidsOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ILiquidQuery>> name={"Liquids"} {...props}/>;

export const useLiquidsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ILiquidQuery>>()
export const useLiquidsOrderByContext = () => useOrderByContext<IQueryOrderBy<ILiquidQuery>>()

export interface ILiquidsListSourceProps extends Partial<IListProps<ILiquid>> {
	sourceProps?: Partial<ILiquidsSourceProps>;
}

export interface ILiquidsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>, ILiquidsQueryParams>> {
}

export const LiquidsSourceControlProvider: FC<ILiquidsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>> name={"Liquids"} {...props}/>;

export const LiquidsListSource: FC<ILiquidsListSourceProps> = ({sourceProps, ...props}) => {
	return <LiquidsSource
		{...sourceProps}
	>
		<List<ILiquid>
			{...props}		
		/>
	</LiquidsSource>;
}

export interface ILiquidsSourceSelectProps extends IQuerySourceSelectProps<ILiquid> {
	toOption: IToOptionMapper<ILiquid>;
	sourceProps?: ILiquidsSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const LiquidsSourceSelect: FC<ILiquidsSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}> 
				<LiquidsSource {...sourceProps}>
					<QuerySourceSelect<ILiquid> {...props}/>
				</LiquidsSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.Liquids.title"}
					size={props.size}
					tooltip={"common.selection.Liquids.title.tooltip"}
					width={800}
				>
					<LiquidsSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</LiquidsSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useLiquidsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([LiquidsApiLink]);
};

export const useLiquidsOptionalSelectionContext = () => useOptionalSelectionContext<ILiquid>();
export const useLiquidsSelectionContext = () => useSelectionContext<ILiquid>();
