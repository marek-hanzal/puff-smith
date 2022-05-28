/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseRatioSource} from "@/puff-smith/service/base/ratio/interface";
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

export const RatioApiLink = "/api/inventory/base/ratio/query";
export const RatioCountApiLink = "/api/inventory/base/ratio/query/count";

export type IRatioQueryParams = undefined;

export const useRatioQuery = createQueryHook<ISourceQuery<IBaseRatioSource>, ISourceItem<IBaseRatioSource>[], IRatioQueryParams>(RatioApiLink, "post");
export const useRatioCountQuery = createQueryHook<ISourceQuery<IBaseRatioSource>, number, IRatioQueryParams>(RatioCountApiLink, "post");

export const useRatioSource = () => useSourceContext<ISourceItem<IBaseRatioSource>>();

export interface IRatioSourceContext extends ISourceContext<ISourceItem<IBaseRatioSource>> {
}

export interface IRatioSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBaseRatioSource>>> {
}

export const RatioSourceConsumer: FC<IRatioSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IRatioProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBaseRatioSource>>> {
}

export const RatioProvider: FC<IRatioProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBaseRatioSource>>
		name={"Ratio"}
		useQuery={useRatioQuery}
		useCountQuery={useRatioCountQuery}
		{...props}
	/>;
};

export const toRatioLink = (queryParams?: IRatioQueryParams) => toLink(RatioApiLink, queryParams);
export const useRatioLink = () => toRatioLink;

export const useRatioPromise = createPromiseHook<ISourceQuery<IBaseRatioSource>, ISourceItem<IBaseRatioSource>, IRatioQueryParams>(RatioApiLink, "post");
export const RatioPromise = createPromise<ISourceQuery<IBaseRatioSource>, ISourceItem<IBaseRatioSource>, IRatioQueryParams>(RatioApiLink, "post");

export interface IRatioFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBaseRatioSource>>>> {
}

export const RatioFilterProvider: FC<IRatioFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBaseRatioSource>>> name={"Ratio"} {...props}/>;

export const useRatioOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBaseRatioSource>>>();
export const useRatioFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBaseRatioSource>>>();

export interface IRatioProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBaseRatioSource>>> {
}

export const RatioProviderFilter: FC<IRatioProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Ratio"}
/>;

export interface IRatioOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBaseRatioSource>>>> {
}

export const RatioOrderByProvider: FC<IRatioOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBaseRatioSource>>> name={"Ratio"} {...props}/>;

export const useRatioOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBaseRatioSource>>>();
export const useRatioOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBaseRatioSource>>>();

export interface IRatioProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBaseRatioSource>>, IQueryOrderBy<ISourceQuery<IBaseRatioSource>>, IRatioQueryParams>> {
}

export const RatioProviderControl: FC<IRatioProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IBaseRatioSource>>, IQueryOrderBy<ISourceQuery<IBaseRatioSource>>> name={"Ratio"} {...props}/>;

export interface IRatioListSourceProps extends Partial<IListProps<ISourceItem<IBaseRatioSource>>> {
	providerProps?: Partial<IRatioProviderProps>;
}

export const RatioListSource: FC<IRatioListSourceProps> = ({providerProps, ...props}) => {
	return <RatioProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IBaseRatioSource>>
			{...props}
		/>
	</RatioProvider>;
};

export interface IRatioSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBaseRatioSource>> {
	toOption: IToOptionMapper<ISourceItem<IBaseRatioSource>>;
	providerProps?: Partial<IRatioProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const RatioSourceSelect: FC<IRatioSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<RatioProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBaseRatioSource>> {...props}/>
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

export interface IRatioSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBaseRatioSource>>> {
}

export const RatioSelectionProvider: FC<IRatioSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBaseRatioSource>> {...props}/>;
};

export const useRatioQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([RatioApiLink]);
};

export const useRatioCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([RatioCountApiLink]);
};

export const useRatioOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBaseRatioSource>>();
export const useRatioSelectionContext = () => useSelectionContext<ISourceItem<IBaseRatioSource>>();
