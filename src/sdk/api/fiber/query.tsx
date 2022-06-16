/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFiberSource} from "@/puff-smith/service/fiber/interface";
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

export const FiberApiLink = "/api/fiber/query";
export const FiberCountApiLink = "/api/fiber/query/count";

export type IFiberQueryParams = undefined;

export const useFiberQuery = createQueryHook<ISourceQuery<IFiberSource>, ISourceItem<IFiberSource>[], IFiberQueryParams>(FiberApiLink, "post");
export const useFiberCountQuery = createQueryHook<ISourceQuery<IFiberSource>, number, IFiberQueryParams>(FiberCountApiLink, "post");

export const useFiberSource = () => useSourceContext<ISourceItem<IFiberSource>>();

export interface IFiberSourceContext extends ISourceContext<ISourceItem<IFiberSource>> {
}

export interface IFiberSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IFiberSource>>> {
}

export const FiberSourceConsumer: FC<IFiberSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IFiberProviderProps extends Partial<ISourceProviderProps<ISourceItem<IFiberSource>>> {
}

export const FiberProvider: FC<IFiberProviderProps> = props => {
	return <SourceProvider<ISourceItem<IFiberSource>>
		name={"Fiber"}
		useQuery={useFiberQuery}
		useCountQuery={useFiberCountQuery}
		{...props}
	/>;
};

export const toFiberLink = (queryParams?: IFiberQueryParams) => toLink(FiberApiLink, queryParams);
export const useFiberLink = () => toFiberLink;

export const useFiberPromise = createPromiseHook<ISourceQuery<IFiberSource>, ISourceItem<IFiberSource>, IFiberQueryParams>(FiberApiLink, "post");
export const FiberPromise = createPromise<ISourceQuery<IFiberSource>, ISourceItem<IFiberSource>, IFiberQueryParams>(FiberApiLink, "post");

export interface IFiberFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IFiberSource>>>> {
}

export const FiberFilterProvider: FC<IFiberFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IFiberSource>>> name={"Fiber"} {...props}/>;

export const useFiberOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IFiberSource>>>();
export const useFiberFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IFiberSource>>>();

export interface IFiberProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IFiberSource>>> {
}

export const FiberProviderFilter: FC<IFiberProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Fiber"}
/>;

export interface IFiberOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IFiberSource>>>> {
}

export const FiberOrderByProvider: FC<IFiberOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IFiberSource>>> name={"Fiber"} {...props}/>;

export const useFiberOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IFiberSource>>>();
export const useFiberOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IFiberSource>>>();

export interface IFiberProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IFiberSource>>, IQueryOrderBy<ISourceQuery<IFiberSource>>, IFiberQueryParams>> {
}

export const FiberProviderControl: FC<IFiberProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IFiberSource>>, IQueryOrderBy<ISourceQuery<IFiberSource>>> name={"Fiber"} {...props}/>;

export interface IFiberListSourceProps extends Partial<IListProps<ISourceItem<IFiberSource>>> {
	providerProps?: Partial<IFiberProviderProps>;
}

export const FiberListSource: FC<IFiberListSourceProps> = ({providerProps, ...props}) => {
	return <FiberProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IFiberSource>>
			{...props}
		/>
	</FiberProvider>;
};

export interface IFiberSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IFiberSource>> {
	toOption: IToOptionMapper<ISourceItem<IFiberSource>>;
	providerProps?: Partial<IFiberProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const FiberSourceSelect: FC<IFiberSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<FiberProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IFiberSource>> {...props}/>
				</FiberProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Fiber.title"}
					size={props.size}
					tooltip={"common.selection.Fiber.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<FiberProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</FiberProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IFiberSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IFiberSource>>> {
}

export const FiberSelectionProvider: FC<IFiberSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IFiberSource>> {...props}/>;
};

export const useFiberQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([FiberApiLink]);
};

export const useFiberCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([FiberCountApiLink]);
};

export const useFiberOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IFiberSource>>();
export const useFiberSelectionContext = () => useSelectionContext<ISourceItem<IFiberSource>>();
