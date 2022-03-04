import {IQuery, ISourceContext} from "@leight-core/api";
import {createPromiseHook, createQueryHook, ISourceProviderProps, useLinkContext, useSourceContext} from "@leight-core/client";

export interface IImagesDto {
}

export const ImagesApiLink = "/api/leight/shared/image/images";

export type IImagesQueryParams = void;

export const useImagesQuery = createQueryHook<IQuery, IImagesDto, IImagesQueryParams>(ImagesApiLink, "post");

export const useImagesSource = () => useSourceContext<IImagesDto, IImagesQueryParams>()

export interface IImagesSourceContext extends ISourceContext<IImagesDto, IImagesQueryParams> {
}

export interface IImagesSourceProps extends Partial<ISourceProviderProps<IImagesDto, IImagesQueryParams>> {
}

export const useImagesLink = (): ((query: IImagesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImagesApiLink, query);
}

export const useImagesPromise = createPromiseHook<IQuery, IImagesDto, IImagesQueryParams>(ImagesApiLink, "post");
