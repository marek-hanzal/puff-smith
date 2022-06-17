/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterRatioSource} from "@/puff-smith/service/booster/ratio/interface";
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

export const RatioApiLink = "/api/inventory/booster/ratio/query";
export const RatioCountApiLink = "/api/inventory/booster/ratio/query/count";

export type IRatioQueryParams = any;

export const useRatioQuery = createQueryHook<ISourceQuery<IBoosterRatioSource>, ISourceItem<IBoosterRatioSource>[], IRatioQueryParams>(RatioApiLink, "post");
export const useRatioCountQuery = createQueryHook<ISourceQuery<IBoosterRatioSource>, number, IRatioQueryParams>(RatioCountApiLink, "post");

export const useRatioSource = () => useSourceContext<ISourceItem<IBoosterRatioSource>>();

export interface IRatioSourceContext extends ISourceContext<ISourceItem<IBoosterRatioSource>> {
}

export interface IRatioSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBoosterRatioSource>>> {
}

export const RatioSourceConsumer: FC<IRatioSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IRatioProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBoosterRatioSource>>> {
}

export const RatioProvider: FC<IRatioProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBoosterRatioSource>>
		name={"Ratio"}
		useQuery={useRatioQuery}
		useCountQuery={useRatioCountQuery}
		{...props}
	/>;
};

export const toRatioLink = (queryParams?: IRatioQueryParams) => toLink(RatioApiLink, queryParams);
export const useRatioLink = () => toRatioLink;

export const useRatioPromise = createPromiseHook<ISourceQuery<IBoosterRatioSource>, ISourceItem<IBoosterRatioSource>, IRatioQueryParams>(RatioApiLink, "post");
export const RatioPromise = createPromise<ISourceQuery<IBoosterRatioSource>, ISourceItem<IBoosterRatioSource>, IRatioQueryParams>(RatioApiLink, "post");

export interface IRatioFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBoosterRatioSource>>>> {
}

export const RatioFilterProvider: FC<IRatioFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBoosterRatioSource>>> name={"Ratio"} {...props}/>;

export const useRatioOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBoosterRatioSource>>>();
export const useRatioFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBoosterRatioSource>>>();

export interface IRatioProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBoosterRatioSource>>> {
}

export const RatioProviderFilter: FC<IRatioProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Ratio"}
/>;

export interface IRatioOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBoosterRatioSource>>>> {
}

export const RatioOrderByProvider: FC<IRatioOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBoosterRatioSource>>> name={"Ratio"} {...props}/>;

export const useRatioOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterRatioSource>>>();
export const useRatioOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterRatioSource>>>();

export interface IRatioProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBoosterRatioSource>>, IQueryOrderBy<ISourceQuery<IBoosterRatioSource>>, IRatioQueryParams>> {
}

export const RatioProviderControl: FC<IRatioProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IBoosterRatioSource>>, IQueryOrderBy<ISourceQuery<IBoosterRatioSource>>> name={"Ratio"} {...props}/>;

export interface IRatioListSourceProps extends Partial<IListProps<ISourceItem<IBoosterRatioSource>>> {
	providerProps?: Partial<IRatioProviderProps>;
}

export const RatioListSource: FC<IRatioListSourceProps> = ({providerProps, ...props}) => {
	return <RatioProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IBoosterRatioSource>>
			{...props}
		/>
	</RatioProvider>;
}

export interface IRatioSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBoosterRatioSource>> {
	toOption: IToOptionMapper<ISourceItem<IBoosterRatioSource>>;
	providerProps?: Partial<IRatioProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const RatioSourceSelect: FC<IRatioSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<RatioProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBoosterRatioSource>> {...props}/>
				</RatioProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Ratio.title"}
					size={props.size}
					tooltip={"common.selection.Ratio.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<RatioProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</RatioProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IRatioSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBoosterRatioSource>>> {
}

export const RatioSelectionProvider: FC<IRatioSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBoosterRatioSource>> {...props}/>;
}

export const useRatioQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([RatioApiLink]);
};

export const useRatioCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([RatioCountApiLink]);
};

export const useRatioOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBoosterRatioSource>>();
export const useRatioSelectionContext = () => useSelectionContext<ISourceItem<IBoosterRatioSource>>();
