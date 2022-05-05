/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBase} from "@/puff-smith/service/base/interface";
import {IMixtureQuery} from "@/puff-smith/service/mixture/interface";
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

export const BaseApiLink = "/api/mixture/inventory/mixture/base";

export type IBaseQueryParams = undefined;

export const useBaseQuery = createQueryHook<IMixtureQuery, IQueryResult<IBase>, IBaseQueryParams>(BaseApiLink, "post");

export const useBaseSource = () => useSourceContext<IBase>();

export interface IBaseSourceContext extends ISourceContext<IBase> {
}

export interface IBaseSourceConsumerProps extends ConsumerProps<ISourceContext<IBase>> {
}

export const BaseSourceConsumer: FC<IBaseSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBaseSourceProps extends Partial<ISourceProviderProps<IBase>> {
}

export const BaseSource: FC<IBaseSourceProps> = props => {
	return <SourceProvider<IBase>
		name={"Base"}
		useQuery={useBaseQuery}
		{...props}
	/>;
};

export const toBaseLink = (queryParams?: IBaseQueryParams) => toLink(BaseApiLink, queryParams);
export const useBaseLink = () => toBaseLink;

export const useBasePromise = createPromiseHook<IMixtureQuery, IBase, IBaseQueryParams>(BaseApiLink, "post");
export const BasePromise = createPromise<IMixtureQuery, IBase, IBaseQueryParams>(BaseApiLink, "post");

export interface IBaseFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IMixtureQuery>>> {
}

export const BaseFilterProvider: FC<IBaseFilterProviderProps> = props => <FilterProvider<IQueryFilter<IMixtureQuery>> name={"Base"} {...props}/>;

export const useBaseOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IMixtureQuery>>();
export const useBaseFilterContext = () => useFilterContext<IQueryFilter<IMixtureQuery>>();

export interface IBaseSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IMixtureQuery>> {
}

export const BaseSourceFilter: FC<IBaseSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Base"}
/>;

export interface IBaseOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IMixtureQuery>>> {
}

export const BaseOrderByProvider: FC<IBaseOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IMixtureQuery>> name={"Base"} {...props}/>;

export const useBaseOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IMixtureQuery>>();
export const useBaseOrderByContext = () => useOrderByContext<IQueryOrderBy<IMixtureQuery>>();

export interface IBaseListSourceProps extends Partial<IListProps<IBase>> {
	sourceProps?: Partial<IBaseSourceProps>;
}

export interface IBaseSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IMixtureQuery>, IQueryOrderBy<IMixtureQuery>, IBaseQueryParams>> {
}

export const BaseSourceControlProvider: FC<IBaseSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IMixtureQuery>, IQueryOrderBy<IMixtureQuery>> name={"Base"} {...props}/>;

export const BaseListSource: FC<IBaseListSourceProps> = ({sourceProps, ...props}) => {
	return <BaseSource
		{...sourceProps}
	>
		<List<IBase>
			{...props}
		/>
	</BaseSource>;
}

export interface IBaseSourceSelectProps extends IQuerySourceSelectProps<IBase> {
	toOption: IToOptionMapper<IBase>;
	sourceProps?: IBaseSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const BaseSourceSelect: FC<IBaseSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<BaseSource {...sourceProps}>
					<QuerySourceSelect<IBase> {...props}/>
				</BaseSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Base.title"}
					size={props.size}
					tooltip={"common.selection.Base.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<BaseSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</BaseSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IBaseSelectionProviderProps extends Partial<ISelectionProviderProps<IBase>> {
}

export const BaseSelectionProvider: FC<IBaseSelectionProviderProps> = props => {
	return <SelectionProvider<IBase> {...props}/>;
}

export const useBaseQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseApiLink]);
};

export const useBaseOptionalSelectionContext = () => useOptionalSelectionContext<IBase>();
export const useBaseSelectionContext = () => useSelectionContext<IBase>();
