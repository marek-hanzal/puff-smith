/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const ModApiLink = "/api/inventory/mod/[id]/fetch";

export type IModQueryParams = IWithIdentityQuery;

export const ModContext = createContext(null as unknown as IEntityContext<ISourceItem<IModInventorySource>>);

export const useModContext = (): IEntityContext<ISourceItem<IModInventorySource>> => useContext(ModContext, "ModContext");
export const useOptionalModContext = () => useOptionalContext<IEntityContext<ISourceItem<IModInventorySource>>>(ModContext as any);

export interface IModProvider extends IEntityProviderProps<ISourceItem<IModInventorySource>> {
}

export const ModProvider: FC<IModProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <ModContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useModQuery = createQueryHook<void, ISourceItem<IModInventorySource>, IModQueryParams>(ModApiLink, "get");

export const useModQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ModApiLink]);
};

export const toModLink = (queryParams?: IModQueryParams) => toLink(ModApiLink, queryParams);
export const useModLink = () => toModLink;

export const useModPromise = createPromiseHook<void, ISourceItem<IModInventorySource>, IModQueryParams>(ModApiLink, "get");
export const ModPromise = createPromise<void, ISourceItem<IModInventorySource>, IModQueryParams>(ModApiLink, "get");

export interface IFetchModProps extends Partial<IQueryProps<void, ISourceItem<IModInventorySource>, IModQueryParams>> {
}

export const FetchMod: FC<IFetchModProps> = props => <Query<void, ISourceItem<IModInventorySource>, IModQueryParams>
	useQuery={useModQuery}
	request={undefined}
	context={useOptionalModContext()}
	{...props}
/>;
