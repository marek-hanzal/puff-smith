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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/mixture/dto/create/index").CreateDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>("PuffSmith.Lab.Mixture.Create");

export type IMixturesQueryParams = void;


export const useMixturesQuery = createPostQuery<IMixturesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>>("PuffSmith.Lab.Mixture.Mixtures");
export const useMixturesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Mixture.Mixtures"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/mixture/dto/create/index").CreateDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/mixture/dto/create/index").CreateDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useMixturesSource = () => useSourceContext<IMixturesQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>()

export interface IMixturesSourceContext extends ISourceContext<IMixturesQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto> {
}

export interface IMixturesSourceProps extends Partial<ISourceContextProviderProps<IMixturesQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>> {
}

export const MixturesSource: FC<IMixturesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IMixturesQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>
		useQuery={useMixturesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IMixturesBaseTableProps extends ITableProps<IMixturesQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto> {
}

export const MixturesBaseTable: FC<IMixturesBaseTableProps> = props => {
	return <Table<IMixturesQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>
		{...props}
	/>
}

export interface IMixturesSourceTableProps extends IMixturesBaseTableProps {
	source?: IMixturesSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto;
	defaultQuery?: IMixturesQueryParams;
	filter?: import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto;
	orderBy?: import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto;
	query?: IMixturesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>>;
}

export const MixturesSourceTable: FC<IMixturesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <MixturesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<MixturesBaseTable {...props}/>
	</MixturesSource>
}

export interface IMixturesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>;
	source?: IMixturesSourceProps;
}

export const MixturesSourceSelect: FC<IMixturesSourceSelectProps> = ({source, ...props}) => {
	return <MixturesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IMixturesQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto> {...props}/>
	</MixturesSource>;
};