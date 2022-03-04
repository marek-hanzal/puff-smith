import {createPromiseHook, createQueryHook, useLinkContext} from "@leight-core/client";

export const DownloadApiLink = "/api/leight/shared/file/[fileId]/download";

export type IDownloadQueryParams = { fileId: string };

export const useDownloadQuery = createQueryHook<void, any, IDownloadQueryParams>(DownloadApiLink, "get");

export const useDownloadLink = (): ((query: IDownloadQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(DownloadApiLink, query);
}

export const useDownloadPromise = createPromiseHook<void, any, IDownloadQueryParams>(DownloadApiLink, "get");
