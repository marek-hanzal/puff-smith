/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureMarket, IMixtureMarketQuery} from "@/puff-smith/service/mixture/market/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, IToOptionMapper} from "@leight-core/api";
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

export const MixtureMarketApiLink = "/api/mixture/market/query";

export type IMixtureMarketQueryParams = undefined;

export const useMixtureMarketQuery = createQueryHook<IMixtureMarketQuery, IMixtureMarket[], IMixtureMarketQueryParams>(MixtureMarketApiLink, "post");

export const useMixtureMarketSource = () => useSourceContext<IMixtureMarket>();

export interface IMixtureMarketSourceContext extends ISourceContext<IMixtureMarket> {
}

export interface IMixtureMarketSourceConsumerProps extends ConsumerProps<ISourceContext<IMixtureMarket>> {
}

export const MixtureMarketSourceConsumer: FC<IMixtureMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureMarketSourceProps extends Partial<ISourceProviderProps<IMixtureMarket>> {
}

export const MixtureMarketSource: FC<IMixtureMarketSourceProps> = props => {
	return <SourceProvider<IMixtureMarket>
		name={"MixtureMarket"}
		useQuery={useMixtureMarketQuery}
		{...props}
	/>;
};

export const toMixtureMarketLink = (queryParams?: IMixtureMarketQueryParams) => toLink(MixtureMarketApiLink, queryParams);
export const useMixtureMarketLink = () => toMixtureMarketLink;

export const useMixtureMarketPromise = createPromiseHook<IMixtureMarketQuery, IMixtureMarket, IMixtureMarketQueryParams>(MixtureMarketApiLink, "post");
export const MixtureMarketPromise = createPromise<IMixtureMarketQuery, IMixtureMarket, IMixtureMarketQueryParams>(MixtureMarketApiLink, "post");

export interface IMixtureMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IMixtureMarketQuery>>> {
}

export const MixtureMarketFilterProvider: FC<IMixtureMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<IMixtureMarketQuery>> name={"MixtureMarket"} {...props}/>;

export const useMixtureMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IMixtureMarketQuery>>();
export const useMixtureMarketFilterContext = () => useFilterContext<IQueryFilter<IMixtureMarketQuery>>();

export interface IMixtureMarketSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IMixtureMarketQuery>> {
}

export const MixtureMarketSourceFilter: FC<IMixtureMarketSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.MixtureMarket"}
/>;

export interface IMixtureMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IMixtureMarketQuery>>> {
}

export const MixtureMarketOrderByProvider: FC<IMixtureMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IMixtureMarketQuery>> name={"MixtureMarket"} {...props}/>;

export const useMixtureMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IMixtureMarketQuery>>();
export const useMixtureMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<IMixtureMarketQuery>>();

export interface IMixtureMarketListSourceProps extends Partial<IListProps<IMixtureMarket>> {
	sourceProps?: Partial<IMixtureMarketSourceProps>;
}

export interface IMixtureMarketSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IMixtureMarketQuery>, IQueryOrderBy<IMixtureMarketQuery>, IMixtureMarketQueryParams>> {
}

export const MixtureMarketSourceControlProvider: FC<IMixtureMarketSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IMixtureMarketQuery>, IQueryOrderBy<IMixtureMarketQuery>> name={"MixtureMarket"} {...props}/>;

export const MixtureMarketListSource: FC<IMixtureMarketListSourceProps> = ({sourceProps, ...props}) => {
	return <MixtureMarketSource
		{...sourceProps}
	>
		<List<IMixtureMarket>
			{...props}
		/>
	</MixtureMarketSource>;
}

export interface IMixtureMarketSourceSelectProps extends IQuerySourceSelectProps<IMixtureMarket> {
	toOption: IToOptionMapper<IMixtureMarket>;
	sourceProps?: IMixtureMarketSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureMarketSourceSelect: FC<IMixtureMarketSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureMarketSource {...sourceProps}>
					<QuerySourceSelect<IMixtureMarket> {...props}/>
				</MixtureMarketSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.MixtureMarket.title"}
					size={props.size}
					tooltip={"common.selection.MixtureMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<MixtureMarketSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixtureMarketSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixtureMarketSelectionProviderProps extends Partial<ISelectionProviderProps<IMixtureMarket>> {
}

export const MixtureMarketSelectionProvider: FC<IMixtureMarketSelectionProviderProps> = props => {
	return <SelectionProvider<IMixtureMarket> {...props}/>;
}

export const useMixtureMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureMarketApiLink]);
};

export const useMixtureMarketOptionalSelectionContext = () => useOptionalSelectionContext<IMixtureMarket>();
export const useMixtureMarketSelectionContext = () => useSelectionContext<IMixtureMarket>();
