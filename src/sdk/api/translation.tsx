/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {TranslationService} from "@/puff-smith/service/translation/TranslationService";
import {IEntityContext, IQueryParams, ITranslationBundle} from "@leight-core/api";
import {ListEndpoint} from "@leight-core/server";
import {FC, createContext} from "react";
import {useQueryClient} from "react-query";
import {EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, createPromise, createPromiseHook, createQueryHook, toLink, useContext, useOptionalContext} from "@leight-core/client";

export const TranslationsApiLink = "/api/translation";

export type ITranslationsQueryParams = undefined;

export const TranslationsContext = createContext(null as unknown as IEntityContext<ITranslationBundle>);

export const useTranslationsContext = (): IEntityContext<ITranslationBundle> => useContext(TranslationsContext, "TranslationsContext");
export const useOptionalTranslationsContext = () => useOptionalContext<IEntityContext<ITranslationBundle>>(TranslationsContext as any);

export interface ITranslationsProvider extends IEntityProviderProps<ITranslationBundle> {
}

export const TranslationsProvider: FC<ITranslationsProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <TranslationsContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useTranslationsQuery = createQueryHook<void, ITranslationBundle, ITranslationsQueryParams>(TranslationsApiLink, "get");

export const useTranslationsQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TranslationsApiLink]);
}

export const toTranslationsLink = (queryParams?: ITranslationsQueryParams) => toLink(TranslationsApiLink, queryParams);
export const useTranslationsLink = () => toTranslationsLink;

export const useTranslationsPromise = createPromiseHook<void, ITranslationBundle, ITranslationsQueryParams>(TranslationsApiLink, "get");
export const TranslationsPromise = createPromise<void, ITranslationBundle, ITranslationsQueryParams>(TranslationsApiLink, "get");

export interface IFetchTranslationsProps extends Partial<IQueryProps<void, ITranslationBundle, ITranslationsQueryParams>> {
}

export const FetchTranslations: FC<IFetchTranslationsProps> = props => <Query<void, ITranslationBundle, ITranslationsQueryParams>
	useQuery={useTranslationsQuery}
	request={undefined}
	context={useOptionalTranslationsContext()}
	{...props}
/>;
