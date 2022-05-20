/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidQuery} from "@/puff-smith/service/liquid/interface";
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

export const LiquidApiLink = "/api/liquid/query";

export type ILiquidQueryParams = undefined;

export const useLiquidQuery = createQueryHook<ILiquidQuery, ILiquid[], ILiquidQueryParams>(LiquidApiLink, "post");

export const useLiquidSource = () => useSourceContext<ILiquid>();

export interface ILiquidSourceContext extends ISourceContext<ILiquid> {
}

export interface ILiquidSourceConsumerProps extends ConsumerProps<ISourceContext<ILiquid>> {
}

export const LiquidSourceConsumer: FC<ILiquidSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ILiquidSourceProps extends Partial<ISourceProviderProps<ILiquid>> {
}

export const LiquidSource: FC<ILiquidSourceProps> = props => {
	return <SourceProvider<ILiquid>
		name={"Liquid"}
		useQuery={useLiquidQuery}
		{...props}
	/>;
};

export const toLiquidLink = (queryParams?: ILiquidQueryParams) => toLink(LiquidApiLink, queryParams);
export const useLiquidLink = () => toLiquidLink;

export const useLiquidPromise = createPromiseHook<ILiquidQuery, ILiquid, ILiquidQueryParams>(LiquidApiLink, "post");
export const LiquidPromise = createPromise<ILiquidQuery, ILiquid, ILiquidQueryParams>(LiquidApiLink, "post");

export interface ILiquidFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ILiquidQuery>>> {
}

export const LiquidFilterProvider: FC<ILiquidFilterProviderProps> = props => <FilterProvider<IQueryFilter<ILiquidQuery>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ILiquidQuery>>();
export const useLiquidFilterContext = () => useFilterContext<IQueryFilter<ILiquidQuery>>();

export interface ILiquidSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ILiquidQuery>> {
}

export const LiquidSourceFilter: FC<ILiquidSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Liquid"}
/>;

export interface ILiquidOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ILiquidQuery>>> {
}

export const LiquidOrderByProvider: FC<ILiquidOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ILiquidQuery>> name={"Liquid"} {...props}/>;

export const useLiquidOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ILiquidQuery>>();
export const useLiquidOrderByContext = () => useOrderByContext<IQueryOrderBy<ILiquidQuery>>();

export interface ILiquidListSourceProps extends Partial<IListProps<ILiquid>> {
	sourceProps?: Partial<ILiquidSourceProps>;
}

export interface ILiquidSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>, ILiquidQueryParams>> {
}

export const LiquidSourceControlProvider: FC<ILiquidSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>> name={"Liquid"} {...props}/>;

export const LiquidListSource: FC<ILiquidListSourceProps> = ({sourceProps, ...props}) => {
	return <LiquidSource
		{...sourceProps}
	>
		<List<ILiquid>
			{...props}
		/>
	</LiquidSource>;
}

export interface ILiquidSourceSelectProps extends IQuerySourceSelectProps<ILiquid> {
	toOption: IToOptionMapper<ILiquid>;
	sourceProps?: ILiquidSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const LiquidSourceSelect: FC<ILiquidSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<LiquidSource {...sourceProps}>
					<QuerySourceSelect<ILiquid> {...props}/>
				</LiquidSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Liquid.title"}
					size={props.size}
					tooltip={"common.selection.Liquid.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<LiquidSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</LiquidSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ILiquidSelectionProviderProps extends Partial<ISelectionProviderProps<ILiquid>> {
}

export const LiquidSelectionProvider: FC<ILiquidSelectionProviderProps> = props => {
	return <SelectionProvider<ILiquid> {...props}/>;
}

export const useLiquidQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([LiquidApiLink]);
};

export const useLiquidOptionalSelectionContext = () => useOptionalSelectionContext<ILiquid>();
export const useLiquidSelectionContext = () => useSelectionContext<ILiquid>();
