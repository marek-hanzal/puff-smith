/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {IEntityContext, ISourceItem, IWithIdentityQuery} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {useQueryClient} from "@tanstack/react-query";
import {createContext, FC} from "react";

export const CellApiLink = "/api/inventory/cell/[id]/fetch";

export type ICellQueryParams = IWithIdentityQuery;

export const CellContext = createContext(null as unknown as IEntityContext<ISourceItem<ICellInventorySource>>);

export const useCellContext = (): IEntityContext<ISourceItem<ICellInventorySource>> => useContext(CellContext, "CellContext");
export const useOptionalCellContext = () => useOptionalContext<IEntityContext<ISourceItem<ICellInventorySource>>>(CellContext as any);

export interface ICellProvider extends IEntityProviderProps<ISourceItem<ICellInventorySource>> {
}

export const CellProvider: FC<ICellProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <CellContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useCellQuery = createQueryHook<void, ISourceItem<ICellInventorySource>, ICellQueryParams>(CellApiLink, "get");

export const useCellQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CellApiLink]);
}

export const toCellLink = (queryParams?: ICellQueryParams) => toLink(CellApiLink, queryParams);
export const useCellLink = () => toCellLink;

export const useCellPromise = createPromiseHook<void, ISourceItem<ICellInventorySource>, ICellQueryParams>(CellApiLink, "get");
export const CellPromise = createPromise<void, ISourceItem<ICellInventorySource>, ICellQueryParams>(CellApiLink, "get");

export interface IFetchCellProps extends Partial<IQueryProps<void, ISourceItem<ICellInventorySource>, ICellQueryParams>> {
}

export const FetchCell: FC<IFetchCellProps> = props => <Query<void, ISourceItem<ICellInventorySource>, ICellQueryParams>
	useQuery={useCellQuery}
	request={undefined}
	context={useOptionalCellContext()}
	{...props}
/>;
