import {ConsumerProps, FC} from "react";
import {
	createPostMutation,
	createPostQuery,
	FilterContextProvider,
	IFilterContextProviderProps,
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

export type IImagesQueryParams = void;


export const useImagesQuery = createPostQuery<IImagesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/image/dto/index").ImageDto>>("Edde.Shared.Image.Images");
export const useImagesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.Image.Images"])
}

export type IUpdateQueryParams = void;


export const useUpdateMutation = createPostMutation<IUpdateQueryParams, void, import("@/sdk/edde/job/dto/index").JobDto>("Edde.Shared.Image.Update");

export const useImagesSource = () => useSourceContext<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto>()

export interface IImagesSourceContext extends ISourceContext<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto> {
}

export interface IImagesSourceProps extends Partial<ISourceContextProviderProps<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto>> {
}

export const ImagesSource: FC<IImagesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto>
		useQuery={useImagesQuery}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IImagesSourceConsumerProps extends ConsumerProps<ISourceContext<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto>> {
}

export const ImagesSourceConsumer: FC<IImagesSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IImagesBaseTableProps extends ITableProps<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto> {
}

export const ImagesBaseTable: FC<IImagesBaseTableProps> = props => {
	return <Table<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto>
		{...props}
	/>
}

export interface IImagesSourceTableProps extends IImagesBaseTableProps {
	source?: IImagesSourceProps;
	defaultFilter?: import("@/sdk/edde/image/dto/index").ImageFilterDto;
	defaultOrderBy?: import("@/sdk/edde/image/dto/index").ImageOrderByDto;
	defaultQuery?: IImagesQueryParams;
	filter?: import("@/sdk/edde/image/dto/index").ImageFilterDto;
	orderBy?: import("@/sdk/edde/image/dto/index").ImageOrderByDto;
	query?: IImagesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/image/dto/index").ImageDto>>;
}

export const ImagesSourceTable: FC<IImagesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <ImagesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<ImagesBaseTable {...props}/>
	</ImagesSource>
}

export interface IImagesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/image/dto/index").ImageDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/image/dto/index").ImageDto>;
	source?: IImagesSourceProps;
}

export const ImagesSourceSelect: FC<IImagesSourceSelectProps> = ({source, ...props}) => {
	return <ImagesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IImagesQueryParams, import("@/sdk/edde/image/dto/index").ImageDto, import("@/sdk/edde/image/dto/index").ImageOrderByDto, import("@/sdk/edde/image/dto/index").ImageFilterDto> {...props}/>
	</ImagesSource>;
};

export interface IImagesFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/image/dto/index").ImageFilterDto>> {
}

export const ImagesFilterContext: FC<IImagesFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/image/dto/index").ImageFilterDto> {...props}/>
}

export const useImagesOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/edde/image/dto/index").ImageFilterDto>()
export const useImagesFilterContext = () => useFilterContext<import("@/sdk/edde/image/dto/index").ImageFilterDto>()
