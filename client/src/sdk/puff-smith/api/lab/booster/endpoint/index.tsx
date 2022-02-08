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

export type IBoostersQueryParams = void;


export const useBoostersQuery = createPostQuery<IBoostersQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/booster/dto/index").BoosterDto>>("PuffSmith.Lab.Booster.Boosters");
export const useBoostersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Booster.Boosters"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/booster/dto/create/index").CreateDto, import("@/sdk/puff-smith/booster/dto/index").BoosterDto>("PuffSmith.Lab.Booster.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/booster/dto/create/index").CreateDto, import("@/sdk/puff-smith/booster/dto/index").BoosterDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/booster/dto/create/index").CreateDto, import("@/sdk/puff-smith/booster/dto/index").BoosterDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useBoostersSource = () => useSourceContext<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>()

export interface IBoostersSourceContext extends ISourceContext<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto> {
}

export interface IBoostersSourceProps extends Partial<ISourceContextProviderProps<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>> {
}

export const BoostersSource: FC<IBoostersSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>
		useQuery={useBoostersQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IBoostersSourceConsumerProps extends ConsumerProps<ISourceContext<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>> {
}

export const BoostersSourceConsumer: FC<IBoostersSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IBoostersBaseTableProps extends ITableProps<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto> {
}

export const BoostersBaseTable: FC<IBoostersBaseTableProps> = props => {
	return <Table<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>
		{...props}
	/>
}

export interface IBoostersSourceTableProps extends IBoostersBaseTableProps {
	source?: IBoostersSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto;
	defaultQuery?: IBoostersQueryParams;
	filter?: import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto;
	orderBy?: import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto;
	query?: IBoostersQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/booster/dto/index").BoosterDto>>;
}

export const BoostersSourceTable: FC<IBoostersSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <BoostersSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<BoostersBaseTable {...props}/>
	</BoostersSource>
}

export interface IBoostersSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/booster/dto/index").BoosterDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/booster/dto/index").BoosterDto>;
	source?: IBoostersSourceProps;
}

export const BoostersSourceSelect: FC<IBoostersSourceSelectProps> = ({source, ...props}) => {
	return <BoostersSource defaultSize={100} {...source}>
		<QuerySourceSelect<IBoostersQueryParams, import("@/sdk/puff-smith/booster/dto/index").BoosterDto, import("@/sdk/puff-smith/booster/dto/index").BoosterOrderByDto, import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto> {...props}/>
	</BoostersSource>;
};

export interface IBoostersFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>> {
}

export const BoostersFilterContext: FC<IBoostersFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto> {...props}/>
}

export const useBoostersOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>()
export const useBoostersFilterContext = () => useFilterContext<import("@/sdk/puff-smith/booster/dto/index").BoosterFilterDto>()
