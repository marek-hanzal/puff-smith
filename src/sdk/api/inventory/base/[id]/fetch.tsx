/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {createContext, FC} from "react";

export const BaseApiLink = "/api/inventory/base/[id]/fetch";

export type IBaseQueryParams = IWithIdentityQuery;

export const BaseContext = createContext(null as unknown as IEntityContext<ISourceItem<IBaseInventorySource>>);

export const useBaseContext = (): IEntityContext<ISourceItem<IBaseInventorySource>> => useContext(BaseContext, "BaseContext");
export const useOptionalBaseContext = () => useOptionalContext<IEntityContext<ISourceItem<IBaseInventorySource>>>(BaseContext as any);

export interface IBaseProvider extends IEntityProviderProps<ISourceItem<IBaseInventorySource>> {
}

export const BaseProvider: FC<IBaseProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <BaseContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useBaseQuery = createQueryHook<void, ISourceItem<IBaseInventorySource>, IBaseQueryParams>(BaseApiLink, "get");

export const useBaseQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BaseApiLink]);
}

export const toBaseLink = (queryParams?: IBaseQueryParams) => toLink(BaseApiLink, queryParams);
export const useBaseLink = () => toBaseLink;

export const useBasePromise = createPromiseHook<void, ISourceItem<IBaseInventorySource>, IBaseQueryParams>(BaseApiLink, "get");
export const BasePromise = createPromise<void, ISourceItem<IBaseInventorySource>, IBaseQueryParams>(BaseApiLink, "get");

export interface IFetchBaseProps extends Partial<IQueryProps<void, ISourceItem<IBaseInventorySource>, IBaseQueryParams>> {
}

export const FetchBase: FC<IFetchBaseProps> = props => <Query<void, ISourceItem<IBaseInventorySource>, IBaseQueryParams>
	useQuery={useBaseQuery}
	request={undefined}
	context={useOptionalBaseContext()}
	{...props}
/>;
