/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserLicenseSource} from "@/puff-smith/service/user/license/interface";
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

export const UserLicenseApiLink = "/api/user/license/query";
export const UserLicenseCountApiLink = "/api/user/license/query/count";

export type IUserLicenseQueryParams = any;

export const useUserLicenseQuery = createQueryHook<ISourceQuery<IUserLicenseSource>, ISourceItem<IUserLicenseSource>[], IUserLicenseQueryParams>(UserLicenseApiLink, "post");
export const useUserLicenseCountQuery = createQueryHook<ISourceQuery<IUserLicenseSource>, number, IUserLicenseQueryParams>(UserLicenseCountApiLink, "post");

export const useUserLicenseSource = () => useSourceContext<ISourceItem<IUserLicenseSource>>();

export interface IUserLicenseSourceContext extends ISourceContext<ISourceItem<IUserLicenseSource>> {
}

export interface IUserLicenseSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IUserLicenseSource>>> {
}

export const UserLicenseSourceConsumer: FC<IUserLicenseSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUserLicenseProviderProps extends Partial<ISourceProviderProps<ISourceItem<IUserLicenseSource>>> {
}

export const UserLicenseProvider: FC<IUserLicenseProviderProps> = props => {
	return <SourceProvider<ISourceItem<IUserLicenseSource>>
		name={"UserLicense"}
		useQuery={useUserLicenseQuery}
		useCountQuery={useUserLicenseCountQuery}
		{...props}
	/>;
};

export const toUserLicenseLink = (queryParams?: IUserLicenseQueryParams) => toLink(UserLicenseApiLink, queryParams);
export const useUserLicenseLink = () => toUserLicenseLink;

export const useUserLicensePromise = createPromiseHook<ISourceQuery<IUserLicenseSource>, ISourceItem<IUserLicenseSource>, IUserLicenseQueryParams>(UserLicenseApiLink, "post");
export const UserLicensePromise = createPromise<ISourceQuery<IUserLicenseSource>, ISourceItem<IUserLicenseSource>, IUserLicenseQueryParams>(UserLicenseApiLink, "post");

export interface IUserLicenseFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IUserLicenseSource>>>> {
}

export const UserLicenseFilterProvider: FC<IUserLicenseFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IUserLicenseSource>>> name={"UserLicense"} {...props}/>;

export const useUserLicenseOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IUserLicenseSource>>>();
export const useUserLicenseFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IUserLicenseSource>>>();

export interface IUserLicenseProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IUserLicenseSource>>> {
}

export const UserLicenseProviderFilter: FC<IUserLicenseProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.UserLicense"}
/>;

export interface IUserLicenseOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IUserLicenseSource>>>> {
}

export const UserLicenseOrderByProvider: FC<IUserLicenseOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IUserLicenseSource>>> name={"UserLicense"} {...props}/>;

export const useUserLicenseOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IUserLicenseSource>>>();
export const useUserLicenseOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IUserLicenseSource>>>();

export interface IUserLicenseProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IUserLicenseSource>>, IQueryOrderBy<ISourceQuery<IUserLicenseSource>>, IUserLicenseQueryParams>> {
}

export const UserLicenseProviderControl: FC<IUserLicenseProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IUserLicenseSource>>, IQueryOrderBy<ISourceQuery<IUserLicenseSource>>> name={"UserLicense"} {...props}/>;

export interface IUserLicenseListSourceProps extends Partial<IListProps<ISourceItem<IUserLicenseSource>>> {
	providerProps?: Partial<IUserLicenseProviderProps>;
}

export const UserLicenseListSource: FC<IUserLicenseListSourceProps> = ({providerProps, ...props}) => {
	return <UserLicenseProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IUserLicenseSource>>
			{...props}
		/>
	</UserLicenseProvider>;
}

export interface IUserLicenseSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IUserLicenseSource>> {
	toOption: IToOptionMapper<ISourceItem<IUserLicenseSource>>;
	providerProps?: Partial<IUserLicenseProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const UserLicenseSourceSelect: FC<IUserLicenseSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<UserLicenseProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IUserLicenseSource>> {...props}/>
				</UserLicenseProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.UserLicense.title"}
					size={props.size}
					tooltip={"common.selection.UserLicense.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<UserLicenseProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</UserLicenseProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IUserLicenseSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IUserLicenseSource>>> {
}

export const UserLicenseSelectionProvider: FC<IUserLicenseSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IUserLicenseSource>> {...props}/>;
}

export const useUserLicenseCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserLicenseCountApiLink]);
};

export const useUserLicenseQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([UserLicenseApiLink]),
		withCount && queryClient.invalidateQueries([UserLicenseCountApiLink]),
	]);
};

export const useUserLicenseOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IUserLicenseSource>>();
export const useUserLicenseSelectionContext = () => useSelectionContext<ISourceItem<IUserLicenseSource>>();
