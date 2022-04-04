/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createContext, FC} from "react";
import {IEntityContext} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, useContext, useLinkContext, useOptionalContext} from "@leight-core/client";

export const VersionApiLink = "/api/version";

export type IVersionQueryParams = undefined;

export const VersionContext = createContext(null as unknown as IEntityContext<string>);

export const useVersionContext = (): IEntityContext<string> => useContext(VersionContext, "VersionContext");
export const useOptionalVersionContext = () => useOptionalContext<IEntityContext<string>>(VersionContext as any);

export interface IVersionProvider extends IEntityProviderProps<string> {
}

export const VersionProvider: FC<IVersionProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <VersionContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useVersionQuery = createQueryHook<void, string, IVersionQueryParams>(VersionApiLink, "get");

export const useVersionQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([VersionApiLink]);
}

export const useVersionLink = (): ((query: IVersionQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(VersionApiLink, query);
}

export const useVersionPromise = createPromiseHook<void, string, IVersionQueryParams>(VersionApiLink, "get");

export interface IFetchVersionProps extends Partial<IQueryProps<void, string, IVersionQueryParams>> {
}

export const FetchVersion: FC<IFetchVersionProps> = props => <Query<void, string, IVersionQueryParams>
	useQuery={useVersionQuery}
	request={undefined}
	context={useOptionalVersionContext()}
	{...props}
/>;
