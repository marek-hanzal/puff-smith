/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildSource} from "@/puff-smith/service/build/interface";
import {IEntityContext, ISourceItem, IWithIdentity} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const BuildApiLink = "/api/lab/build/[id]/fetch";

export type IBuildQueryParams = IWithIdentity;

export const BuildContext = createContext(null as unknown as IEntityContext<ISourceItem<IBuildSource>>);

export const useBuildContext = (): IEntityContext<ISourceItem<IBuildSource>> => useContext(BuildContext, "BuildContext");
export const useOptionalBuildContext = () => useOptionalContext<IEntityContext<ISourceItem<IBuildSource>>>(BuildContext as any);

export interface IBuildProvider extends IEntityProviderProps<ISourceItem<IBuildSource>> {
}

export const BuildProvider: FC<IBuildProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <BuildContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useBuildQuery = createQueryHook<void, ISourceItem<IBuildSource>, IBuildQueryParams>(BuildApiLink, "get");

export const useBuildQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BuildApiLink]);
};

export const toBuildLink = (queryParams?: IBuildQueryParams) => toLink(BuildApiLink, queryParams);
export const useBuildLink = () => toBuildLink;

export const useBuildPromise = createPromiseHook<void, ISourceItem<IBuildSource>, IBuildQueryParams>(BuildApiLink, "get");
export const BuildPromise = createPromise<void, ISourceItem<IBuildSource>, IBuildQueryParams>(BuildApiLink, "get");

export interface IFetchBuildProps extends Partial<IQueryProps<void, ISourceItem<IBuildSource>, IBuildQueryParams>> {
}

export const FetchBuild: FC<IFetchBuildProps> = props => <Query<void, ISourceItem<IBuildSource>, IBuildQueryParams>
	useQuery={useBuildQuery}
	request={undefined}
	context={useOptionalBuildContext()}
	{...props}
/>;
