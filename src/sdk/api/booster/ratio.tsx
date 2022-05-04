/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {SelectOutlined} from "@ant-design/icons";
import {IQuery, IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export interface IRatioItem {
	label: string;
	value: string;
	pg: number;
	vg: number;
}

export const RatioApiLink = "/api/booster/ratio";

export type IRatioQueryParams = undefined;

export const useRatioQuery = createQueryHook<IQuery, IQueryResult<IRatioItem>, IRatioQueryParams>(RatioApiLink, "post");

export const useRatioSource = () => useSourceContext<IRatioItem>();

export interface IRatioSourceContext extends ISourceContext<IRatioItem> {
}

export interface IRatioSourceConsumerProps extends ConsumerProps<ISourceContext<IRatioItem>> {
}

export const RatioSourceConsumer: FC<IRatioSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IRatioSourceProps extends Partial<ISourceProviderProps<IRatioItem>> {
}

export const RatioSource: FC<IRatioSourceProps> = props => {
	return <SourceProvider<IRatioItem>
		name={"Ratio"}
		useQuery={useRatioQuery}
		{...props}
	/>;
};

export const toRatioLink = (queryParams?: IRatioQueryParams) => toLink(RatioApiLink, queryParams);
export const useRatioLink = () => toRatioLink;

export const useRatioPromise = createPromiseHook<IQuery, IRatioItem, IRatioQueryParams>(RatioApiLink, "post");
export const RatioPromise = createPromise<IQuery, IRatioItem, IRatioQueryParams>(RatioApiLink, "post");

export interface IRatioFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IQuery>>> {
}

export const RatioFilterProvider: FC<IRatioFilterProviderProps> = props => <FilterProvider<IQueryFilter<IQuery>> name={"Ratio"} {...props}/>;

export const useRatioOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IQuery>>();
export const useRatioFilterContext = () => useFilterContext<IQueryFilter<IQuery>>();

export interface IRatioSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IQuery>> {
}

export const RatioSourceFilter: FC<IRatioSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Ratio"}
/>;

export interface IRatioOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IQuery>>> {
}

export const RatioOrderByProvider: FC<IRatioOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IQuery>> name={"Ratio"} {...props}/>;

export const useRatioOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IQuery>>();
export const useRatioOrderByContext = () => useOrderByContext<IQueryOrderBy<IQuery>>();

export interface IRatioListSourceProps extends Partial<IListProps<IRatioItem>> {
	sourceProps?: Partial<IRatioSourceProps>;
}

export interface IRatioSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>, IRatioQueryParams>> {
}

export const RatioSourceControlProvider: FC<IRatioSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IQuery>, IQueryOrderBy<IQuery>> name={"Ratio"} {...props}/>;

export const RatioListSource: FC<IRatioListSourceProps> = ({sourceProps, ...props}) => {
	return <RatioSource
		{...sourceProps}
	>
		<List<IRatioItem>
			{...props}
		/>
	</RatioSource>;
}

export interface IRatioSourceSelectProps extends IQuerySourceSelectProps<IRatioItem> {
	toOption: IToOptionMapper<IRatioItem>;
	sourceProps?: IRatioSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const RatioSourceSelect: FC<IRatioSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<RatioSource {...sourceProps}>
					<QuerySourceSelect<IRatioItem> {...props}/>
				</RatioSource>
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
					<RatioSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</RatioSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IRatioSelectionProviderProps extends Partial<ISelectionProviderProps<IRatioItem>> {
}

export const RatioSelectionProvider: FC<IRatioSelectionProviderProps> = props => {
	return <SelectionProvider<IRatioItem> {...props}/>;
};

export const useRatioQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([RatioApiLink]);
};

export const useRatioOptionalSelectionContext = () => useOptionalSelectionContext<IRatioItem>();
export const useRatioSelectionContext = () => useSelectionContext<IRatioItem>();
