import {
	FC,
	ReactNode,
	createContext
} from "react";
import {
	EntityContext,
	EntityProvider,
	Form,
	IEntityContext,
	IEntityProviderProps,
	IFormProps,
	IPageProps,
	IQueryOptions,
	IQueryProps,
	IQueryResult,
	IQuerySourceSelectProps,
	ISourceContext,
	ISourceContextProviderProps,
	ITableProps,
	IToOptionMapper,
	Page,
	Query,
	QuerySourceSelect,
	SourceContextProvider,
	Table,
	createGetMutation,
	createGetQuery,
	createPatchMutation,
	createPatchQuery,
	createPostMutation,
	createPostQuery,
	isCallable,
	useContext,
	useOptionalContext,
	useParams,
	useSourceContext
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/setup/dto/create/index").CreateDto, import("@/sdk/puff-smith/setup/dto/index").SetupDto>("PuffSmith.Lab.Setup.Create");

export type IDeleteQueryParams = void;


export const useDeleteMutation = createPostMutation<IDeleteQueryParams, import("@/sdk/puff-smith/vape/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>("PuffSmith.Lab.Setup.Delete");

export type IPatchQueryParams = void;


export const usePatchMutation = createPatchMutation<IPatchQueryParams, import("@/sdk/puff-smith/setup/dto/patch/index").PatchDto, import("@/sdk/puff-smith/setup/dto/index").SetupDto>("PuffSmith.Lab.Setup.Patch");

export type ISetupQueryParams = {
	setupId: string;
}


export const useSetupQuery = createGetQuery<ISetupQueryParams, import("@/sdk/puff-smith/setup/dto/index").SetupDto>("PuffSmith.Lab.Setup.Setup");
export const useSetupQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["PuffSmith.Lab.Setup.Setup"])
}

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

export interface IDeleteDefaultFormProps extends Partial<IFormProps<IDeleteQueryParams, import("@/sdk/puff-smith/vape/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>> {
}

export const DeleteDefaultForm: FC<IDeleteDefaultFormProps> = props => {
	return <Form<IDeleteQueryParams, import("@/sdk/puff-smith/vape/dto/delete/index").DeleteDto, import("@/sdk/puff-smith/vape/dto/index").VapeDto>
		useMutation={useDeleteMutation}
		{...props}
	/>
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<IPatchQueryParams, import("@/sdk/puff-smith/setup/dto/patch/index").PatchDto, import("@/sdk/puff-smith/setup/dto/index").SetupDto>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => {
	return <Form<IPatchQueryParams, import("@/sdk/puff-smith/setup/dto/patch/index").PatchDto, import("@/sdk/puff-smith/setup/dto/index").SetupDto>
		useMutation={usePatchMutation}
		{...props}
	/>
}

export const SetupContext = createContext(null as unknown as IEntityContext<import("@/sdk/puff-smith/setup/dto/index").SetupDto>);

export const useSetupContext = (): IEntityContext<import("@/sdk/puff-smith/setup/dto/index").SetupDto> => useContext(SetupContext, "SetupContext");

export const useOptionalSetupContext = () => useOptionalContext<IEntityContext<import("@/sdk/puff-smith/setup/dto/index").SetupDto>>(SetupContext as any);

export interface ISetupProvider extends IEntityProviderProps<import("@/sdk/puff-smith/setup/dto/index").SetupDto> {
}

export const SetupProvider: FC<ISetupProvider> = ({defaultEntity, children}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <SetupContext.Provider value={entityContext}>
				{children}
			</SetupContext.Provider>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export interface IFetchSetupProps extends Partial<IQueryProps<ISetupQueryParams, void, import("@/sdk/puff-smith/setup/dto/index").SetupDto>> {
	query: ISetupQueryParams;
}

export const FetchSetup: FC<IFetchSetupProps> = ({query, ...props}) => <Query<ISetupQueryParams, void, import("@/sdk/puff-smith/setup/dto/index").SetupDto>
	useQuery={useSetupQuery}
	query={query}
	request={undefined}
	context={useOptionalSetupContext()}
	{...props}
/>;

export interface ISetupPageProps extends IPageProps {
	children?: ReactNode | ((data: import("@/sdk/puff-smith/setup/dto/index").SetupDto) => ReactNode);
}

export const SetupPage: FC<ISetupPageProps> = ({children, ...props}) => {
	const {setupId} = useParams();
	return <SetupProvider>
		<Page {...props}>
			<FetchSetup
				query={{setupId}}
			>
				{client => isCallable(children) ? (children as any)(client) : children}
			</FetchSetup>
		</Page>
	</SetupProvider>;
};

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