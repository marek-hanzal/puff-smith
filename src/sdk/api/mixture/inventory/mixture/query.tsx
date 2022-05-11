/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixture, IMixtureQuery} from "@/puff-smith/service/mixture/interface";
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

export const MixtureApiLink = "/api/mixture/inventory/mixture/query";

export type IMixtureQueryParams = undefined;

export const useMixtureQuery = createQueryHook<IMixtureQuery, IQueryResult<IMixture>, IMixtureQueryParams>(MixtureApiLink, "post");

export const useMixtureSource = () => useSourceContext<IMixture>();

export interface IMixtureSourceContext extends ISourceContext<IMixture> {
}

export interface IMixtureSourceConsumerProps extends ConsumerProps<ISourceContext<IMixture>> {
}

export const MixtureSourceConsumer: FC<IMixtureSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixtureSourceProps extends Partial<ISourceProviderProps<IMixture>> {
}

export const MixtureSource: FC<IMixtureSourceProps> = props => {
	return <SourceProvider<IMixture>
		name={"Mixture"}
		useQuery={useMixtureQuery}
		{...props}
	/>;
};

export const toMixtureLink = (queryParams?: IMixtureQueryParams) => toLink(MixtureApiLink, queryParams);
export const useMixtureLink = () => toMixtureLink;

export const useMixturePromise = createPromiseHook<IMixtureQuery, IMixture, IMixtureQueryParams>(MixtureApiLink, "post");
export const MixturePromise = createPromise<IMixtureQuery, IMixture, IMixtureQueryParams>(MixtureApiLink, "post");

export interface IMixtureFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IMixtureQuery>>> {
}

export const MixtureFilterProvider: FC<IMixtureFilterProviderProps> = props => <FilterProvider<IQueryFilter<IMixtureQuery>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IMixtureQuery>>();
export const useMixtureFilterContext = () => useFilterContext<IQueryFilter<IMixtureQuery>>();

export interface IMixtureSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IMixtureQuery>> {
}

export const MixtureSourceFilter: FC<IMixtureSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mixture"}
/>;

export interface IMixtureOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IMixtureQuery>>> {
}

export const MixtureOrderByProvider: FC<IMixtureOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IMixtureQuery>> name={"Mixture"} {...props}/>;

export const useMixtureOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IMixtureQuery>>();
export const useMixtureOrderByContext = () => useOrderByContext<IQueryOrderBy<IMixtureQuery>>();

export interface IMixtureListSourceProps extends Partial<IListProps<IMixture>> {
	sourceProps?: Partial<IMixtureSourceProps>;
}

export interface IMixtureSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IMixtureQuery>, IQueryOrderBy<IMixtureQuery>, IMixtureQueryParams>> {
}

export const MixtureSourceControlProvider: FC<IMixtureSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IMixtureQuery>, IQueryOrderBy<IMixtureQuery>> name={"Mixture"} {...props}/>;

export const MixtureListSource: FC<IMixtureListSourceProps> = ({sourceProps, ...props}) => {
	return <MixtureSource
		{...sourceProps}
	>
		<List<IMixture>
			{...props}
		/>
	</MixtureSource>;
}

export interface IMixtureSourceSelectProps extends IQuerySourceSelectProps<IMixture> {
	toOption: IToOptionMapper<IMixture>;
	sourceProps?: IMixtureSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixtureSourceSelect: FC<IMixtureSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixtureSource {...sourceProps}>
					<QuerySourceSelect<IMixture> {...props}/>
				</MixtureSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Mixture.title"}
					size={props.size}
					tooltip={"common.selection.Mixture.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<MixtureSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixtureSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixtureSelectionProviderProps extends Partial<ISelectionProviderProps<IMixture>> {
}

export const MixtureSelectionProvider: FC<IMixtureSelectionProviderProps> = props => {
	return <SelectionProvider<IMixture> {...props}/>;
}

export const useMixtureQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixtureApiLink]);
};

export const useMixtureOptionalSelectionContext = () => useOptionalSelectionContext<IMixture>();
export const useMixtureSelectionContext = () => useSelectionContext<IMixture>();
