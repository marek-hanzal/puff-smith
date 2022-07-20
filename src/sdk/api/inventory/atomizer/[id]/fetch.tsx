/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {createContext, FC} from "react";

export const AtomizerApiLink = "/api/inventory/atomizer/[id]/fetch";

export type IAtomizerQueryParams = IWithIdentityQuery;

export const AtomizerContext = createContext(null as unknown as IEntityContext<ISourceItem<IAtomizerInventorySource>>);

export const useAtomizerContext = (): IEntityContext<ISourceItem<IAtomizerInventorySource>> => useContext(AtomizerContext, "AtomizerContext");
export const useOptionalAtomizerContext = () => useOptionalContext<IEntityContext<ISourceItem<IAtomizerInventorySource>>>(AtomizerContext as any);

export interface IAtomizerProvider extends IEntityProviderProps<ISourceItem<IAtomizerInventorySource>> {
}

export const AtomizerProvider: FC<IAtomizerProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <AtomizerContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useAtomizerQuery = createQueryHook<void, ISourceItem<IAtomizerInventorySource>, IAtomizerQueryParams>(AtomizerApiLink, "get");

export const useAtomizerQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([AtomizerApiLink]);
}

export const toAtomizerLink = (queryParams?: IAtomizerQueryParams) => toLink(AtomizerApiLink, queryParams);
export const useAtomizerLink = () => toAtomizerLink;

export const useAtomizerPromise = createPromiseHook<void, ISourceItem<IAtomizerInventorySource>, IAtomizerQueryParams>(AtomizerApiLink, "get");
export const AtomizerPromise = createPromise<void, ISourceItem<IAtomizerInventorySource>, IAtomizerQueryParams>(AtomizerApiLink, "get");

export interface IFetchAtomizerProps extends Partial<IQueryProps<void, ISourceItem<IAtomizerInventorySource>, IAtomizerQueryParams>> {
}

export const FetchAtomizer: FC<IFetchAtomizerProps> = props => <Query<void, ISourceItem<IAtomizerInventorySource>, IAtomizerQueryParams>
	useQuery={useAtomizerQuery}
	request={undefined}
	context={useOptionalAtomizerContext()}
	{...props}
/>;
