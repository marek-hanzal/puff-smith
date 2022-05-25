/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterSource} from "@/puff-smith/service/booster/interface";
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

export const BoosterApiLink = "/api/booster/query";

export type IBoosterQueryParams = undefined;

export const useBoosterQuery = createQueryHook<ISourceQuery<IBoosterSource>, ISourceItem<IBoosterSource>[], IBoosterQueryParams>(BoosterApiLink, "post");

export const useBoosterSource = () => useSourceContext<ISourceItem<IBoosterSource>>();

export interface IBoosterSourceContext extends ISourceContext<ISourceItem<IBoosterSource>> {
}

export interface IBoosterSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IBoosterSource>>> {
}

export const BoosterSourceConsumer: FC<IBoosterSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterProviderProps extends Partial<ISourceProviderProps<ISourceItem<IBoosterSource>>> {
}

export const BoosterProvider: FC<IBoosterProviderProps> = props => {
	return <SourceProvider<ISourceItem<IBoosterSource>>
		name={"Booster"}
		useQuery={useBoosterQuery}
		{...props}
	/>;
};

export const toBoosterLink = (queryParams?: IBoosterQueryParams) => toLink(BoosterApiLink, queryParams);
export const useBoosterLink = () => toBoosterLink;

export const useBoosterPromise = createPromiseHook<ISourceQuery<IBoosterSource>, ISourceItem<IBoosterSource>, IBoosterQueryParams>(BoosterApiLink, "post");
export const BoosterPromise = createPromise<ISourceQuery<IBoosterSource>, ISourceItem<IBoosterSource>, IBoosterQueryParams>(BoosterApiLink, "post");

export interface IBoosterFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IBoosterSource>>>> {
}

export const BoosterFilterProvider: FC<IBoosterFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IBoosterSource>>> name={"Booster"} {...props}/>;

export const useBoosterOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IBoosterSource>>>();
export const useBoosterFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IBoosterSource>>>();

export interface IBoosterProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IBoosterSource>>> {
}

export const BoosterProviderFilter: FC<IBoosterProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Booster"}
/>;

export interface IBoosterOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IBoosterSource>>>> {
}

export const BoosterOrderByProvider: FC<IBoosterOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IBoosterSource>>> name={"Booster"} {...props}/>;

export const useBoosterOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterSource>>>();
export const useBoosterOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IBoosterSource>>>();

export interface IBoosterProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IBoosterSource>>, IQueryOrderBy<ISourceQuery<IBoosterSource>>, IBoosterQueryParams>> {
}

export const BoosterProviderControl: FC<IBoosterProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IBoosterSource>>, IQueryOrderBy<ISourceQuery<IBoosterSource>>> name={"Booster"} {...props}/>;

export interface IBoosterListSourceProps extends Partial<IListProps<ISourceItem<IBoosterSource>>> {
	providerProps?: Partial<IBoosterProviderProps>;
}

export const BoosterListSource: FC<IBoosterListSourceProps> = ({providerProps, ...props}) => {
	return <BoosterProvider
		{...providerProps}
	>
		<List<ISourceItem<IBoosterSource>>
			{...props}
		/>
	</BoosterProvider>;
}

export interface IBoosterSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IBoosterSource>> {
	toOption: IToOptionMapper<ISourceItem<IBoosterSource>>;
	providerProps?: Partial<IBoosterProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterSourceSelect: FC<IBoosterSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IBoosterSource>> {...props}/>
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

export interface IBoosterSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IBoosterSource>>> {
}

export const BoosterSelectionProvider: FC<IBoosterSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IBoosterSource>> {...props}/>;
}

export const useBoosterQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterApiLink]);
};

export const useBoosterOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IBoosterSource>>();
export const useBoosterSelectionContext = () => useSelectionContext<ISourceItem<IBoosterSource>>();
