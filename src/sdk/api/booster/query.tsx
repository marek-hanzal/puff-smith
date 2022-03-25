import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
import {IQueryFilter, IQueryOrderBy, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {
	createPromiseHook,
	createQueryHook,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	useFilterContext,
	useLinkContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOrderByContext,
	useSourceContext
} from "@leight-core/client";

export const BoostersApiLink = "/api/booster/query";

export type IBoostersQueryParams = undefined;

export const useBoostersQuery = createQueryHook<IBoosterQuery, IQueryResult<IBooster>, IBoostersQueryParams>(BoostersApiLink, "post");

export const useBoostersSource = () => useSourceContext<IBooster>()

export interface IBoostersSourceContext extends ISourceContext<IBooster> {
}

export interface IBoostersSourceConsumerProps extends ConsumerProps<ISourceContext<IBooster>> {
}

export const BoostersSourceConsumer: FC<IBoostersSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IBoostersSourceProps extends Partial<ISourceProviderProps<IBooster>> {
}

export const BoostersSource: FC<IBoostersSourceProps> = props => {
	return <SourceProvider<IBooster>
		useQuery={useBoostersQuery}
		{...props}
	/>;
}

export const useBoostersLink = (): ((queryParams?: IBoostersQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(BoostersApiLink, queryParams);
}

export const useBoostersPromise = createPromiseHook<IBoosterQuery, IBooster, IBoostersQueryParams>(BoostersApiLink, "post");

export interface IBoostersFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<IBoosterQuery>>> {
}

export const BoostersFilterProvider: FC<IBoostersFilterProviderProps> = props => <FilterProvider<IQueryFilter<IBoosterQuery>> {...props}/>;

export const useBoostersOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<IBoosterQuery>>()
export const useBoostersFilterContext = () => useFilterContext<IQueryFilter<IBoosterQuery>>()

export interface IBoostersSourceFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<IBoosterQuery>> {
}

export const BoostersSourceFilter: FC<IBoostersSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Boosters'}
/>;

export interface IBoostersOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryFilter<IBoosterQuery>>> {
}

export const BoostersOrderByProvider: FC<IBoostersOrderByProviderProps> = props => <OrderByProvider<IQueryFilter<IBoosterQuery>> {...props}/>;

export const useBoostersOptionalOrderByContext = () => useOptionalOrderByContext<IQueryFilter<IBoosterQuery>>()
export const useBoostersOrderByContext = () => useOrderByContext<IQueryFilter<IBoosterQuery>>()

export interface IBoostersListSourceProps extends Partial<IListProps<IBooster>> {
	sourceProps?: Partial<IBoostersSourceProps>;
}

export interface IBoostersSourceControlProviderProps extends Partial<ISourceControlProviderProps<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>, IBoostersQueryParams>> {
}

export const BoostersSourceControlProvider: FC<IBoostersSourceControlProviderProps> = props => <SourceControlProvider<IQueryFilter<IBoosterQuery>, IQueryOrderBy<IBoosterQuery>> {...props}/>;

export const BoostersListSource: FC<IBoostersListSourceProps> = ({sourceProps, ...props}) => {
	return <BoostersSource
		{...sourceProps}
	>
		<List<IBooster>
			{...props}
		/>
	</BoostersSource>
}

export interface IBoostersSourceSelectProps extends IQuerySourceSelectProps<IBooster> {
	toOption: IToOptionMapper<IBooster>;
	sourceProps?: IBoostersSourceProps;
}

export const BoostersSourceSelect: FC<IBoostersSourceSelectProps> = ({sourceProps, ...props}) => {
	return <BoostersSource {...sourceProps}>
		<QuerySourceSelect<IBooster> {...props}/>
	</BoostersSource>;
};

export const useBoostersQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoostersApiLink]);
}
