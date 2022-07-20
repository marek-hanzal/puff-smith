/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
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

export const CertificateApiLink = "/api/certificate/query";
export const CertificateCountApiLink = "/api/certificate/query/count";

export type ICertificateQueryParams = any;

export const useCertificateQuery = createQueryHook<ISourceQuery<ICertificateSource>, ISourceItem<ICertificateSource>[], ICertificateQueryParams>(CertificateApiLink, "post");
export const useCertificateCountQuery = createQueryHook<ISourceQuery<ICertificateSource>, number, ICertificateQueryParams>(CertificateCountApiLink, "post");

export const useCertificateSource = () => useSourceContext<ISourceItem<ICertificateSource>>()

export interface ICertificateSourceContext extends ISourceContext<ISourceItem<ICertificateSource>> {
}

export interface ICertificateSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ICertificateSource>>> {
}

export const CertificateSourceConsumer: FC<ICertificateSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ICertificateProviderProps extends Partial<ISourceProviderProps<ISourceItem<ICertificateSource>>> {
}

export const CertificateProvider: FC<ICertificateProviderProps> = props => {
	return <SourceProvider<ISourceItem<ICertificateSource>>
		name={"Certificate"}
		useQuery={useCertificateQuery}
		useCountQuery={useCertificateCountQuery}
		{...props}
	/>;
};

export const toCertificateLink = (queryParams?: ICertificateQueryParams) => toLink(CertificateApiLink, queryParams);
export const useCertificateLink = () => toCertificateLink;

export const useCertificatePromise = createPromiseHook<ISourceQuery<ICertificateSource>, ISourceItem<ICertificateSource>, ICertificateQueryParams>(CertificateApiLink, "post");
export const CertificatePromise = createPromise<ISourceQuery<ICertificateSource>, ISourceItem<ICertificateSource>, ICertificateQueryParams>(CertificateApiLink, "post");

export interface ICertificateFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ICertificateSource>>>> {
}

export const CertificateFilterProvider: FC<ICertificateFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ICertificateSource>>> name={"Certificate"} {...props}/>;

export const useCertificateOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ICertificateSource>>>()
export const useCertificateFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ICertificateSource>>>()

export interface ICertificateProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ICertificateSource>>> {
}

export const CertificateProviderFilter: FC<ICertificateProviderFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Certificate'}
/>;

export interface ICertificateOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ICertificateSource>>>> {
}

export const CertificateOrderByProvider: FC<ICertificateOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ICertificateSource>>> name={"Certificate"} {...props}/>;

export const useCertificateOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ICertificateSource>>>()
export const useCertificateOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ICertificateSource>>>()

export interface ICertificateProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ICertificateSource>>, IQueryOrderBy<ISourceQuery<ICertificateSource>>, ICertificateQueryParams>> {
}

export const CertificateProviderControl: FC<ICertificateProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ICertificateSource>>, IQueryOrderBy<ISourceQuery<ICertificateSource>>> name={"Certificate"} {...props}/>;

export interface ICertificateListSourceProps extends Partial<IListProps<ISourceItem<ICertificateSource>>> {
	providerProps?: Partial<ICertificateProviderProps>;
}

export const CertificateListSource: FC<ICertificateListSourceProps> = ({providerProps, ...props}) => {
	return <CertificateProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ICertificateSource>>
			{...props}
		/>
	</CertificateProvider>;
}

export interface ICertificateInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ICertificateSource>>> {
	providerProps?: Partial<ICertificateProviderProps>;
}

export const CertificateInfiniteListSource: FC<ICertificateInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <CertificateProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ICertificateSource>>
			{...props}
		/>
	</CertificateProvider>;
}

export interface ICertificateSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ICertificateSource>> {
	toOption: IToOptionMapper<ISourceItem<ICertificateSource>>;
	providerProps?: Partial<ICertificateProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const CertificateSourceSelect: FC<ICertificateSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<CertificateProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ICertificateSource>> {...props}/>
				</CertificateProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Certificate.title"}
					size={props.size}
					tooltip={"common.selection.Certificate.title.tooltip"}
					width={800}
					type={'text'}
					ghost
				>
					<CertificateProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</CertificateProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ICertificateSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ICertificateSource>>> {
}

export const CertificateSelectionProvider: FC<ICertificateSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ICertificateSource>> {...props}/>
}

export const useCertificateCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CertificateCountApiLink]);
};

export const useCertificateQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([CertificateApiLink]),
		withCount && queryClient.invalidateQueries([CertificateCountApiLink]),
	]);
};

export const useCertificateOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ICertificateSource>>();
export const useCertificateSelectionContext = () => useSelectionContext<ISourceItem<ICertificateSource>>();
