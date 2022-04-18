/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer";
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

export const AtomizersApiLink = "/api/atomizer/query";

export type IAtomizersQueryParams = undefined;

export const useAtomizersQuery = createQueryHook<IAtomizerQuery, IQueryResult<IAtomizer>, IAtomizersQueryParams>(AtomizersApiLink, "post");

export const useAtomizersSource = () => useSourceContext<IAtomizer>();

export interface IAtomizersSourceContext extends ISourceContext<IAtomizer> {
}

export interface IAtomizersSourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizer>> {
}

export const AtomizersSourceConsumer: FC<IAtomizersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizersSourceProps extends Partial<ISourceProviderProps<IAtomizer>> {
}

export const AtomizersSource: FC<IAtomizersSourceProps> = props => {
	return <SourceProvider<IAtomizer>
		name={"Atomizers"}
		useQuery={useAtomizersQuery}
		{...props}
	/>;
}

export const toAtomizersLink = (queryParams?: IAtomizersQueryParams) => toLink(AtomizersApiLink, queryParams);
export const useAtomizersLink = () => toAtomizersLink;

export const useAtomizersPromise = createPromiseHook<IAtomizerQuery, IAtomizer, IAtomizersQueryParams>(AtomizersApiLink, "post");
export const AtomizersPromise = createPromise<IAtomizerQuery, IAtomizer, IAtomizersQueryParams>(AtomizersApiLink, "post");

export interface IAtomizersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerQuery>>> {
}

export const AtomizersFilterProvider: FC<IAtomizersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerQuery>> name={"Atomizers"} {...props}/>;

export const useAtomizersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerQuery>>();
export const useAtomizersFilterContext = () => useFilterContext<IQueryFilter<IAtomizerQuery>>();

export interface IAtomizersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerQuery>> {
}

export const AtomizersSourceFilter: FC<IAtomizersSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Atomizers"}
/>;

export interface IAtomizersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerQuery>>> {
}

export const AtomizersOrderByProvider: FC<IAtomizersOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerQuery>> name={"Atomizers"} {...props}/>;

export const useAtomizersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerQuery>>();
export const useAtomizersOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerQuery>>();

export interface IAtomizersListSourceProps extends Partial<IListProps<IAtomizer>> {
	sourceProps?: Partial<IAtomizersSourceProps>;
}

export interface IAtomizersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>, IAtomizersQueryParams>> {
}

export const AtomizersSourceControlProvider: FC<IAtomizersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>> name={"Atomizers"} {...props}/>;

export const AtomizersListSource: FC<IAtomizersListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizersSource
		{...sourceProps}
	>
		<List<IAtomizer>
			{...props}
		/>
	</AtomizersSource>
}

export interface IAtomizersSourceSelectProps extends IQuerySourceSelectProps<IAtomizer> {
	toOption: IToOptionMapper<IAtomizer>;
	sourceProps?: IAtomizersSourceProps;
	selectionList?: () => ReactNode;
}

export const AtomizersSourceSelect: FC<IAtomizersSourceSelectProps> = ({sourceProps, selectionList, ...props}) => {
	return <Input.Group>
		<Row gutter={8}>
			<Col span={selectionList ? 2 : 0}>
				{selectionList && <DrawerButton
					type={"text"}
					icon={<ReadOutlined/>}
					title={"common.selection.Atomizers.title"}
					tooltip={"common.selection.Atomizers.title.tooltip"}
					width={800}
				>
					<AtomizersSourceControlProvider>
						<SelectionProvider type={"single"}>
							{selectionList()}
						</SelectionProvider>
					</AtomizersSourceControlProvider>
				</DrawerButton>}
			</Col>
			<Col flex={"auto"}>
				<AtomizersSource {...sourceProps}>
					<QuerySourceSelect<IAtomizer> {...props}/>
				</AtomizersSource>
			</Col>
		</Row>
	</Input.Group>;
};

export const useAtomizersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizersApiLink]);
}

export const useAtomizersOptionalSelectionContext = () => useOptionalSelectionContext<IAtomizer>();
export const useAtomizersSelectionContext = () => useSelectionContext<IAtomizer>();
