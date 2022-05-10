/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUser, IUserQuery} from "@/puff-smith/service/user/interface";
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

export const UserApiLink = "/api/user/query";

export type IUserQueryParams = undefined;

export const useUserQuery = createQueryHook<IUserQuery, IQueryResult<IUser>, IUserQueryParams>(UserApiLink, "post");

export const useUserSource = () => useSourceContext<IUser>();

export interface IUserSourceContext extends ISourceContext<IUser> {
}

export interface IUserSourceConsumerProps extends ConsumerProps<ISourceContext<IUser>> {
}

export const UserSourceConsumer: FC<IUserSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUserSourceProps extends Partial<ISourceProviderProps<IUser>> {
}

export const UserSource: FC<IUserSourceProps> = props => {
	return <SourceProvider<IUser>
		name={"User"}
		useQuery={useUserQuery}
		{...props}
	/>;
};

export const toUserLink = (queryParams?: IUserQueryParams) => toLink(UserApiLink, queryParams);
export const useUserLink = () => toUserLink;

export const useUserPromise = createPromiseHook<IUserQuery, IUser, IUserQueryParams>(UserApiLink, "post");
export const UserPromise = createPromise<IUserQuery, IUser, IUserQueryParams>(UserApiLink, "post");

export interface IUserFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IUserQuery>>> {
}

export const UserFilterProvider: FC<IUserFilterProviderProps> = props => <FilterProvider<IQueryFilter<IUserQuery>> name={"User"} {...props}/>;

export const useUserOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IUserQuery>>();
export const useUserFilterContext = () => useFilterContext<IQueryFilter<IUserQuery>>();

export interface IUserSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IUserQuery>> {
}

export const UserSourceFilter: FC<IUserSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.User"}
/>;

export interface IUserOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IUserQuery>>> {
}

export const UserOrderByProvider: FC<IUserOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IUserQuery>> name={"User"} {...props}/>;

export const useUserOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IUserQuery>>();
export const useUserOrderByContext = () => useOrderByContext<IQueryOrderBy<IUserQuery>>();

export interface IUserListSourceProps extends Partial<IListProps<IUser>> {
	sourceProps?: Partial<IUserSourceProps>;
}

export interface IUserSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IUserQuery>, IQueryOrderBy<IUserQuery>, IUserQueryParams>> {
}

export const UserSourceControlProvider: FC<IUserSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IUserQuery>, IQueryOrderBy<IUserQuery>> name={"User"} {...props}/>;

export const UserListSource: FC<IUserListSourceProps> = ({sourceProps, ...props}) => {
	return <UserSource
		{...sourceProps}
	>
		<List<IUser>
			{...props}
		/>
	</UserSource>;
};

export interface IUserSourceSelectProps extends IQuerySourceSelectProps<IUser> {
	toOption: IToOptionMapper<IUser>;
	sourceProps?: IUserSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const UserSourceSelect: FC<IUserSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<UserSource {...sourceProps}>
					<QuerySourceSelect<IUser> {...props}/>
				</UserSource>
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
					<UserSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</UserSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IUserSelectionProviderProps extends Partial<ISelectionProviderProps<IUser>> {
}

export const UserSelectionProvider: FC<IUserSelectionProviderProps> = props => {
	return <SelectionProvider<IUser> {...props}/>;
};

export const useUserQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserApiLink]);
};

export const useUserOptionalSelectionContext = () => useOptionalSelectionContext<IUser>();
export const useUserSelectionContext = () => useSelectionContext<IUser>();
