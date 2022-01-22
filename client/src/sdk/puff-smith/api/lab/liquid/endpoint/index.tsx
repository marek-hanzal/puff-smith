import {FC} from "react";
import {
	Form,
	IFormProps,
	IQueryOptions,
	IQueryResult,
	IQuerySourceSelectProps,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	QuerySourceSelect,
	SourceContextProvider,
	Table,
	createPostMutation,
	createPostQuery,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/liquid/dto/create/index").CreateDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>("PuffSmith.Lab.Liquid.Create");

export type ILiquidsQueryParams = void;


export const useLiquidsQuery = createPostQuery<ILiquidsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>>("PuffSmith.Lab.Liquid.Liquids");
export const useLiquidsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Liquid.Liquids"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/liquid/dto/create/index").CreateDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/liquid/dto/create/index").CreateDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useLiquidsSource = () => useSourceContext<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>()

export interface ILiquidsSourceContext extends ISourceContext<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto> {
}

export interface ILiquidsSourceProps extends Partial<ISourceContextProviderProps<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>> {
}

export const LiquidsSource: FC<ILiquidsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>
		useQuery={useLiquidsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ILiquidsBaseTableProps extends ITableProps<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto> {
}

export const LiquidsBaseTable: FC<ILiquidsBaseTableProps> = props => {
	return <Table<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto>
		{...props}
	/>
}

export interface ILiquidsSourceTableProps extends ILiquidsBaseTableProps {
	source?: ILiquidsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto;
	defaultQuery?: ILiquidsQueryParams;
	filter?: import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto;
	orderBy?: import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto;
	query?: ILiquidsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>>;
}

export const LiquidsSourceTable: FC<ILiquidsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <LiquidsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<LiquidsBaseTable {...props}/>
	</LiquidsSource>
}

export interface ILiquidsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/liquid/dto/index").LiquidDto>;
	source?: ILiquidsSourceProps;
}

export const LiquidsSourceSelect: FC<ILiquidsSourceSelectProps> = ({source, ...props}) => {
	return <LiquidsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ILiquidsQueryParams, import("@/sdk/puff-smith/liquid/dto/index").LiquidDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidOrderByDto, import("@/sdk/puff-smith/liquid/dto/index").LiquidFilterDto> {...props}/>
	</LiquidsSource>;
};