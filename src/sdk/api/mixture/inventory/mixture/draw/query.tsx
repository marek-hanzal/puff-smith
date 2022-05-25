/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureDrawSource} from "@/puff-smith/service/mixture/draw/interface";
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

export const DrawApiLink = "/api/mixture/inventory/mixture/draw/query";

export type IDrawQueryParams = undefined;

export const useDrawQuery = createQueryHook<ISourceQuery<IMixtureDrawSource>, ISourceItem<IMixtureDrawSource>[], IDrawQueryParams>(DrawApiLink, "post");

export const useDrawSource = () => useSourceContext<ISourceItem<IMixtureDrawSource>>();

export interface IDrawSourceContext extends ISourceContext<ISourceItem<IMixtureDrawSource>> {
}

export interface IDrawSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IMixtureDrawSource>>> {
}

export const DrawSourceConsumer: FC<IDrawSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IDrawProviderProps extends Partial<ISourceProviderProps<ISourceItem<IMixtureDrawSource>>> {
}

export const DrawProvider: FC<IDrawProviderProps> = props => {
	return <SourceProvider<ISourceItem<IMixtureDrawSource>>
		name={"Draw"}
		useQuery={useDrawQuery}
		{...props}
	/>;
};

export const toDrawLink = (queryParams?: IDrawQueryParams) => toLink(DrawApiLink, queryParams);
export const useDrawLink = () => toDrawLink;

export const useDrawPromise = createPromiseHook<ISourceQuery<IMixtureDrawSource>, ISourceItem<IMixtureDrawSource>, IDrawQueryParams>(DrawApiLink, "post");
export const DrawPromise = createPromise<ISourceQuery<IMixtureDrawSource>, ISourceItem<IMixtureDrawSource>, IDrawQueryParams>(DrawApiLink, "post");

export interface IDrawFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IMixtureDrawSource>>>> {
}

export const DrawFilterProvider: FC<IDrawFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IMixtureDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IMixtureDrawSource>>>();
export const useDrawFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IMixtureDrawSource>>>();

export interface IDrawProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IMixtureDrawSource>>> {
}

export const DrawProviderFilter: FC<IDrawProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Draw"}
/>;

export interface IDrawOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IMixtureDrawSource>>>> {
}

export const DrawOrderByProvider: FC<IDrawOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IMixtureDrawSource>>> name={"Draw"} {...props}/>;

export const useDrawOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureDrawSource>>>();
export const useDrawOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IMixtureDrawSource>>>();

export interface IDrawProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IMixtureDrawSource>>, IQueryOrderBy<ISourceQuery<IMixtureDrawSource>>, IDrawQueryParams>> {
}

export const DrawProviderControl: FC<IDrawProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IMixtureDrawSource>>, IQueryOrderBy<ISourceQuery<IMixtureDrawSource>>> name={"Draw"} {...props}/>;

export interface IDrawListSourceProps extends Partial<IListProps<ISourceItem<IMixtureDrawSource>>> {
	providerProps?: Partial<IDrawProviderProps>;
}

export const DrawListSource: FC<IDrawListSourceProps> = ({providerProps, ...props}) => {
	return <DrawProvider
		{...providerProps}
	>
		<List<ISourceItem<IMixtureDrawSource>>
			{...props}
		/>
	</DrawProvider>;
}

export interface IDrawSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IMixtureDrawSource>> {
	toOption: IToOptionMapper<ISourceItem<IMixtureDrawSource>>;
	providerProps?: Partial<IDrawProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const DrawSourceSelect: FC<IDrawSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<DrawProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IMixtureDrawSource>> {...props}/>
				</DrawProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Draw.title"}
					size={props.size}
					tooltip={"common.selection.Draw.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<DrawProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</DrawProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IDrawSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IMixtureDrawSource>>> {
}

export const DrawSelectionProvider: FC<IDrawSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IMixtureDrawSource>> {...props}/>;
}

export const useDrawQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DrawApiLink]);
};

export const useDrawOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IMixtureDrawSource>>();
export const useDrawSelectionContext = () => useSelectionContext<ISourceItem<IMixtureDrawSource>>();
