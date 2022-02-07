import {createContext, FC, ReactElement, ReactNode} from "react";
import {
	createGetQuery,
	createPatchMutation,
	createPostMutation,
	createPostQuery,
	EntityContext,
	EntityProvider,
	FilterContextProvider,
	Form,
	IEntityContext,
	IEntityProviderProps,
	IFilterContextProviderProps,
	IFormProps,
	IPageProps,
	IQueryOptions,
	IQueryProps,
	IQueryResult,
	IQuerySourceSelectProps,
	isCallable,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	Page,
	Query,
	QuerySourceSelect,
	SourceContextProvider,
	Table,
	useContext,
	useFilterContext,
	useOptionalContext,
	useOptionalFilterContext,
	useParams,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";
import {BreadcrumbProps} from "antd";
import Breadcrumb from "antd/lib/breadcrumb";

export type IAtomizerQueryParams = {
	atomizerId: string;
}


export const useAtomizerQuery = createGetQuery<IAtomizerQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>("PuffSmith.Lab.Atomizer.Atomizer");
export const useAtomizerQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Atomizer.Atomizer"])
}

export type IAtomizersQueryParams = void;


export const useAtomizersQuery = createPostQuery<IAtomizersQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerOrderByDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>>("PuffSmith.Lab.Atomizer.Atomizers");
export const useAtomizersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Atomizer.Atomizers"])
}

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").CreateDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>("PuffSmith.Lab.Atomizer.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").DeleteDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>("PuffSmith.Lab.Atomizer.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").PatchDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>("PuffSmith.Lab.Atomizer.Patch");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").CreateDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").CreateDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").DeleteDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").DeleteDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").PatchDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/atomizer/dto/index").PatchDto, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const AtomizerContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>);

export const useAtomizerContext = (): IEntityContext<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto> => useContext(AtomizerContext, "AtomizerContext");

export const useOptionalAtomizerContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>>(AtomizerContext as any);

export interface IAtomizerProvider extends IEntityProviderProps<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto> {
}

export const AtomizerProvider: FC<IAtomizerProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <AtomizerContext.Provider value={entityContext}>
				{children}
			</AtomizerContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchAtomizerProps extends Partial<IQueryProps<IAtomizerQueryParams, void, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>> {
	query: IAtomizerQueryParams;
}

export const FetchAtomizer: FC<IFetchAtomizerProps> = ({query, ...props}) => <Query<IAtomizerQueryParams, void, import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>
	useQuery={useAtomizerQuery}
	query={query}
	request={undefined}
	context={useOptionalAtomizerContext()}
	{...props}
/>;

export interface IAtomizerPageProps extends Omit<IPageProps, "breadcrumbProps" | "extra"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto) => ReactNode);
	breadcrumbProps?: BreadcrumbProps | React.ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);
	extra?: ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto>) => ReactElement);
}

export const AtomizerPage: FC<IAtomizerPageProps> = ({children, breadcrumbProps, extra, ...props}) => {
	const {atomizerId} = useParams();
	return <AtomizerProvider>
		<AtomizerContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				{...props}
			>
				<FetchAtomizer
					query={{atomizerId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchAtomizer>
			</Page>}
		</AtomizerContext.Consumer>
	</AtomizerProvider>;
};

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
