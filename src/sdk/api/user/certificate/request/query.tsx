/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
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
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";
import {useQueryClient} from "react-query";

export const UserCertificateRequestApiLink = "/api/user/certificate/request/query";
export const UserCertificateRequestCountApiLink = "/api/user/certificate/request/query/count";

export type IUserCertificateRequestQueryParams = any;

export const useUserCertificateRequestQuery = createQueryHook<ISourceQuery<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>[], IUserCertificateRequestQueryParams>(UserCertificateRequestApiLink, "post");
export const useUserCertificateRequestCountQuery = createQueryHook<ISourceQuery<IUserCertificateRequestSource>, number, IUserCertificateRequestQueryParams>(UserCertificateRequestCountApiLink, "post");

export const useUserCertificateRequestSource = () => useSourceContext<ISourceItem<IUserCertificateRequestSource>>();

export interface IUserCertificateRequestSourceContext extends ISourceContext<ISourceItem<IUserCertificateRequestSource>> {
}

export interface IUserCertificateRequestSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IUserCertificateRequestSource>>> {
}

export const UserCertificateRequestSourceConsumer: FC<IUserCertificateRequestSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUserCertificateRequestProviderProps extends Partial<ISourceProviderProps<ISourceItem<IUserCertificateRequestSource>>> {
}

export const UserCertificateRequestProvider: FC<IUserCertificateRequestProviderProps> = props => {
	return <SourceProvider<ISourceItem<IUserCertificateRequestSource>>
		name={"UserCertificateRequest"}
		useQuery={useUserCertificateRequestQuery}
		useCountQuery={useUserCertificateRequestCountQuery}
		{...props}
	/>;
};

export const toUserCertificateRequestLink = (queryParams?: IUserCertificateRequestQueryParams) => toLink(UserCertificateRequestApiLink, queryParams);
export const useUserCertificateRequestLink = () => toUserCertificateRequestLink;

export const useUserCertificateRequestPromise = createPromiseHook<ISourceQuery<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>, IUserCertificateRequestQueryParams>(UserCertificateRequestApiLink, "post");
export const UserCertificateRequestPromise = createPromise<ISourceQuery<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>, IUserCertificateRequestQueryParams>(UserCertificateRequestApiLink, "post");

export interface IUserCertificateRequestFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IUserCertificateRequestSource>>>> {
}

export const UserCertificateRequestFilterProvider: FC<IUserCertificateRequestFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IUserCertificateRequestSource>>> name={"UserCertificateRequest"} {...props}/>;

export const useUserCertificateRequestOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IUserCertificateRequestSource>>>();
export const useUserCertificateRequestFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IUserCertificateRequestSource>>>();

export interface IUserCertificateRequestProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IUserCertificateRequestSource>>> {
}

export const UserCertificateRequestProviderFilter: FC<IUserCertificateRequestProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.UserCertificateRequest"}
/>;

export interface IUserCertificateRequestOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IUserCertificateRequestSource>>>> {
}

export const UserCertificateRequestOrderByProvider: FC<IUserCertificateRequestOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IUserCertificateRequestSource>>> name={"UserCertificateRequest"} {...props}/>;

export const useUserCertificateRequestOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IUserCertificateRequestSource>>>();
export const useUserCertificateRequestOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IUserCertificateRequestSource>>>();

export interface IUserCertificateRequestProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IUserCertificateRequestSource>>, IQueryOrderBy<ISourceQuery<IUserCertificateRequestSource>>, IUserCertificateRequestQueryParams>> {
}

export const UserCertificateRequestProviderControl: FC<IUserCertificateRequestProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IUserCertificateRequestSource>>, IQueryOrderBy<ISourceQuery<IUserCertificateRequestSource>>> name={"UserCertificateRequest"} {...props}/>;

export interface IUserCertificateRequestListSourceProps extends Partial<IListProps<ISourceItem<IUserCertificateRequestSource>>> {
	providerProps?: Partial<IUserCertificateRequestProviderProps>;
}

export const UserCertificateRequestListSource: FC<IUserCertificateRequestListSourceProps> = ({providerProps, ...props}) => {
	return <UserCertificateRequestProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IUserCertificateRequestSource>>
			{...props}
		/>
	</UserCertificateRequestProvider>;
}

export interface IUserCertificateRequestInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IUserCertificateRequestSource>>> {
	providerProps?: Partial<IUserCertificateRequestProviderProps>;
}

export const UserCertificateRequestInfiniteListSource: FC<IUserCertificateRequestInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <UserCertificateRequestProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IUserCertificateRequestSource>>
			{...props}
		/>
	</UserCertificateRequestProvider>;
};

export interface IUserCertificateRequestSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IUserCertificateRequestSource>> {
	toOption: IToOptionMapper<ISourceItem<IUserCertificateRequestSource>>;
	providerProps?: Partial<IUserCertificateRequestProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const UserCertificateRequestSourceSelect: FC<IUserCertificateRequestSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<UserCertificateRequestProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IUserCertificateRequestSource>> {...props}/>
				</UserCertificateRequestProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.UserCertificateRequest.title"}
					size={props.size}
					tooltip={"common.selection.UserCertificateRequest.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<UserCertificateRequestProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</UserCertificateRequestProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IUserCertificateRequestSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IUserCertificateRequestSource>>> {
}

export const UserCertificateRequestSelectionProvider: FC<IUserCertificateRequestSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IUserCertificateRequestSource>> {...props}/>;
}

export const useUserCertificateRequestCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserCertificateRequestCountApiLink]);
};

export const useUserCertificateRequestQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([UserCertificateRequestApiLink]),
		withCount && queryClient.invalidateQueries([UserCertificateRequestCountApiLink]),
	]);
};

export const useUserCertificateRequestOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IUserCertificateRequestSource>>();
export const useUserCertificateRequestSelectionContext = () => useSelectionContext<ISourceItem<IUserCertificateRequestSource>>();
