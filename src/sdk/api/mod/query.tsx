/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModSource} from "@/puff-smith/service/mod/interface";
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

export const ModApiLink = "/api/mod/query";
export const ModCountApiLink = "/api/mod/query/count";

export type IModQueryParams = any;

export const useModQuery = createQueryHook<ISourceQuery<IModSource>, ISourceItem<IModSource>[], IModQueryParams>(ModApiLink, "post");
export const useModCountQuery = createQueryHook<ISourceQuery<IModSource>, number, IModQueryParams>(ModCountApiLink, "post");

export const useModSource = () => useSourceContext<ISourceItem<IModSource>>();

export interface IModSourceContext extends ISourceContext<ISourceItem<IModSource>> {
}

export interface IModSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IModSource>>> {
}

export const ModSourceConsumer: FC<IModSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModProviderProps extends Partial<ISourceProviderProps<ISourceItem<IModSource>>> {
}

export const ModProvider: FC<IModProviderProps> = props => {
	return <SourceProvider<ISourceItem<IModSource>>
		name={"Mod"}
		useQuery={useModQuery}
		useCountQuery={useModCountQuery}
		{...props}
	/>;
};

export const toModLink = (queryParams?: IModQueryParams) => toLink(ModApiLink, queryParams);
export const useModLink = () => toModLink;

export const useModPromise = createPromiseHook<ISourceQuery<IModSource>, ISourceItem<IModSource>, IModQueryParams>(ModApiLink, "post");
export const ModPromise = createPromise<ISourceQuery<IModSource>, ISourceItem<IModSource>, IModQueryParams>(ModApiLink, "post");

export interface IModFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IModSource>>>> {
}

export const ModFilterProvider: FC<IModFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IModSource>>> name={"Mod"} {...props}/>;

export const useModOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IModSource>>>();
export const useModFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IModSource>>>();

export interface IModProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IModSource>>> {
}

export const ModProviderFilter: FC<IModProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mod"}
/>;

export interface IModOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IModSource>>>> {
}

export const ModOrderByProvider: FC<IModOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IModSource>>> name={"Mod"} {...props}/>;

export const useModOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IModSource>>>();
export const useModOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IModSource>>>();

export interface IModProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IModSource>>, IQueryOrderBy<ISourceQuery<IModSource>>, IModQueryParams>> {
}

export const ModProviderControl: FC<IModProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IModSource>>, IQueryOrderBy<ISourceQuery<IModSource>>> name={"Mod"} {...props}/>;

export interface IModListSourceProps extends Partial<IListProps<ISourceItem<IModSource>>> {
	providerProps?: Partial<IModProviderProps>;
}

export const ModListSource: FC<IModListSourceProps> = ({providerProps, ...props}) => {
	return <ModProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IModSource>>
			{...props}
		/>
	</ModProvider>;
}

export interface IModSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IModSource>> {
	toOption: IToOptionMapper<ISourceItem<IModSource>>;
	providerProps?: Partial<IModProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModSourceSelect: FC<IModSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IModSource>> {...props}/>
				</ModProvider>
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
					<ModProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IModSource>>> {
}

export const ModSelectionProvider: FC<IModSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IModSource>> {...props}/>;
};

export const useModCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModCountApiLink]);
};

export const useModQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([ModApiLink]),
		withCount && queryClient.invalidateQueries([ModCountApiLink]),
	]);
};

export const useModOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IModSource>>();
export const useModSelectionContext = () => useSelectionContext<ISourceItem<IModSource>>();
