/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBase, IBaseQuery} from "@/puff-smith/service/base/interface";
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

export const InventoryBaseApiLink = "/api/base/inventory/base/query";

export type IInventoryBaseQueryParams = undefined;

export const useInventoryBaseQuery = createQueryHook<IBaseQuery, IQueryResult<IBase>, IInventoryBaseQueryParams>(InventoryBaseApiLink, "post");

export const useInventoryBaseSource = () => useSourceContext<IBase>();

export interface IInventoryBaseSourceContext extends ISourceContext<IBase> {
}

export interface IInventoryBaseSourceConsumerProps extends ConsumerProps<ISourceContext<IBase>> {
}

export const InventoryBaseSourceConsumer: FC<IInventoryBaseSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IInventoryBaseSourceProps extends Partial<ISourceProviderProps<IBase>> {
}

export const InventoryBaseSource: FC<IInventoryBaseSourceProps> = props => {
	return <SourceProvider<IBase>
		name={"InventoryBase"}
		useQuery={useInventoryBaseQuery}
		{...props}
	/>;
};

export const toInventoryBaseLink = (queryParams?: IInventoryBaseQueryParams) => toLink(InventoryBaseApiLink, queryParams);
export const useInventoryBaseLink = () => toInventoryBaseLink;

export const useInventoryBasePromise = createPromiseHook<IBaseQuery, IBase, IInventoryBaseQueryParams>(InventoryBaseApiLink, "post");
export const InventoryBasePromise = createPromise<IBaseQuery, IBase, IInventoryBaseQueryParams>(InventoryBaseApiLink, "post");

export interface IInventoryBaseFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBaseQuery>>> {
}

export const InventoryBaseFilterProvider: FC<IInventoryBaseFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBaseQuery>> name={"InventoryBase"} {...props}/>;

export const useInventoryBaseOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBaseQuery>>();
export const useInventoryBaseFilterContext = () => useFilterContext<IQueryFilter<IBaseQuery>>();

export interface IInventoryBaseSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBaseQuery>> {
}

export const InventoryBaseSourceFilter: FC<IInventoryBaseSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.InventoryBase"}
/>;

export interface IInventoryBaseOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IBaseQuery>>> {
}

export const InventoryBaseOrderByProvider: FC<IInventoryBaseOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IBaseQuery>> name={"InventoryBase"} {...props}/>;

export const useInventoryBaseOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IBaseQuery>>();
export const useInventoryBaseOrderByContext = () => useOrderByContext<IQueryOrderBy<IBaseQuery>>();

export interface IInventoryBaseListSourceProps extends Partial<IListProps<IBase>> {
	sourceProps?: Partial<IInventoryBaseSourceProps>;
}

export interface IInventoryBaseSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBaseQuery>, IQueryOrderBy<IBaseQuery>, IInventoryBaseQueryParams>> {
}

export const InventoryBaseSourceControlProvider: FC<IInventoryBaseSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBaseQuery>, IQueryOrderBy<IBaseQuery>> name={"InventoryBase"} {...props}/>;

export const InventoryBaseListSource: FC<IInventoryBaseListSourceProps> = ({sourceProps, ...props}) => {
	return <InventoryBaseSource
		{...sourceProps}
	>
		<List<IBase>
			{...props}
		/>
	</InventoryBaseSource>;
};

export interface IInventoryBaseSourceSelectProps extends IQuerySourceSelectProps<IBase> {
	toOption: IToOptionMapper<IBase>;
	sourceProps?: IInventoryBaseSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const InventoryBaseSourceSelect: FC<IInventoryBaseSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<InventoryBaseSource {...sourceProps}>
					<QuerySourceSelect<IBase> {...props}/>
				</InventoryBaseSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.InventoryBase.title"}
					size={props.size}
					tooltip={"common.selection.InventoryBase.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<InventoryBaseSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</InventoryBaseSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IInventoryBaseSelectionProviderProps extends Partial<ISelectionProviderProps<IBase>> {
}

export const InventoryBaseSelectionProvider: FC<IInventoryBaseSelectionProviderProps> = props => {
	return <SelectionProvider<IBase> {...props}/>;
};

export const useInventoryBaseQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([InventoryBaseApiLink]);
};

export const useInventoryBaseOptionalSelectionContext = () => useOptionalSelectionContext<IBase>();
export const useInventoryBaseSelectionContext = () => useSelectionContext<IBase>();
