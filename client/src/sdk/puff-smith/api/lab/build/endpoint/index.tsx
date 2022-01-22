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

export type IBuildsQueryParams = void;


export const useBuildsQuery = createPostQuery<IBuildsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/build/dto/index").BuildDto>>("PuffSmith.Lab.Build.Builds");
export const useBuildsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Build.Builds"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/create/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>("PuffSmith.Lab.Build.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/create/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/create/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useBuildsSource = () => useSourceContext<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>()

export interface IBuildsSourceContext extends ISourceContext<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto> {
}

export interface IBuildsSourceProps extends Partial<ISourceContextProviderProps<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>> {
}

export const BuildsSource: FC<IBuildsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>
		useQuery={useBuildsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IBuildsBaseTableProps extends ITableProps<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto> {
}

export const BuildsBaseTable: FC<IBuildsBaseTableProps> = props => {
	return <Table<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto>
		{...props}
	/>
}

export interface IBuildsSourceTableProps extends IBuildsBaseTableProps {
	source?: IBuildsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/build/dto/index").BuildFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto;
	defaultQuery?: IBuildsQueryParams;
	filter?: import("@/sdk/puff-smith/build/dto/index").BuildFilterDto;
	orderBy?: import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto;
	query?: IBuildsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/build/dto/index").BuildDto>>;
}

export const BuildsSourceTable: FC<IBuildsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <BuildsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<BuildsBaseTable {...props}/>
	</BuildsSource>
}

export interface IBuildsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/build/dto/index").BuildDto>;
	source?: IBuildsSourceProps;
}

export const BuildsSourceSelect: FC<IBuildsSourceSelectProps> = ({source, ...props}) => {
	return <BuildsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IBuildsQueryParams, import("@/sdk/puff-smith/build/dto/index").BuildDto, import("@/sdk/puff-smith/build/dto/index").BuildOrderByDto, import("@/sdk/puff-smith/build/dto/index").BuildFilterDto> {...props}/>
	</BuildsSource>;
};