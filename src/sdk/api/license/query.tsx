/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILicenseSource} from "@/puff-smith/service/license/interface";
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

export const LicenseApiLink = "/api/license/query";
export const LicenseCountApiLink = "/api/license/query/count";

export type ILicenseQueryParams = any;

export const useLicenseQuery = createQueryHook<ISourceQuery<ILicenseSource>, ISourceItem<ILicenseSource>[], ILicenseQueryParams>(LicenseApiLink, "post");
export const useLicenseCountQuery = createQueryHook<ISourceQuery<ILicenseSource>, number, ILicenseQueryParams>(LicenseCountApiLink, "post");

export const useLicenseSource = () => useSourceContext<ISourceItem<ILicenseSource>>();

export interface ILicenseSourceContext extends ISourceContext<ISourceItem<ILicenseSource>> {
}

export interface ILicenseSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ILicenseSource>>> {
}

export const LicenseSourceConsumer: FC<ILicenseSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ILicenseProviderProps extends Partial<ISourceProviderProps<ISourceItem<ILicenseSource>>> {
}

export const LicenseProvider: FC<ILicenseProviderProps> = props => {
	return <SourceProvider<ISourceItem<ILicenseSource>>
		name={"License"}
		useQuery={useLicenseQuery}
		useCountQuery={useLicenseCountQuery}
		{...props}
	/>;
};

export const toLicenseLink = (queryParams?: ILicenseQueryParams) => toLink(LicenseApiLink, queryParams);
export const useLicenseLink = () => toLicenseLink;

export const useLicensePromise = createPromiseHook<ISourceQuery<ILicenseSource>, ISourceItem<ILicenseSource>, ILicenseQueryParams>(LicenseApiLink, "post");
export const LicensePromise = createPromise<ISourceQuery<ILicenseSource>, ISourceItem<ILicenseSource>, ILicenseQueryParams>(LicenseApiLink, "post");

export interface ILicenseFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ILicenseSource>>>> {
}

export const LicenseFilterProvider: FC<ILicenseFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ILicenseSource>>> name={"License"} {...props}/>;

export const useLicenseOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ILicenseSource>>>();
export const useLicenseFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ILicenseSource>>>();

export interface ILicenseProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ILicenseSource>>> {
}

export const LicenseProviderFilter: FC<ILicenseProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.License"}
/>;

export interface ILicenseOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ILicenseSource>>>> {
}

export const LicenseOrderByProvider: FC<ILicenseOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ILicenseSource>>> name={"License"} {...props}/>;

export const useLicenseOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ILicenseSource>>>();
export const useLicenseOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ILicenseSource>>>();

export interface ILicenseProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ILicenseSource>>, IQueryOrderBy<ISourceQuery<ILicenseSource>>, ILicenseQueryParams>> {
}

export const LicenseProviderControl: FC<ILicenseProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ILicenseSource>>, IQueryOrderBy<ISourceQuery<ILicenseSource>>> name={"License"} {...props}/>;

export interface ILicenseListSourceProps extends Partial<IListProps<ISourceItem<ILicenseSource>>> {
	providerProps?: Partial<ILicenseProviderProps>;
}

export const LicenseListSource: FC<ILicenseListSourceProps> = ({providerProps, ...props}) => {
	return <LicenseProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<ILicenseSource>>
			{...props}
		/>
	</LicenseProvider>;
}

export interface ILicenseInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<ILicenseSource>>> {
	providerProps?: Partial<ILicenseProviderProps>;
}

export const LicenseInfiniteListSource: FC<ILicenseInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <LicenseProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<ILicenseSource>>
			{...props}
		/>
	</LicenseProvider>;
};

export interface ILicenseSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ILicenseSource>> {
	toOption: IToOptionMapper<ISourceItem<ILicenseSource>>;
	providerProps?: Partial<ILicenseProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const LicenseSourceSelect: FC<ILicenseSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<LicenseProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ILicenseSource>> {...props}/>
				</LicenseProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.License.title"}
					size={props.size}
					tooltip={"common.selection.License.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<LicenseProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</LicenseProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ILicenseSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ILicenseSource>>> {
}

export const LicenseSelectionProvider: FC<ILicenseSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ILicenseSource>> {...props}/>;
}

export const useLicenseCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([LicenseCountApiLink]);
};

export const useLicenseQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([LicenseApiLink]),
		withCount && queryClient.invalidateQueries([LicenseCountApiLink]),
	]);
};

export const useLicenseOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ILicenseSource>>();
export const useLicenseSelectionContext = () => useSelectionContext<ISourceItem<ILicenseSource>>();
