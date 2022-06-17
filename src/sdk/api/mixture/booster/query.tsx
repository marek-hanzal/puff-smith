/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureBoosterSource} from "@/puff-smith/service/mixture/booster/interface";
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

export const BoosterApiLink = "/api/mixture/booster/query";
export const BoosterCountApiLink = "/api/mixture/booster/query/count";

export type IBoosterQueryParams = any;

export const useBoosterQuery = createQueryHook<ISourceQuery<IMixtureBoosterSource>, ISourceItem<IMixtureBoosterSource>[], IBoosterQueryParams>(BoosterApiLink, "post");
export const useBoosterCountQuery = createQueryHook<ISourceQuery<IMixtureBoosterSource>, number, IBoosterQueryParams>(BoosterCountApiLink, "post");

export const useBoosterSource = () => useSourceContext<ISourceItem<IMixtureBoosterSource>>();

export interface IBoosterSourceContext extends ISourceContext<ISourceItem<IMixtureBoosterSource>> {
}

export interface IBoosterSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureBoosterSource>>> {
}

export const BoosterSourceConsumer: FC<IBoosterSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoosterProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureBoosterSource>>> {
}

export const BoosterProvider: FC<IBoosterProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureBoosterSource>>
		name={"Booster"}
		useQuery={useBoosterQuery}
		useCountQuery={useBoosterCountQuery}
		{...props}
	/>;
};

export const toBoosterLink = (queryParams?: IBoosterQueryParams) => toLink(BoosterApiLink, queryParams);
export const useBoosterLink = () => toBoosterLink;

export const useBoosterPromise = createPromiseHook<ISourceQuery<IMixtureBoosterSource>, ISourceItem<IMixtureBoosterSource>, IBoosterQueryParams>(BoosterApiLink, "post");
export const BoosterPromise = createPromise<ISourceQuery<IMixtureBoosterSource>, ISourceItem<IMixtureBoosterSource>, IBoosterQueryParams>(BoosterApiLink, "post");

export interface IBoosterFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureBoosterSource>>>> {
}

export const BoosterFilterProvider: FC<IBoosterFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureBoosterSource>>> name={"Booster"} {...props}/>;

export const useBoosterOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureBoosterSource>>>();
export const useBoosterFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureBoosterSource>>>();

export interface IBoosterProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureBoosterSource>>> {
}

export const BoosterProviderFilter: FC<IBoosterProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Booster"}
/>;

export interface IBoosterOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureBoosterSource>>>> {
}

export const BoosterOrderByProvider: FC<IBoosterOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureBoosterSource>>> name={"Booster"} {...props}/>;

export const useBoosterOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureBoosterSource>>>();
export const useBoosterOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureBoosterSource>>>();

export interface IBoosterProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureBoosterSource>>, IQueryOrderBy<ISourceQuery<IMixtureBoosterSource>>, IBoosterQueryParams>> {
}

export const BoosterProviderControl: FC<IBoosterProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureBoosterSource>>, IQueryOrderBy<ISourceQuery<IMixtureBoosterSource>>> name={"Booster"} {...props}/>;

export interface IBoosterListSourceProps extends Partial<IListProps<ISourceItem<IMixtureBoosterSource>>> {
	providerProps?: Partial<IBoosterProviderProps>;
}

export const BoosterListSource: FC<IBoosterListSourceProps> = ({providerProps, ...props}) => {
	return <BoosterProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IMixtureBoosterSource>>
			{...props}
		/>
	</BoosterProvider>;
}

export interface IBoosterSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureBoosterSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureBoosterSource>>;
	providerProps?: Partial<IBoosterProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoosterSourceSelect: FC<IBoosterSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoosterProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureBoosterSource>> {...props}/>
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

export interface IBoosterSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureBoosterSource>>> {
}

export const BoosterSelectionProvider: FC<IBoosterSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureBoosterSource>> {...props}/>;
}

export const useBoosterQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterApiLink]);
};

export const useBoosterCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterCountApiLink]);
};

export const useBoosterOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureBoosterSource>>();
export const useBoosterSelectionContext = () => useSelectionContext<ISourceItem<IMixtureBoosterSource>>();
