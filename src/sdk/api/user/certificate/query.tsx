/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
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

export const UserCertificateApiLink = "/api/user/certificate/query";
export const UserCertificateCountApiLink = "/api/user/certificate/query/count";

export type IUserCertificateQueryParams = any;

export const useUserCertificateQuery = createQueryHook<ISourceQuery<IUserCertificateSource>, ISourceItem<IUserCertificateSource>[], IUserCertificateQueryParams>(UserCertificateApiLink, "post");
export const useUserCertificateCountQuery = createQueryHook<ISourceQuery<IUserCertificateSource>, number, IUserCertificateQueryParams>(UserCertificateCountApiLink, "post");

export const useUserCertificateSource = () => useSourceContext<ISourceItem<IUserCertificateSource>>();

export interface IUserCertificateSourceContext extends ISourceContext<ISourceItem<IUserCertificateSource>> {
}

export interface IUserCertificateSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IUserCertificateSource>>> {
}

export const UserCertificateSourceConsumer: FC<IUserCertificateSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IUserCertificateProviderProps extends Partial<ISourceProviderProps<ISourceItem<IUserCertificateSource>>> {
}

export const UserCertificateProvider: FC<IUserCertificateProviderProps> = props => {
	return <SourceProvider<ISourceItem<IUserCertificateSource>>
		name={"UserCertificate"}
		useQuery={useUserCertificateQuery}
		useCountQuery={useUserCertificateCountQuery}
		{...props}
	/>;
};

export const toUserCertificateLink = (queryParams?: IUserCertificateQueryParams) => toLink(UserCertificateApiLink, queryParams);
export const useUserCertificateLink = () => toUserCertificateLink;

export const useUserCertificatePromise = createPromiseHook<ISourceQuery<IUserCertificateSource>, ISourceItem<IUserCertificateSource>, IUserCertificateQueryParams>(UserCertificateApiLink, "post");
export const UserCertificatePromise = createPromise<ISourceQuery<IUserCertificateSource>, ISourceItem<IUserCertificateSource>, IUserCertificateQueryParams>(UserCertificateApiLink, "post");

export interface IUserCertificateFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IUserCertificateSource>>>> {
}

export const UserCertificateFilterProvider: FC<IUserCertificateFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IUserCertificateSource>>> name={"UserCertificate"} {...props}/>;

export const useUserCertificateOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IUserCertificateSource>>>();
export const useUserCertificateFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IUserCertificateSource>>>();

export interface IUserCertificateProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IUserCertificateSource>>> {
}

export const UserCertificateProviderFilter: FC<IUserCertificateProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.UserCertificate"}
/>;

export interface IUserCertificateOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IUserCertificateSource>>>> {
}

export const UserCertificateOrderByProvider: FC<IUserCertificateOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IUserCertificateSource>>> name={"UserCertificate"} {...props}/>;

export const useUserCertificateOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IUserCertificateSource>>>();
export const useUserCertificateOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IUserCertificateSource>>>();

export interface IUserCertificateProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IUserCertificateSource>>, IQueryOrderBy<ISourceQuery<IUserCertificateSource>>, IUserCertificateQueryParams>> {
}

export const UserCertificateProviderControl: FC<IUserCertificateProviderControlProps> = props =>
	<SourceControlProvider<IQueryFilter<ISourceQuery<IUserCertificateSource>>, IQueryOrderBy<ISourceQuery<IUserCertificateSource>>> name={"UserCertificate"} {...props}/>;

export interface IUserCertificateListSourceProps extends Partial<IListProps<ISourceItem<IUserCertificateSource>>> {
	providerProps?: Partial<IUserCertificateProviderProps>;
}

export const UserCertificateListSource: FC<IUserCertificateListSourceProps> = ({providerProps, ...props}) => {
	return <UserCertificateProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<IUserCertificateSource>>
			{...props}
		/>
	</UserCertificateProvider>;
}

export interface IUserCertificateSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IUserCertificateSource>> {
	toOption: IToOptionMapper<ISourceItem<IUserCertificateSource>>;
	providerProps?: Partial<IUserCertificateProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const UserCertificateSourceSelect: FC<IUserCertificateSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<UserCertificateProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IUserCertificateSource>> {...props}/>
				</UserCertificateProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.UserCertificate.title"}
					size={props.size}
					tooltip={"common.selection.UserCertificate.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<UserCertificateProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</UserCertificateProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IUserCertificateSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IUserCertificateSource>>> {
}

export const UserCertificateSelectionProvider: FC<IUserCertificateSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IUserCertificateSource>> {...props}/>;
}

export const useUserCertificateCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([UserCertificateCountApiLink]);
};

export const useUserCertificateQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([UserCertificateApiLink]),
		withCount && queryClient.invalidateQueries([UserCertificateCountApiLink]),
	]);
};

export const useUserCertificateOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IUserCertificateSource>>();
export const useUserCertificateSelectionContext = () => useSelectionContext<ISourceItem<IUserCertificateSource>>();
