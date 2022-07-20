/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureRatioSource} from "@/puff-smith/service/mixture/ratio/interface";
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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";

export const RatioApiLink = "/api/mixture/ratio/query";
export const RatioCountApiLink = "/api/mixture/ratio/query/count";

export type IRatioQueryParams = any;

export const useRatioQuery = createQueryHook<ISourceQuery<IMixtureRatioSource>, ISourceItem<IMixtureRatioSource>[], IRatioQueryParams>(RatioApiLink, "post");
export const useRatioCountQuery = createQueryHook<ISourceQuery<IMixtureRatioSource>, number, IRatioQueryParams>(RatioCountApiLink, "post");

export const useRatioSource = () => useSourceContext<ISourceItem<IMixtureRatioSource>>()

export interface IRatioSourceContext extends ISourceContext<ISourceItem<IMixtureRatioSource>> {
}

export interface IRatioSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureRatioSource>>> {
}

export const RatioSourceConsumer: FC<IRatioSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IRatioProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureRatioSource>>> {
}

export const RatioProvider: FC<IRatioProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureRatioSource>>
		name={"Ratio"}
		useQuery={useRatioQuery}
		useCountQuery={useRatioCountQuery}
		{...props}
	/>;
};

export const toRatioLink = (queryParams?: IRatioQueryParams) => toLink(RatioApiLink, queryParams);
export const useRatioLink = () => toRatioLink;

export const useRatioPromise = createPromiseHook<ISourceQuery<IMixtureRatioSource>, ISourceItem<IMixtureRatioSource>, IRatioQueryParams>(RatioApiLink, "post");
export const RatioPromise = createPromise<ISourceQuery<IMixtureRatioSource>, ISourceItem<IMixtureRatioSource>, IRatioQueryParams>(RatioApiLink, "post");

export interface IRatioFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureRatioSource>>>> {
}

export const RatioFilterProvider: FC<IRatioFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureRatioSource>>> name={"Ratio"} {...props}/>;

export const useRatioOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureRatioSource>>>()
export const useRatioFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureRatioSource>>>()

export interface IRatioProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureRatioSource>>> {
}

export const RatioProviderFilter: FC<IRatioProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Ratio'}
/>;

export interface IRatioOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureRatioSource>>>> {
}

export const RatioOrderByProvider: FC<IRatioOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureRatioSource>>> name={"Ratio"} {...props}/>;

export const useRatioOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureRatioSource>>>()
export const useRatioOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureRatioSource>>>()

export interface IRatioProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureRatioSource>>, IQueryOrderBy<ISourceQuery<IMixtureRatioSource>>, IRatioQueryParams>> {
}

export const RatioProviderControl: FC<IRatioProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureRatioSource>>, IQueryOrderBy<ISourceQuery<IMixtureRatioSource>>> name={"Ratio"} {...props}/>;

export interface IRatioListSourceProps extends Partial<IListProps<ISourceItem<IMixtureRatioSource>>> {
	providerProps?: Partial<IRatioProviderProps>;
}

export const RatioListSource: FC<IRatioListSourceProps> = ({providerProps, ...props}) => {
	return <RatioProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IMixtureRatioSource>>
			{...props}
		/>
	</RatioProvider>;
}

export interface IRatioInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IMixtureRatioSource>>> {
	providerProps?: Partial<IRatioProviderProps>;
}

export const RatioInfiniteListSource: FC<IRatioInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <RatioProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IMixtureRatioSource>>
			{...props}
		/>
	</RatioProvider>;
}

export interface IRatioSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureRatioSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureRatioSource>>;
	providerProps?: Partial<IRatioProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const RatioSourceSelect: FC<IRatioSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<RatioProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureRatioSource>> {...props}/>
				</RatioProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Ratio.title"}
					size={props.size}
					tooltip={"common.selection.Ratio.title.tooltip"}
					width={800}
					type={'text'}
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

export interface IRatioSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureRatioSource>>> {
}

export const RatioSelectionProvider: FC<IRatioSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureRatioSource>> {...props}/>
}

export const useRatioCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([RatioCountApiLink]);
};

export const useRatioQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([RatioApiLink]),
		withCount && queryClient.invalidateQueries([RatioCountApiLink]),
	]);
};

export const useRatioOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureRatioSource>>();
export const useRatioSelectionContext = () => useSelectionContext<ISourceItem<IMixtureRatioSource>>();
