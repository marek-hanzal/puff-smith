/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma";
import {ReadOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const AromasApiLink = "/api/aroma/query";

export type IAromasQueryParams = undefined;

export const useAromasQuery = createQueryHook<IAromaQuery, IQueryResult<IAroma>, IAromasQueryParams>(AromasApiLink, "post");

export const useAromasSource = () => useSourceContext<IAroma>();

export interface IAromasSourceContext extends ISourceContext<IAroma> {
}

export interface IAromasSourceConsumerProps extends ConsumerProps<ISourceContext<IAroma>> {
}

export const AromasSourceConsumer: FC<IAromasSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromasSourceProps extends Partial<ISourceProviderProps<IAroma>> {
}

export const AromasSource: FC<IAromasSourceProps> = props => {
	return <SourceProvider<IAroma>
		name={"Aromas"}
		useQuery={useAromasQuery}
		{...props}
	/>;
}

export const toAromasLink = (queryParams?: IAromasQueryParams) => toLink(AromasApiLink, queryParams);
export const useAromasLink = () => toAromasLink;

export const useAromasPromise = createPromiseHook<IAromaQuery, IAroma, IAromasQueryParams>(AromasApiLink, "post");
export const AromasPromise = createPromise<IAromaQuery, IAroma, IAromasQueryParams>(AromasApiLink, "post");

export interface IAromasFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAromaQuery>>> {
}

export const AromasFilterProvider: FC<IAromasFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAromaQuery>> name={"Aromas"} {...props}/>;

export const useAromasOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAromaQuery>>();
export const useAromasFilterContext = () => useFilterContext<IQueryFilter<IAromaQuery>>();

export interface IAromasSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAromaQuery>> {
}

export const AromasSourceFilter: FC<IAromasSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Aromas"}
/>;

export interface IAromasOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAromaQuery>>> {
}

export const AromasOrderByProvider: FC<IAromasOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAromaQuery>> name={"Aromas"} {...props}/>;

export const useAromasOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAromaQuery>>();
export const useAromasOrderByContext = () => useOrderByContext<IQueryOrderBy<IAromaQuery>>();

export interface IAromasListSourceProps extends Partial<IListProps<IAroma>> {
	sourceProps?: Partial<IAromasSourceProps>;
}

export interface IAromasSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>, IAromasQueryParams>> {
}

export const AromasSourceControlProvider: FC<IAromasSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAromaQuery>, IQueryOrderBy<IAromaQuery>> name={"Aromas"} {...props}/>;

export const AromasListSource: FC<IAromasListSourceProps> = ({sourceProps, ...props}) => {
	return <AromasSource
		{...sourceProps}
	>
		<List<IAroma>
			{...props}
		/>
	</AromasSource>
}

export interface IAromasSourceSelectProps extends IQuerySourceSelectProps<IAroma> {
	toOption: IToOptionMapper<IAroma>;
	sourceProps?: IAromasSourceProps;
	selectionList?: () => ReactNode;
}

export const AromasSourceSelect: FC<IAromasSourceSelectProps> = ({sourceProps, selectionList, ...props}) => {
	return <Input.Group>
		<Row gutter={8}>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					type={"text"}
					icon={<ReadOutlined/>}
					title={"common.selection.Aromas.title"}
					tooltip={"common.selection.Aromas.title.tooltip"}
					width={800}
				>
					<AromasSourceControlProvider>
						<SelectionProvider type={"single"}>
							{selectionList()}
						</SelectionProvider>
					</AromasSourceControlProvider>
				</DrawerButton>}
			</Col>
			<Col flex={"auto"}>
				<AromasSource {...sourceProps}>
					<QuerySourceSelect<IAroma> {...props}/>
				</AromasSource>
			</Col>
		</Row>
	</Input.Group>;
};

export const useAromasQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromasApiLink]);
}

export const useAromasOptionalSelectionContext = () => useOptionalSelectionContext<IAroma>();
export const useAromasSelectionContext = () => useSelectionContext<IAroma>();
