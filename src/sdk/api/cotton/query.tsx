/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonSource} from "@/puff-smith/service/cotton/interface";
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

export const CottonApiLink = "/api/cotton/query";
export const CottonCountApiLink = "/api/cotton/query/count";

export type ICottonQueryParams = any;

export const useCottonQuery = createQueryHook<ISourceQuery<ICottonSource>, ISourceItem<ICottonSource>[], ICottonQueryParams>(CottonApiLink, "post");
export const useCottonCountQuery = createQueryHook<ISourceQuery<ICottonSource>, number, ICottonQueryParams>(CottonCountApiLink, "post");

export const useCottonSource = () => useSourceContext<ISourceItem<ICottonSource>>();

export interface ICottonSourceContext extends ISourceContext<ISourceItem<ICottonSource>> {
}

export interface ICottonSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICottonSource>>> {
}

export const CottonSourceConsumer: FC<ICottonSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICottonSource>>> {
}

export const CottonProvider: FC<ICottonProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICottonSource>>
		name={"Cotton"}
		useQuery={useCottonQuery}
		useCountQuery={useCottonCountQuery}
		{...props}
	/>;
};

export const toCottonLink = (queryParams?: ICottonQueryParams) => toLink(CottonApiLink, queryParams);
export const useCottonLink = () => toCottonLink;

export const useCottonPromise = createPromiseHook<ISourceQuery<ICottonSource>, ISourceItem<ICottonSource>, ICottonQueryParams>(CottonApiLink, "post");
export const CottonPromise = createPromise<ISourceQuery<ICottonSource>, ISourceItem<ICottonSource>, ICottonQueryParams>(CottonApiLink, "post");

export interface ICottonFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICottonSource>>>> {
}

export const CottonFilterProvider: FC<ICottonFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICottonSource>>> name={"Cotton"} {...props}/>;

export const useCottonOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICottonSource>>>();
export const useCottonFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICottonSource>>>();

export interface ICottonProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICottonSource>>> {
}

export const CottonProviderFilter: FC<ICottonProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Cotton"}
/>;

export interface ICottonOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICottonSource>>>> {
}

export const CottonOrderByProvider: FC<ICottonOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICottonSource>>> name={"Cotton"} {...props}/>;

export const useCottonOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICottonSource>>>();
export const useCottonOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICottonSource>>>();

export interface ICottonProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICottonSource>>, IQueryOrderBy<ISourceQuery<ICottonSource>>, ICottonQueryParams>> {
}

export const CottonProviderControl: FC<ICottonProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICottonSource>>, IQueryOrderBy<ISourceQuery<ICottonSource>>> name={"Cotton"} {...props}/>;

export interface ICottonListSourceProps extends Partial<IListProps<ISourceItem<ICottonSource>>> {
	providerProps?: Partial<ICottonProviderProps>;
}

export const CottonListSource: FC<ICottonListSourceProps> = ({providerProps, ...props}) => {
	return <CottonProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ICottonSource>>
			{...props}
		/>
	</CottonProvider>;
}

export interface ICottonSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICottonSource>> {
	toOption: IToOptionMapper<ISourceItem<ICottonSource>>;
	providerProps?: Partial<ICottonProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonSourceSelect: FC<ICottonSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICottonSource>> {...props}/>
				</CottonProvider>
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
					<CottonProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICottonSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICottonSource>>> {
}

export const CottonSelectionProvider: FC<ICottonSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICottonSource>> {...props}/>;
};

export const useCottonCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonCountApiLink]);
};

export const useCottonQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([CottonApiLink]),
		withCount && queryClient.invalidateQueries([CottonCountApiLink]),
	]);
};

export const useCottonOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICottonSource>>();
export const useCottonSelectionContext = () => useSelectionContext<ISourceItem<ICottonSource>>();
