/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBoosterInventorySource} from "@/puff-smith/service/booster/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/inventory/booster/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
};

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>;

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IBoosterInventorySource>, ISourceItem<IBoosterInventorySource>>(PatchApiLink, "post");
