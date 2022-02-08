import {FC} from "react";
import {
	createPostMutation,
	createPostQuery,
	FilterContextProvider,
	Form,
	IFilterContextProviderProps,
	IFormProps,
	IQueryOptions,
	IQueryResult,
	IQuerySourceSelectProps,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	QuerySourceSelect,
	SourceContext,
	SourceContextProvider,
	Table,
	useFilterContext,
	useOptionalFilterContext,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/driptip/dto/create/index").CreateDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto>("PuffSmith.Lab.Driptip.Create");

export type IDriptipsQueryParams = void;


export const useDriptipsQuery = createPostQuery<IDriptipsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/driptip/dto/index").DriptipDto>>("PuffSmith.Lab.Driptip.Driptips");
export const useDriptipsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Driptip.Driptips"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/driptip/dto/create/index").CreateDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/driptip/dto/create/index").CreateDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useDriptipsSource = () => useSourceContext<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>()

export interface IDriptipsSourceContext extends ISourceContext<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto> {
}

export interface IDriptipsSourceProps extends Partial<ISourceContextProviderProps<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>> {
}

export const DriptipsSource: FC<IDriptipsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>
		useQuery={useDriptipsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IDriptipsSourceConsumerProps extends ConsumerProps<ISourceContext<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>> {
}

export const DriptipsSourceConsumer: FC<IDriptipsSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IDriptipsBaseTableProps extends ITableProps<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto> {
}

export const DriptipsBaseTable: FC<IDriptipsBaseTableProps> = props => {
	return <Table<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>
		{...props}
	/>
}

export interface IDriptipsSourceTableProps extends IDriptipsBaseTableProps {
	source?: IDriptipsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto;
	defaultQuery?: IDriptipsQueryParams;
	filter?: import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto;
	orderBy?: import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto;
	query?: IDriptipsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/driptip/dto/index").DriptipDto>>;
}

export const DriptipsSourceTable: FC<IDriptipsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <DriptipsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<DriptipsBaseTable {...props}/>
	</DriptipsSource>
}

export interface IDriptipsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/driptip/dto/index").DriptipDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/driptip/dto/index").DriptipDto>;
	source?: IDriptipsSourceProps;
}

export const DriptipsSourceSelect: FC<IDriptipsSourceSelectProps> = ({source, ...props}) => {
	return <DriptipsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IDriptipsQueryParams, import("@/sdk/puff-smith/driptip/dto/index").DriptipDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipOrderByDto, import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto> {...props}/>
	</DriptipsSource>;
};

export interface IDriptipsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>> {
}

export const DriptipsFilterContext: FC<IDriptipsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto> {...props}/>
}

export const useDriptipsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>()
export const useDriptipsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/driptip/dto/index").DriptipFilterDto>()
