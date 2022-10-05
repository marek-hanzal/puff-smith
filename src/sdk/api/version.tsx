/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IEntityContext} from "@leight-core/api";
import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	EntityContext,
	EntityProvider,
	IEntityProviderProps,
	IQueryProps,
	Query,
	toLink,
	useContext,
	useOptionalContext
}                       from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {
	createContext,
	FC
}                       from "react";

export const VersionApiLink = "/api/version";

export type IVersionQueryParams = any;

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

export const toVersionLink = (queryParams?: IVersionQueryParams) => toLink(VersionApiLink, queryParams);
export const useVersionLink = () => toVersionLink;

export const useVersionPromise = createPromiseHook<void, string, IVersionQueryParams>(VersionApiLink, "get");
export const VersionPromise = createPromise<void, string, IVersionQueryParams>(VersionApiLink, "get");

export interface IFetchVersionProps extends Partial<IQueryProps<void, string, IVersionQueryParams>> {
}

export const FetchVersion: FC<IFetchVersionProps> = props => <Query<void, string, IVersionQueryParams>
	useQuery={useVersionQuery}
	request={undefined}
	context={useOptionalVersionContext()}
	{...props}
/>;
