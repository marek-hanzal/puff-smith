/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaTasteSource} from "@/puff-smith/service/aroma/taste/interface";
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

export const AromaTasteApiLink = "/api/inventory/aroma/taste/query";
export const AromaTasteCountApiLink = "/api/inventory/aroma/taste/query/count";

export type IAromaTasteQueryParams = any;

export const useAromaTasteQuery = createQueryHook<ISourceQuery<IAromaTasteSource>, ISourceItem<IAromaTasteSource>[], IAromaTasteQueryParams>(AromaTasteApiLink, "post");
export const useAromaTasteCountQuery = createQueryHook<ISourceQuery<IAromaTasteSource>, number, IAromaTasteQueryParams>(AromaTasteCountApiLink, "post");

export const useAromaTasteSource = () => useSourceContext<ISourceItem<IAromaTasteSource>>()

export interface IAromaTasteSourceContext extends ISourceContext<ISourceItem<IAromaTasteSource>> {
}

export interface IAromaTasteSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IAromaTasteSource>>> {
}

export const AromaTasteSourceConsumer: FC<IAromaTasteSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAromaTasteProviderProps extends Partial<ISourceProviderProps<ISourceItem<IAromaTasteSource>>> {
}

export const AromaTasteProvider: FC<IAromaTasteProviderProps> = props => {
	return <SourceProvider<ISourceItem<IAromaTasteSource>>
		name={"AromaTaste"}
		useQuery={useAromaTasteQuery}
		useCountQuery={useAromaTasteCountQuery}
		{...props}
	/>;
};

export const toAromaTasteLink = (queryParams?: IAromaTasteQueryParams) => toLink(AromaTasteApiLink, queryParams);
export const useAromaTasteLink = () => toAromaTasteLink;

export const useAromaTastePromise = createPromiseHook<ISourceQuery<IAromaTasteSource>, ISourceItem<IAromaTasteSource>, IAromaTasteQueryParams>(AromaTasteApiLink, "post");
export const AromaTastePromise = createPromise<ISourceQuery<IAromaTasteSource>, ISourceItem<IAromaTasteSource>, IAromaTasteQueryParams>(AromaTasteApiLink, "post");

export interface IAromaTasteFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IAromaTasteSource>>>> {
}

export const AromaTasteFilterProvider: FC<IAromaTasteFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IAromaTasteSource>>> name={"AromaTaste"} {...props}/>;

export const useAromaTasteOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IAromaTasteSource>>>()
export const useAromaTasteFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IAromaTasteSource>>>()

export interface IAromaTasteProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IAromaTasteSource>>> {
}

export const AromaTasteProviderFilter: FC<IAromaTasteProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.AromaTaste'}
/>;

export interface IAromaTasteOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>>> {
}

export const AromaTasteOrderByProvider: FC<IAromaTasteOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>> name={"AromaTaste"} {...props}/>;

export const useAromaTasteOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>>()
export const useAromaTasteOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IAromaTasteSource>>>()

export interface IAromaTasteProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IAromaTasteSource>>, IQueryOrderBy<ISourceQuery<IAromaTasteSource>>, IAromaTasteQueryParams>> {
}

export const AromaTasteProviderControl: FC<IAromaTasteProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IAromaTasteSource>>, IQueryOrderBy<ISourceQuery<IAromaTasteSource>>> name={"AromaTaste"} {...props}/>;

export interface IAromaTasteListSourceProps extends Partial<IListProps<ISourceItem<IAromaTasteSource>>> {
	providerProps?: Partial<IAromaTasteProviderProps>;
}

export const AromaTasteListSource: FC<IAromaTasteListSourceProps> = ({providerProps, ...props}) => {
	return <AromaTasteProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IAromaTasteSource>>
			{...props}
		/>
	</AromaTasteProvider>;
}

export interface IAromaTasteInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IAromaTasteSource>>> {
	providerProps?: Partial<IAromaTasteProviderProps>;
}

export const AromaTasteInfiniteListSource: FC<IAromaTasteInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <AromaTasteProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IAromaTasteSource>>
			{...props}
		/>
	</AromaTasteProvider>;
}

export interface IAromaTasteSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IAromaTasteSource>> {
	toOption: IToOptionMapper<ISourceItem<IAromaTasteSource>>;
	providerProps?: Partial<IAromaTasteProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AromaTasteSourceSelect: FC<IAromaTasteSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AromaTasteProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IAromaTasteSource>> {...props}/>
				</AromaTasteProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.AromaTaste.title"}
					size={props.size}
					tooltip={"common.selection.AromaTaste.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<AromaTasteProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AromaTasteProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAromaTasteSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IAromaTasteSource>>> {
}

export const AromaTasteSelectionProvider: FC<IAromaTasteSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IAromaTasteSource>> {...props}/>
}

export const useAromaTasteCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaTasteCountApiLink]);
};

export const useAromaTasteQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([AromaTasteApiLink]),
		withCount && queryClient.invalidateQueries([AromaTasteCountApiLink]),
	]);
};

export const useAromaTasteOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IAromaTasteSource>>();
export const useAromaTasteSelectionContext = () => useSelectionContext<ISourceItem<IAromaTasteSource>>();
