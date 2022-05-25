/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
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

export const AtomizerApiLink = "/api/atomizer/query";

export type IAtomizerQueryParams = undefined;

export const useAtomizerQuery = createQueryHook<ISourceQuery<IAtomizerSource>, ISourceItem<IAtomizerSource>[], IAtomizerQueryParams>(AtomizerApiLink, "post");

export const useAtomizerSource = () => useSourceContext<ISourceItem<IAtomizerSource>>();

export interface IAtomizerSourceContext extends ISourceContext<ISourceItem<IAtomizerSource>> {
}

export interface IAtomizerSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAtomizerSource>>> {
}

export const AtomizerSourceConsumer: FC<IAtomizerSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAtomizerSource>>> {
}

export const AtomizerProvider: FC<IAtomizerProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAtomizerSource>>
		name={"Atomizer"}
		useQuery={useAtomizerQuery}
		{...props}
	/>;
};

export const toAtomizerLink = (queryParams?: IAtomizerQueryParams) => toLink(AtomizerApiLink, queryParams);
export const useAtomizerLink = () => toAtomizerLink;

export const useAtomizerPromise = createPromiseHook<ISourceQuery<IAtomizerSource>, ISourceItem<IAtomizerSource>, IAtomizerQueryParams>(AtomizerApiLink, "post");
export const AtomizerPromise = createPromise<ISourceQuery<IAtomizerSource>, ISourceItem<IAtomizerSource>, IAtomizerQueryParams>(AtomizerApiLink, "post");

export interface IAtomizerFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAtomizerSource>>>> {
}

export const AtomizerFilterProvider: FC<IAtomizerFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAtomizerSource>>> name={"Atomizer"} {...props}/>;

export const useAtomizerOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAtomizerSource>>>();
export const useAtomizerFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAtomizerSource>>>();

export interface IAtomizerProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAtomizerSource>>> {
}

export const AtomizerProviderFilter: FC<IAtomizerProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Atomizer"}
/>;

export interface IAtomizerOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAtomizerSource>>>> {
}

export const AtomizerOrderByProvider: FC<IAtomizerOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAtomizerSource>>> name={"Atomizer"} {...props}/>;

export const useAtomizerOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerSource>>>();
export const useAtomizerOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAtomizerSource>>>();

export interface IAtomizerProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAtomizerSource>>, IQueryOrderBy<ISourceQuery<IAtomizerSource>>, IAtomizerQueryParams>> {
}

export const AtomizerProviderControl: FC<IAtomizerProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAtomizerSource>>, IQueryOrderBy<ISourceQuery<IAtomizerSource>>> name={"Atomizer"} {...props}/>;

export interface IAtomizerListSourceProps extends Partial<IListProps<ISourceItem<IAtomizerSource>>> {
	providerProps?: Partial<IAtomizerProviderProps>;
}

export const AtomizerListSource: FC<IAtomizerListSourceProps> = ({providerProps, ...props}) => {
	return <AtomizerProvider
		{...providerProps}
	>
		<List<ISourceItem<IAtomizerSource>>
			{...props}
		/>
	</AtomizerProvider>;
};

export interface IAtomizerSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAtomizerSource>> {
	toOption: IToOptionMapper<ISourceItem<IAtomizerSource>>;
	providerProps?: Partial<IAtomizerProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerSourceSelect: FC<IAtomizerSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAtomizerSource>> {...props}/>
				</AtomizerProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Atomizer.title"}
					size={props.size}
					tooltip={"common.selection.Atomizer.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AtomizerProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAtomizerSource>>> {
}

export const AtomizerSelectionProvider: FC<IAtomizerSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAtomizerSource>> {...props}/>;
};

export const useAtomizerQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerApiLink]);
};

export const useAtomizerOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAtomizerSource>>();
export const useAtomizerSelectionContext = () => useSelectionContext<ISourceItem<IAtomizerSource>>();
