/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUser} from "@/puff-smith/service/user";
import {IEntityContext} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const WhoamiApiLink = "/api/user/whoami";

export type IWhoamiQueryParams = undefined;

export const WhoamiContext = createContext(null as unknown as IEntityContext<IUser>);

export const useWhoamiContext = (): IEntityContext<IUser> => useContext(WhoamiContext, "WhoamiContext");
export const useOptionalWhoamiContext = () => useOptionalContext<IEntityContext<IUser>>(WhoamiContext as any);

export interface IWhoamiProvider extends IEntityProviderProps<IUser> {
}

export const WhoamiProvider: FC<IWhoamiProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <WhoamiContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useWhoamiQuery = createQueryHook<void, IUser, IWhoamiQueryParams>(WhoamiApiLink, "get");

export const useWhoamiQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([WhoamiApiLink]);
}

export const toWhoamiLink = (queryParams?: IWhoamiQueryParams) => toLink(WhoamiApiLink, queryParams);
export const useWhoamiLink = () => toWhoamiLink;

export const useWhoamiPromise = createPromiseHook<void, IUser, IWhoamiQueryParams>(WhoamiApiLink, "get");
export const WhoamiPromise = createPromise<void, IUser, IWhoamiQueryParams>(WhoamiApiLink, "get");

export interface IFetchWhoamiProps extends Partial<IQueryProps<void, IUser, IWhoamiQueryParams>> {
}

export const FetchWhoami: FC<IFetchWhoamiProps> = props => <Query<void, IUser, IWhoamiQueryParams>
	useQuery={useWhoamiQuery}
	request={undefined}
	context={useOptionalWhoamiContext()}
	{...props}
/>;
