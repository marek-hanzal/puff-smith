/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const AromaApiLink = "/api/inventory/aroma/[id]/fetch";

export type IAromaQueryParams = IWithIdentityQuery;

export const AromaContext = createContext(null as unknown as IEntityContext<ISourceItem<IAromaInventorySource>>);

export const useAromaContext = (): IEntityContext<ISourceItem<IAromaInventorySource>> => useContext(AromaContext, "AromaContext");
export const useOptionalAromaContext = () => useOptionalContext<IEntityContext<ISourceItem<IAromaInventorySource>>>(AromaContext as any);

export interface IAromaProvider extends IEntityProviderProps<ISourceItem<IAromaInventorySource>> {
}

export const AromaProvider: FC<IAromaProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <AromaContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useAromaQuery = createQueryHook<void, ISourceItem<IAromaInventorySource>, IAromaQueryParams>(AromaApiLink, "get");

export const useAromaQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AromaApiLink]);
};

export const toAromaLink = (queryParams?: IAromaQueryParams) => toLink(AromaApiLink, queryParams);
export const useAromaLink = () => toAromaLink;

export const useAromaPromise = createPromiseHook<void, ISourceItem<IAromaInventorySource>, IAromaQueryParams>(AromaApiLink, "get");
export const AromaPromise = createPromise<void, ISourceItem<IAromaInventorySource>, IAromaQueryParams>(AromaApiLink, "get");

export interface IFetchAromaProps extends Partial<IQueryProps<void, ISourceItem<IAromaInventorySource>, IAromaQueryParams>> {
}

export const FetchAroma: FC<IFetchAromaProps> = props => <Query<void, ISourceItem<IAromaInventorySource>, IAromaQueryParams>
	useQuery={useAromaQuery}
	request={undefined}
	context={useOptionalAromaContext()}
	{...props}
/>;
