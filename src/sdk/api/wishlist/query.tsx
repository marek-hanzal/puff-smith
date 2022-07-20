/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
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

export const WishlistApiLink = "/api/wishlist/query";
export const WishlistCountApiLink = "/api/wishlist/query/count";

export type IWishlistQueryParams = any;

export const useWishlistQuery = createQueryHook<ISourceQuery<IWishlistSource>, ISourceItem<IWishlistSource>[], IWishlistQueryParams>(WishlistApiLink, "post");
export const useWishlistCountQuery = createQueryHook<ISourceQuery<IWishlistSource>, number, IWishlistQueryParams>(WishlistCountApiLink, "post");

export const useWishlistSource = () => useSourceContext<ISourceItem<IWishlistSource>>()

export interface IWishlistSourceContext extends ISourceContext<ISourceItem<IWishlistSource>> {
}

export interface IWishlistSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IWishlistSource>>> {
}

export const WishlistSourceConsumer: FC<IWishlistSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IWishlistProviderProps extends Partial<ISourceProviderProps<ISourceItem<IWishlistSource>>> {
}

export const WishlistProvider: FC<IWishlistProviderProps> = props => {
	return <SourceProvider<ISourceItem<IWishlistSource>>
		name={"Wishlist"}
		useQuery={useWishlistQuery}
		useCountQuery={useWishlistCountQuery}
		{...props}
	/>;
};

export const toWishlistLink = (queryParams?: IWishlistQueryParams) => toLink(WishlistApiLink, queryParams);
export const useWishlistLink = () => toWishlistLink;

export const useWishlistPromise = createPromiseHook<ISourceQuery<IWishlistSource>, ISourceItem<IWishlistSource>, IWishlistQueryParams>(WishlistApiLink, "post");
export const WishlistPromise = createPromise<ISourceQuery<IWishlistSource>, ISourceItem<IWishlistSource>, IWishlistQueryParams>(WishlistApiLink, "post");

export interface IWishlistFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IWishlistSource>>>> {
}

export const WishlistFilterProvider: FC<IWishlistFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IWishlistSource>>> name={"Wishlist"} {...props}/>;

export const useWishlistOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IWishlistSource>>>()
export const useWishlistFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IWishlistSource>>>()

export interface IWishlistProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IWishlistSource>>> {
}

export const WishlistProviderFilter: FC<IWishlistProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Wishlist'}
/>;

export interface IWishlistOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IWishlistSource>>>> {
}

export const WishlistOrderByProvider: FC<IWishlistOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IWishlistSource>>> name={"Wishlist"} {...props}/>;

export const useWishlistOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IWishlistSource>>>()
export const useWishlistOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IWishlistSource>>>()

export interface IWishlistProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IWishlistSource>>, IQueryOrderBy<ISourceQuery<IWishlistSource>>, IWishlistQueryParams>> {
}

export const WishlistProviderControl: FC<IWishlistProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IWishlistSource>>, IQueryOrderBy<ISourceQuery<IWishlistSource>>> name={"Wishlist"} {...props}/>;

export interface IWishlistListSourceProps extends Partial<IListProps<ISourceItem<IWishlistSource>>> {
	providerProps?: Partial<IWishlistProviderProps>;
}

export const WishlistListSource: FC<IWishlistListSourceProps> = ({providerProps, ...props}) => {
	return <WishlistProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IWishlistSource>>
			{...props}
		/>
	</WishlistProvider>;
}

export interface IWishlistInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IWishlistSource>>> {
	providerProps?: Partial<IWishlistProviderProps>;
}

export const WishlistInfiniteListSource: FC<IWishlistInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <WishlistProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IWishlistSource>>
			{...props}
		/>
	</WishlistProvider>;
}

export interface IWishlistSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IWishlistSource>> {
	toOption: IToOptionMapper<ISourceItem<IWishlistSource>>;
	providerProps?: Partial<IWishlistProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const WishlistSourceSelect: FC<IWishlistSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<WishlistProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IWishlistSource>> {...props}/>
				</WishlistProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Wishlist.title"}
					size={props.size}
					tooltip={"common.selection.Wishlist.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<WishlistProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</WishlistProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IWishlistSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IWishlistSource>>> {
}

export const WishlistSelectionProvider: FC<IWishlistSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IWishlistSource>> {...props}/>
}

export const useWishlistCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WishlistCountApiLink]);
};

export const useWishlistQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([WishlistApiLink]),
		withCount && queryClient.invalidateQueries([WishlistCountApiLink]),
	]);
};

export const useWishlistOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IWishlistSource>>();
export const useWishlistSelectionContext = () => useSelectionContext<ISourceItem<IWishlistSource>>();
