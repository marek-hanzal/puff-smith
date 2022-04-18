/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMod, IModQuery} from "@/puff-smith/service/mod";
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

export const ModsApiLink = "/api/mod/query";

export type IModsQueryParams = undefined;

export const useModsQuery = createQueryHook<IModQuery, IQueryResult<IMod>, IModsQueryParams>(ModsApiLink, "post");

export const useModsSource = () => useSourceContext<IMod>();

export interface IModsSourceContext extends ISourceContext<IMod> {
}

export interface IModsSourceConsumerProps extends ConsumerProps<ISourceContext<IMod>> {
}

export const ModsSourceConsumer: FC<IModsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModsSourceProps extends Partial<ISourceProviderProps<IMod>> {
}

export const ModsSource: FC<IModsSourceProps> = props => {
	return <SourceProvider<IMod>
		name={"Mods"}
		useQuery={useModsQuery}
		{...props}
	/>;
}

export const toModsLink = (queryParams?: IModsQueryParams) => toLink(ModsApiLink, queryParams);
export const useModsLink = () => toModsLink;

export const useModsPromise = createPromiseHook<IModQuery, IMod, IModsQueryParams>(ModsApiLink, "post");
export const ModsPromise = createPromise<IModQuery, IMod, IModsQueryParams>(ModsApiLink, "post");

export interface IModsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModQuery>>> {
}

export const ModsFilterProvider: FC<IModsFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModQuery>> name={"Mods"} {...props}/>;

export const useModsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModQuery>>();
export const useModsFilterContext = () => useFilterContext<IQueryFilter<IModQuery>>();

export interface IModsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModQuery>> {
}

export const ModsSourceFilter: FC<IModsSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mods"}
/>;

export interface IModsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IModQuery>>> {
}

export const ModsOrderByProvider: FC<IModsOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IModQuery>> name={"Mods"} {...props}/>;

export const useModsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IModQuery>>();
export const useModsOrderByContext = () => useOrderByContext<IQueryOrderBy<IModQuery>>();

export interface IModsListSourceProps extends Partial<IListProps<IMod>> {
	sourceProps?: Partial<IModsSourceProps>;
}

export interface IModsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModQuery>, IQueryOrderBy<IModQuery>, IModsQueryParams>> {
}

export const ModsSourceControlProvider: FC<IModsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModQuery>, IQueryOrderBy<IModQuery>> name={"Mods"} {...props}/>;

export const ModsListSource: FC<IModsListSourceProps> = ({sourceProps, ...props}) => {
	return <ModsSource
		{...sourceProps}
	>
		<List<IMod>
			{...props}
		/>
	</ModsSource>
}

export interface IModsSourceSelectProps extends IQuerySourceSelectProps<IMod> {
	toOption: IToOptionMapper<IMod>;
	sourceProps?: IModsSourceProps;
	selectionList?: () => ReactNode;
	withTranslation?: string;
}

export const ModsSourceSelect: FC<IModsSourceSelectProps> = ({sourceProps, selectionList, withTranslation, ...props}) => {
	return <Input.Group>
		<Row gutter={8}>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					type={"text"}
					icon={<ReadOutlined/>}
					title={`${withTranslation}.select.title`}
					tooltip={`${withTranslation}.select.title.tooltip`}
					width={800}
				>
					<ModsSourceControlProvider>
						<SelectionProvider type={"single"}>
							{selectionList()}
						</SelectionProvider>
					</ModsSourceControlProvider>
				</DrawerButton>}
			</Col>
			<Col flex={"auto"}>
				<ModsSource {...sourceProps}>
					<QuerySourceSelect<IMod> {...props}/>
				</ModsSource>
			</Col>
		</Row>
	</Input.Group>;
};

export const useModsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModsApiLink]);
};

export const useModsOptionalSelectionContext = () => useOptionalSelectionContext<IMod>();
export const useModsSelectionContext = () => useSelectionContext<IMod>();
