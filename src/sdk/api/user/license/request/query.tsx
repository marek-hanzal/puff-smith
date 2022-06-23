/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserLicenseRequestSource} from "@/puff-smith/service/user/license/request/interface";
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

export const UserLicenseRequestApiLink = "/api/user/license/request/query";
export const UserLicenseRequestCountApiLink = "/api/user/license/request/query/count";

export type IUserLicenseRequestQueryParams = any;

export const useUserLicenseRequestQuery = createQueryHook<ISourceQuery<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>[], IUserLicenseRequestQueryParams>(UserLicenseRequestApiLink, "post");
export const useUserLicenseRequestCountQuery = createQueryHook<ISourceQuery<IUserLicenseRequestSource>, number, IUserLicenseRequestQueryParams>(UserLicenseRequestCountApiLink, "post");

export const useUserLicenseRequestSource = () => useSourceContext<ISourceItem<IUserLicenseRequestSource>>();

export interface IUserLicenseRequestSourceContext extends ISourceContext<ISourceItem<IUserLicenseRequestSource>> {
}

export interface IUserLicenseRequestSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IUserLicenseRequestSource>>> {
}

export const UserLicenseRequestSourceConsumer: FC<IUserLicenseRequestSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUserLicenseRequestProviderProps extends Partial<ISourceProviderProps<ISourceItem<IUserLicenseRequestSource>>> {
}

export const UserLicenseRequestProvider: FC<IUserLicenseRequestProviderProps> = props => {
	return <SourceProvider<ISourceItem<IUserLicenseRequestSource>>
		name={"UserLicenseRequest"}
		useQuery={useUserLicenseRequestQuery}
		useCountQuery={useUserLicenseRequestCountQuery}
		{...props}
	/>;
};

export const toUserLicenseRequestLink = (queryParams?: IUserLicenseRequestQueryParams) => toLink(UserLicenseRequestApiLink, queryParams);
export const useUserLicenseRequestLink = () => toUserLicenseRequestLink;

export const useUserLicenseRequestPromise = createPromiseHook<ISourceQuery<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>, IUserLicenseRequestQueryParams>(UserLicenseRequestApiLink, "post");
export const UserLicenseRequestPromise = createPromise<ISourceQuery<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>, IUserLicenseRequestQueryParams>(UserLicenseRequestApiLink, "post");

export interface IUserLicenseRequestFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IUserLicenseRequestSource>>>> {
}

export const UserLicenseRequestFilterProvider: FC<IUserLicenseRequestFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IUserLicenseRequestSource>>> name={"UserLicenseRequest"} {...props}/>;

export const useUserLicenseRequestOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IUserLicenseRequestSource>>>();
export const useUserLicenseRequestFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IUserLicenseRequestSource>>>();

export interface IUserLicenseRequestProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IUserLicenseRequestSource>>> {
}

export const UserLicenseRequestProviderFilter: FC<IUserLicenseRequestProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.UserLicenseRequest"}
/>;

export interface IUserLicenseRequestOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IUserLicenseRequestSource>>>> {
}

export const UserLicenseRequestOrderByProvider: FC<IUserLicenseRequestOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IUserLicenseRequestSource>>> name={"UserLicenseRequest"} {...props}/>;

export const useUserLicenseRequestOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IUserLicenseRequestSource>>>();
export const useUserLicenseRequestOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IUserLicenseRequestSource>>>();

export interface IUserLicenseRequestProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IUserLicenseRequestSource>>, IQueryOrderBy<ISourceQuery<IUserLicenseRequestSource>>, IUserLicenseRequestQueryParams>> {
}

export const UserLicenseRequestProviderControl: FC<IUserLicenseRequestProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IUserLicenseRequestSource>>, IQueryOrderBy<ISourceQuery<IUserLicenseRequestSource>>> name={"UserLicenseRequest"} {...props}/>;

export interface IUserLicenseRequestListSourceProps extends Partial<IListProps<ISourceItem<IUserLicenseRequestSource>>> {
	providerProps?: Partial<IUserLicenseRequestProviderProps>;
}

export const UserLicenseRequestListSource: FC<IUserLicenseRequestListSourceProps> = ({providerProps, ...props}) => {
	return <UserLicenseRequestProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IUserLicenseRequestSource>>
			{...props}
		/>
	</UserLicenseRequestProvider>;
}

export interface IUserLicenseRequestSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IUserLicenseRequestSource>> {
	toOption: IToOptionMapper<ISourceItem<IUserLicenseRequestSource>>;
	providerProps?: Partial<IUserLicenseRequestProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const UserLicenseRequestSourceSelect: FC<IUserLicenseRequestSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<UserLicenseRequestProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IUserLicenseRequestSource>> {...props}/>
				</UserLicenseRequestProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.UserLicenseRequest.title"}
					size={props.size}
					tooltip={"common.selection.UserLicenseRequest.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<UserLicenseRequestProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</UserLicenseRequestProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IUserLicenseRequestSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IUserLicenseRequestSource>>> {
}

export const UserLicenseRequestSelectionProvider: FC<IUserLicenseRequestSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IUserLicenseRequestSource>> {...props}/>;
}

export const useUserLicenseRequestCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserLicenseRequestCountApiLink]);
};

export const useUserLicenseRequestQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([UserLicenseRequestApiLink]),
		withCount && queryClient.invalidateQueries([UserLicenseRequestCountApiLink]),
	]);
};

export const useUserLicenseRequestOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IUserLicenseRequestSource>>();
export const useUserLicenseRequestSelectionContext = () => useSelectionContext<ISourceItem<IUserLicenseRequestSource>>();
