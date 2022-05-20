/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAroma} from "@/puff-smith/service/aroma/interface";
import {ILiquidQuery} from "@/puff-smith/service/liquid/interface";
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

export const AromaApiLink = "/api/liquid/aroma/query";

export type IAromaQueryParams = undefined;

export const useAromaQuery = createQueryHook<ILiquidQuery, IAroma[], IAromaQueryParams>(AromaApiLink, "post");

export const useAromaSource = () => useSourceContext<IAroma>();

export interface IAromaSourceContext extends ISourceContext<IAroma> {
}

export interface IAromaSourceConsumerProps extends ConsumerProps<ISourceContext<IAroma>> {
}

export const AromaSourceConsumer: FC<IAromaSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaSourceProps extends Partial<ISourceProviderProps<IAroma>> {
}

export const AromaSource: FC<IAromaSourceProps> = props => {
	return <SourceProvider<IAroma>
		name={"Aroma"}
		useQuery={useAromaQuery}
		{...props}
	/>;
};

export const toAromaLink = (queryParams?: IAromaQueryParams) => toLink(AromaApiLink, queryParams);
export const useAromaLink = () => toAromaLink;

export const useAromaPromise = createPromiseHook<ILiquidQuery, IAroma, IAromaQueryParams>(AromaApiLink, "post");
export const AromaPromise = createPromise<ILiquidQuery, IAroma, IAromaQueryParams>(AromaApiLink, "post");

export interface IAromaFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ILiquidQuery>>> {
}

export const AromaFilterProvider: FC<IAromaFilterProviderProps> = props => <FilterProvider<IQueryFilter<ILiquidQuery>> name={"Aroma"} {...props}/>;

export const useAromaOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ILiquidQuery>>();
export const useAromaFilterContext = () => useFilterContext<IQueryFilter<ILiquidQuery>>();

export interface IAromaSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ILiquidQuery>> {
}

export const AromaSourceFilter: FC<IAromaSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Aroma"}
/>;

export interface IAromaOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ILiquidQuery>>> {
}

export const AromaOrderByProvider: FC<IAromaOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ILiquidQuery>> name={"Aroma"} {...props}/>;

export const useAromaOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ILiquidQuery>>();
export const useAromaOrderByContext = () => useOrderByContext<IQueryOrderBy<ILiquidQuery>>();

export interface IAromaListSourceProps extends Partial<IListProps<IAroma>> {
	sourceProps?: Partial<IAromaSourceProps>;
}

export interface IAromaSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>, IAromaQueryParams>> {
}

export const AromaSourceControlProvider: FC<IAromaSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>> name={"Aroma"} {...props}/>;

export const AromaListSource: FC<IAromaListSourceProps> = ({sourceProps, ...props}) => {
	return <AromaSource
		{...sourceProps}
	>
		<List<IAroma>
			{...props}
		/>
	</AromaSource>;
}

export interface IAromaSourceSelectProps extends IQuerySourceSelectProps<IAroma> {
	toOption: IToOptionMapper<IAroma>;
	sourceProps?: IAromaSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaSourceSelect: FC<IAromaSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaSource {...sourceProps}>
					<QuerySourceSelect<IAroma> {...props}/>
				</AromaSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Aroma.title"}
					size={props.size}
					tooltip={"common.selection.Aroma.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AromaSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaSelectionProviderProps extends Partial<ISelectionProviderProps<IAroma>> {
}

export const AromaSelectionProvider: FC<IAromaSelectionProviderProps> = props => {
	return <SelectionProvider<IAroma> {...props}/>;
}

export const useAromaQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaApiLink]);
};

export const useAromaOptionalSelectionContext = () => useOptionalSelectionContext<IAroma>();
export const useAromaSelectionContext = () => useSelectionContext<IAroma>();
