/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ServiceCreate} from "@/puff-smith/service";
import {ILiquid, ILiquidCreate} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {CreateEndpoint} from "@leight-core/server";
import {FC} from "react";
import {IQueryParams} from "@leight-core/api";
import {useQueryClient} from "react-query";
import {Form, IFormProps, ISourceProviderProps, createMutationHook, createPromise, createPromiseHook, createQueryHook, toLink, useSourceContext} from "@leight-core/client";

export const CreateApiLink = "/api/liquid/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ILiquidCreate, ILiquid>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ILiquidCreate, ILiquid>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ILiquidCreate, ILiquid>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ILiquidCreate, ILiquid>(CreateApiLink, "post");

export const CreatePromise = createPromise<ILiquidCreate, ILiquid>(CreateApiLink, "post");
