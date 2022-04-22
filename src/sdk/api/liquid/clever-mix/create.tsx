/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquid, ILiquidCleverMix} from "@/puff-smith/service/liquid";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateCleverMixApiLink = "/api/liquid/clever-mix/create";

export type ICreateCleverMixQueryParams = undefined;

export const useCreateCleverMixMutation = createMutationHook<Omit<ILiquidCleverMix, "userId">, ILiquid>(CreateCleverMixApiLink, "post");

export const useCreateCleverMixQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateCleverMixApiLink]);
};

export interface ICreateCleverMixDefaultFormProps extends Partial<IFormProps<Omit<ILiquidCleverMix, "userId">, ILiquid>> {
}

export const CreateCleverMixDefaultForm: FC<ICreateCleverMixDefaultFormProps> = props => <Form<Omit<ILiquidCleverMix, "userId">, ILiquid>
	useMutation={useCreateCleverMixMutation}
	{...props}
/>;

export const toCreateCleverMixLink = (queryParams?: ICreateCleverMixQueryParams) => toLink(CreateCleverMixApiLink, queryParams);
export const useCreateCleverMixLink = () => toCreateCleverMixLink;

export const useCreateCleverMixPromise = createPromiseHook<Omit<ILiquidCleverMix, "userId">, ILiquid>(CreateCleverMixApiLink, "post");

export const CreateCleverMixPromise = createPromise<Omit<ILiquidCleverMix, "userId">, ILiquid>(CreateCleverMixApiLink, "post");
