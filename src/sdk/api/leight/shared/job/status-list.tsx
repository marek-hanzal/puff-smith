import {IEntityContext, IJobStatus} from "@leight-core/api";
import {createContext, FC} from "react";
import {createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, useContext, useLinkContext, useOptionalContext} from "@leight-core/client";

export const StatusListApiLink = "/api/leight/shared/job/status-list";

export type IStatusListQueryParams = undefined;

export const StatusListContext = createContext(null as unknown as IEntityContext<IJobStatus[]>);

export const useStatusListContext = (): IEntityContext<IJobStatus[]> => useContext(StatusListContext, "StatusListContext");
export const useOptionalStatusListContext = () => useOptionalContext<IEntityContext<IJobStatus[]>>(StatusListContext as any);

export interface IStatusListProvider extends IEntityProviderProps<IJobStatus[]> {
}

export const StatusListProvider: FC<IStatusListProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <StatusListContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useStatusListQuery = createQueryHook<void, IJobStatus[], IStatusListQueryParams>(StatusListApiLink, "get");

export const useStatusListLink = (): ((query: IStatusListQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(StatusListApiLink, query);
}

export const useStatusListPromise = createPromiseHook<void, IJobStatus[], IStatusListQueryParams>(StatusListApiLink, "get");

export interface IFetchStatusListProps extends Partial<IQueryProps<void, IJobStatus[], IStatusListQueryParams>> {
}

export const FetchStatusList: FC<IFetchStatusListProps> = props => <Query<void, IJobStatus[], IStatusListQueryParams>
	useQuery={useStatusListQuery}
	request={undefined}
	context={useOptionalStatusListContext()}
	{...props}
/>;
