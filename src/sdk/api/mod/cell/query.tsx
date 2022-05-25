/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModCellSource} from "@/puff-smith/service/mod/cell/interface";
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

export const ModCellApiLink = "/api/mod/cell/query";

export type IModCellQueryParams = undefined;

export const useModCellQuery = createQueryHook<ISourceQuery<IModCellSource>, ISourceItem<IModCellSource>[], IModCellQueryParams>(ModCellApiLink, "post");

export const useModCellSource = () => useSourceContext<ISourceItem<IModCellSource>>();

export interface IModCellSourceContext extends ISourceContext<ISourceItem<IModCellSource>> {
}

export interface IModCellSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IModCellSource>>> {
}

export const ModCellSourceConsumer: FC<IModCellSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IModCellProviderProps extends Partial<ISourceProviderProps<ISourceItem<IModCellSource>>> {
}

export const ModCellProvider: FC<IModCellProviderProps> = props => {
	return <SourceProvider<ISourceItem<IModCellSource>>
		name={"ModCell"}
		useQuery={useModCellQuery}
		{...props}
	/>;
};

export const toModCellLink = (queryParams?: IModCellQueryParams) => toLink(ModCellApiLink, queryParams);
export const useModCellLink = () => toModCellLink;

export const useModCellPromise = createPromiseHook<ISourceQuery<IModCellSource>, ISourceItem<IModCellSource>, IModCellQueryParams>(ModCellApiLink, "post");
export const ModCellPromise = createPromise<ISourceQuery<IModCellSource>, ISourceItem<IModCellSource>, IModCellQueryParams>(ModCellApiLink, "post");

export interface IModCellFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IModCellSource>>>> {
}

export const ModCellFilterProvider: FC<IModCellFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IModCellSource>>> name={"ModCell"} {...props}/>;

export const useModCellOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IModCellSource>>>();
export const useModCellFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IModCellSource>>>();

export interface IModCellProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IModCellSource>>> {
}

export const ModCellProviderFilter: FC<IModCellProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.ModCell"}
/>;

export interface IModCellOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IModCellSource>>>> {
}

export const ModCellOrderByProvider: FC<IModCellOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IModCellSource>>> name={"ModCell"} {...props}/>;

export const useModCellOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IModCellSource>>>();
export const useModCellOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IModCellSource>>>();

export interface IModCellProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IModCellSource>>, IQueryOrderBy<ISourceQuery<IModCellSource>>, IModCellQueryParams>> {
}

export const ModCellProviderControl: FC<IModCellProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IModCellSource>>, IQueryOrderBy<ISourceQuery<IModCellSource>>> name={"ModCell"} {...props}/>;

export interface IModCellListSourceProps extends Partial<IListProps<ISourceItem<IModCellSource>>> {
	providerProps?: Partial<IModCellProviderProps>;
}

export const ModCellListSource: FC<IModCellListSourceProps> = ({providerProps, ...props}) => {
	return <ModCellProvider
		{...providerProps}
	>
		<List<ISourceItem<IModCellSource>>
			{...props}
		/>
	</ModCellProvider>;
};

export interface IModCellSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IModCellSource>> {
	toOption: IToOptionMapper<ISourceItem<IModCellSource>>;
	providerProps?: Partial<IModCellProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const ModCellSourceSelect: FC<IModCellSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<ModCellProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IModCellSource>> {...props}/>
				</ModCellProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.ModCell.title"}
					size={props.size}
					tooltip={"common.selection.ModCell.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<ModCellProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</ModCellProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IModCellSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IModCellSource>>> {
}

export const ModCellSelectionProvider: FC<IModCellSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IModCellSource>> {...props}/>;
};

export const useModCellQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModCellApiLink]);
};

export const useModCellOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IModCellSource>>();
export const useModCellSelectionContext = () => useSelectionContext<ISourceItem<IModCellSource>>();
