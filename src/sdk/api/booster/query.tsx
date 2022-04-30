/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster/interface";
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

export const BoostersApiLink = "/api/booster/query";

export type IBoostersQueryParams = undefined;

export const useBoostersQuery = createQueryHook<IBoosterQuery, IQueryResult<IBooster>, IBoostersQueryParams>(BoostersApiLink, "post");

export const useBoostersSource = () => useSourceContext<IBooster>()

export interface IBoostersSourceContext extends ISourceContext<IBooster> {
}

export interface IBoostersSourceConsumerProps extends ConsumerProps<ISourceContext<IBooster>> {
}

export const BoostersSourceConsumer: FC<IBoostersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoostersSourceProps extends Partial<ISourceProviderProps<IBooster>> {
}

export const BoostersSource: FC<IBoostersSourceProps> = props => {
	return <SourceProvider<IBooster>
		name={"Boosters"}
		useQuery={useBoostersQuery}
		{...props}
	/>;
};

export const toBoostersLink = (queryParams?: IBoostersQueryParams) => toLink(BoostersApiLink, queryParams);
export const useBoostersLink = () => toBoostersLink;

export const useBoostersPromise = createPromiseHook<IBoosterQuery, IBooster, IBoostersQueryParams>(BoostersApiLink, "post");
export const BoostersPromise = createPromise<IBoosterQuery, IBooster, IBoostersQueryParams>(BoostersApiLink, "post");

export interface IBoostersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterQuery>>> {
}

export const BoostersFilterProvider: FC<IBoostersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterQuery>> name={"Boosters"} {...props}/>;

export const useBoostersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterQuery>>()
export const useBoostersFilterContext = () => useFilterContext<IQueryFilter<IBoosterQuery>>()

export interface IBoostersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterQuery>> {
}

export const BoostersSourceFilter: FC<IBoostersSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Boosters'}
/>;

export interface IBoostersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBoosterQuery>>> {
}

export const BoostersOrderByProvider: FC<IBoostersOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBoosterQuery>> name={"Boosters"} {...props}/>;

export const useBoostersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBoosterQuery>>()
export const useBoostersOrderByContext = () => useOrderByContext<IQueryOrderBy<IBoosterQuery>>()

export interface IBoostersListSourceProps extends Partial<IListProps<IBooster>> {
	sourceProps?: Partial<IBoostersSourceProps>;
}

export interface IBoostersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>, IBoostersQueryParams>> {
}

export const BoostersSourceControlProvider: FC<IBoostersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>> name={"Boosters"} {...props}/>;

export const BoostersListSource: FC<IBoostersListSourceProps> = ({sourceProps, ...props}) => {
	return <BoostersSource
		{...sourceProps}
	>
		<List<IBooster>
			{...props}
		/>
	</BoostersSource>;
}

export interface IBoostersSourceSelectProps extends IQuerySourceSelectProps<IBooster> {
	toOption: IToOptionMapper<IBooster>;
	sourceProps?: IBoostersSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BoostersSourceSelect: FC<IBoostersSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BoostersSource {...sourceProps}>
					<QuerySourceSelect<IBooster> {...props}/>
				</BoostersSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.Boosters.title"}
					size={props.size}
					tooltip={"common.selection.Boosters.title.tooltip"}
					width={800}
				>
					<BoostersSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BoostersSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useBoostersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoostersApiLink]);
};

export const useBoostersOptionalSelectionContext = () => useOptionalSelectionContext<IBooster>();
export const useBoostersSelectionContext = () => useSelectionContext<IBooster>();
