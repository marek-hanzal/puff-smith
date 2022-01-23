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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/create/index").CreateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>("PuffSmith.Lab.Vape.Create");

export type IVapesQueryParams = void;


export const useVapesQuery = createPostQuery<IVapesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/vape/dto/index").VapeDto>>("PuffSmith.Lab.Vape.Vapes");
export const useVapesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vape.Vapes"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/create/index").CreateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/vape/dto/create/index").CreateDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useVapesSource = () => useSourceContext<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>()

export interface IVapesSourceContext extends ISourceContext<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto> {
}

export interface IVapesSourceProps extends Partial<ISourceContextProviderProps<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>> {
}

export const VapesSource: FC<IVapesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>
		useQuery={useVapesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IVapesBaseTableProps extends ITableProps<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto> {
}

export const VapesBaseTable: FC<IVapesBaseTableProps> = props => {
	return <Table<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto>
		{...props}
	/>
}

export interface IVapesSourceTableProps extends IVapesBaseTableProps {
	source?: IVapesSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto;
	defaultQuery?: IVapesQueryParams;
	filter?: import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto;
	orderBy?: import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto;
	query?: IVapesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/vape/dto/index").VapeDto>>;
}

export const VapesSourceTable: FC<IVapesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <VapesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<VapesBaseTable {...props}/>
	</VapesSource>
}

export interface IVapesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/vape/dto/index").VapeDto>;
	source?: IVapesSourceProps;
}

export const VapesSourceSelect: FC<IVapesSourceSelectProps> = ({source, ...props}) => {
	return <VapesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IVapesQueryParams, import("@/sdk/puff-smith/vape/dto/index").VapeDto, import("@/sdk/puff-smith/vape/dto/index").VapeOrderByDto, import("@/sdk/puff-smith/vape/dto/index").VapeFilterDto> {...props}/>
	</VapesSource>;
};