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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/setup/dto/create/index").CreateDto, import("@/sdk/puff-smith/setup/dto/index").SetupDto>("PuffSmith.Lab.Setup.Create");

export type ISetupsQueryParams = void;


export const useSetupsQuery = createPostQuery<ISetupsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/setup/dto/index").SetupDto>>("PuffSmith.Lab.Setup.Setups");
export const useSetupsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Setup.Setups"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/setup/dto/create/index").CreateDto, import("@/sdk/puff-smith/setup/dto/index").SetupDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/setup/dto/create/index").CreateDto, import("@/sdk/puff-smith/setup/dto/index").SetupDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useSetupsSource = () => useSourceContext<ISetupsQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto, import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto>()

export interface ISetupsSourceContext extends ISourceContext<ISetupsQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto, import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto> {
}

export interface ISetupsSourceProps extends Partial<ISourceContextProviderProps<ISetupsQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto, import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto>> {
}

export const SetupsSource: FC<ISetupsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ISetupsQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto, import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto>
		useQuery={useSetupsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ISetupsBaseTableProps extends ITableProps<ISetupsQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto, import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto> {
}

export const SetupsBaseTable: FC<ISetupsBaseTableProps> = props => {
	return <Table<ISetupsQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto, import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto>
		{...props}
	/>
}

export interface ISetupsSourceTableProps extends ISetupsBaseTableProps {
	source?: ISetupsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto;
	defaultQuery?: ISetupsQueryParams;
	filter?: import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto;
	orderBy?: import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto;
	query?: ISetupsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/setup/dto/index").SetupDto>>;
}

export const SetupsSourceTable: FC<ISetupsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <SetupsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<SetupsBaseTable {...props}/>
	</SetupsSource>
}

export interface ISetupsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/setup/dto/index").SetupDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/setup/dto/index").SetupDto>;
	source?: ISetupsSourceProps;
}

export const SetupsSourceSelect: FC<ISetupsSourceSelectProps> = ({source, ...props}) => {
	return <SetupsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ISetupsQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto, import("@/sdk/puff-smith/setup/dto/index").SetupOrderByDto, import("@/sdk/puff-smith/setup/dto/index").SetupFilterDto> {...props}/>
	</SetupsSource>;
};