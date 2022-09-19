/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserSource} from "@/puff-smith/service/user/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IDrawerContext, IQueryFilter, IQueryOrderBy, ISelectionContext, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	BubbleButton,
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	DrawerContext,
	Filter,
	FilterProvider,
	IDrawerButtonProps,
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
	ITableProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionContext,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	Table,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalFormItemContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {Col, Input, Row} from "antd";
import {CheckOutline} from "antd-mobile-icons";
import {ConsumerProps, FC, ReactNode} from "react";

export const UserApiLink = "/api/user/query";
export const UserCountApiLink = "/api/user/query/count";

export type IUserQueryParams = any;

export const useUserQuery = createQueryHook<ISourceQuery<IUserSource>, ISourceItem<IUserSource>[], IUserQueryParams>(UserApiLink, "post");
export const useUserCountQuery = createQueryHook<ISourceQuery<IUserSource>, number, IUserQueryParams>(UserCountApiLink, "post");

export const useUserSource = () => useSourceContext<ISourceItem<IUserSource>>();

export interface IUserSourceContext extends ISourceContext<ISourceItem<IUserSource>> {
}

export interface IUserSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IUserSource>>> {
}

export const UserSourceConsumer: FC<IUserSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUserProviderProps extends Partial<ISourceProviderProps<ISourceItem<IUserSource>>> {
}

export const UserProvider: FC<IUserProviderProps> = props => {
	return <SourceProvider<ISourceItem<IUserSource>>
		name={"User"}
		useQuery={useUserQuery}
		useCountQuery={useUserCountQuery}
		{...props}
	/>;
};

export const toUserLink = (queryParams?: IUserQueryParams) => toLink(UserApiLink, queryParams);
export const useUserLink = () => toUserLink;

export const useUserPromise = createPromiseHook<ISourceQuery<IUserSource>, ISourceItem<IUserSource>, IUserQueryParams>(UserApiLink, "post");
export const UserPromise = createPromise<ISourceQuery<IUserSource>, ISourceItem<IUserSource>, IUserQueryParams>(UserApiLink, "post");

export interface IUserFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IUserSource>>>> {
}

export const UserFilterProvider: FC<IUserFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IUserSource>>> name={"User"} {...props}/>;

export const useUserOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IUserSource>>>()
export const useUserFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IUserSource>>>()

export interface IUserProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IUserSource>>> {
}

export const UserProviderFilter: FC<IUserProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.User"}
/>;

export interface IUserOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IUserSource>>>> {
}

export const UserOrderByProvider: FC<IUserOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IUserSource>>> name={"User"} {...props}/>;

export const useUserOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IUserSource>>>();
export const useUserOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IUserSource>>>();

export interface IUserProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IUserSource>>, IQueryOrderBy<ISourceQuery<IUserSource>>, IUserQueryParams>> {
}

export const UserProviderControl: FC<IUserProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IUserSource>>, IQueryOrderBy<ISourceQuery<IUserSource>>> name={"User"} {...props}/>;

export interface IUserTableSourceProps extends Partial<ITableProps<ISourceItem<IUserSource>>> {
	providerProps?: Partial<IUserProviderProps>;
}

export const UserTableSource: FC<IUserTableSourceProps> = ({providerProps, ...props}) => {
	return <UserProvider
		withCount
		{...providerProps}
	>
		<Table<ISourceItem<IUserSource>>
			translation={UserApiLink}
			{...props}
		/>
	</UserProvider>;
}

export interface IUserListSourceProps extends Partial<IListProps<ISourceItem<IUserSource>>> {
	providerProps?: Partial<IUserProviderProps>;
}

export const UserListSource: FC<IUserListSourceProps> = ({providerProps, ...props}) => {
	return <UserProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IUserSource>>
			{...props}
		/>
	</UserProvider>;
}

export interface IUserInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IUserSource>>> {
	providerProps?: Partial<IUserProviderProps>;
}

export const UserInfiniteListSource: FC<IUserInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <UserProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IUserSource>>
			{...props}
		/>
	</UserProvider>;
}

export interface IUserSourceSelection {
	selectionContext: ISelectionContext<ISourceItem<IUserSource>>;
	drawerContext: IDrawerContext;
}

export interface IUserSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IUserSource>> {
	toOption: IToOptionMapper<ISourceItem<IUserSource>>;
	providerProps?: Partial<IUserProviderProps>;
	selectionList?: (context: IUserSourceSelection) => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
	selectionProvider?: IUserProviderControlProps;
	selectionDrawer?: IDrawerButtonProps;
}

export const UserSourceSelect: FC<IUserSourceSelectProps> = ({providerProps, selectionList, selectionProps, selectionProvider, selectionDrawer, ...props}) => {
	const formItem = useOptionalFormItemContext();
	return selectionList ? <SelectionProvider<ISourceItem<IUserSource>>
		type={"single"}
		onSelection={({selected}) => {
			formItem?.setValue(selected);
			formItem?.setErrors([]);
		}}
		{...selectionProps}
	>
		<SelectionContext.Consumer>
			{selectionContext => <>
				<Input.Group>
					<Row>
						<Col flex={"auto"}>
							<UserProvider {...providerProps}>
								<QuerySourceSelect<ISourceItem<IUserSource>>
									onSelect={({entity}) => selectionContext.item(entity)}
									onDeselect={({entity}) => selectionContext.deItem(entity)}
									onClear={() => selectionContext.clear()}
									{...props}
								/>
							</UserProvider>
						</Col>
						<Col push={0}>
							<DrawerButton
								icon={<SelectOutlined/>}
								title={"common.selection.User.title"}
								size={props.size}
								tooltip={"common.selection.User.title.tooltip"}
								width={800}
								type={"text"}
								{...selectionDrawer}
							>
								<DrawerContext.Consumer>
									{drawerContext => <UserProviderControl
										defaultSize={10}
										{...selectionProvider}
									>
										<BubbleButton
											icon={<CheckOutline fontSize={32}/>}
											onClick={() => {
												selectionContext.handleSelection();
												drawerContext.close();
											}}
										/>
										{selectionList({
											selectionContext,
											drawerContext,
										})}
									</UserProviderControl>}
								</DrawerContext.Consumer>
							</DrawerButton>
						</Col>
					</Row>
				</Input.Group>
			</>}
		</SelectionContext.Consumer>
	</SelectionProvider> : <UserProvider {...providerProps}>
		<QuerySourceSelect<ISourceItem<IUserSource>> {...props}/>
	</UserProvider>;
};

export interface IUserSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IUserSource>>> {
}

export const UserSelectionProvider: FC<IUserSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IUserSource>> {...props}/>
}

export const useUserCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserCountApiLink]);
};

export const useUserQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([UserApiLink]),
		withCount && queryClient.invalidateQueries([UserCountApiLink]),
	]);
};

export const useUserOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IUserSource>>();
export const useUserSelectionContext = () => useSelectionContext<ISourceItem<IUserSource>>();
