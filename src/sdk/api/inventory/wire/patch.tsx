/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWireInventorySource} from "@/puff-smith/service/wire/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/inventory/wire/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<IWireInventorySource>, ISourceItem<IWireInventorySource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
};

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IWireInventorySource>, ISourceItem<IWireInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IWireInventorySource>, ISourceItem<IWireInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>;

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IWireInventorySource>, ISourceItem<IWireInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IWireInventorySource>, ISourceItem<IWireInventorySource>>(PatchApiLink, "post");
