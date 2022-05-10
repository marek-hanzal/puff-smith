/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICotton, ICottonQuery} from "@/puff-smith/service/cotton/interface";
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

export const CottonApiLink = "/api/cotton/query";

export type ICottonQueryParams = undefined;

export const useCottonQuery = createQueryHook<ICottonQuery, IQueryResult<ICotton>, ICottonQueryParams>(CottonApiLink, "post");

export const useCottonSource = () => useSourceContext<ICotton>();

export interface ICottonSourceContext extends ISourceContext<ICotton> {
}

export interface ICottonSourceConsumerProps extends ConsumerProps<ISourceContext<ICotton>> {
}

export const CottonSourceConsumer: FC<ICottonSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonSourceProps extends Partial<ISourceProviderProps<ICotton>> {
}

export const CottonSource: FC<ICottonSourceProps> = props => {
	return <SourceProvider<ICotton>
		name={"Cotton"}
		useQuery={useCottonQuery}
		{...props}
	/>;
};

export const toCottonLink = (queryParams?: ICottonQueryParams) => toLink(CottonApiLink, queryParams);
export const useCottonLink = () => toCottonLink;

export const useCottonPromise = createPromiseHook<ICottonQuery, ICotton, ICottonQueryParams>(CottonApiLink, "post");
export const CottonPromise = createPromise<ICottonQuery, ICotton, ICottonQueryParams>(CottonApiLink, "post");

export interface ICottonFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonQuery>>> {
}

export const CottonFilterProvider: FC<ICottonFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonQuery>> name={"Cotton"} {...props}/>;

export const useCottonOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonQuery>>();
export const useCottonFilterContext = () => useFilterContext<IQueryFilter<ICottonQuery>>();

export interface ICottonSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonQuery>> {
}

export const CottonSourceFilter: FC<ICottonSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Cotton"}
/>;

export interface ICottonOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICottonQuery>>> {
}

export const CottonOrderByProvider: FC<ICottonOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICottonQuery>> name={"Cotton"} {...props}/>;

export const useCottonOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICottonQuery>>();
export const useCottonOrderByContext = () => useOrderByContext<IQueryOrderBy<ICottonQuery>>();

export interface ICottonListSourceProps extends Partial<IListProps<ICotton>> {
	sourceProps?: Partial<ICottonSourceProps>;
}

export interface ICottonSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonQuery>, IQueryOrderBy<ICottonQuery>, ICottonQueryParams>> {
}

export const CottonSourceControlProvider: FC<ICottonSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICottonQuery>, IQueryOrderBy<ICottonQuery>> name={"Cotton"} {...props}/>;

export const CottonListSource: FC<ICottonListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonSource
		{...sourceProps}
	>
		<List<ICotton>
			{...props}
		/>
	</CottonSource>;
};

export interface ICottonSourceSelectProps extends IQuerySourceSelectProps<ICotton> {
	toOption: IToOptionMapper<ICotton>;
	sourceProps?: ICottonSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonSourceSelect: FC<ICottonSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonSource {...sourceProps}>
					<QuerySourceSelect<ICotton> {...props}/>
				</CottonSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Cotton.title"}
					size={props.size}
					tooltip={"common.selection.Cotton.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<CottonSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICottonSelectionProviderProps extends Partial<ISelectionProviderProps<ICotton>> {
}

export const CottonSelectionProvider: FC<ICottonSelectionProviderProps> = props => {
	return <SelectionProvider<ICotton> {...props}/>;
};

export const useCottonQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonApiLink]);
};

export const useCottonOptionalSelectionContext = () => useOptionalSelectionContext<ICotton>();
export const useCottonSelectionContext = () => useSelectionContext<ICotton>();
