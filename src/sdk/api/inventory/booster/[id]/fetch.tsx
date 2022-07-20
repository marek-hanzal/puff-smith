/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {createContext, FC} from "react";

export const BoosterApiLink = "/api/inventory/booster/[id]/fetch";

export type IBoosterQueryParams = IWithIdentityQuery;

export const BoosterContext = createContext(null as unknown as IEntityContext<ISourceItem<IBoosterInventorySource>>);

export const useBoosterContext = (): IEntityContext<ISourceItem<IBoosterInventorySource>> => useContext(BoosterContext, "BoosterContext");
export const useOptionalBoosterContext = () => useOptionalContext<IEntityContext<ISourceItem<IBoosterInventorySource>>>(BoosterContext as any);

export interface IBoosterProvider extends IEntityProviderProps<ISourceItem<IBoosterInventorySource>> {
}

export const BoosterProvider: FC<IBoosterProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <BoosterContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useBoosterQuery = createQueryHook<void, ISourceItem<IBoosterInventorySource>, IBoosterQueryParams>(BoosterApiLink, "get");

export const useBoosterQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BoosterApiLink]);
}

export const toBoosterLink = (queryParams?: IBoosterQueryParams) => toLink(BoosterApiLink, queryParams);
export const useBoosterLink = () => toBoosterLink;

export const useBoosterPromise = createPromiseHook<void, ISourceItem<IBoosterInventorySource>, IBoosterQueryParams>(BoosterApiLink, "get");
export const BoosterPromise = createPromise<void, ISourceItem<IBoosterInventorySource>, IBoosterQueryParams>(BoosterApiLink, "get");

export interface IFetchBoosterProps extends Partial<IQueryProps<void, ISourceItem<IBoosterInventorySource>, IBoosterQueryParams>> {
}

export const FetchBooster: FC<IFetchBoosterProps> = props => <Query<void, ISourceItem<IBoosterInventorySource>, IBoosterQueryParams>
	useQuery={useBoosterQuery}
	request={undefined}
	context={useOptionalBoosterContext()}
	{...props}
/>;
