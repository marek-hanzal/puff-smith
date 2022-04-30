/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {fileFetch} from "@/puff-smith/service/file/prisma";
import {FetchEndpoint} from "@leight-core/server";
import {FC, createContext} from "react";
import {IEntityContext, IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, createPromise, createPromiseHook, createQueryHook, toLink, useContext, useOptionalContext} from "@leight-core/client";

export const DownloadApiLink = "/api/file/[fileId]/download";

export type IDownloadQueryParams = { fileId: string };

export const DownloadContext = createContext(null as unknown as IEntityContext<string>);

export const useDownloadContext = (): IEntityContext<string> => useContext(DownloadContext, "DownloadContext");
export const useOptionalDownloadContext = () => useOptionalContext<IEntityContext<string>>(DownloadContext as any);

export interface IDownloadProvider extends IEntityProviderProps<string> {
}

export const DownloadProvider: FC<IDownloadProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <DownloadContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useDownloadQuery = createQueryHook<void, string, IDownloadQueryParams>(DownloadApiLink, "get");

export const useDownloadQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([DownloadApiLink]);
}

export const toDownloadLink = (queryParams?: IDownloadQueryParams) => toLink(DownloadApiLink, queryParams);
export const useDownloadLink = () => toDownloadLink;

export const useDownloadPromise = createPromiseHook<void, string, IDownloadQueryParams>(DownloadApiLink, "get");
export const DownloadPromise = createPromise<void, string, IDownloadQueryParams>(DownloadApiLink, "get");

export interface IFetchDownloadProps extends Partial<IQueryProps<void, string, IDownloadQueryParams>> {
}

export const FetchDownload: FC<IFetchDownloadProps> = props => <Query<void, string, IDownloadQueryParams>
	useQuery={useDownloadQuery}
	request={undefined}
	context={useOptionalDownloadContext()}
	{...props}
/>;
