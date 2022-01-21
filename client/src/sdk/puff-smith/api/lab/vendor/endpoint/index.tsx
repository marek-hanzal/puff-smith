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


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/vendor/dto/create/index").CreateDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>("PuffSmith.Lab.Vendor.Create");

export type IVendorsQueryParams = void;


export const useVendorsQuery = createPostQuery<IVendorsQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>>("PuffSmith.Lab.Vendor.Vendors");
export const useVendorsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Vendor.Vendors"])
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/vendor/dto/create/index").CreateDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/vendor/dto/create/index").CreateDto, import("@/sdk/puff-smith/vendor/dto/index").VendorDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export const useVendorsSource = () => useSourceContext<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>()

export interface IVendorsSourceContext extends ISourceContext<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto> {
}

export interface IVendorsSourceProps extends Partial<ISourceContextProviderProps<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>> {
}

export const VendorsSource: FC<IVendorsSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>
		useQuery={useVendorsQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IVendorsBaseTableProps extends ITableProps<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto> {
}

export const VendorsBaseTable: FC<IVendorsBaseTableProps> = props => {
	return <Table<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto>
		{...props}
	/>
}

export interface IVendorsSourceTableProps extends IVendorsBaseTableProps {
	source?: IVendorsSourceProps;
	defaultFilter?: import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto;
	defaultOrderBy?: import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto;
	defaultQuery?: IVendorsQueryParams;
	filter?: import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto;
	orderBy?: import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto;
	query?: IVendorsQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>>;
}

export const VendorsSourceTable: FC<IVendorsSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <VendorsSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<VendorsBaseTable {...props}/>
	</VendorsSource>
}

export interface IVendorsSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>> {
	toOption: IToOptionMapper<import("@/sdk/puff-smith/vendor/dto/index").VendorDto>;
	source?: IVendorsSourceProps;
}

export const VendorsSourceSelect: FC<IVendorsSourceSelectProps> = ({source, ...props}) => {
	return <VendorsSource defaultSize={100} {...source}>
		<QuerySourceSelect<IVendorsQueryParams, import("@/sdk/puff-smith/vendor/dto/index").VendorDto, import("@/sdk/puff-smith/vendor/dto/index").VendorOrderByDto, import("@/sdk/puff-smith/vendor/dto/index").VendorFilterDto> {...props}/>
	</VendorsSource>;
};