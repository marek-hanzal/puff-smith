/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
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

export const AtomizerApiLink = "/api/atomizer/query";

export type IAtomizerQueryParams = undefined;

export const useAtomizerQuery = createQueryHook<IAtomizerQuery, IQueryResult<IAtomizer>, IAtomizerQueryParams>(AtomizerApiLink, "post");

export const useAtomizerSource = () => useSourceContext<IAtomizer>();

export interface IAtomizerSourceContext extends ISourceContext<IAtomizer> {
}

export interface IAtomizerSourceConsumerProps extends ConsumerProps<ISourceContext<IAtomizer>> {
}

export const AtomizerSourceConsumer: FC<IAtomizerSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IAtomizerSourceProps extends Partial<ISourceProviderProps<IAtomizer>> {
}

export const AtomizerSource: FC<IAtomizerSourceProps> = props => {
	return <SourceProvider<IAtomizer>
		name={"Atomizer"}
		useQuery={useAtomizerQuery}
		{...props}
	/>;
};

export const toAtomizerLink = (queryParams?: IAtomizerQueryParams) => toLink(AtomizerApiLink, queryParams);
export const useAtomizerLink = () => toAtomizerLink;

export const useAtomizerPromise = createPromiseHook<IAtomizerQuery, IAtomizer, IAtomizerQueryParams>(AtomizerApiLink, "post");
export const AtomizerPromise = createPromise<IAtomizerQuery, IAtomizer, IAtomizerQueryParams>(AtomizerApiLink, "post");

export interface IAtomizerFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IAtomizerQuery>>> {
}

export const AtomizerFilterProvider: FC<IAtomizerFilterProviderProps> = props => <FilterProvider<IQueryFilter<IAtomizerQuery>> name={"Atomizer"} {...props}/>;

export const useAtomizerOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IAtomizerQuery>>();
export const useAtomizerFilterContext = () => useFilterContext<IQueryFilter<IAtomizerQuery>>();

export interface IAtomizerSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IAtomizerQuery>> {
}

export const AtomizerSourceFilter: FC<IAtomizerSourceFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Atomizer"}
/>;

export interface IAtomizerOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<IAtomizerQuery>>> {
}

export const AtomizerOrderByProvider: FC<IAtomizerOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<IAtomizerQuery>> name={"Atomizer"} {...props}/>;

export const useAtomizerOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<IAtomizerQuery>>();
export const useAtomizerOrderByContext = () => useOrderByContext<IQueryOrderBy<IAtomizerQuery>>();

export interface IAtomizerListSourceProps extends Partial<IListProps<IAtomizer>> {
	sourceProps?: Partial<IAtomizerSourceProps>;
}

export interface IAtomizerSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>, IAtomizerQueryParams>> {
}

export const AtomizerSourceControlProvider: FC<IAtomizerSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IAtomizerQuery>, IQueryOrderBy<IAtomizerQuery>> name={"Atomizer"} {...props}/>;

export const AtomizerListSource: FC<IAtomizerListSourceProps> = ({sourceProps, ...props}) => {
	return <AtomizerSource
		{...sourceProps}
	>
		<List<IAtomizer>
			{...props}
		/>
	</AtomizerSource>;
};

export interface IAtomizerSourceSelectProps extends IQuerySourceSelectProps<IAtomizer> {
	toOption: IToOptionMapper<IAtomizer>;
	sourceProps?: IAtomizerSourceProps;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const AtomizerSourceSelect: FC<IAtomizerSourceSelectProps> = ({sourceProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<AtomizerSource {...sourceProps}>
					<QuerySourceSelect<IAtomizer> {...props}/>
				</AtomizerSource>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Atomizer.title"}
					size={props.size}
					tooltip={"common.selection.Atomizer.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<AtomizerSourceControlProvider>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</AtomizerSourceControlProvider>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IAtomizerSelectionProviderProps extends Partial<ISelectionProviderProps<IAtomizer>> {
}

export const AtomizerSelectionProvider: FC<IAtomizerSelectionProviderProps> = props => {
	return <SelectionProvider<IAtomizer> {...props}/>;
};

export const useAtomizerQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerApiLink]);
};

export const useAtomizerOptionalSelectionContext = () => useOptionalSelectionContext<IAtomizer>();
export const useAtomizerSelectionContext = () => useSelectionContext<IAtomizer>();
