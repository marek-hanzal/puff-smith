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

export type ICoilsQueryParams = void;


export const useCoilsQuery = createPostQuery<ICoilsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/coil/dto/index").CoilDto>>("PuffSmith.Lab.Coil.Coils");
export const useCoilsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Coil.Coils"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/coil/dto/create/index").CreateDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>("PuffSmith.Lab.Coil.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/coil/dto/create/index").CreateDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/coil/dto/create/index").CreateDto, import("@/sdk/puff-smith/coil/dto/index").CoilDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useCoilsSource = () => useSourceContext<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>()

export interface ICoilsSourceContext extends ISourceContext<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto> {
}

export interface ICoilsSourceProps extends Partial<ISourceContextProviderProps<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>> {
}

export const CoilsSource: FC<ICoilsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>
		useQuery={useCoilsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ICoilsBaseTableProps extends ITableProps<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto> {
}

export const CoilsBaseTable: FC<ICoilsBaseTableProps> = props => {
	return <Table<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto>
		{...props}
	/>
}

export interface ICoilsSourceTableProps extends ICoilsBaseTableProps {
	source?: ICoilsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto;
	defaultQuery?: ICoilsQueryParams;
	filter?: import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto;
	orderBy?: import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto;
	query?: ICoilsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/coil/dto/index").CoilDto>>;
}

export const CoilsSourceTable: FC<ICoilsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <CoilsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<CoilsBaseTable {...props}/>
	</CoilsSource>
}

export interface ICoilsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/coil/dto/index").CoilDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/coil/dto/index").CoilDto>;
	source?: ICoilsSourceProps;
}

export const CoilsSourceSelect: FC<ICoilsSourceSelectProps> = ({source, ...props}) => {
	return <CoilsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ICoilsQueryParams, import("@/sdk/puff-smith/coil/dto/index").CoilDto, import("@/sdk/puff-smith/coil/dto/index").CoilOrderByDto, import("@/sdk/puff-smith/coil/dto/index").CoilFilterDto> {...props}/>
	</CoilsSource>;
};