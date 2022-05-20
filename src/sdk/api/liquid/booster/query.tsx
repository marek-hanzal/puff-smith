/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBooster} from "@/puff-smith/service/booster/interface";
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

export const BoosterApiLink = "/api/liquid/booster/query";

export type IBoosterQueryParams = undefined;

export const useBoosterQuery = createQueryHook<ILiquidQuery, IBooster[], IBoosterQueryParams>(BoosterApiLink, "post");

export const useBoosterSource = () => useSourceContext<IBooster>();

export interface IBoosterSourceContext extends ISourceContext<IBooster> {
}

export interface IBoosterSourceConsumerProps extends ConsumerProps<ISourceContext<IBooster>> {
}

export const BoosterSourceConsumer: FC<IBoosterSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterSourceProps extends Partial<ISourceProviderProps<IBooster>> {
}

export const BoosterSource: FC<IBoosterSourceProps> = props => {
	return <SourceProvider<IBooster>
		name={"Booster"}
		useQuery={useBoosterQuery}
		{...props}
	/>;
};

export const toBoosterLink = (queryParams?: IBoosterQueryParams) => toLink(BoosterApiLink, queryParams);
export const useBoosterLink = () => toBoosterLink;

export const useBoosterPromise = createPromiseHook<ILiquidQuery, IBooster, IBoosterQueryParams>(BoosterApiLink, "post");
export const BoosterPromise = createPromise<ILiquidQuery, IBooster, IBoosterQueryParams>(BoosterApiLink, "post");

export interface IBoosterFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ILiquidQuery>>> {
}

export const BoosterFilterProvider: FC<IBoosterFilterProviderProps> = props => <FilterProvider<IQueryFilter<ILiquidQuery>> name={"Booster"} {...props}/>;

export const useBoosterOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ILiquidQuery>>();
export const useBoosterFilterContext = () => useFilterContext<IQueryFilter<ILiquidQuery>>();

export interface IBoosterSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ILiquidQuery>> {
}

export const BoosterSourceFilter: FC<IBoosterSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Booster"}
/>;

export interface IBoosterOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ILiquidQuery>>> {
}

export const BoosterOrderByProvider: FC<IBoosterOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ILiquidQuery>> name={"Booster"} {...props}/>;

export const useBoosterOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ILiquidQuery>>();
export const useBoosterOrderByContext = () => useOrderByContext<IQueryOrderBy<ILiquidQuery>>();

export interface IBoosterListSourceProps extends Partial<IListProps<IBooster>> {
	sourceProps?: Partial<IBoosterSourceProps>;
}

export interface IBoosterSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>, IBoosterQueryParams>> {
}

export const BoosterSourceControlProvider: FC<IBoosterSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ILiquidQuery>, IQueryOrderBy<ILiquidQuery>> name={"Booster"} {...props}/>;

export const BoosterListSource: FC<IBoosterListSourceProps> = ({sourceProps, ...props}) => {
	return <BoosterSource
		{...sourceProps}
	>
		<List<IBooster>
			{...props}
		/>
	</BoosterSource>;
}

export interface IBoosterSourceSelectProps extends IQuerySourceSelectProps<IBooster> {
	toOption: IToOptionMapper<IBooster>;
	sourceProps?: IBoosterSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterSourceSelect: FC<IBoosterSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterSource {...sourceProps}>
					<QuerySourceSelect<IBooster> {...props}/>
				</BoosterSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Booster.title"}
					size={props.size}
					tooltip={"common.selection.Booster.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BoosterSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoosterSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBoosterSelectionProviderProps extends Partial<ISelectionProviderProps<IBooster>> {
}

export const BoosterSelectionProvider: FC<IBoosterSelectionProviderProps> = props => {
	return <SelectionProvider<IBooster> {...props}/>;
}

export const useBoosterQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterApiLink]);
};

export const useBoosterOptionalSelectionContext = () => useOptionalSelectionContext<IBooster>();
export const useBoosterSelectionContext = () => useSelectionContext<IBooster>();
