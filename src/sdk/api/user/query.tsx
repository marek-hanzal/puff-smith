/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserSource} from "@/puff-smith/service/user/interface";
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

export const UserApiLink = "/api/user/query";

export type IUserQueryParams = undefined;

export const useUserQuery = createQueryHook<ISourceQuery<IUserSource>, ISourceItem<IUserSource>[], IUserQueryParams>(UserApiLink, "post");

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

export const useUserOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IUserSource>>>();
export const useUserFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IUserSource>>>();

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

export interface IUserListSourceProps extends Partial<IListProps<ISourceItem<IUserSource>>> {
	providerProps?: Partial<IUserProviderProps>;
}

export const UserListSource: FC<IUserListSourceProps> = ({providerProps, ...props}) => {
	return <UserProvider
		{...providerProps}
	>
		<List<ISourceItem<IUserSource>>
			{...props}
		/>
	</UserProvider>;
}

export interface IUserSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IUserSource>> {
	toOption: IToOptionMapper<ISourceItem<IUserSource>>;
	providerProps?: Partial<IUserProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const UserSourceSelect: FC<IUserSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<UserProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IUserSource>> {...props}/>
				</UserProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.User.title"}
					size={props.size}
					tooltip={"common.selection.User.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<UserProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</UserProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IUserSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IUserSource>>> {
}

export const UserSelectionProvider: FC<IUserSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IUserSource>> {...props}/>;
}

export const useUserQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserApiLink]);
};

export const useUserOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IUserSource>>();
export const useUserSelectionContext = () => useSelectionContext<ISourceItem<IUserSource>>();
