/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireFiberSource} from "@/puff-smith/service/wire/fiber/interface";
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
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";

export const WireFiberApiLink = "/api/wire/fiber/query";
export const WireFiberCountApiLink = "/api/wire/fiber/query/count";

export type IWireFiberQueryParams = any;

export const useWireFiberQuery = createQueryHook<ISourceQuery<IWireFiberSource>, ISourceItem<IWireFiberSource>[], IWireFiberQueryParams>(WireFiberApiLink, "post");
export const useWireFiberCountQuery = createQueryHook<ISourceQuery<IWireFiberSource>, number, IWireFiberQueryParams>(WireFiberCountApiLink, "post");

export const useWireFiberSource = () => useSourceContext<ISourceItem<IWireFiberSource>>()

export interface IWireFiberSourceContext extends ISourceContext<ISourceItem<IWireFiberSource>> {
}

export interface IWireFiberSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IWireFiberSource>>> {
}

export const WireFiberSourceConsumer: FC<IWireFiberSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWireFiberProviderProps extends Partial<ISourceProviderProps<ISourceItem<IWireFiberSource>>> {
}

export const WireFiberProvider: FC<IWireFiberProviderProps> = props => {
	return <SourceProvider<ISourceItem<IWireFiberSource>>
		name={"WireFiber"}
		useQuery={useWireFiberQuery}
		useCountQuery={useWireFiberCountQuery}
		{...props}
	/>;
};

export const toWireFiberLink = (queryParams?: IWireFiberQueryParams) => toLink(WireFiberApiLink, queryParams);
export const useWireFiberLink = () => toWireFiberLink;

export const useWireFiberPromise = createPromiseHook<ISourceQuery<IWireFiberSource>, ISourceItem<IWireFiberSource>, IWireFiberQueryParams>(WireFiberApiLink, "post");
export const WireFiberPromise = createPromise<ISourceQuery<IWireFiberSource>, ISourceItem<IWireFiberSource>, IWireFiberQueryParams>(WireFiberApiLink, "post");

export interface IWireFiberFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IWireFiberSource>>>> {
}

export const WireFiberFilterProvider: FC<IWireFiberFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IWireFiberSource>>> name={"WireFiber"} {...props}/>;

export const useWireFiberOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IWireFiberSource>>>()
export const useWireFiberFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IWireFiberSource>>>()

export interface IWireFiberProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IWireFiberSource>>> {
}

export const WireFiberProviderFilter: FC<IWireFiberProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.WireFiber'}
/>;

export interface IWireFiberOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IWireFiberSource>>>> {
}

export const WireFiberOrderByProvider: FC<IWireFiberOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IWireFiberSource>>> name={"WireFiber"} {...props}/>;

export const useWireFiberOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IWireFiberSource>>>()
export const useWireFiberOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IWireFiberSource>>>()

export interface IWireFiberProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IWireFiberSource>>, IQueryOrderBy<ISourceQuery<IWireFiberSource>>, IWireFiberQueryParams>> {
}

export const WireFiberProviderControl: FC<IWireFiberProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IWireFiberSource>>, IQueryOrderBy<ISourceQuery<IWireFiberSource>>> name={"WireFiber"} {...props}/>;

export interface IWireFiberListSourceProps extends Partial<IListProps<ISourceItem<IWireFiberSource>>> {
	providerProps?: Partial<IWireFiberProviderProps>;
}

export const WireFiberListSource: FC<IWireFiberListSourceProps> = ({providerProps, ...props}) => {
	return <WireFiberProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IWireFiberSource>>
			{...props}
		/>
	</WireFiberProvider>;
}

export interface IWireFiberInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IWireFiberSource>>> {
	providerProps?: Partial<IWireFiberProviderProps>;
}

export const WireFiberInfiniteListSource: FC<IWireFiberInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <WireFiberProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IWireFiberSource>>
			{...props}
		/>
	</WireFiberProvider>;
}

export interface IWireFiberSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IWireFiberSource>> {
	toOption: IToOptionMapper<ISourceItem<IWireFiberSource>>;
	providerProps?: Partial<IWireFiberProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WireFiberSourceSelect: FC<IWireFiberSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WireFiberProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IWireFiberSource>> {...props}/>
				</WireFiberProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.WireFiber.title"}
					size={props.size}
					tooltip={"common.selection.WireFiber.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<WireFiberProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WireFiberProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWireFiberSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IWireFiberSource>>> {
}

export const WireFiberSelectionProvider: FC<IWireFiberSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IWireFiberSource>> {...props}/>
}

export const useWireFiberCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireFiberCountApiLink]);
};

export const useWireFiberQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([WireFiberApiLink]),
		withCount && queryClient.invalidateQueries([WireFiberCountApiLink]),
	]);
};

export const useWireFiberOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IWireFiberSource>>();
export const useWireFiberSelectionContext = () => useSelectionContext<ISourceItem<IWireFiberSource>>();
