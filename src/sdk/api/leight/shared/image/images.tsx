import {IQuery, ISourceContext} from "@leight-core/api";
import {createPromiseHook, createQueryHook, ISourceProviderProps, useSourceContext} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";

export interface IImagesDto {
}

export const ImagesApiLink = "/api/leight/shared/image/images";

export type IImagesQueryParams = void;

export const useImagesQuery = createQueryHook<IQuery, IImagesDto, IImagesQueryParams>(ImagesApiLink, "post");

export const useImagesSource = () => useSourceContext<IQuery, IImagesDto, IImagesQueryParams>()

export interface IImagesSourceContext extends ISourceContext<IQuery, IImagesDto, IImagesQueryParams> {
}

export interface IImagesSourceProps extends Partial<ISourceProviderProps<IQuery, IImagesDto, IImagesQueryParams>> {
}

export const useImagesLink = (): ((query: IImagesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImagesApiLink, query);
}

export const useImagesPromise = createPromiseHook<IQuery, IImagesDto, IImagesQueryParams>(ImagesApiLink, "post");
