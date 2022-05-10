/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMod, IModQuery} from "@/puff-smith/service/mod/interface";
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

export const ModApiLink = "/api/mod/query";

export type IModQueryParams = undefined;

export const useModQuery = createQueryHook<IModQuery, IQueryResult<IMod>, IModQueryParams>(ModApiLink, "post");

export const useModSource = () => useSourceContext<IMod>();

export interface IModSourceContext extends ISourceContext<IMod> {
}

export interface IModSourceConsumerProps extends ConsumerProps<ISourceContext<IMod>> {
}

export const ModSourceConsumer: FC<IModSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModSourceProps extends Partial<ISourceProviderProps<IMod>> {
}

export const ModSource: FC<IModSourceProps> = props => {
	return <SourceProvider<IMod>
		name={"Mod"}
		useQuery={useModQuery}
		{...props}
	/>;
};

export const toModLink = (queryParams?: IModQueryParams) => toLink(ModApiLink, queryParams);
export const useModLink = () => toModLink;

export const useModPromise = createPromiseHook<IModQuery, IMod, IModQueryParams>(ModApiLink, "post");
export const ModPromise = createPromise<IModQuery, IMod, IModQueryParams>(ModApiLink, "post");

export interface IModFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IModQuery>>> {
}

export const ModFilterProvider: FC<IModFilterProviderProps> = props => <FilterProvider<IQueryFilter<IModQuery>> name={"Mod"} {...props}/>;

export const useModOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IModQuery>>();
export const useModFilterContext = () => useFilterContext<IQueryFilter<IModQuery>>();

export interface IModSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IModQuery>> {
}

export const ModSourceFilter: FC<IModSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mod"}
/>;

export interface IModOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IModQuery>>> {
}

export const ModOrderByProvider: FC<IModOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IModQuery>> name={"Mod"} {...props}/>;

export const useModOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IModQuery>>();
export const useModOrderByContext = () => useOrderByContext<IQueryOrderBy<IModQuery>>();

export interface IModListSourceProps extends Partial<IListProps<IMod>> {
	sourceProps?: Partial<IModSourceProps>;
}

export interface IModSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IModQuery>, IQueryOrderBy<IModQuery>, IModQueryParams>> {
}

export const ModSourceControlProvider: FC<IModSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IModQuery>, IQueryOrderBy<IModQuery>> name={"Mod"} {...props}/>;

export const ModListSource: FC<IModListSourceProps> = ({sourceProps, ...props}) => {
	return <ModSource
		{...sourceProps}
	>
		<List<IMod>
			{...props}
		/>
	</ModSource>;
};

export interface IModSourceSelectProps extends IQuerySourceSelectProps<IMod> {
	toOption: IToOptionMapper<IMod>;
	sourceProps?: IModSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModSourceSelect: FC<IModSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModSource {...sourceProps}>
					<QuerySourceSelect<IMod> {...props}/>
				</ModSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Mod.title"}
					size={props.size}
					tooltip={"common.selection.Mod.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<ModSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModSelectionProviderProps extends Partial<ISelectionProviderProps<IMod>> {
}

export const ModSelectionProvider: FC<IModSelectionProviderProps> = props => {
	return <SelectionProvider<IMod> {...props}/>;
};

export const useModQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModApiLink]);
};

export const useModOptionalSelectionContext = () => useOptionalSelectionContext<IMod>();
export const useModSelectionContext = () => useSelectionContext<IMod>();
