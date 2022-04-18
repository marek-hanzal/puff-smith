/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBase, IBaseQuery} from "@/puff-smith/service/base";
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

export const InventoryBasesApiLink = "/api/base/inventory/base/query";

export type IInventoryBasesQueryParams = undefined;

export const useInventoryBasesQuery = createQueryHook<IBaseQuery, IQueryResult<IBase>, IInventoryBasesQueryParams>(InventoryBasesApiLink, "post");

export const useInventoryBasesSource = () => useSourceContext<IBase>();

export interface IInventoryBasesSourceContext extends ISourceContext<IBase> {
}

export interface IInventoryBasesSourceConsumerProps extends ConsumerProps<ISourceContext<IBase>> {
}

export const InventoryBasesSourceConsumer: FC<IInventoryBasesSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IInventoryBasesSourceProps extends Partial<ISourceProviderProps<IBase>> {
}

export const InventoryBasesSource: FC<IInventoryBasesSourceProps> = props => {
	return <SourceProvider<IBase>
		name={"InventoryBases"}
		useQuery={useInventoryBasesQuery}
		{...props}
	/>;
}

export const toInventoryBasesLink = (queryParams?: IInventoryBasesQueryParams) => toLink(InventoryBasesApiLink, queryParams);
export const useInventoryBasesLink = () => toInventoryBasesLink;

export const useInventoryBasesPromise = createPromiseHook<IBaseQuery, IBase, IInventoryBasesQueryParams>(InventoryBasesApiLink, "post");
export const InventoryBasesPromise = createPromise<IBaseQuery, IBase, IInventoryBasesQueryParams>(InventoryBasesApiLink, "post");

export interface IInventoryBasesFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBaseQuery>>> {
}

export const InventoryBasesFilterProvider: FC<IInventoryBasesFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBaseQuery>> name={"InventoryBases"} {...props}/>;

export const useInventoryBasesOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBaseQuery>>();
export const useInventoryBasesFilterContext = () => useFilterContext<IQueryFilter<IBaseQuery>>();

export interface IInventoryBasesSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBaseQuery>> {
}

export const InventoryBasesSourceFilter: FC<IInventoryBasesSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.InventoryBases"}
/>;

export interface IInventoryBasesOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBaseQuery>>> {
}

export const InventoryBasesOrderByProvider: FC<IInventoryBasesOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBaseQuery>> name={"InventoryBases"} {...props}/>;

export const useInventoryBasesOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBaseQuery>>();
export const useInventoryBasesOrderByContext = () => useOrderByContext<IQueryOrderBy<IBaseQuery>>();

export interface IInventoryBasesListSourceProps extends Partial<IListProps<IBase>> {
	sourceProps?: Partial<IInventoryBasesSourceProps>;
}

export interface IInventoryBasesSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBaseQuery>, IQueryOrderBy<IBaseQuery>, IInventoryBasesQueryParams>> {
}

export const InventoryBasesSourceControlProvider: FC<IInventoryBasesSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBaseQuery>, IQueryOrderBy<IBaseQuery>> name={"InventoryBases"} {...props}/>;

export const InventoryBasesListSource: FC<IInventoryBasesListSourceProps> = ({sourceProps, ...props}) => {
	return <InventoryBasesSource
		{...sourceProps}
	>
		<List<IBase>
			{...props}
		/>
	</InventoryBasesSource>
}

export interface IInventoryBasesSourceSelectProps extends IQuerySourceSelectProps<IBase> {
	toOption: IToOptionMapper<IBase>;
	sourceProps?: IInventoryBasesSourceProps;
	selectionList?: () => ReactNode;
	withTranslation?: string;
}

export const InventoryBasesSourceSelect: FC<IInventoryBasesSourceSelectProps> = ({sourceProps, selectionList, withTranslation, ...props}) => {
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
					<InventoryBasesSourceControlProvider>
						<SelectionProvider type={"single"}>
							{selectionList()}
						</SelectionProvider>
					</InventoryBasesSourceControlProvider>
				</DrawerButton>}
			</Col>
			<Col flex={"auto"}>
				<InventoryBasesSource {...sourceProps}>
					<QuerySourceSelect<IBase> {...props}/>
				</InventoryBasesSource>
			</Col>
		</Row>
	</Input.Group>;
};

export const useInventoryBasesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([InventoryBasesApiLink]);
};

export const useInventoryBasesOptionalSelectionContext = () => useOptionalSelectionContext<IBase>();
export const useInventoryBasesSelectionContext = () => useSelectionContext<IBase>();
