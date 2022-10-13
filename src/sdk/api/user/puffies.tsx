/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	EntityContext,
	EntityProvider,
	IEntityContext,
	IEntityProviderProps,
	IQueryProps,
	Query,
	toLink,
	useContext,
	useOptionalContext
}                       from "@leight-core/viv";
import {useQueryClient} from "@tanstack/react-query";
import {
	createContext,
	FC
}                       from "react";

export const PuffiesApiLink = "/api/user/puffies";

export type IPuffiesQueryParams = any;

export const PuffiesContext = createContext(null as unknown as IEntityContext<number>);

export const usePuffiesContext         = (): IEntityContext<number> => useContext(PuffiesContext, "PuffiesContext");
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
};

export const toPuffiesLink  = (queryParams?: IPuffiesQueryParams) => toLink(PuffiesApiLink, queryParams);
export const usePuffiesLink = () => toPuffiesLink;

export const usePuffiesPromise = createPromiseHook<void, number, IPuffiesQueryParams>(PuffiesApiLink, "get");
export const PuffiesPromise    = createPromise<void, number, IPuffiesQueryParams>(PuffiesApiLink, "get");

export interface IFetchPuffiesProps extends Partial<IQueryProps<void, number, IPuffiesQueryParams>> {
}

export const FetchPuffies: FC<IFetchPuffiesProps> = props => <Query<void, number, IPuffiesQueryParams>
	useQuery={usePuffiesQuery}
	request={undefined}
	context={useOptionalPuffiesContext()}
	{...props}
/>;
