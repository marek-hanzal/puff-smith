/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/inventory/aroma/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
};

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>;

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IAromaInventorySource>, ISourceItem<IAromaInventorySource>>(PatchApiLink, "post");
