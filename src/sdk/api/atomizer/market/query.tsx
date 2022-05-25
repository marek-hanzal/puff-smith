/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
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

export const AtomizerMarketApiLink = "/api/atomizer/market/query";

export type IAtomizerMarketQueryParams = undefined;

export const useAtomizerMarketQuery = createQueryHook<ISourceQuery<IAromaMarketSource>, ISourceItem<IAromaMarketSource>[], IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");

export const useAtomizerMarketSource = () => useSourceContext<ISourceItem<IAromaMarketSource>>();

export interface IAtomizerMarketSourceContext extends ISourceContext<ISourceItem<IAromaMarketSource>> {
}

export interface IAtomizerMarketSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaMarketSource>>> {
}

export const AtomizerMarketSourceConsumer: FC<IAtomizerMarketSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerMarketProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaMarketSource>>> {
}

export const AtomizerMarketProvider: FC<IAtomizerMarketProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaMarketSource>>
		name={"AtomizerMarket"}
		useQuery={useAtomizerMarketQuery}
		{...props}
	/>;
};

export const toAtomizerMarketLink = (queryParams?: IAtomizerMarketQueryParams) => toLink(AtomizerMarketApiLink, queryParams);
export const useAtomizerMarketLink = () => toAtomizerMarketLink;

export const useAtomizerMarketPromise = createPromiseHook<ISourceQuery<IAromaMarketSource>, ISourceItem<IAromaMarketSource>, IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");
export const AtomizerMarketPromise = createPromise<ISourceQuery<IAromaMarketSource>, ISourceItem<IAromaMarketSource>, IAtomizerMarketQueryParams>(AtomizerMarketApiLink, "post");

export interface IAtomizerMarketFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaMarketSource>>>> {
}

export const AtomizerMarketFilterProvider: FC<IAtomizerMarketFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaMarketSource>>> name={"AtomizerMarket"} {...props}/>;

export const useAtomizerMarketOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaMarketSource>>>();
export const useAtomizerMarketFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaMarketSource>>>();

export interface IAtomizerMarketProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaMarketSource>>> {
}

export const AtomizerMarketProviderFilter: FC<IAtomizerMarketProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.AtomizerMarket"}
/>;

export interface IAtomizerMarketOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>>> {
}

export const AtomizerMarketOrderByProvider: FC<IAtomizerMarketOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>> name={"AtomizerMarket"} {...props}/>;

export const useAtomizerMarketOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>>();
export const useAtomizerMarketOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaMarketSource>>>();

export interface IAtomizerMarketProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaMarketSource>>, IQueryOrderBy<ISourceQuery<IAromaMarketSource>>, IAtomizerMarketQueryParams>> {
}

export const AtomizerMarketProviderControl: FC<IAtomizerMarketProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IAromaMarketSource>>, IQueryOrderBy<ISourceQuery<IAromaMarketSource>>> name={"AtomizerMarket"} {...props}/>;

export interface IAtomizerMarketListSourceProps extends Partial<IListProps<ISourceItem<IAromaMarketSource>>> {
	providerProps?: Partial<IAtomizerMarketProviderProps>;
}

export const AtomizerMarketListSource: FC<IAtomizerMarketListSourceProps> = ({providerProps, ...props}) => {
	return <AtomizerMarketProvider
		{...providerProps}
	>
		<List<ISourceItem<IAromaMarketSource>>
			{...props}
		/>
	</AtomizerMarketProvider>;
};

export interface IAtomizerMarketSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaMarketSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaMarketSource>>;
	providerProps?: Partial<IAtomizerMarketProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerMarketSourceSelect: FC<IAtomizerMarketSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerMarketProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaMarketSource>> {...props}/>
				</AtomizerMarketProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AtomizerMarket.title"}
					size={props.size}
					tooltip={"common.selection.AtomizerMarket.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AtomizerMarketProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerMarketProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerMarketSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaMarketSource>>> {
}

export const AtomizerMarketSelectionProvider: FC<IAtomizerMarketSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaMarketSource>> {...props}/>;
};

export const useAtomizerMarketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerMarketApiLink]);
};

export const useAtomizerMarketOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaMarketSource>>();
export const useAtomizerMarketSelectionContext = () => useSelectionContext<ISourceItem<IAromaMarketSource>>();
