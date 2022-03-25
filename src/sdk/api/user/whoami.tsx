import {IUser} from "@/puff-smith/service/user";
import {createContext, FC} from "react";
import {IEntityContext} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, useContext, useLinkContext, useOptionalContext} from "@leight-core/client";

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

export const useWhoamiLink = (): ((query: IWhoamiQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(WhoamiApiLink, query);
}

export const useWhoamiPromise = createPromiseHook<void, IUser, IWhoamiQueryParams>(WhoamiApiLink, "get");

export interface IFetchWhoamiProps extends Partial<IQueryProps<void, IUser, IWhoamiQueryParams>> {
}

export const FetchWhoami: FC<IFetchWhoamiProps> = props => <Query<void, IUser, IWhoamiQueryParams>
	useQuery={useWhoamiQuery}
	request={undefined}
	context={useOptionalWhoamiContext()}
	{...props}
/>;
