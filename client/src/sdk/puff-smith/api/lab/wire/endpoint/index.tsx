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

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/wire/dto/create/index").CreateDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>("PuffSmith.Lab.Wire.Create");

export type IWiresQueryParams = void;


export const useWiresQuery = createPostQuery<IWiresQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/wire/dto/index").WireDto>>("PuffSmith.Lab.Wire.Wires");
export const useWiresQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Wire.Wires"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/wire/dto/create/index").CreateDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/wire/dto/create/index").CreateDto, import("@/sdk/puff-smith/wire/dto/index").WireDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useWiresSource = () => useSourceContext<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>()

export interface IWiresSourceContext extends ISourceContext<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {
}

export interface IWiresSourceProps extends Partial<ISourceContextProviderProps<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>> {
}

export const WiresSource: FC<IWiresSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>
		useQuery={useWiresQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IWiresBaseTableProps extends ITableProps<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {
}

export const WiresBaseTable: FC<IWiresBaseTableProps> = props => {
	return <Table<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>
		{...props}
	/>
}

export interface IWiresSourceTableProps extends IWiresBaseTableProps {
	source?: IWiresSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/wire/dto/index").WireFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto;
	defaultQuery?: IWiresQueryParams;
	filter?: import("@/sdk/puff-smith/wire/dto/index").WireFilterDto;
	orderBy?: import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto;
	query?: IWiresQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/wire/dto/index").WireDto>>;
}

export const WiresSourceTable: FC<IWiresSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <WiresSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<WiresBaseTable {...props}/>
	</WiresSource>
}

export interface IWiresSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/wire/dto/index").WireDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/wire/dto/index").WireDto>;
	source?: IWiresSourceProps;
}

export const WiresSourceSelect: FC<IWiresSourceSelectProps> = ({source, ...props}) => {
	return <WiresSource defaultSize={100} {...source}>
		<QuerySourceSelect<IWiresQueryParams, import("@/sdk/puff-smith/wire/dto/index").WireDto, import("@/sdk/puff-smith/wire/dto/index").WireOrderByDto, import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {...props}/>
	</WiresSource>;
};

export interface IWiresFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>> {
}

export const WiresFilterContext: FC<IWiresFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto> {...props}/>
}

export const useWiresOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>()
export const useWiresFilterContext = () => useFilterContext<import("@/sdk/puff-smith/wire/dto/index").WireFilterDto>()
