/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureBaseSource} from "@/puff-smith/service/mixture/inventory/base/interface";
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

export const BaseApiLink = "/api/inventory/mixture/base/query";
export const BaseCountApiLink = "/api/inventory/mixture/base/query/count";

export type IBaseQueryParams = any;

export const useBaseQuery = createQueryHook<ISourceQuery<IMixtureBaseSource>, ISourceItem<IMixtureBaseSource>[], IBaseQueryParams>(BaseApiLink, "post");
export const useBaseCountQuery = createQueryHook<ISourceQuery<IMixtureBaseSource>, number, IBaseQueryParams>(BaseCountApiLink, "post");

export const useBaseSource = () => useSourceContext<ISourceItem<IMixtureBaseSource>>()

export interface IBaseSourceContext extends ISourceContext<ISourceItem<IMixtureBaseSource>> {
}

export interface IBaseSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureBaseSource>>> {
}

export const BaseSourceConsumer: FC<IBaseSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureBaseSource>>> {
}

export const BaseProvider: FC<IBaseProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureBaseSource>>
		name={"Base"}
		useQuery={useBaseQuery}
		useCountQuery={useBaseCountQuery}
		{...props}
	/>;
};

export const toBaseLink = (queryParams?: IBaseQueryParams) => toLink(BaseApiLink, queryParams);
export const useBaseLink = () => toBaseLink;

export const useBasePromise = createPromiseHook<ISourceQuery<IMixtureBaseSource>, ISourceItem<IMixtureBaseSource>, IBaseQueryParams>(BaseApiLink, "post");
export const BasePromise = createPromise<ISourceQuery<IMixtureBaseSource>, ISourceItem<IMixtureBaseSource>, IBaseQueryParams>(BaseApiLink, "post");

export interface IBaseFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureBaseSource>>>> {
}

export const BaseFilterProvider: FC<IBaseFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureBaseSource>>> name={"Base"} {...props}/>;

export const useBaseOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureBaseSource>>>()
export const useBaseFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureBaseSource>>>()

export interface IBaseProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureBaseSource>>> {
}

export const BaseProviderFilter: FC<IBaseProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Base'}
/>;

export interface IBaseOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureBaseSource>>>> {
}

export const BaseOrderByProvider: FC<IBaseOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureBaseSource>>> name={"Base"} {...props}/>;

export const useBaseOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureBaseSource>>>()
export const useBaseOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureBaseSource>>>()

export interface IBaseProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureBaseSource>>, IQueryOrderBy<ISourceQuery<IMixtureBaseSource>>, IBaseQueryParams>> {
}

export const BaseProviderControl: FC<IBaseProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureBaseSource>>, IQueryOrderBy<ISourceQuery<IMixtureBaseSource>>> name={"Base"} {...props}/>;

export interface IBaseListSourceProps extends Partial<IListProps<ISourceItem<IMixtureBaseSource>>> {
	providerProps?: Partial<IBaseProviderProps>;
}

export const BaseListSource: FC<IBaseListSourceProps> = ({providerProps, ...props}) => {
	return <BaseProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IMixtureBaseSource>>
			{...props}
		/>
	</BaseProvider>;
}

export interface IBaseInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IMixtureBaseSource>>> {
	providerProps?: Partial<IBaseProviderProps>;
}

export const BaseInfiniteListSource: FC<IBaseInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <BaseProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IMixtureBaseSource>>
			{...props}
		/>
	</BaseProvider>;
}

export interface IBaseSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureBaseSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureBaseSource>>;
	providerProps?: Partial<IBaseProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseSourceSelect: FC<IBaseSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureBaseSource>> {...props}/>
				</BaseProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Base.title"}
					size={props.size}
					tooltip={"common.selection.Base.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<BaseProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BaseProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBaseSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureBaseSource>>> {
}

export const BaseSelectionProvider: FC<IBaseSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureBaseSource>> {...props}/>
}

export const useBaseCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseCountApiLink]);
};

export const useBaseQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([BaseApiLink]),
		withCount && queryClient.invalidateQueries([BaseCountApiLink]),
	]);
};

export const useBaseOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureBaseSource>>();
export const useBaseSelectionContext = () => useSelectionContext<ISourceItem<IMixtureBaseSource>>();
