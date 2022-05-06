/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
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

export const TypeApiLink = "/api/cell/type/query";

export type ITypeQueryParams = undefined;

export const useTypeQuery = createQueryHook<IAtomizerQuery, IQueryResult<ITag>, ITypeQueryParams>(TypeApiLink, "post");

export const useTypeSource = () => useSourceContext<ITag>();

export interface ITypeSourceContext extends ISourceContext<ITag> {
}

export interface ITypeSourceConsumerProps extends ConsumerProps<ISourceContext<ITag>> {
}

export const TypeSourceConsumer: FC<ITypeSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITypeSourceProps extends Partial<ISourceProviderProps<ITag>> {
}

export const TypeSource: FC<ITypeSourceProps> = props => {
	return <SourceProvider<ITag>
		name={"Type"}
		useQuery={useTypeQuery}
		{...props}
	/>;
};

export const toTypeLink = (queryParams?: ITypeQueryParams) => toLink(TypeApiLink, queryParams);
export const useTypeLink = () => toTypeLink;

export const useTypePromise = createPromiseHook<IAtomizerQuery, ITag, ITypeQueryParams>(TypeApiLink, "post");
export const TypePromise = createPromise<IAtomizerQuery, ITag, ITypeQueryParams>(TypeApiLink, "post");

export interface ITypeFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerQuery>>> {
}

export const TypeFilterProvider: FC<ITypeFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerQuery>> name={"Type"} {...props}/>;

export const useTypeOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerQuery>>();
export const useTypeFilterContext = () => useFilterContext<IQueryFilter<IAtomizerQuery>>();

export interface ITypeSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerQuery>> {
}

export const TypeSourceFilter: FC<ITypeSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Type"}
/>;

export interface ITypeOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerQuery>>> {
}

export const TypeOrderByProvider: FC<ITypeOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerQuery>> name={"Type"} {...props}/>;

export const useTypeOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerQuery>>();
export const useTypeOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerQuery>>();

export interface ITypeListSourceProps extends Partial<IListProps<ITag>> {
	sourceProps?: Partial<ITypeSourceProps>;
}

export interface ITypeSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>, ITypeQueryParams>> {
}

export const TypeSourceControlProvider: FC<ITypeSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>> name={"Type"} {...props}/>;

export const TypeListSource: FC<ITypeListSourceProps> = ({sourceProps, ...props}) => {
	return <TypeSource
		{...sourceProps}
	>
		<List<ITag>
			{...props}
		/>
	</TypeSource>;
}

export interface ITypeSourceSelectProps extends IQuerySourceSelectProps<ITag> {
	toOption: IToOptionMapper<ITag>;
	sourceProps?: ITypeSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TypeSourceSelect: FC<ITypeSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TypeSource {...sourceProps}>
					<QuerySourceSelect<ITag> {...props}/>
				</TypeSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Type.title"}
					size={props.size}
					tooltip={"common.selection.Type.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<TypeSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TypeSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITypeSelectionProviderProps extends Partial<ISelectionProviderProps<ITag>> {
}

export const TypeSelectionProvider: FC<ITypeSelectionProviderProps> = props => {
	return <SelectionProvider<ITag> {...props}/>;
}

export const useTypeQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TypeApiLink]);
};

export const useTypeOptionalSelectionContext = () => useOptionalSelectionContext<ITag>();
export const useTypeSelectionContext = () => useSelectionContext<ITag>();
