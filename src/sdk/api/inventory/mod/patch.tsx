/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/inventory/mod/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<IModInventorySource>, ISourceItem<IModInventorySource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IModInventorySource>, ISourceItem<IModInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IModInventorySource>, ISourceItem<IModInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IModInventorySource>, ISourceItem<IModInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IModInventorySource>, ISourceItem<IModInventorySource>>(PatchApiLink, "post");
