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

export const MixturesApiLink = "/api/mixture/inventory/mixture/query";

export type IMixturesQueryParams = undefined;

export const useMixturesQuery = createQueryHook<IMixtureQuery, IQueryResult<IMixture>, IMixturesQueryParams>(MixturesApiLink, "post");

export const useMixturesSource = () => useSourceContext<IMixture>();

export interface IMixturesSourceContext extends ISourceContext<IMixture> {
}

export interface IMixturesSourceConsumerProps extends ConsumerProps<ISourceContext<IMixture>> {
}

export const MixturesSourceConsumer: FC<IMixturesSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IMixturesSourceProps extends Partial<ISourceProviderProps<IMixture>> {
}

export const MixturesSource: FC<IMixturesSourceProps> = props => {
	return <SourceProvider<IMixture>
		name={"Mixtures"}
		useQuery={useMixturesQuery}
		{...props}
	/>;
};

export const toMixturesLink = (queryParams?: IMixturesQueryParams) => toLink(MixturesApiLink, queryParams);
export const useMixturesLink = () => toMixturesLink;

export const useMixturesPromise = createPromiseHook<IMixtureQuery, IMixture, IMixturesQueryParams>(MixturesApiLink, "post");
export const MixturesPromise = createPromise<IMixtureQuery, IMixture, IMixturesQueryParams>(MixturesApiLink, "post");

export interface IMixturesFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IMixtureQuery>>> {
}

export const MixturesFilterProvider: FC<IMixturesFilterProviderProps> = props => <FilterProvider<IQueryFilter<IMixtureQuery>> name={"Mixtures"} {...props}/>;

export const useMixturesOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IMixtureQuery>>();
export const useMixturesFilterContext = () => useFilterContext<IQueryFilter<IMixtureQuery>>();

export interface IMixturesSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IMixtureQuery>> {
}

export const MixturesSourceFilter: FC<IMixturesSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Mixtures"}
/>;

export interface IMixturesOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IMixtureQuery>>> {
}

export const MixturesOrderByProvider: FC<IMixturesOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IMixtureQuery>> name={"Mixtures"} {...props}/>;

export const useMixturesOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IMixtureQuery>>();
export const useMixturesOrderByContext = () => useOrderByContext<IQueryOrderBy<IMixtureQuery>>();

export interface IMixturesListSourceProps extends Partial<IListProps<IMixture>> {
	sourceProps?: Partial<IMixturesSourceProps>;
}

export interface IMixturesSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IMixtureQuery>, IQueryOrderBy<IMixtureQuery>, IMixturesQueryParams>> {
}

export const MixturesSourceControlProvider: FC<IMixturesSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IMixtureQuery>, IQueryOrderBy<IMixtureQuery>> name={"Mixtures"} {...props}/>;

export const MixturesListSource: FC<IMixturesListSourceProps> = ({sourceProps, ...props}) => {
	return <MixturesSource
		{...sourceProps}
	>
		<List<IMixture>
			{...props}
		/>
	</MixturesSource>;
}

export interface IMixturesSourceSelectProps extends IQuerySourceSelectProps<IMixture> {
	toOption: IToOptionMapper<IMixture>;
	sourceProps?: IMixturesSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const MixturesSourceSelect: FC<IMixturesSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<MixturesSource {...sourceProps}>
					<QuerySourceSelect<IMixture> {...props}/>
				</MixturesSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Mixtures.title"}
					size={props.size}
					tooltip={"common.selection.Mixtures.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<MixturesSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</MixturesSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IMixturesSelectionProviderProps extends Partial<ISelectionProviderProps<IMixture>> {
}

export const MixturesSelectionProvider: FC<IMixturesSelectionProviderProps> = props => {
	return <SelectionProvider<IMixture> {...props}/>;
};

export const useMixturesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixturesApiLink]);
};

export const useMixturesOptionalSelectionContext = () => useOptionalSelectionContext<IMixture>();
export const useMixturesSelectionContext = () => useSelectionContext<IMixture>();
