/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IEntityContext} from "@leight-core/api";
import {createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, useContext, useLinkContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const PuffiesApiLink = "/api/user/puffies";

export type IPuffiesQueryParams = undefined;

export const PuffiesContext = createContext(null as unknown as IEntityContext<number>);

export const usePuffiesContext = (): IEntityContext<number> => useContext(PuffiesContext, "PuffiesContext");
export const useOptionalPuffiesContext = () => useOptionalContext<IEntityContext<number>>(PuffiesContext as any);

export interface IPuffiesProvider extends IEntityProviderProps<number> {
}

export const PuffiesProvider: FC<IPuffiesProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <PuffiesContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const usePuffiesQuery = createQueryHook<void, number, IPuffiesQueryParams>(PuffiesApiLink, "get");

export const usePuffiesQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PuffiesApiLink]);
}

export const usePuffiesLink = (): ((query: IPuffiesQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(PuffiesApiLink, query);
}

export const usePuffiesPromise = createPromiseHook<void, number, IPuffiesQueryParams>(PuffiesApiLink, "get");

export interface IFetchPuffiesProps extends Partial<IQueryProps<void, number, IPuffiesQueryParams>> {
}

export const FetchPuffies: FC<IFetchPuffiesProps> = props => <Query<void, number, IPuffiesQueryParams>
	useQuery={usePuffiesQuery}
	request={undefined}
	context={useOptionalPuffiesContext()}
	{...props}
/>;
