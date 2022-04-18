/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUser, IUserQuery} from "@/puff-smith/service/user";
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

export const UsersApiLink = "/api/user/query";

export type IUsersQueryParams = undefined;

export const useUsersQuery = createQueryHook<IUserQuery, IQueryResult<IUser>, IUsersQueryParams>(UsersApiLink, "post");

export const useUsersSource = () => useSourceContext<IUser>();

export interface IUsersSourceContext extends ISourceContext<IUser> {
}

export interface IUsersSourceConsumerProps extends ConsumerProps<ISourceContext<IUser>> {
}

export const UsersSourceConsumer: FC<IUsersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUsersSourceProps extends Partial<ISourceProviderProps<IUser>> {
}

export const UsersSource: FC<IUsersSourceProps> = props => {
	return <SourceProvider<IUser>
		name={"Users"}
		useQuery={useUsersQuery}
		{...props}
	/>;
}

export const toUsersLink = (queryParams?: IUsersQueryParams) => toLink(UsersApiLink, queryParams);
export const useUsersLink = () => toUsersLink;

export const useUsersPromise = createPromiseHook<IUserQuery, IUser, IUsersQueryParams>(UsersApiLink, "post");
export const UsersPromise = createPromise<IUserQuery, IUser, IUsersQueryParams>(UsersApiLink, "post");

export interface IUsersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IUserQuery>>> {
}

export const UsersFilterProvider: FC<IUsersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IUserQuery>> name={"Users"} {...props}/>;

export const useUsersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IUserQuery>>();
export const useUsersFilterContext = () => useFilterContext<IQueryFilter<IUserQuery>>();

export interface IUsersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IUserQuery>> {
}

export const UsersSourceFilter: FC<IUsersSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Users"}
/>;

export interface IUsersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IUserQuery>>> {
}

export const UsersOrderByProvider: FC<IUsersOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IUserQuery>> name={"Users"} {...props}/>;

export const useUsersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IUserQuery>>();
export const useUsersOrderByContext = () => useOrderByContext<IQueryOrderBy<IUserQuery>>();

export interface IUsersListSourceProps extends Partial<IListProps<IUser>> {
	sourceProps?: Partial<IUsersSourceProps>;
}

export interface IUsersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IUserQuery>, IQueryOrderBy<IUserQuery>, IUsersQueryParams>> {
}

export const UsersSourceControlProvider: FC<IUsersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IUserQuery>, IQueryOrderBy<IUserQuery>> name={"Users"} {...props}/>;

export const UsersListSource: FC<IUsersListSourceProps> = ({sourceProps, ...props}) => {
	return <UsersSource
		{...sourceProps}
	>
		<List<IUser>
			{...props}
		/>
	</UsersSource>
}

export interface IUsersSourceSelectProps extends IQuerySourceSelectProps<IUser> {
	toOption: IToOptionMapper<IUser>;
	sourceProps?: IUsersSourceProps;
	selectionList?: () => ReactNode;
	withTranslation?: string;
}

export const UsersSourceSelect: FC<IUsersSourceSelectProps> = ({sourceProps, selectionList, withTranslation, ...props}) => {
	return <Input.Group>
		<Row gutter={8}>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					type={"text"}
					icon={<ReadOutlined/>}
					title={`${withTranslation}.select.title`}
					tooltip={`${withTranslation}.select.title.tooltip`}
					width={800}
				>
					<UsersSourceControlProvider>
						<SelectionProvider type={"single"}>
							{selectionList()}
						</SelectionProvider>
					</UsersSourceControlProvider>
				</DrawerButton>}
			</Col>
			<Col flex={"auto"}>
				<UsersSource {...sourceProps}>
					<QuerySourceSelect<IUser> {...props}/>
				</UsersSource>
			</Col>
		</Row>
	</Input.Group>;
};

export const useUsersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UsersApiLink]);
};

export const useUsersOptionalSelectionContext = () => useOptionalSelectionContext<IUser>();
export const useUsersSelectionContext = () => useSelectionContext<IUser>();
