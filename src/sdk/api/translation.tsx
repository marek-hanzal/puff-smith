/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IEntityContext, ISourceItem, ITranslationBundle, IWithIdentity} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const TranslationApiLink = "/api/translation";

export type ITranslationQueryParams = IWithIdentity;

export const TranslationContext = createContext(null as unknown as IEntityContext<ISourceItem<ITranslationBundle>>);

export const useTranslationContext = (): IEntityContext<ISourceItem<ITranslationBundle>> => useContext(TranslationContext, "TranslationContext");
export const useOptionalTranslationContext = () => useOptionalContext<IEntityContext<ISourceItem<ITranslationBundle>>>(TranslationContext as any);

export interface ITranslationProvider extends IEntityProviderProps<ISourceItem<ITranslationBundle>> {
}

export const TranslationProvider: FC<ITranslationProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <TranslationContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useTranslationQuery = createQueryHook<void, ISourceItem<ITranslationBundle>, ITranslationQueryParams>(TranslationApiLink, "get");

export const useTranslationQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TranslationApiLink]);
}

export const toTranslationLink = (queryParams?: ITranslationQueryParams) => toLink(TranslationApiLink, queryParams);
export const useTranslationLink = () => toTranslationLink;

export const useTranslationPromise = createPromiseHook<void, ISourceItem<ITranslationBundle>, ITranslationQueryParams>(TranslationApiLink, "get");
export const TranslationPromise = createPromise<void, ISourceItem<ITranslationBundle>, ITranslationQueryParams>(TranslationApiLink, "get");

export interface IFetchTranslationProps extends Partial<IQueryProps<void, ISourceItem<ITranslationBundle>, ITranslationQueryParams>> {
}

export const FetchTranslation: FC<IFetchTranslationProps> = props => <Query<void, ISourceItem<ITranslationBundle>, ITranslationQueryParams>
	useQuery={useTranslationQuery}
	request={undefined}
	context={useOptionalTranslationContext()}
	{...props}
/>;
