import {IQuery, IQueryResult, ISourceContext} from "@leight-core/api";
import {ConsumerProps, FC} from "react";
import {createPromiseHook, createQueryHook, ISourceProviderProps, SourceContext, SourceProvider, useLinkContext, useSourceContext} from "@leight-core/client";

export interface IImagesDto {
}

export const ImagesApiLink = "/api/leight/shared/image/images";

export type IImagesQueryParams = void;

export const useImagesQuery = createQueryHook<IQuery, IQueryResult<IImagesDto>, IImagesQueryParams>(ImagesApiLink, "post");

export const useImagesSource = () => useSourceContext<IImagesDto, void, void, IImagesQueryParams>()

export interface IImagesSourceContext extends ISourceContext<IImagesDto, void, void, IImagesQueryParams> {
}

export interface IImagesSourceProps extends Partial<ISourceProviderProps<IImagesDto, void, void, IImagesQueryParams>> {
}

export interface IImagesSourceConsumerProps extends ConsumerProps<ISourceContext<IImagesDto, void, void, IImagesQueryParams>> {
}

export const ImagesSourceConsumer: FC<IImagesSourceConsumerProps> = props => {
	return <SourceContext.Consumer {...props}/>
}

export const ImagesSource: FC<IImagesSourceProps> = props => {
	return <SourceProvider<IImagesDto, void, void, IImagesQueryParams>
		useQuery={useImagesQuery}
		{...props}
	/>;
}

export const useImagesLink = (): ((query: IImagesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImagesApiLink, query);
}

export const useImagesPromise = createPromiseHook<IQuery, IImagesDto, IImagesQueryParams>(ImagesApiLink, "post");
