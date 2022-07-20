/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {createContext, FC} from "react";

export const CottonApiLink = "/api/inventory/cotton/[id]/fetch";

export type ICottonQueryParams = IWithIdentityQuery;

export const CottonContext = createContext(null as unknown as IEntityContext<ISourceItem<ICottonInventorySource>>);

export const useCottonContext = (): IEntityContext<ISourceItem<ICottonInventorySource>> => useContext(CottonContext, "CottonContext");
export const useOptionalCottonContext = () => useOptionalContext<IEntityContext<ISourceItem<ICottonInventorySource>>>(CottonContext as any);

export interface ICottonProvider extends IEntityProviderProps<ISourceItem<ICottonInventorySource>> {
}

export const CottonProvider: FC<ICottonProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <CottonContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useCottonQuery = createQueryHook<void, ISourceItem<ICottonInventorySource>, ICottonQueryParams>(CottonApiLink, "get");

export const useCottonQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CottonApiLink]);
}

export const toCottonLink = (queryParams?: ICottonQueryParams) => toLink(CottonApiLink, queryParams);
export const useCottonLink = () => toCottonLink;

export const useCottonPromise = createPromiseHook<void, ISourceItem<ICottonInventorySource>, ICottonQueryParams>(CottonApiLink, "get");
export const CottonPromise = createPromise<void, ISourceItem<ICottonInventorySource>, ICottonQueryParams>(CottonApiLink, "get");

export interface IFetchCottonProps extends Partial<IQueryProps<void, ISourceItem<ICottonInventorySource>, ICottonQueryParams>> {
}

export const FetchCotton: FC<IFetchCottonProps> = props => <Query<void, ISourceItem<ICottonInventorySource>, ICottonQueryParams>
	useQuery={useCottonQuery}
	request={undefined}
	context={useOptionalCottonContext()}
	{...props}
/>;
