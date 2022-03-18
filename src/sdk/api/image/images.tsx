import {IQuery, IQueryResult, ISourceContext, IToOptionMapper} from "@leight-core/api";
import {ConsumerProps, FC} from "react";
import {useQueryClient} from "react-query";
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

export interface IImagesDto {
}

export const ImagesApiLink = "/api/image/images";

export type IImagesQueryParams = undefined;

export const useImagesQuery = createQueryHook<IQuery, IQueryResult<IImagesDto>, IImagesQueryParams>(ImagesApiLink, "post");

export const useImagesSource = () => useSourceContext<IImagesDto>()

export interface IImagesSourceContext extends ISourceContext<IImagesDto> {
}

export interface IImagesSourceConsumerProps extends ConsumerProps<ISourceContext<IImagesDto>> {
}

export const ImagesSourceConsumer: FC<IImagesSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IImagesSourceProps extends Partial<ISourceProviderProps<IImagesDto>> {
}

export const ImagesSource: FC<IImagesSourceProps> = props => {
	return <SourceProvider<IImagesDto>
		useQuery={useImagesQuery}
		{...props}
	/>;
}

export const useImagesLink = (): ((queryParams?: IImagesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return queryParams => linkContext.link(ImagesApiLink, queryParams);
}

export const useImagesPromise = createPromiseHook<IQuery, IImagesDto, IImagesQueryParams>(ImagesApiLink, "post");

export interface IImagesFilterProviderProps extends Partial<IFilterProviderProps<void>> {
}

export const ImagesFilterProvider: FC<IImagesFilterProviderProps> = props => <FilterProvider<void> {...props}/>;

export const useImagesOptionalFilterContext = () => useOptionalFilterContext<void>()
export const useImagesFilterContext = () => useFilterContext<void>()

export interface IImagesSourceFilterProps extends IFilterWithoutTranslationProps<void> {
}

export const ImagesSourceFilter: FC<IImagesSourceFilterProps> = props => <Filter
	{...props}
	translation={'common.filter.Images'}
/>;

export interface IImagesOrderByProviderProps extends Partial<IOrderByProviderProps<void>> {
}

export const ImagesOrderByProvider: FC<IImagesOrderByProviderProps> = props => <OrderByProvider<void> {...props}/>;

export const useImagesOptionalOrderByContext = () => useOptionalOrderByContext<void>()
export const useImagesOrderByContext = () => useOrderByContext<void>()

export interface IImagesListSourceProps extends Partial<IListProps<IImagesDto>> {
	sourceProps?: Partial<IImagesSourceProps>;
}

export interface IImagesSourceControlProviderProps extends Partial<ISourceControlProviderProps<void, void, IImagesQueryParams>> {
}

export const ImagesSourceControlProvider: FC<IImagesSourceControlProviderProps> = props => <SourceControlProvider<void, void> {...props}/>;

export const ImagesListSource: FC<IImagesListSourceProps> = ({sourceProps, ...props}) => {
	return <ImagesSource
		{...sourceProps}
	>
		<List<IImagesDto>
			{...props}
		/>
	</ImagesSource>
}

export interface IImagesSourceSelectProps extends IQuerySourceSelectProps<IImagesDto> {
	toOption: IToOptionMapper<IImagesDto>;
	sourceProps?: IImagesSourceProps;
}

export const ImagesSourceSelect: FC<IImagesSourceSelectProps> = ({sourceProps, ...props}) => {
	return <ImagesSource {...sourceProps}>
		<QuerySourceSelect<IImagesDto> {...props}/>
	</ImagesSource>;
};

export const useImagesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ImagesApiLink]);
}
