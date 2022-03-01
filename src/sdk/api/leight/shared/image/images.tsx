import {ISourceContext} from "@leight-core/api";
import {createPostQuery, ISourceProviderProps, usePostPromise, useSourceContext} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {AxiosRequestConfig} from "axios";

export interface IImagesDto {
}

export const ImagesApiLink = "/api/leight/shared/image/images";

export type IImagesQueryParams = void;

export const useImagesQuery = createPostQuery<IImagesQueryParams, any, IImagesDto>(ImagesApiLink);

export const useImagesSource = () => useSourceContext<IImagesQueryParams, any, IImagesDto>()

export interface IImagesSourceContext extends ISourceContext<IImagesQueryParams, any, IImagesDto> {
}

export interface IImagesSourceProps extends Partial<ISourceProviderProps<IImagesQueryParams, any, IImagesDto>> {
}

export const useImagesLink = (): ((query: IImagesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImagesApiLink, query);
}

export const useImagesPromise = (request: any, query: IImagesQueryParams, config?: AxiosRequestConfig) => {
	return usePostPromise<IImagesQueryParams, any, IImagesDto>(ImagesApiLink, query, request, config);
}
