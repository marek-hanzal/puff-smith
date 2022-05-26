/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
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

export const AromaApiLink = "/api/aroma/query";
export const AromaCountApiLink = "/api/aroma/query/count";

export type IAromaQueryParams = undefined;

export const useAromaQuery = createQueryHook<ISourceQuery<IAromaSource>, ISourceItem<IAromaSource>[], IAromaQueryParams>(AromaApiLink, "post");
export const useAromaCountQuery = createQueryHook<ISourceQuery<IAromaSource>, number, IAromaQueryParams>(AromaCountApiLink, "post");

export const useAromaSource = () => useSourceContext<ISourceItem<IAromaSource>>();

export interface IAromaSourceContext extends ISourceContext<ISourceItem<IAromaSource>> {
}

export interface IAromaSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaSource>>> {
}

export const AromaSourceConsumer: FC<IAromaSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaSource>>> {
}

export const AromaProvider: FC<IAromaProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaSource>>
		name={"Aroma"}
		useQuery={useAromaQuery}
		useCountQuery={useAromaCountQuery}
		{...props}
	/>;
};

export const toAromaLink = (queryParams?: IAromaQueryParams) => toLink(AromaApiLink, queryParams);
export const useAromaLink = () => toAromaLink;

export const useAromaPromise = createPromiseHook<ISourceQuery<IAromaSource>, ISourceItem<IAromaSource>, IAromaQueryParams>(AromaApiLink, "post");
export const AromaPromise = createPromise<ISourceQuery<IAromaSource>, ISourceItem<IAromaSource>, IAromaQueryParams>(AromaApiLink, "post");

export interface IAromaFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaSource>>>> {
}

export const AromaFilterProvider: FC<IAromaFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaSource>>>();
export const useAromaFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaSource>>>();

export interface IAromaProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaSource>>> {
}

export const AromaProviderFilter: FC<IAromaProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Aroma"}
/>;

export interface IAromaOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaSource>>>> {
}

export const AromaOrderByProvider: FC<IAromaOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaSource>>> name={"Aroma"} {...props}/>;

export const useAromaOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaSource>>>();
export const useAromaOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaSource>>>();

export interface IAromaProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaSource>>, IQueryOrderBy<ISourceQuery<IAromaSource>>, IAromaQueryParams>> {
}

export const AromaProviderControl: FC<IAromaProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAromaSource>>, IQueryOrderBy<ISourceQuery<IAromaSource>>> name={"Aroma"} {...props}/>;

export interface IAromaListSourceProps extends Partial<IListProps<ISourceItem<IAromaSource>>> {
	providerProps?: Partial<IAromaProviderProps>;
}

export const AromaListSource: FC<IAromaListSourceProps> = ({providerProps, ...props}) => {
	return <AromaProvider
		{...providerProps}
	>
		<List<ISourceItem<IAromaSource>>
			{...props}
		/>
	</AromaProvider>;
}

export interface IAromaSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaSource>>;
	providerProps?: Partial<IAromaProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaSourceSelect: FC<IAromaSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaSource>> {...props}/>
				</AromaProvider>
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
					<AromaProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaSource>>> {
}

export const AromaSelectionProvider: FC<IAromaSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaSource>> {...props}/>;
};

export const useAromaQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaApiLink]);
};

export const useAromaCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaCountApiLink]);
};

export const useAromaOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaSource>>();
export const useAromaSelectionContext = () => useSelectionContext<ISourceItem<IAromaSource>>();
