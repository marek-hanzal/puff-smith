/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidBoosterSource} from "@/puff-smith/service/liquid/booster/interface";
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

export const BoosterApiLink = "/api/lab/liquid/booster/query";
export const BoosterCountApiLink = "/api/lab/liquid/booster/query/count";

export type IBoosterQueryParams = any;

export const useBoosterQuery = createQueryHook<ISourceQuery<ILiquidBoosterSource>, ISourceItem<ILiquidBoosterSource>[], IBoosterQueryParams>(BoosterApiLink, "post");
export const useBoosterCountQuery = createQueryHook<ISourceQuery<ILiquidBoosterSource>, number, IBoosterQueryParams>(BoosterCountApiLink, "post");

export const useBoosterSource = () => useSourceContext<ISourceItem<ILiquidBoosterSource>>();

export interface IBoosterSourceContext extends ISourceContext<ISourceItem<ILiquidBoosterSource>> {
}

export interface IBoosterSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ILiquidBoosterSource>>> {
}

export const BoosterSourceConsumer: FC<IBoosterSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterProviderProps extends Partial<ISourceProviderProps<ISourceItem<ILiquidBoosterSource>>> {
}

export const BoosterProvider: FC<IBoosterProviderProps> = props => {
	return <SourceProvider<ISourceItem<ILiquidBoosterSource>>
		name={"Booster"}
		useQuery={useBoosterQuery}
		useCountQuery={useBoosterCountQuery}
		{...props}
	/>;
};

export const toBoosterLink = (queryParams?: IBoosterQueryParams) => toLink(BoosterApiLink, queryParams);
export const useBoosterLink = () => toBoosterLink;

export const useBoosterPromise = createPromiseHook<ISourceQuery<ILiquidBoosterSource>, ISourceItem<ILiquidBoosterSource>, IBoosterQueryParams>(BoosterApiLink, "post");
export const BoosterPromise = createPromise<ISourceQuery<ILiquidBoosterSource>, ISourceItem<ILiquidBoosterSource>, IBoosterQueryParams>(BoosterApiLink, "post");

export interface IBoosterFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ILiquidBoosterSource>>>> {
}

export const BoosterFilterProvider: FC<IBoosterFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ILiquidBoosterSource>>> name={"Booster"} {...props}/>;

export const useBoosterOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ILiquidBoosterSource>>>();
export const useBoosterFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ILiquidBoosterSource>>>();

export interface IBoosterProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ILiquidBoosterSource>>> {
}

export const BoosterProviderFilter: FC<IBoosterProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Booster"}
/>;

export interface IBoosterOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ILiquidBoosterSource>>>> {
}

export const BoosterOrderByProvider: FC<IBoosterOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ILiquidBoosterSource>>> name={"Booster"} {...props}/>;

export const useBoosterOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidBoosterSource>>>();
export const useBoosterOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidBoosterSource>>>();

export interface IBoosterProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ILiquidBoosterSource>>, IQueryOrderBy<ISourceQuery<ILiquidBoosterSource>>, IBoosterQueryParams>> {
}

export const BoosterProviderControl: FC<IBoosterProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ILiquidBoosterSource>>, IQueryOrderBy<ISourceQuery<ILiquidBoosterSource>>> name={"Booster"} {...props}/>;

export interface IBoosterListSourceProps extends Partial<IListProps<ISourceItem<ILiquidBoosterSource>>> {
	providerProps?: Partial<IBoosterProviderProps>;
}

export const BoosterListSource: FC<IBoosterListSourceProps> = ({providerProps, ...props}) => {
	return <BoosterProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ILiquidBoosterSource>>
			{...props}
		/>
	</BoosterProvider>;
}

export interface IBoosterSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ILiquidBoosterSource>> {
	toOption: IToOptionMapper<ISourceItem<ILiquidBoosterSource>>;
	providerProps?: Partial<IBoosterProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterSourceSelect: FC<IBoosterSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ILiquidBoosterSource>> {...props}/>
				</BoosterProvider>
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
					<BoosterProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoosterProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBoosterSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ILiquidBoosterSource>>> {
}

export const BoosterSelectionProvider: FC<IBoosterSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ILiquidBoosterSource>> {...props}/>;
};

export const useBoosterCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterCountApiLink]);
};

export const useBoosterQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([BoosterApiLink]),
		withCount && queryClient.invalidateQueries([BoosterCountApiLink]),
	]);
};

export const useBoosterOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ILiquidBoosterSource>>();
export const useBoosterSelectionContext = () => useSelectionContext<ISourceItem<ILiquidBoosterSource>>();
