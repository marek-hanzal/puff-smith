/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/booster/inventory/create";

export type ICreateQueryParams = undefined;

export const useCreateMutation = createMutationHook<ISourceCreate<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
}

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>(CreateApiLink, "post");
