/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const WireApiLink = "/api/inventory/wire/[id]/fetch";

export type IWireQueryParams = IWithIdentityQuery;

export const WireContext = createContext(null as unknown as IEntityContext<ISourceItem<IWireInventorySource>>);

export const useWireContext = (): IEntityContext<ISourceItem<IWireInventorySource>> => useContext(WireContext, "WireContext");
export const useOptionalWireContext = () => useOptionalContext<IEntityContext<ISourceItem<IWireInventorySource>>>(WireContext as any);

export interface IWireProvider extends IEntityProviderProps<ISourceItem<IWireInventorySource>> {
}

export const WireProvider: FC<IWireProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <WireContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useWireQuery = createQueryHook<void, ISourceItem<IWireInventorySource>, IWireQueryParams>(WireApiLink, "get");

export const useWireQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WireApiLink]);
}

export const toWireLink = (queryParams?: IWireQueryParams) => toLink(WireApiLink, queryParams);
export const useWireLink = () => toWireLink;

export const useWirePromise = createPromiseHook<void, ISourceItem<IWireInventorySource>, IWireQueryParams>(WireApiLink, "get");
export const WirePromise = createPromise<void, ISourceItem<IWireInventorySource>, IWireQueryParams>(WireApiLink, "get");

export interface IFetchWireProps extends Partial<IQueryProps<void, ISourceItem<IWireInventorySource>, IWireQueryParams>> {
}

export const FetchWire: FC<IFetchWireProps> = props => <Query<void, ISourceItem<IWireInventorySource>, IWireQueryParams>
	useQuery={useWireQuery}
	request={undefined}
	context={useOptionalWireContext()}
	{...props}
/>;
