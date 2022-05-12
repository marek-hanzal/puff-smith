/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {SelectOutlined} from "@ant-design/icons";
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

export interface INicotineItem {
	label: string;
	value: number;
	nicotine: number;
}

export const NicotineApiLink = "/api/booster/nicotine/query";

export type INicotineQueryParams = undefined;

export const useNicotineQuery = createQueryHook<IBoosterQuery, IQueryResult<INicotineItem>, INicotineQueryParams>(NicotineApiLink, "post");

export const useNicotineSource = () => useSourceContext<INicotineItem>();

export interface INicotineSourceContext extends ISourceContext<INicotineItem> {
}

export interface INicotineSourceConsumerProps extends ConsumerProps<ISourceContext<INicotineItem>> {
}

export const NicotineSourceConsumer: FC<INicotineSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface INicotineSourceProps extends Partial<ISourceProviderProps<INicotineItem>> {
}

export const NicotineSource: FC<INicotineSourceProps> = props => {
	return <SourceProvider<INicotineItem>
		name={"Nicotine"}
		useQuery={useNicotineQuery}
		{...props}
	/>;
};

export const toNicotineLink = (queryParams?: INicotineQueryParams) => toLink(NicotineApiLink, queryParams);
export const useNicotineLink = () => toNicotineLink;

export const useNicotinePromise = createPromiseHook<IBoosterQuery, INicotineItem, INicotineQueryParams>(NicotineApiLink, "post");
export const NicotinePromise = createPromise<IBoosterQuery, INicotineItem, INicotineQueryParams>(NicotineApiLink, "post");

export interface INicotineFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterQuery>>> {
}

export const NicotineFilterProvider: FC<INicotineFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterQuery>> name={"Nicotine"} {...props}/>;

export const useNicotineOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterQuery>>();
export const useNicotineFilterContext = () => useFilterContext<IQueryFilter<IBoosterQuery>>();

export interface INicotineSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterQuery>> {
}

export const NicotineSourceFilter: FC<INicotineSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Nicotine"}
/>;

export interface INicotineOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterQuery>>> {
}

export const NicotineOrderByProvider: FC<INicotineOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterQuery>> name={"Nicotine"} {...props}/>;

export const useNicotineOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterQuery>>();
export const useNicotineOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterQuery>>();

export interface INicotineListSourceProps extends Partial<IListProps<INicotineItem>> {
	sourceProps?: Partial<INicotineSourceProps>;
}

export interface INicotineSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>, INicotineQueryParams>> {
}

export const NicotineSourceControlProvider: FC<INicotineSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>> name={"Nicotine"} {...props}/>;

export const NicotineListSource: FC<INicotineListSourceProps> = ({sourceProps, ...props}) => {
	return <NicotineSource
		{...sourceProps}
	>
		<List<INicotineItem>
			{...props}
		/>
	</NicotineSource>;
}

export interface INicotineSourceSelectProps extends IQuerySourceSelectProps<INicotineItem> {
	toOption: IToOptionMapper<INicotineItem>;
	sourceProps?: INicotineSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const NicotineSourceSelect: FC<INicotineSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<NicotineSource {...sourceProps}>
					<QuerySourceSelect<INicotineItem> {...props}/>
				</NicotineSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Nicotine.title"}
					size={props.size}
					tooltip={"common.selection.Nicotine.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<NicotineSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</NicotineSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface INicotineSelectionProviderProps extends Partial<ISelectionProviderProps<INicotineItem>> {
}

export const NicotineSelectionProvider: FC<INicotineSelectionProviderProps> = props => {
	return <SelectionProvider<INicotineItem> {...props}/>;
}

export const useNicotineQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([NicotineApiLink]);
};

export const useNicotineOptionalSelectionContext = () => useOptionalSelectionContext<INicotineItem>();
export const useNicotineSelectionContext = () => useSelectionContext<INicotineItem>();
