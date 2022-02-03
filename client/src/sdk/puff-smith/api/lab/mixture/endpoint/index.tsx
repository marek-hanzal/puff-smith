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

export type IActiveQueryParams = void;


export const useActiveMutation = createPostMutation<IActiveQueryParams, import("@/sdk/puff-smith/api/lab/mixture/dto/index").ActiveDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>("PuffSmith.Lab.Mixture.Active");

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/mixture/dto/create/index").CreateDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>("PuffSmith.Lab.Mixture.Create");

export type IMixtureQueryParams = {
	mixtureId: string;
}


export const useMixtureQuery = createGetQuery<IMixtureQueryParams, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>("PuffSmith.Lab.Mixture.Mixture");
export const useMixtureQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Mixture.Mixture"])
}

export type IMixturesQueryParams = void;


export const useMixturesQuery = createPostQuery<IMixturesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/puff-smith/mixture/dto/index").MixtureOrderByDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>>("PuffSmith.Lab.Mixture.Mixtures");
export const useMixturesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Mixture.Mixtures"])
}

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/mixture/dto/patch/index").PatchDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>("PuffSmith.Lab.Mixture.Patch");

export interface IActiveDefaultFormProps extends Partial<IFormProps<IActiveQueryParams, import("@/sdk/puff-smith/api/lab/mixture/dto/index").ActiveDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>> {
}

export const ActiveDefaultForm: FC<IActiveDefaultFormProps> = props => {
	return <Form<IActiveQueryParams, import("@/sdk/puff-smith/api/lab/mixture/dto/index").ActiveDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>
		useMutation={useActiveMutation}
		{...props}
	/>
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/mixture/dto/create/index").CreateDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/mixture/dto/create/index").CreateDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/mixture/dto/patch/index").PatchDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/mixture/dto/patch/index").PatchDto, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const MixtureContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>);

export const useMixtureContext = (): IEntityContext<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto> => useContext(MixtureContext, "MixtureContext");

export const useOptionalMixtureContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>>(MixtureContext as any);

export interface IMixtureProvider extends IEntityProviderProps<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto> {
}

export const MixtureProvider: FC<IMixtureProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <MixtureContext.Provider value={entityContext}>
				{children}
			</MixtureContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchMixtureProps extends Partial<IQueryProps<IMixtureQueryParams, void, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>> {
	query: IMixtureQueryParams;
}

export const FetchMixture: FC<IFetchMixtureProps> = ({query, ...props}) => <Query<IMixtureQueryParams, void, import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>
	useQuery={useMixtureQuery}
	query={query}
	request={undefined}
	context={useOptionalMixtureContext()}
	{...props}
/>;

export interface IMixturePageProps extends Omit<IPageProps, "breadcrumbProps" | "extra"> {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/mixture/dto/index").MixtureDto) => ReactNode);
	breadcrumbProps?: BreadcrumbProps | React.ReactElement<typeof Breadcrumb> | ((entityContext: IEntityContext<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>) => BreadcrumbProps | ReactElement<typeof Breadcrumb>);
	extra?: ReactElement | ((entityContext: IEntityContext<import("@/sdk/puff-smith/mixture/dto/index").MixtureDto>) => ReactElement);
}

export const MixturePage: FC<IMixturePageProps> = ({children, breadcrumbProps, extra, ...props}) => {
	const {mixtureId} = useParams();
	return <MixtureProvider>
		<MixtureContext.Consumer>
			{entityContext => <Page
				breadcrumbProps={breadcrumbProps ? isCallable(breadcrumbProps) ? (breadcrumbProps as any)(entityContext) : breadcrumbProps : undefined}
				extra={extra ? (isCallable(extra) ? (extra as any)(entityContext) : extra) : undefined}
				{...props}
			>
				<FetchMixture
					query={{mixtureId}}
				>
					{client => isCallable(children) ? (children as any)(client) : children}
				</FetchMixture>
			</Page>}
		</MixtureContext.Consumer>
	</MixtureProvider>;
};

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

export interface IMixturesFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>> {
}

export const MixturesFilterContext: FC<IMixturesFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto> {...props}/>
}

export const useMixturesOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>()
export const useMixturesFilterContext = () => useFilterContext<import("@/sdk/puff-smith/mixture/dto/index").MixtureFilterDto>()
