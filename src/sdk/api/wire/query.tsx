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

export const WireApiLink = "/api/wire/query";

export type IWireQueryParams = undefined;

export const useWireQuery = createQueryHook<IWireQuery, IQueryResult<IWire>, IWireQueryParams>(WireApiLink, "post");

export const useWireSource = () => useSourceContext<IWire>();

export interface IWireSourceContext extends ISourceContext<IWire> {
}

export interface IWireSourceConsumerProps extends ConsumerProps<ISourceContext<IWire>> {
}

export const WireSourceConsumer: FC<IWireSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWireSourceProps extends Partial<ISourceProviderProps<IWire>> {
}

export const WireSource: FC<IWireSourceProps> = props => {
	return <SourceProvider<IWire>
		name={"Wire"}
		useQuery={useWireQuery}
		{...props}
	/>;
};

export const toWireLink = (queryParams?: IWireQueryParams) => toLink(WireApiLink, queryParams);
export const useWireLink = () => toWireLink;

export const useWirePromise = createPromiseHook<IWireQuery, IWire, IWireQueryParams>(WireApiLink, "post");
export const WirePromise = createPromise<IWireQuery, IWire, IWireQueryParams>(WireApiLink, "post");

export interface IWireFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IWireQuery>>> {
}

export const WireFilterProvider: FC<IWireFilterProviderProps> = props => <FilterProvider<IQueryFilter<IWireQuery>> name={"Wire"} {...props}/>;

export const useWireOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IWireQuery>>();
export const useWireFilterContext = () => useFilterContext<IQueryFilter<IWireQuery>>();

export interface IWireSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IWireQuery>> {
}

export const WireSourceFilter: FC<IWireSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Wire"}
/>;

export interface IWireOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IWireQuery>>> {
}

export const WireOrderByProvider: FC<IWireOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IWireQuery>> name={"Wire"} {...props}/>;

export const useWireOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IWireQuery>>();
export const useWireOrderByContext = () => useOrderByContext<IQueryOrderBy<IWireQuery>>();

export interface IWireListSourceProps extends Partial<IListProps<IWire>> {
	sourceProps?: Partial<IWireSourceProps>;
}

export interface IWireSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IWireQuery>, IQueryOrderBy<IWireQuery>, IWireQueryParams>> {
}

export const WireSourceControlProvider: FC<IWireSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IWireQuery>, IQueryOrderBy<IWireQuery>> name={"Wire"} {...props}/>;

export const WireListSource: FC<IWireListSourceProps> = ({sourceProps, ...props}) => {
	return <WireSource
		{...sourceProps}
	>
		<List<IWire>
			{...props}
		/>
	</WireSource>;
}

export interface IWireSourceSelectProps extends IQuerySourceSelectProps<IWire> {
	toOption: IToOptionMapper<IWire>;
	sourceProps?: IWireSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WireSourceSelect: FC<IWireSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WireSource {...sourceProps}>
					<QuerySourceSelect<IWire> {...props}/>
				</WireSource>
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
					<WireSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WireSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWireSelectionProviderProps extends Partial<ISelectionProviderProps<IWire>> {
}

export const WireSelectionProvider: FC<IWireSelectionProviderProps> = props => {
	return <SelectionProvider<IWire> {...props}/>;
}

export const useWireQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireApiLink]);
};

export const useWireOptionalSelectionContext = () => useOptionalSelectionContext<IWire>();
export const useWireSelectionContext = () => useSelectionContext<IWire>();
