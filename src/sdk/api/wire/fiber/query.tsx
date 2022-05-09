/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFiber} from "@/puff-smith/service/fiber/interface";
import {IWireQuery} from "@/puff-smith/service/wire/interface";
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

export const FiberApiLink = "/api/wire/fiber/query";

export type IFiberQueryParams = undefined;

export const useFiberQuery = createQueryHook<IWireQuery, IQueryResult<IFiber>, IFiberQueryParams>(FiberApiLink, "post");

export const useFiberSource = () => useSourceContext<IFiber>();

export interface IFiberSourceContext extends ISourceContext<IFiber> {
}

export interface IFiberSourceConsumerProps extends ConsumerProps<ISourceContext<IFiber>> {
}

export const FiberSourceConsumer: FC<IFiberSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IFiberSourceProps extends Partial<ISourceProviderProps<IFiber>> {
}

export const FiberSource: FC<IFiberSourceProps> = props => {
	return <SourceProvider<IFiber>
		name={"Fiber"}
		useQuery={useFiberQuery}
		{...props}
	/>;
};

export const toFiberLink = (queryParams?: IFiberQueryParams) => toLink(FiberApiLink, queryParams);
export const useFiberLink = () => toFiberLink;

export const useFiberPromise = createPromiseHook<IWireQuery, IFiber, IFiberQueryParams>(FiberApiLink, "post");
export const FiberPromise = createPromise<IWireQuery, IFiber, IFiberQueryParams>(FiberApiLink, "post");

export interface IFiberFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IWireQuery>>> {
}

export const FiberFilterProvider: FC<IFiberFilterProviderProps> = props => <FilterProvider<IQueryFilter<IWireQuery>> name={"Fiber"} {...props}/>;

export const useFiberOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IWireQuery>>();
export const useFiberFilterContext = () => useFilterContext<IQueryFilter<IWireQuery>>();

export interface IFiberSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IWireQuery>> {
}

export const FiberSourceFilter: FC<IFiberSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Fiber"}
/>;

export interface IFiberOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IWireQuery>>> {
}

export const FiberOrderByProvider: FC<IFiberOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IWireQuery>> name={"Fiber"} {...props}/>;

export const useFiberOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IWireQuery>>();
export const useFiberOrderByContext = () => useOrderByContext<IQueryOrderBy<IWireQuery>>();

export interface IFiberListSourceProps extends Partial<IListProps<IFiber>> {
	sourceProps?: Partial<IFiberSourceProps>;
}

export interface IFiberSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IWireQuery>, IQueryOrderBy<IWireQuery>, IFiberQueryParams>> {
}

export const FiberSourceControlProvider: FC<IFiberSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IWireQuery>, IQueryOrderBy<IWireQuery>> name={"Fiber"} {...props}/>;

export const FiberListSource: FC<IFiberListSourceProps> = ({sourceProps, ...props}) => {
	return <FiberSource
		{...sourceProps}
	>
		<List<IFiber>
			{...props}
		/>
	</FiberSource>;
};

export interface IFiberSourceSelectProps extends IQuerySourceSelectProps<IFiber> {
	toOption: IToOptionMapper<IFiber>;
	sourceProps?: IFiberSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const FiberSourceSelect: FC<IFiberSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<FiberSource {...sourceProps}>
					<QuerySourceSelect<IFiber> {...props}/>
				</FiberSource>
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
					<FiberSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</FiberSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IFiberSelectionProviderProps extends Partial<ISelectionProviderProps<IFiber>> {
}

export const FiberSelectionProvider: FC<IFiberSelectionProviderProps> = props => {
	return <SelectionProvider<IFiber> {...props}/>;
};

export const useFiberQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([FiberApiLink]);
};

export const useFiberOptionalSelectionContext = () => useOptionalSelectionContext<IFiber>();
export const useFiberSelectionContext = () => useSelectionContext<IFiber>();
