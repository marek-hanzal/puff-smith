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
	SourceContextProvider,
	Table,
	useFilterContext,
	useOptionalFilterContext,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IAtomizersQueryParams = void;


export const useAtomizersQuery = createPostQuery<IAtomizersQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>>("PuffSmith.Lab.Atomizer.Atomizers");
export const useAtomizersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Atomizer.Atomizers"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/atomizer/dto/create/index").CreateDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>("PuffSmith.Lab.Atomizer.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/atomizer/dto/create/index").CreateDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/atomizer/dto/create/index").CreateDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useAtomizersSource = () => useSourceContext<IAtomizersQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>()

export interface IAtomizersSourceContext extends ISourceContext<IAtomizersQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto> {
}

export interface IAtomizersSourceProps extends Partial<ISourceContextProviderProps<IAtomizersQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>> {
}

export const AtomizersSource: FC<IAtomizersSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IAtomizersQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>
		useQuery={useAtomizersQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IAtomizersBaseTableProps extends ITableProps<IAtomizersQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto> {
}

export const AtomizersBaseTable: FC<IAtomizersBaseTableProps> = props => {
	return <Table<IAtomizersQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>
		{...props}
	/>
}

export interface IAtomizersSourceTableProps extends IAtomizersBaseTableProps {
	source?: IAtomizersSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto;
	defaultQuery?: IAtomizersQueryParams;
	filter?: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto;
	orderBy?: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto;
	query?: IAtomizersQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>>;
}

export const AtomizersSourceTable: FC<IAtomizersSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <AtomizersSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<AtomizersBaseTable {...props}/>
	</AtomizersSource>
}

export interface IAtomizersSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>;
	source?: IAtomizersSourceProps;
}

export const AtomizersSourceSelect: FC<IAtomizersSourceSelectProps> = ({source, ...props}) => {
	return <AtomizersSource defaultSize={100} {...source}>
		<QuerySourceSelect<IAtomizersQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto> {...props}/>
	</AtomizersSource>;
};

export interface IAtomizersFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>> {
}

export const AtomizersFilterContext: FC<IAtomizersFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto> {...props}/>
}

export const useAtomizersOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>()
export const useAtomizersFilterContext = () => useFilterContext<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>()
