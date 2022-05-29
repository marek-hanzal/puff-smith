/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidBaseSource} from "@/puff-smith/service/liquid/base/interface";
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

export const BaseApiLink = "/api/lab/liquid/base/query";
export const BaseCountApiLink = "/api/lab/liquid/base/query/count";

export type IBaseQueryParams = undefined;

export const useBaseQuery = createQueryHook<ISourceQuery<ILiquidBaseSource>, ISourceItem<ILiquidBaseSource>[], IBaseQueryParams>(BaseApiLink, "post");
export const useBaseCountQuery = createQueryHook<ISourceQuery<ILiquidBaseSource>, number, IBaseQueryParams>(BaseCountApiLink, "post");

export const useBaseSource = () => useSourceContext<ISourceItem<ILiquidBaseSource>>();

export interface IBaseSourceContext extends ISourceContext<ISourceItem<ILiquidBaseSource>> {
}

export interface IBaseSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ILiquidBaseSource>>> {
}

export const BaseSourceConsumer: FC<IBaseSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseProviderProps extends Partial<ISourceProviderProps<ISourceItem<ILiquidBaseSource>>> {
}

export const BaseProvider: FC<IBaseProviderProps> = props => {
	return <SourceProvider<ISourceItem<ILiquidBaseSource>>
		name={"Base"}
		useQuery={useBaseQuery}
		useCountQuery={useBaseCountQuery}
		{...props}
	/>;
};

export const toBaseLink = (queryParams?: IBaseQueryParams) => toLink(BaseApiLink, queryParams);
export const useBaseLink = () => toBaseLink;

export const useBasePromise = createPromiseHook<ISourceQuery<ILiquidBaseSource>, ISourceItem<ILiquidBaseSource>, IBaseQueryParams>(BaseApiLink, "post");
export const BasePromise = createPromise<ISourceQuery<ILiquidBaseSource>, ISourceItem<ILiquidBaseSource>, IBaseQueryParams>(BaseApiLink, "post");

export interface IBaseFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ILiquidBaseSource>>>> {
}

export const BaseFilterProvider: FC<IBaseFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ILiquidBaseSource>>> name={"Base"} {...props}/>;

export const useBaseOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ILiquidBaseSource>>>();
export const useBaseFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ILiquidBaseSource>>>();

export interface IBaseProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ILiquidBaseSource>>> {
}

export const BaseProviderFilter: FC<IBaseProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Base"}
/>;

export interface IBaseOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ILiquidBaseSource>>>> {
}

export const BaseOrderByProvider: FC<IBaseOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ILiquidBaseSource>>> name={"Base"} {...props}/>;

export const useBaseOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidBaseSource>>>();
export const useBaseOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ILiquidBaseSource>>>();

export interface IBaseProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ILiquidBaseSource>>, IQueryOrderBy<ISourceQuery<ILiquidBaseSource>>, IBaseQueryParams>> {
}

export const BaseProviderControl: FC<IBaseProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ILiquidBaseSource>>, IQueryOrderBy<ISourceQuery<ILiquidBaseSource>>> name={"Base"} {...props}/>;

export interface IBaseListSourceProps extends Partial<IListProps<ISourceItem<ILiquidBaseSource>>> {
	providerProps?: Partial<IBaseProviderProps>;
}

export const BaseListSource: FC<IBaseListSourceProps> = ({providerProps, ...props}) => {
	return <BaseProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ILiquidBaseSource>>
			{...props}
		/>
	</BaseProvider>;
}

export interface IBaseSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ILiquidBaseSource>> {
	toOption: IToOptionMapper<ISourceItem<ILiquidBaseSource>>;
	providerProps?: Partial<IBaseProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseSourceSelect: FC<IBaseSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ILiquidBaseSource>> {...props}/>
				</BaseProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Base.title"}
					size={props.size}
					tooltip={"common.selection.Base.title.tooltip"}
					width={800}
					type={"text"}
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

export interface IBaseSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ILiquidBaseSource>>> {
}

export const BaseSelectionProvider: FC<IBaseSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ILiquidBaseSource>> {...props}/>;
}

export const useBaseQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseApiLink]);
};

export const useBaseCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseCountApiLink]);
};

export const useBaseOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ILiquidBaseSource>>();
export const useBaseSelectionContext = () => useSelectionContext<ISourceItem<ILiquidBaseSource>>();
