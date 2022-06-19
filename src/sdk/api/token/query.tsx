/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITokenSource} from "@/puff-smith/service/token/interface";
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

export const TokenApiLink = "/api/token/query";
export const TokenCountApiLink = "/api/token/query/count";

export type ITokenQueryParams = any;

export const useTokenQuery = createQueryHook<ISourceQuery<ITokenSource>, ISourceItem<ITokenSource>[], ITokenQueryParams>(TokenApiLink, "post");
export const useTokenCountQuery = createQueryHook<ISourceQuery<ITokenSource>, number, ITokenQueryParams>(TokenCountApiLink, "post");

export const useTokenSource = () => useSourceContext<ISourceItem<ITokenSource>>();

export interface ITokenSourceContext extends ISourceContext<ISourceItem<ITokenSource>> {
}

export interface ITokenSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<ITokenSource>>> {
}

export const TokenSourceConsumer: FC<ITokenSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface ITokenProviderProps extends Partial<ISourceProviderProps<ISourceItem<ITokenSource>>> {
}

export const TokenProvider: FC<ITokenProviderProps> = props => {
	return <SourceProvider<ISourceItem<ITokenSource>>
		name={"Token"}
		useQuery={useTokenQuery}
		useCountQuery={useTokenCountQuery}
		{...props}
	/>;
};

export const toTokenLink = (queryParams?: ITokenQueryParams) => toLink(TokenApiLink, queryParams);
export const useTokenLink = () => toTokenLink;

export const useTokenPromise = createPromiseHook<ISourceQuery<ITokenSource>, ISourceItem<ITokenSource>, ITokenQueryParams>(TokenApiLink, "post");
export const TokenPromise = createPromise<ISourceQuery<ITokenSource>, ISourceItem<ITokenSource>, ITokenQueryParams>(TokenApiLink, "post");

export interface ITokenFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<ITokenSource>>>> {
}

export const TokenFilterProvider: FC<ITokenFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<ITokenSource>>> name={"Token"} {...props}/>;

export const useTokenOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<ITokenSource>>>();
export const useTokenFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<ITokenSource>>>();

export interface ITokenProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<ITokenSource>>> {
}

export const TokenProviderFilter: FC<ITokenProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.Token"}
/>;

export interface ITokenOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<ITokenSource>>>> {
}

export const TokenOrderByProvider: FC<ITokenOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<ITokenSource>>> name={"Token"} {...props}/>;

export const useTokenOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<ITokenSource>>>();
export const useTokenOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<ITokenSource>>>();

export interface ITokenProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<ITokenSource>>, IQueryOrderBy<ISourceQuery<ITokenSource>>, ITokenQueryParams>> {
}

export const TokenProviderControl: FC<ITokenProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<ITokenSource>>, IQueryOrderBy<ISourceQuery<ITokenSource>>> name={"Token"} {...props}/>;

export interface ITokenListSourceProps extends Partial<IListProps<ISourceItem<ITokenSource>>> {
	providerProps?: Partial<ITokenProviderProps>;
}

export const TokenListSource: FC<ITokenListSourceProps> = ({providerProps, ...props}) => {
	return <TokenProvider
		withPagination
		{...providerProps}
	>
		<List<ISourceItem<ITokenSource>>
			{...props}
		/>
	</TokenProvider>;
}

export interface ITokenSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<ITokenSource>> {
	toOption: IToOptionMapper<ISourceItem<ITokenSource>>;
	providerProps?: Partial<ITokenProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const TokenSourceSelect: FC<ITokenSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<TokenProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<ITokenSource>> {...props}/>
				</TokenProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.Token.title"}
					size={props.size}
					tooltip={"common.selection.Token.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<TokenProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</TokenProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface ITokenSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<ITokenSource>>> {
}

export const TokenSelectionProvider: FC<ITokenSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<ITokenSource>> {...props}/>;
}

export const useTokenQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TokenApiLink]);
};

export const useTokenCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TokenCountApiLink]);
};

export const useTokenOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<ITokenSource>>();
export const useTokenSelectionContext = () => useSelectionContext<ISourceItem<ITokenSource>>();
