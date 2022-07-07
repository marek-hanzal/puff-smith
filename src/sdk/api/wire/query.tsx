/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireSource} from "@/puff-smith/service/wire/interface";
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
	IInfiniteListProps,
	IListProps,
	InfiniteList,
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

export const WireApiLink = "/api/wire/query";
export const WireCountApiLink = "/api/wire/query/count";

export type IWireQueryParams = any;

export const useWireQuery = createQueryHook<ISourceQuery<IWireSource>, ISourceItem<IWireSource>[], IWireQueryParams>(WireApiLink, "post");
export const useWireCountQuery = createQueryHook<ISourceQuery<IWireSource>, number, IWireQueryParams>(WireCountApiLink, "post");

export const useWireSource = () => useSourceContext<ISourceItem<IWireSource>>();

export interface IWireSourceContext extends ISourceContext<ISourceItem<IWireSource>> {
}

export interface IWireSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IWireSource>>> {
}

export const WireSourceConsumer: FC<IWireSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWireProviderProps extends Partial<ISourceProviderProps<ISourceItem<IWireSource>>> {
}

export const WireProvider: FC<IWireProviderProps> = props => {
	return <SourceProvider<ISourceItem<IWireSource>>
		name={"Wire"}
		useQuery={useWireQuery}
		useCountQuery={useWireCountQuery}
		{...props}
	/>;
};

export const toWireLink = (queryParams?: IWireQueryParams) => toLink(WireApiLink, queryParams);
export const useWireLink = () => toWireLink;

export const useWirePromise = createPromiseHook<ISourceQuery<IWireSource>, ISourceItem<IWireSource>, IWireQueryParams>(WireApiLink, "post");
export const WirePromise = createPromise<ISourceQuery<IWireSource>, ISourceItem<IWireSource>, IWireQueryParams>(WireApiLink, "post");

export interface IWireFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IWireSource>>>> {
}

export const WireFilterProvider: FC<IWireFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IWireSource>>> name={"Wire"} {...props}/>;

export const useWireOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IWireSource>>>();
export const useWireFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IWireSource>>>();

export interface IWireProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IWireSource>>> {
}

export const WireProviderFilter: FC<IWireProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Wire"}
/>;

export interface IWireOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IWireSource>>>> {
}

export const WireOrderByProvider: FC<IWireOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IWireSource>>> name={"Wire"} {...props}/>;

export const useWireOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IWireSource>>>();
export const useWireOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IWireSource>>>();

export interface IWireProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IWireSource>>, IQueryOrderBy<ISourceQuery<IWireSource>>, IWireQueryParams>> {
}

export const WireProviderControl: FC<IWireProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IWireSource>>, IQueryOrderBy<ISourceQuery<IWireSource>>> name={"Wire"} {...props}/>;

export interface IWireListSourceProps extends Partial<IListProps<ISourceItem<IWireSource>>> {
	providerProps?: Partial<IWireProviderProps>;
}

export const WireListSource: FC<IWireListSourceProps> = ({providerProps, ...props}) => {
	return <WireProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IWireSource>>
			{...props}
		/>
	</WireProvider>;
}

export interface IWireInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IWireSource>>> {
	providerProps?: Partial<IWireProviderProps>;
}

export const WireInfiniteListSource: FC<IWireInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <WireProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IWireSource>>
			{...props}
		/>
	</WireProvider>;
};

export interface IWireSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IWireSource>> {
	toOption: IToOptionMapper<ISourceItem<IWireSource>>;
	providerProps?: Partial<IWireProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WireSourceSelect: FC<IWireSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WireProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IWireSource>> {...props}/>
				</WireProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Wire.title"}
					size={props.size}
					tooltip={"common.selection.Wire.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<WireProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WireProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWireSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IWireSource>>> {
}

export const WireSelectionProvider: FC<IWireSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IWireSource>> {...props}/>;
}

export const useWireCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireCountApiLink]);
};

export const useWireQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([WireApiLink]),
		withCount && queryClient.invalidateQueries([WireCountApiLink]),
	]);
};

export const useWireOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IWireSource>>();
export const useWireSelectionContext = () => useSelectionContext<ISourceItem<IWireSource>>();
