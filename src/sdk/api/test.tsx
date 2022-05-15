/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IEntityContext} from "@leight-core/api";
import {createPromise, createPromiseHook, createQueryHook, EntityContext, EntityProvider, IEntityProviderProps, IQueryProps, Query, toLink, useContext, useOptionalContext} from "@leight-core/client";
import {createContext, FC} from "react";
import {useQueryClient} from "react-query";

export const TestApiLink = "/api/test";

export type ITestQueryParams = any;

export const TestContext = createContext(null as unknown as IEntityContext<any>);

export const useTestContext = (): IEntityContext<any> => useContext(TestContext, "TestContext");
export const useOptionalTestContext = () => useOptionalContext<IEntityContext<any>>(TestContext as any);

export interface ITestProvider extends IEntityProviderProps<any> {
}

export const TestProvider: FC<ITestProvider> = ({defaultEntity, ...props}) => {
	return <EntityProvider defaultEntity={defaultEntity}>
		<EntityContext.Consumer>
			{entityContext => <TestContext.Provider value={entityContext} {...props}/>}
		</EntityContext.Consumer>
	</EntityProvider>;
};

export const useTestQuery = createQueryHook<void, any, ITestQueryParams>(TestApiLink, "get");

export const useTestQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([TestApiLink]);
}

export const toTestLink = (queryParams?: ITestQueryParams) => toLink(TestApiLink, queryParams);
export const useTestLink = () => toTestLink;

export const useTestPromise = createPromiseHook<void, any, ITestQueryParams>(TestApiLink, "get");
export const TestPromise = createPromise<void, any, ITestQueryParams>(TestApiLink, "get");

export interface IFetchTestProps extends Partial<IQueryProps<void, any, ITestQueryParams>> {
}

export const FetchTest: FC<IFetchTestProps> = props => <Query<void, any, ITestQueryParams>
	useQuery={useTestQuery}
	request={undefined}
	context={useOptionalTestContext()}
	{...props}
/>;
