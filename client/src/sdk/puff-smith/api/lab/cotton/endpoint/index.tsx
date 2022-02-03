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

export type ICottonsQueryParams = void;


export const useCottonsQuery = createPostQuery<ICottonsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>>("PuffSmith.Lab.Cotton.Cottons");
export const useCottonsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Cotton.Cottons"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/cotton/dto/create/index").CreateDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>("PuffSmith.Lab.Cotton.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/cotton/dto/create/index").CreateDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/cotton/dto/create/index").CreateDto, import("@/sdk/puff-smith/cotton/dto/index").CottonDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useCottonsSource = () => useSourceContext<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>()

export interface ICottonsSourceContext extends ISourceContext<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {
}

export interface ICottonsSourceProps extends Partial<ISourceContextProviderProps<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>> {
}

export const CottonsSource: FC<ICottonsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>
		useQuery={useCottonsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface ICottonsBaseTableProps extends ITableProps<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {
}

export const CottonsBaseTable: FC<ICottonsBaseTableProps> = props => {
	return <Table<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>
		{...props}
	/>
}

export interface ICottonsSourceTableProps extends ICottonsBaseTableProps {
	source?: ICottonsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto;
	defaultQuery?: ICottonsQueryParams;
	filter?: import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto;
	orderBy?: import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto;
	query?: ICottonsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>>;
}

export const CottonsSourceTable: FC<ICottonsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <CottonsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<CottonsBaseTable {...props}/>
	</CottonsSource>
}

export interface ICottonsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/cotton/dto/index").CottonDto>;
	source?: ICottonsSourceProps;
}

export const CottonsSourceSelect: FC<ICottonsSourceSelectProps> = ({source, ...props}) => {
	return <CottonsSource defaultSize={100} {...source}>
		<QuerySourceSelect<ICottonsQueryParams, import("@/sdk/puff-smith/cotton/dto/index").CottonDto, import("@/sdk/puff-smith/cotton/dto/index").CottonOrderByDto, import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {...props}/>
	</CottonsSource>;
};

export interface ICottonsFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>> {
}

export const CottonsFilterContext: FC<ICottonsFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto> {...props}/>
}

export const useCottonsOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>()
export const useCottonsFilterContext = () => useFilterContext<import("@/sdk/puff-smith/cotton/dto/index").CottonFilterDto>()
