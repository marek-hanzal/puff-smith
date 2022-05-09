/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWire, IWireQuery} from "@/puff-smith/service/wire/interface";
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

export const WiresApiLink = "/api/wire/query";

export type IWiresQueryParams = undefined;

export const useWiresQuery = createQueryHook<IWireQuery, IQueryResult<IWire>, IWiresQueryParams>(WiresApiLink, "post");

export const useWiresSource = () => useSourceContext<IWire>();

export interface IWiresSourceContext extends ISourceContext<IWire> {
}

export interface IWiresSourceConsumerProps extends ConsumerProps<ISourceContext<IWire>> {
}

export const WiresSourceConsumer: FC<IWiresSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWiresSourceProps extends Partial<ISourceProviderProps<IWire>> {
}

export const WiresSource: FC<IWiresSourceProps> = props => {
	return <SourceProvider<IWire>
		name={"Wires"}
		useQuery={useWiresQuery}
		{...props}
	/>;
};

export const toWiresLink = (queryParams?: IWiresQueryParams) => toLink(WiresApiLink, queryParams);
export const useWiresLink = () => toWiresLink;

export const useWiresPromise = createPromiseHook<IWireQuery, IWire, IWiresQueryParams>(WiresApiLink, "post");
export const WiresPromise = createPromise<IWireQuery, IWire, IWiresQueryParams>(WiresApiLink, "post");

export interface IWiresFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IWireQuery>>> {
}

export const WiresFilterProvider: FC<IWiresFilterProviderProps> = props => <FilterProvider<IQueryFilter<IWireQuery>> name={"Wires"} {...props}/>;

export const useWiresOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IWireQuery>>();
export const useWiresFilterContext = () => useFilterContext<IQueryFilter<IWireQuery>>();

export interface IWiresSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IWireQuery>> {
}

export const WiresSourceFilter: FC<IWiresSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Wires"}
/>;

export interface IWiresOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IWireQuery>>> {
}

export const WiresOrderByProvider: FC<IWiresOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IWireQuery>> name={"Wires"} {...props}/>;

export const useWiresOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IWireQuery>>();
export const useWiresOrderByContext = () => useOrderByContext<IQueryOrderBy<IWireQuery>>();

export interface IWiresListSourceProps extends Partial<IListProps<IWire>> {
	sourceProps?: Partial<IWiresSourceProps>;
}

export interface IWiresSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IWireQuery>, IQueryOrderBy<IWireQuery>, IWiresQueryParams>> {
}

export const WiresSourceControlProvider: FC<IWiresSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IWireQuery>, IQueryOrderBy<IWireQuery>> name={"Wires"} {...props}/>;

export const WiresListSource: FC<IWiresListSourceProps> = ({sourceProps, ...props}) => {
	return <WiresSource
		{...sourceProps}
	>
		<List<IWire>
			{...props}
		/>
	</WiresSource>;
}

export interface IWiresSourceSelectProps extends IQuerySourceSelectProps<IWire> {
	toOption: IToOptionMapper<IWire>;
	sourceProps?: IWiresSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WiresSourceSelect: FC<IWiresSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WiresSource {...sourceProps}>
					<QuerySourceSelect<IWire> {...props}/>
				</WiresSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Wires.title"}
					size={props.size}
					tooltip={"common.selection.Wires.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<WiresSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WiresSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWiresSelectionProviderProps extends Partial<ISelectionProviderProps<IWire>> {
}

export const WiresSelectionProvider: FC<IWiresSelectionProviderProps> = props => {
	return <SelectionProvider<IWire> {...props}/>;
}

export const useWiresQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WiresApiLink]);
};

export const useWiresOptionalSelectionContext = () => useOptionalSelectionContext<IWire>();
export const useWiresSelectionContext = () => useSelectionContext<IWire>();
