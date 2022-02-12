import {ConsumerProps, FC} from "react";
import {
	createGetQuery,
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

export type IRunQueryParams = void;


export const useRunQuery = createGetQuery<IRunQueryParams, void>("Edde.Root.Upgrade.Run");
export const useRunQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Upgrade.Run"])
}

export type IUpgradeQueryParams = void;


export const useUpgradeMutation = createPostMutation<IUpgradeQueryParams, void, import("@/sdk/edde/job/dto/index").JobDto>("Edde.Root.Upgrade.Upgrade");

export type IUpgradesQueryParams = void;


export const useUpgradesQuery = createPostQuery<IUpgradesQueryParams, import("@/sdk/edde/query/dto/index").Query<import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>, import("@/sdk/edde/query/dto/index").QueryResult<import("@/sdk/edde/phinx/dto/index").UpgradeDto>>("Edde.Root.Upgrade.Upgrades");
export const useUpgradesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Upgrade.Upgrades"])
}

export const useUpgradesSource = () => useSourceContext<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>()

export interface IUpgradesSourceContext extends ISourceContext<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto> {
}

export interface IUpgradesSourceProps extends Partial<ISourceContextProviderProps<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>> {
}

export const UpgradesSource: FC<IUpgradesSourceProps> = ({children, ...props}) => {
	return <SourceContextProvider<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>
		useQuery={useUpgradesQuery}
		filter={useUpgradesOptionalFilterContext()?.filter}
		{...props}
	>
		{children}
	</SourceContextProvider>;
}

export interface IUpgradesSourceConsumerProps extends ConsumerProps<ISourceContext<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>> {
}

export const UpgradesSourceConsumer: FC<IUpgradesSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export interface IUpgradesBaseTableProps extends ITableProps<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto> {
}

export const UpgradesBaseTable: FC<IUpgradesBaseTableProps> = props => {
	return <Table<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>
		{...props}
	/>
}

export interface IUpgradesSourceTableProps extends IUpgradesBaseTableProps {
	source?: IUpgradesSourceProps;
	defaultFilter?: import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto;
	defaultOrderBy?: import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto;
	defaultQuery?: IUpgradesQueryParams;
	filter?: import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto;
	orderBy?: import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto;
	query?: IUpgradesQueryParams;
	options?: IQueryOptions<IQueryResult<import("@/sdk/edde/phinx/dto/index").UpgradeDto>>;
}

export const UpgradesSourceTable: FC<IUpgradesSourceTableProps> = ({source, defaultFilter, defaultOrderBy, defaultQuery, filter, orderBy, query, options, ...props}) => {
	return <UpgradesSource
		defaultFilter={defaultFilter}
		defaultOrderBy={defaultOrderBy}
		defaultQuery={defaultQuery}
		filter={filter}
		orderBy={orderBy}
		query={query}
		options={options}
		{...source}
	>
		<UpgradesBaseTable {...props}/>
	</UpgradesSource>
}

export interface IUpgradesSourceSelectProps extends Partial<IQuerySourceSelectProps<import("@/sdk/edde/phinx/dto/index").UpgradeDto>> {
	toOption: IToOptionMapper<import("@/sdk/edde/phinx/dto/index").UpgradeDto>;
	source?: IUpgradesSourceProps;
}

export const UpgradesSourceSelect: FC<IUpgradesSourceSelectProps> = ({source, ...props}) => {
	return <UpgradesSource defaultSize={100} {...source}>
		<QuerySourceSelect<IUpgradesQueryParams, import("@/sdk/edde/phinx/dto/index").UpgradeDto, import("@/sdk/edde/phinx/dto/index").UpgradeOrderByDto, import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto> {...props}/>
	</UpgradesSource>;
};

export interface IUpgradesFilterContextProps extends Partial<IFilterContextProviderProps<import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>> {
}

export const UpgradesFilterContext: FC<IUpgradesFilterContextProps> = props => {
	return <FilterContextProvider<import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto> {...props}/>
}

export const useUpgradesOptionalFilterContext = () => useOptionalFilterContext<import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>()
export const useUpgradesFilterContext = () => useFilterContext<import("@/sdk/edde/phinx/dto/index").UpgradeFilterDto>()
