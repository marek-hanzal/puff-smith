/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/inventory/atomizer/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>(PatchApiLink, "post");
