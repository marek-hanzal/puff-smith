import {createGetQuery, useGetPromise} from "@leight-core/source";
import {useLinkContext} from "@leight-core/link";
import {AxiosRequestConfig} from "axios";

export const DownloadApiLink = "/api/leight/shared/file/[fileId]/download";

export type IDownloadQueryParams = { fileId: string };

export const useDownloadQuery = createGetQuery<IDownloadQueryParams, any>(DownloadApiLink);

export const useDownloadLink = (): ((query: IDownloadQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(DownloadApiLink, query);
}

export const useDownloadPromise = (query: IDownloadQueryParams, config?: AxiosRequestConfig) => {
	return useGetPromise<IDownloadQueryParams, any>(DownloadApiLink, query, config);
}
