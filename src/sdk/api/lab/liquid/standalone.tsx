/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidStandaloneCreate} from "@/puff-smith/service/liquid/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const StandaloneApiLink = "/api/lab/liquid/standalone";

export type IStandaloneQueryParams = any;

export const useStandaloneMutation = createMutationHook<ILiquidStandaloneCreate, ILiquid>(StandaloneApiLink, "post");

export const useStandaloneQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([StandaloneApiLink]);
}

export interface IStandaloneDefaultFormProps extends Partial<IFormProps<ILiquidStandaloneCreate, ILiquid>> {
}

export const StandaloneDefaultForm: FC<IStandaloneDefaultFormProps> = props => <Form<ILiquidStandaloneCreate, ILiquid>
	useMutation={useStandaloneMutation}
	{...props}
/>

export const toStandaloneLink = (queryParams?: IStandaloneQueryParams) => toLink(StandaloneApiLink, queryParams);
export const useStandaloneLink = () => toStandaloneLink;

export const useStandalonePromise = createPromiseHook<ILiquidStandaloneCreate, ILiquid>(StandaloneApiLink, "post");

export const StandalonePromise = createPromise<ILiquidStandaloneCreate, ILiquid>(StandaloneApiLink, "post");
