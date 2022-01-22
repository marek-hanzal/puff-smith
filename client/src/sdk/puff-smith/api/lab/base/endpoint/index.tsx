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

export type IBasesQueryParams = void;


export const useBasesQuery = createPostQuery<IBasesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/base/dto/index").BaseDto>>("PuffSmith.Lab.Base.Bases");
export const useBasesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Base.Bases"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/base/dto/create/index").CreateDto, import("@/sdk/puff-smith/base/dto/index").BaseDto>("PuffSmith.Lab.Base.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/base/dto/create/index").CreateDto, import("@/sdk/puff-smith/base/dto/index").BaseDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/base/dto/create/index").CreateDto, import("@/sdk/puff-smith/base/dto/index").BaseDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useBasesSource = () => useSourceContext<IBasesQueryParams, import("@/sdk/puff-smith/base/dto/index").BaseDto, import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto>()

export interface IBasesSourceContext extends ISourceContext<IBasesQueryParams, import("@/sdk/puff-smith/base/dto/index").BaseDto, import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto> {
}

export interface IBasesSourceProps extends Partial<ISourceContextProviderProps<IBasesQueryParams, import("@/sdk/puff-smith/base/dto/index").BaseDto, import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto>> {
}

export const BasesSource: FC<IBasesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IBasesQueryParams, import("@/sdk/puff-smith/base/dto/index").BaseDto, import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto>
		useQuery={useBasesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IBasesBaseTableProps extends ITableProps<IBasesQueryParams, import("@/sdk/puff-smith/base/dto/index").BaseDto, import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto> {
}

export const BasesBaseTable: FC<IBasesBaseTableProps> = props => {
	return <Table<IBasesQueryParams, import("@/sdk/puff-smith/base/dto/index").BaseDto, import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto>
		{...props}
	/>
}

export interface IBasesSourceTableProps extends IBasesBaseTableProps {
	source?: IBasesSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/base/dto/index").BaseFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto;
	defaultQuery?: IBasesQueryParams;
	filter?: import("@/sdk/puff-smith/base/dto/index").BaseFilterDto;
	orderBy?: import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto;
	query?: IBasesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/base/dto/index").BaseDto>>;
}

export const BasesSourceTable: FC<IBasesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <BasesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<BasesBaseTable {...props}/>
	</BasesSource>
}

export interface IBasesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/base/dto/index").BaseDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/base/dto/index").BaseDto>;
	source?: IBasesSourceProps;
}

export const BasesSourceSelect: FC<IBasesSourceSelectProps> = ({source, ...props}) => {
	return <BasesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IBasesQueryParams, import("@/sdk/puff-smith/base/dto/index").BaseDto, import("@/sdk/puff-smith/base/dto/index").BaseOrderByDto, import("@/sdk/puff-smith/base/dto/index").BaseFilterDto> {...props}/>
	</BasesSource>;
};