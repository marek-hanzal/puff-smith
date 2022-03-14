import {IQuery, IQueryResult, ISourceContext} from "@leight-core/api";
import {ConsumerProps, FC} from "react";
import {
	createPromiseHook,
	createQueryHook,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IListProps,
	IOrderByProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
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

export const ImagesApiLink = "/api/leight/shared/image/images";

export type IImagesQueryParams = void;

export const useImagesQuery = createQueryHook<IQuery, IQueryResult<IImagesDto>, IImagesQueryParams>(ImagesApiLink, "post");

export const useImagesSource = () => useSourceContext<IImagesDto>()

export interface IImagesSourceContext extends ISourceContext<IImagesDto> {
}

export interface IImagesSourceProps extends Partial<ISourceProviderProps<IImagesDto>> {
}

export interface IImagesSourceConsumerProps extends ConsumerProps<ISourceContext<IImagesDto>> {
}

export const ImagesSourceConsumer: FC<IImagesSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export const ImagesSource: FC<IImagesSourceProps> = props => {
	return <SourceProvider<IImagesDto>
		useQuery={useImagesQuery}
		{...props}
	/>;
}

export const useImagesLink = (): ((query: IImagesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImagesApiLink, query);
}

export const useImagesPromise = createPromiseHook<IQuery, IImagesDto, IImagesQueryParams>(ImagesApiLink, "post");

export interface IImagesFilterProviderProps extends Partial<IFilterProviderProps<void>> {
}

export const ImagesFilterProvider: FC<IImagesFilterProviderProps> = props => {
	return <FilterProvider<void> {...props}/>
}

export const useImagesOptionalFilterContext = () => useOptionalFilterContext<void>()
export const useImagesFilterContext = () => useFilterContext<void>()

export interface IImagesFilterProps extends IFilterWithoutTranslationProps<void> {
}

export const ImagesFilter: FC<IImagesFilterProps> = props => {
	return <Filter
		{...props}
		translation={'common.filter.Images'}
	/>
}

export interface IImagesOrderByProviderProps extends Partial<IOrderByProviderProps<void>> {
}

export const ImagesOrderByProvider: FC<IImagesOrderByProviderProps> = props => {
	return <OrderByProvider<void> {...props}/>
}

export const useImagesOptionalOrderByContext = () => useOptionalOrderByContext<void>()
export const useImagesOrderByContext = () => useOrderByContext<void>()

export interface IImagesListSourceProps extends Partial<IListProps<IImagesDto>> {
	sourceProps?: Partial<IImagesSourceProps>;
}

export interface IImagesSourceControlProviderProps extends Partial<ISourceControlProviderProps<void, void, IImagesQueryParams>> {
}

export const ImagesSourceControlProvider: FC<IImagesSourceControlProviderProps> = props => {
	return <SourceControlProvider<void, void> {...props}/>
}

export const ImagesListSource: FC<IImagesListSourceProps> = ({sourceProps, ...props}) => {
	return <ImagesSource
		{...sourceProps}
	>
		<List<IImagesDto>
			{...props}
		/>
	</ImagesSource>
}
