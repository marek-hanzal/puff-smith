import {createContext, FC} from "react";
import {IEntityContext} from "@leight-core/api";
import {createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, useContext, useLinkContext, useOptionalContext} from "@leight-core/client";

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

export const useDownloadLink = (): ((query: IDownloadQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(DownloadApiLink, query);
}

export const useDownloadPromise = createPromiseHook<void, string, IDownloadQueryParams>(DownloadApiLink, "get");

export interface IFetchDownloadProps extends Partial<IQueryProps<void, string, IDownloadQueryParams>> {
}

export const FetchDownload: FC<IFetchDownloadProps> = props => <Query<void, string, IDownloadQueryParams>
	useQuery={useDownloadQuery}
	request={undefined}
	context={useOptionalDownloadContext()}
	{...props}
/>;
