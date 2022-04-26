/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICotton, ICottonQuery} from "@/puff-smith/service/cotton/interface";
import {ReadOutlined} from "@ant-design/icons";
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

export const CottonsApiLink = "/api/cotton/query";

export type ICottonsQueryParams = undefined;

export const useCottonsQuery = createQueryHook<ICottonQuery, IQueryResult<ICotton>, ICottonsQueryParams>(CottonsApiLink, "post");

export const useCottonsSource = () => useSourceContext<ICotton>();

export interface ICottonsSourceContext extends ISourceContext<ICotton> {
}

export interface ICottonsSourceConsumerProps extends ConsumerProps<ISourceContext<ICotton>> {
}

export const CottonsSourceConsumer: FC<ICottonsSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICottonsSourceProps extends Partial<ISourceProviderProps<ICotton>> {
}

export const CottonsSource: FC<ICottonsSourceProps> = props => {
	return <SourceProvider<ICotton>
		name={"Cottons"}
		useQuery={useCottonsQuery}
		{...props}
	/>;
};

export const toCottonsLink = (queryParams?: ICottonsQueryParams) => toLink(CottonsApiLink, queryParams);
export const useCottonsLink = () => toCottonsLink;

export const useCottonsPromise = createPromiseHook<ICottonQuery, ICotton, ICottonsQueryParams>(CottonsApiLink, "post");
export const CottonsPromise = createPromise<ICottonQuery, ICotton, ICottonsQueryParams>(CottonsApiLink, "post");

export interface ICottonsFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ICottonQuery>>> {
}

export const CottonsFilterProvider: FC<ICottonsFilterProviderProps> = props => <FilterProvider<IQueryFilter<ICottonQuery>> name={"Cottons"} {...props}/>;

export const useCottonsOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ICottonQuery>>();
export const useCottonsFilterContext = () => useFilterContext<IQueryFilter<ICottonQuery>>();

export interface ICottonsSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ICottonQuery>> {
}

export const CottonsSourceFilter: FC<ICottonsSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Cottons"}
/>;

export interface ICottonsOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ICottonQuery>>> {
}

export const CottonsOrderByProvider: FC<ICottonsOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ICottonQuery>> name={"Cottons"} {...props}/>;

export const useCottonsOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ICottonQuery>>();
export const useCottonsOrderByContext = () => useOrderByContext<IQueryOrderBy<ICottonQuery>>();

export interface ICottonsListSourceProps extends Partial<IListProps<ICotton>> {
	sourceProps?: Partial<ICottonsSourceProps>;
}

export interface ICottonsSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<ICottonQuery>, IQueryOrderBy<ICottonQuery>, ICottonsQueryParams>> {
}

export const CottonsSourceControlProvider: FC<ICottonsSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<ICottonQuery>, IQueryOrderBy<ICottonQuery>> name={"Cottons"} {...props}/>;

export const CottonsListSource: FC<ICottonsListSourceProps> = ({sourceProps, ...props}) => {
	return <CottonsSource
		{...sourceProps}
	>
		<List<ICotton>
			{...props}
		/>
	</CottonsSource>;
}

export interface ICottonsSourceSelectProps extends IQuerySourceSelectProps<ICotton> {
	toOption: IToOptionMapper<ICotton>;
	sourceProps?: ICottonsSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CottonsSourceSelect: FC<ICottonsSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CottonsSource {...sourceProps}>
					<QuerySourceSelect<ICotton> {...props}/>
				</CottonsSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<ReadOutlined/>}
					title={"common.selection.Cottons.title"}
					tooltip={"common.selection.Cottons.title.tooltip"}
					width={800}
				>
					<CottonsSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CottonsSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export const useCottonsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonsApiLink]);
};

export const useCottonsOptionalSelectionContext = () => useOptionalSelectionContext<ICotton>();
export const useCottonsSelectionContext = () => useSelectionContext<ICotton>();
